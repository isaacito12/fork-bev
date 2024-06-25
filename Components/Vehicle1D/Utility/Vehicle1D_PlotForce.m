function Vehicle1D_PlotForce(NameValuePairs)
%% Makes plot of longitudinal vehicle driving/resisting force curves
% To see the default plot, run this function without any arguments.

% Copyright 2023-2024 The MathWorks, Inc.

arguments (Input)

  % Either axes, panel, tab, or TiledChartLayout
  NameValuePairs.Parent (1,1)

  NameValuePairs.VehicleMass (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.VehicleMass, "kg")} ...
    = simscape.Value(1800, "kg")

  NameValuePairs.RoadLoad_A (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadLoad_A, "N")} ...
    = simscape.Value(240.1, "N")

  NameValuePairs.RoadLoad_B (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadLoad_B, "N/(km/hr)")} ...
    = simscape.Value(0, "N/(km/hr)")

  NameValuePairs.RoadLoad_C (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadLoad_C, "N/(km/hr)^2")} ...
    = simscape.Value(0.4336, "N/(km/hr)^2")

  NameValuePairs.GravitationalAcceleration (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.GravitationalAcceleration, "m/s^2")} ...
    = simscape.Value(9.81, "m/s^2")

  NameValuePairs.RoadGrades_pct (1,:) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadGrades_pct, "1")} ...
    = simscape.Value([0 10 20 30])

  % Force curve with constant power
  NameValuePairs.Powers (1,:) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.Powers, "kW")} ...
    = simscape.Value([50 100 200], "kW")

  % Maximum vehicle force (Y axis)
  NameValuePairs.MaximumVehicleAcceleration (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.MaximumVehicleAcceleration, "1")} ...
    = simscape.Value(0.4)

  % Maximum vehicle speed (X axis)
  NameValuePairs.MaximumVehicleSpeed (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.MaximumVehicleSpeed, "km/hr")} ...
    = simscape.Value(160, "km/hr")

  % Maximum climb power at top speed
  NameValuePairs.MaximumClimbPower(1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.MaximumClimbPower, "kW")} ...
    = simscape.Value(50, "kW")

  % Upper bound of Y axis
  NameValuePairs.Force_PlotUpperBound (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.Force_PlotUpperBound, "kN")} ...
    = simscape.Value(15, "kN")

  % Upper bound of X axis
  NameValuePairs.Speed_PlotUpperBound (1,1) simscape.Value ...
    {simscape.mustBeCommensurateUnit(NameValuePairs.Speed_PlotUpperBound, "km/hr")} ...
    = simscape.Value(200, "km/hr")

  % Number of points in vehicle speed (x axis) to calculate force values (y axis)
  NameValuePairs.NumSpeedPoints (1,1) {mustBePositive, mustBeInteger} = 100

end  % arguments

if isfield(NameValuePairs, "Parent")
  if isempty(NameValuePairs.Parent)
    % Parent option is specified, but it is empty: Parent = []
    ax = axes(figure);
  else
    ax = NameValuePairs.Parent;
  end
else
  ax = axes(figure);
end

M_e = NameValuePairs.VehicleMass;

A_rl = NameValuePairs.RoadLoad_A;
B_rl = NameValuePairs.RoadLoad_B;
C_rl = NameValuePairs.RoadLoad_C;

grav = NameValuePairs.GravitationalAcceleration;

grades_pct = value(NameValuePairs.RoadGrades_pct, "1");
angles = simscape.Value(atan(grades_pct/100), "rad");
num_grades = numel(grades_pct);

powers = NameValuePairs.Powers;
num_powers = numel(powers);

max_vehicle_accel = NameValuePairs.MaximumVehicleAcceleration;
max_vehicle_force = max_vehicle_accel * M_e * grav;

max_vehicle_speed = NameValuePairs.MaximumVehicleSpeed;

max_climb_power = NameValuePairs.MaximumClimbPower;

force_plot_upper = NameValuePairs.Force_PlotUpperBound;

speed_plot_upper = NameValuePairs.Speed_PlotUpperBound;

numX = NameValuePairs.NumSpeedPoints;

%% prepare data

% X axis data points
VehicleSpeed = linspace(simscape.Value(1, "km/hr"), speed_plot_upper, numX)';

F_roll = A_rl + B_rl*VehicleSpeed;
F_airdrag = C_rl*VehicleSpeed.^2;

grade_str = strings(1, num_grades);
angle_str = strings(1, num_grades);
% Longitudinal vehicle force at constant grade
F_const_grade = simscape.Value(zeros(numX, num_grades), "N");
for idx = 1 : num_grades
  grade_str(idx) = grades_pct(idx) + " %";
  angle_str(idx) = round(value(angles(idx), "deg"), 1) + " deg";
  s = angles(idx);
  F_const_grade(:, idx) = (F_roll*cos(s) + F_airdrag) + M_e*grav*sin(s);
end

% Longitudinal vehicle force at constant power
F_const_power = simscape.Value(zeros(numX, num_powers), "N");
for idx = 1 : num_powers
  F_const_power(:, idx) = powers(idx) ./ VehicleSpeed;
end

x_climb_inc = linspace(simscape.Value(10, "km/hr"), speed_plot_upper, numX)';
F_climb_inc = convert(max_climb_power ./ x_climb_inc, "N");
x_climb_flip = flipud(x_climb_inc);
F_climb_flip = force_plot_upper * ones(numel(x_climb_flip), 1);
x_climb = [x_climb_inc; x_climb_flip];
F_climb = [F_climb_inc; F_climb_flip];

%% plot
cla(ax)

% Vehicle force curves for constant road grades.
pp(1:num_grades) = matlab.graphics.chart.primitive.Line;
legend_str = strings(1, num_grades);
for idx = 1 : num_grades
  pp(idx) = plot(ax, value(VehicleSpeed, "km/hr"), value(F_const_grade(:,idx), "N"));
  pp(idx).LineWidth = 2;
  legend_str(idx) = grade_str(idx) + " (" + angle_str(idx) + ")";
  if idx == 1
    hold(ax, "on")
  end
end

% Vehicle force curves for constant power.
xmax = value(speed_plot_upper, "km/hr");
for idx = 1 : numel(powers)
  q = plot(ax, value(VehicleSpeed, "km/hr"), value(F_const_power(:, idx), "N"));
  q.LineWidth = 1;
  q.LineStyle = "--";

  y = value(F_const_power(end, idx), "N");
  str = " " + value(powers(idx), "kW") + " kW";
  text(ax, xmax, y, str)
end

gfx = fill(ax, value(x_climb, "km/hr"), value(F_climb, "N"), "cyan");
gfx.EdgeColor = "none";
gfx.FaceColor = "#888";
gfx.FaceAlpha = 0.3;

gfx = yregion(ax, value(max_vehicle_force, "N"), inf);
gfx.EdgeColor = "none";
gfx.FaceColor = "#888";
gfx.FaceAlpha = 0.3;

gfx = xregion(ax, value(max_vehicle_speed, "km/hr"), inf);
gfx.EdgeColor = "none";
gfx.FaceColor = "#888";
gfx.FaceAlpha = 0.3;

grid(ax, "on")

leg = legend(ax, pp, legend_str);
leg.Direction = "reverse";
% leg.BackgroundAlpha = 0.5;  % R2024a
title(leg, "Road grade % (angle deg)")

xlim(ax, [0, xmax])
xlabel(ax, "Vehicle speed")
xsecondarylabel(ax, "km/hr")

ylim(ax, [0, value(force_plot_upper, "N")])
ysecondarylabel(ax, "N")

title(ax, "Longitudinal vehicle force")

end  % function
