classdef Vehicle1DPerformanceDesignApp < handle
  %% App for road vehicle longitudinal performance design
  % Handle class implementation is necessary to support single instance mode.

  % Copyright 2024 The MathWorks, Inc.

  properties
    Window (1,1) LiteAppWindow

    InfoLinkUI
    MassUI
    PresetUI
    UpdateButtonUI
    OpenFigureWindowUI
  end

  methods

    function app = Vehicle1DPerformanceDesignApp()
      %%

      win = LiteAppWindow(SourceFilename=mfilename);
      app.Window = win;

      win.Name = "Road vehicle longitudinal performance design";
      win.Width = 1100;
      win.Height = 630;

      %% Predefine car properties
      % Available as Presets in the App
      %
      % Preset data for small, medium, and large cars below are based on
      % Longitudinal Vehicle block in Simscape Driveline.
      % https://www.mathworks.com/help/sdl/ref/longitudinalvehicle.html
      %
      % For clarity in the app, "G-force" and "%" are used as
      % the unit of MaximumAcceleration and MaximumClimbGrade, respectively,
      % but they are simply "1" in Simscape.

      % Common data
      data_gravity = ["9.81", "m/s^2"];
      data_air_density = ["1.184", "kg/m^3"];
      data_B = ["0", "N/(m/s)"];

      cnt = 1;
      CarName(cnt) = "Small car";
      CarData(cnt).TireRollingCoefficient = ["0.013", "1"];
      CarData(cnt).VehicleMass = ["1100", "kg"];
      CarData(cnt).AirDragCoefficient = ["0.31", "1"];
      CarData(cnt).FrontalArea = ["2.153", "m^2"];
      CarData(cnt).MaximumSpeed = ["140", "km/hr"];
      CarData(cnt).MaximumAcceleration = ["0.4", "G-force"];  % F = 0.4 * M * g
      CarData(cnt).MaximumClimbGrade = ["5", "\%"];
      CarData(cnt).GravitationalAcceleration = data_gravity;
      CarData(cnt).AirDensity = data_air_density;
      CarData(cnt).RoadLoad_B = data_B;

      cnt = cnt + 1;
      CarName(cnt) = "Medium car";
      CarData(cnt).TireRollingCoefficient = ["0.0136", "1"];
      CarData(cnt).VehicleMass = ["1800", "kg"];
      CarData(cnt).AirDragCoefficient = ["0.31", "1"];
      CarData(cnt).FrontalArea = ["2.36", "m^2"];
      CarData(cnt).MaximumSpeed = ["160", "km/hr"];
      CarData(cnt).MaximumAcceleration = ["0.4", "G-force"];
      CarData(cnt).MaximumClimbGrade = ["5", "\%"];
      CarData(cnt).GravitationalAcceleration = data_gravity;
      CarData(cnt).AirDensity = data_air_density;
      CarData(cnt).RoadLoad_B = data_B;

      cnt = cnt + 1;
      CarName(cnt) = "Large SUV";
      CarData(cnt).TireRollingCoefficient = ["0.014", "1"];
      CarData(cnt).VehicleMass = ["2600", "kg"];
      CarData(cnt).AirDragCoefficient = ["0.36", "1"];
      CarData(cnt).FrontalArea = ["3.13", "m^2"];
      CarData(cnt).MaximumSpeed = ["160", "km/hr"];
      CarData(cnt).MaximumAcceleration = ["0.4", "G-force"];
      CarData(cnt).MaximumClimbGrade = ["5", "\%"];
      CarData(cnt).GravitationalAcceleration = data_gravity;
      CarData(cnt).AirDensity = data_air_density;
      CarData(cnt).RoadLoad_B = data_B;

%{
      cnt = cnt + 1;
      ParameterFile = "Vehicle1D_harness_setup";
      CarName(cnt) = "Base workspace variables. Loaded from " + ParameterFile;
      CarData(cnt).TireRollingCoefficient = ["Vehicle.TireRollingCoefficient", "1"];
      CarData(cnt).VehicleMass = ["Vehicle.Mass", "kg"];
      CarData(cnt).AirDragCoefficient = ["Vehicle.AirDragCoefficient", "1"];
      CarData(cnt).FrontalArea = ["Vehicle.FrontalArea", "m^2"];
      CarData(cnt).MaximumSpeed = ["Vehicle.MaximumSpeed", "km/hr"];
      CarData(cnt).MaximumAcceleration = ["Vehicle.MaximumAcceleration", "G-force"];
      CarData(cnt).MaximumClimbGrade = ["Vehicle.MaximumClimbPercentGrade", "\%"];
      CarData(cnt).GravitationalAcceleration = ["Vehicle.GravitationalAcceleration", "m/s^2"];
      CarData(cnt).AirDensity = ["Vehicle.AirDensity", "kg/m^3"];
      CarData(cnt).RoadLoad_B = ["Vehicle.RoadLoad_B", "N/(m/s)"];
%}

      car_dict = dictionary(CarName, CarData);

      initial_preset = 2;

      %% Start building an app

      width_unit = LiteAppUtility.Constant.Width{"unitwidth"};
      height_unit = LiteAppUtility.Constant.Height{"oneline+"};

      layout = win.MainLayout;

      area = NewArea(layout);

      %% Build left column
      column = NewColumn(layout, area);

      left_label_width = width_unit*20;
      right_label_width = width_unit*9;

      row = NewRow(layout, column);
      tmp_UI = LiteAppComponent.Hyperlink(row);
      tmp_UI.HyperlinkText = "Information";
      tmp_UI.HyperlinkClickedCallback = @() open("Vehicle1D_Description.html");
      app.InfoLinkUI = tmp_UI;

      % -----------------------------------------------------------------------------
      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row));
      label_1.Text = "\textbf{Vehicle}";

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Vehicle mass, $M_v$";
      label_1.ComponentWidth = left_label_width;
      mass_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      mass_ui.Value = "1800";
      mass_unit = LiteAppComponent.DropDown(NewSlot(layout, row, Width="fit"));
      mass_unit.Items = ["kg" "lbm"];
      mass_unit.Value = "kg";
      mass_unit.ComponentWidth = right_label_width;
      app.MassUI = mass_ui;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "";
      label_1.ComponentWidth = left_label_width;
      mass2_ui = LiteAppComponent.Label(NewSlot(layout, row));
      mass2_ui.Text = "";
      mass2_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      mass2_unit.Text = "lbm";
      mass2_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Tire rolling coefficient, $C_{roll}$";
      label_1.ComponentWidth = left_label_width;
      tire_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      tire_ui.Value = "0.0136";
      tire_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      tire_unit.Text = "";
      tire_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Air drag coefficient, $C_d$";
      label_1.ComponentWidth = left_label_width;
      drag_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      drag_ui.Value = "0.31";
      drag_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      drag_unit.Text = "";
      drag_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Frontal area, $A_f$";
      label_1.ComponentWidth = left_label_width;
      front_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      front_ui.Value = "2.36";
      front_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      front_unit.Text = "m^2";
      front_unit.ComponentWidth = right_label_width;

      % -----------------------------------------------------------------------------
      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row));
      label_1.Text = "\textbf{Environment}";

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Gravitational acceleration, $g$";
      label_1.ComponentWidth = left_label_width;
      gravity_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      gravity_ui.Value = "9.81";
      gravity_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      gravity_unit.Text = "m/s^2";
      gravity_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Air density, $\rho$";
      label_1.ComponentWidth = left_label_width;
      density_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      density_ui.Value = "1.184";
      density_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      density_unit.Text = "kg/m^3";
      density_unit.ComponentWidth = right_label_width;

      % -----------------------------------------------------------------------------
      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row));
      label_1.Text = "\textbf{Road-load}";

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "$A_{rl} = C_{roll} M_v g$";
      label_1.ComponentWidth = left_label_width;
      A_ui = LiteAppComponent.Label(NewSlot(layout, row));
      A_ui.Text = "240.1";
      A_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      A_unit.Text = "N";
      A_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "$B_{rl}$";
      label_1.ComponentWidth = left_label_width;
      B_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      B_ui.Value = "0";
      B_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      B_unit.Text = "N/(m/s)";
      B_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "$C_{rl} = (1/2) C_d A_f \rho$";
      label_1.ComponentWidth = left_label_width;
      C_ui = LiteAppComponent.Label(NewSlot(layout, row));
      C_ui.Text = "0.4336";
      C_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      C_unit.Text = "N/(m/s)^2";
      C_unit.ComponentWidth = right_label_width;

      % -----------------------------------------------------------------------------
      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row));
      label_1.Text = "\textbf{Performance}";

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Max speed, $V_{max}$";
      label_1.ComponentWidth = left_label_width;
      vmax_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      vmax_ui.Value = "150";
      vmax_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      vmax_unit.Text = "km/hr";
      vmax_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Max acceleration, $g_{max}$";
      label_1.ComponentWidth = left_label_width;
      gmax_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      gmax_ui.Value = "0.4";
      gmax_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      gmax_unit.Text = "G force";
      gmax_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Max force, $F_{max} = g_{max} M_v g$";
      label_1.ComponentWidth = left_label_width;
      Fmax_ui = LiteAppComponent.Label(NewSlot(layout, row));
      Fmax_ui.Text = "0";
      Fmax_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      Fmax_unit.Text = "N";
      Fmax_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Max climb grade, $B_{max}$";
      label_1.ComponentWidth = left_label_width;
      maxClimbGrade_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      maxClimbGrade_ui.Value = "5";
      maxClimbGrade_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      maxClimbGrade_unit.Text = "\%";
      maxClimbGrade_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Max climb power, $P_{c}$";
      label_1.ComponentWidth = left_label_width;
      maxClimbPower_ui = LiteAppComponent.Label(NewSlot(layout, row));
      maxClimbPower_ui.Text = "0";
      maxClimbPower_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      maxClimbPower_unit.Text = "kW";
      maxClimbPower_unit.ComponentWidth = right_label_width;

      % -----------------------------------------------------------------------------
      LiteAppComponent.HorizontalLine(NewRow(layout, column));

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row));
      label_1.Text = "Presets";

      row = NewRow(layout, column);
      preset_ui = LiteAppComponent.ListBox(NewSlot(layout, row));
      preset_ui.ComponentHeight = height_unit * 4;
      preset_ui.MainListBox.Multiselect = "off";
      preset_ui.MainListBox.Items = CarName;
      preset_ui.MainListBox.Value = preset_ui.MainListBox.Items(1);
      app.PresetUI = preset_ui;

      %% Build right column
      column = NewColumn(layout, area, Width=560);

      row = NewRow(layout, column);
      update_ui = LiteAppComponent.Button(NewSlot(layout, row, Width="fit"));
      update_ui.HorizontalAlignment = "left";
      update_ui.Text = "Update";
      update_ui.ComponentWidth = width_unit * 10;
      update_ui.ButtonWidth = width_unit * 9;
      open_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
      open_ui.HyperlinkText = "Open in figure window";
      open_ui.HorizontalAlignment = "right";
      open_ui.HyperlinkClickedCallback = @() make_plot([]);
      app.UpdateButtonUI = update_ui;
      app.OpenFigureWindowUI = open_ui;

      row = NewRow(layout, column);
      panel_ui = LiteAppComponent.Panel(NewSlot(layout, row));
      panel_ui.ComponentHeight = 400;
      panel_ui.BorderType = "none";

      % Use MainPanel as the parent of axes. MainPanel is a uipanel object.
      ax = axes(panel_ui.MainPanel);

      % -----------------------------------------------------------------------------
      LiteAppComponent.HorizontalLine(NewRow(layout, column));

      left_label_width = width_unit*14;
      right_label_width = width_unit*7;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row));
      label_1.Text = "\textbf{Plot customization}";
      label_1.ComponentWidth = left_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Road grade";
      label_1.ComponentWidth = left_label_width;
      grade_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      grade_ui.Value = "[0 5 30]";
      grade_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      grade_unit.Text = "\%";
      grade_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Inclination angle";
      label_1.ComponentWidth = left_label_width;
      angle_ui = LiteAppComponent.Label(NewSlot(layout, row));
      angle_ui.Text = "";
      angle_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      angle_unit.Text = "deg";
      angle_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Power";
      label_1.ComponentWidth = left_label_width;
      power_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      power_ui.Value = "[10 50 100 150]";
      power_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      power_unit.Text = "kW";
      power_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Horizontal axis max";
      label_1.ComponentWidth = left_label_width;
      hor_max_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      hor_max_ui.Value = "180";
      hor_max_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      hor_max_unit.Text = "km/hr";
      hor_max_unit.ComponentWidth = right_label_width;

      row = NewRow(layout, column);
      label_1 = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      label_1.Text = "Vertical axis max";
      label_1.ComponentWidth = left_label_width;
      vert_max_ui = LiteAppComponent.EditField(NewSlot(layout, row));
      vert_max_ui.Value = "11000";
      vert_max_unit = LiteAppComponent.Label(NewSlot(layout, row, Width="fit"));
      vert_max_unit.Text = "N";
      vert_max_unit.ComponentWidth = right_label_width;

      %% Callbacks
      tire_ui.ValueChangedCallback = @() make_plot(ax);
      mass_ui.ValueChangedCallback = @() make_plot(ax);
      mass_unit.ValueChangedCallback = @() make_plot(ax);
      drag_ui.ValueChangedCallback = @() make_plot(ax);
      front_ui.ValueChangedCallback = @() make_plot(ax);

      gravity_ui.ValueChangedCallback = @() make_plot(ax);
      density_ui.ValueChangedCallback = @() make_plot(ax);

      B_ui.ValueChangedCallback = @() make_plot(ax);

      vmax_ui.ValueChangedCallback = @() make_plot(ax);
      gmax_ui.ValueChangedCallback = @() make_plot(ax);
      maxClimbGrade_ui.ValueChangedCallback = @() make_plot(ax);

      preset_ui.ValueChangedCallback = @() select_preset();

      update_ui.ButtonPushedCallback = @() make_plot(ax);
      grade_ui.ValueChangedCallback = @() make_plot(ax);
      power_ui.ValueChangedCallback = @() make_plot(ax);
      hor_max_ui.ValueChangedCallback = @() make_plot(ax);
      vert_max_ui.ValueChangedCallback = @() make_plot(ax);

      %% Utility
      % Value in UI elements can be either a number literal or a base workspace variable.
      getnum = @(x) evalin("base", x);

      %% Show app window

      % Load values from the preset data.
      preset_ui.MainListBox.Value = preset_ui.MainListBox.Items(initial_preset);
      select_preset()

      make_plot(ax)

      Show(win)

      %% Define callbacks as nested functions

      function select_preset
        car_name = preset_ui.MainListBox.Value;
        car_data = car_dict(car_name);

        if startsWith(car_name, "Base workspace")
          evalin("base", ParameterFile)
          disp("Loading parameters from " + ParameterFile)
        end

        mass_ui.Value = car_data.VehicleMass(1);
        mass_unit.Value = car_data.VehicleMass(2);

        tire_ui.Value = car_data.TireRollingCoefficient(1);

        drag_ui.Value = car_data.AirDragCoefficient(1);

        front_ui.Value = car_data.FrontalArea(1);
        front_unit.Text = car_data.FrontalArea(2);

        gravity_ui.Value = car_data.GravitationalAcceleration(1);
        gravity_unit.Text = car_data.GravitationalAcceleration(2);

        density_ui.Value = car_data.AirDensity(1);
        density_unit.Text = car_data.AirDensity(2);

        B_ui.Value = car_data.RoadLoad_B(1);
        B_unit.Text = car_data.RoadLoad_B(2);

        vmax_ui.Value = car_data.MaximumSpeed(1);
        vmax_unit.Text = car_data.MaximumSpeed(2);

        gmax_ui.Value = car_data.MaximumAcceleration(1);
        gmax_unit.Text = car_data.MaximumAcceleration(2);

        maxClimbGrade_ui.Value = car_data.MaximumClimbGrade(1);
        maxClimbGrade_unit.Text = car_data.MaximumClimbGrade(2);

        make_plot(ax)
      end  % funcition

      function update_A()
        C = getnum(tire_ui.Value);

        mass1 = getnum(mass_ui.Value);
        unit1 = mass_unit.Value;
        if isa(mass1, "simscape.Value")
          M1 = convert(mass1, unit1);
        else
          M1 = simscape.Value(mass1, unit1);
        end
        % Select the other unit in the dropdown items assuming there are only 2 items.
        logical_index = mass_unit.Items ~= unit1;
        unit2 = mass_unit.Items(logical_index);
        mass2 = ceil(value(M1, unit2));
        mass2_ui.Text = mass2;
        mass2_unit.Text = unit2;

        grav_v = getnum(gravity_ui.Value);
        grav_u = gravity_unit.Text;
        grav = Vehicle1DPerformanceDesignApp.GetSimscapeValue(grav_v, grav_u);

        Arl = C * M1 * grav;

        A_ui.Text = round(value(Arl, "N"), 1);
      end  % function

      function update_C()
        valu_1 = getnum(drag_ui.Value);
        Cd = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_1, "1");

        valu_1 = getnum(front_ui.Value);
        unit_1 = front_unit.Text;
        Afront = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_1, unit_1);

        valu_1 = getnum(density_ui.Value);
        unit_1 = density_unit.Text;
        dens = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_1, unit_1);

        C = (1/2) * Cd * Afront * dens;

        C_ui.Text = round(value(C, "N/(m/s)^2"), 4);
      end  % function

      function update_Fmax()
        valu1 = getnum(gmax_ui.Value);
        unit1 = "1";
        max_accel = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu1, unit1);

        valu1 = getnum(mass_ui.Value);
        unit1 = mass_unit.Value;
        vehicle_mass = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu1, unit1);

        valu1 = getnum(gravity_ui.Value);
        unit1 = gravity_unit.Text;
        grav = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu1, unit1);

        max_force = max_accel * vehicle_mass * grav;

        Fmax_ui.Text = ceil(value(max_force, "N"));
        Fmax_unit.Text = "N";
      end  % function

      function update_grade()
        grades = evalin("base", grade_ui.Value);
        slope_angles_deg = round(rad2deg(atan(grades/100)), 1);
        angle_ui.Text = join(string(slope_angles_deg), ", ");
      end  % function

      function update_max_climb_power()
        val_1 = str2double(A_ui.Text);
        unit_1 = A_unit.Text;
        A = Vehicle1DPerformanceDesignApp.GetSimscapeValue(val_1, unit_1);

        val_1 = getnum(B_ui.Value);
        unit_1 = B_unit.Text;
        B = Vehicle1DPerformanceDesignApp.GetSimscapeValue(val_1, unit_1);

        val_1 = str2double(C_ui.Text);
        unit_1 = C_unit.Text;
        C = Vehicle1DPerformanceDesignApp.GetSimscapeValue(val_1, unit_1);

        val_1 = getnum(vmax_ui.Value);
        unit_1 = vmax_unit.Text;
        vmax = Vehicle1DPerformanceDesignApp.GetSimscapeValue(val_1, unit_1);

        val_1 = getnum(mass_ui.Value);
        unit_1 = mass_unit.Value;
        M = Vehicle1DPerformanceDesignApp.GetSimscapeValue(val_1, unit_1);

        val_1 = getnum(gravity_ui.Value);
        unit_1 = gravity_unit.Text;
        g = Vehicle1DPerformanceDesignApp.GetSimscapeValue(val_1, unit_1);

        grade_pct = getnum(maxClimbGrade_ui.Value);
        angle = Vehicle1DPerformanceDesignApp.GetSimscapeValue(atan(grade_pct/100), "rad");

        F = (A + B*vmax)*cos(angle) + C*vmax^2 + M*g*sin(angle);

        P = F * vmax;

        val_P = ceil(value(P, "kW"));
        maxClimbPower_ui.Text = val_P;
        maxClimbPower_unit.Text = "kW";
      end  % function

      function make_plot(ax)
        if isempty(ax)
          ax = axes(figure);
        end

        update_A()
        update_C()
        update_Fmax()
        update_grade()
        update_max_climb_power()

        valu_M = getnum(mass_ui.Value);
        unit_M = mass_unit.Value;

        valu_g = getnum(gravity_ui.Value);
        unit_g = gravity_unit.Text;

        valu_A = str2double(A_ui.Text);
        unit_A = A_unit.Text;

        valu_B = getnum(B_ui.Value);
        unit_B = B_unit.Text;

        valu_C = str2double(C_ui.Text);
        unit_C = C_unit.Text;

        valu_vmax = getnum(vmax_ui.Value);
        unit_vmax = vmax_unit.Text;

        valu_gmax = getnum(gmax_ui.Value);

        valu_climbPower = str2double(maxClimbPower_ui.Text);
        unit_climbPower = maxClimbPower_unit.Text;

        valu_grades_pct = getnum(grade_ui.Value);

        valu_power = getnum(power_ui.Value);
        unit_power = power_unit.Text;

        valu_hormax = getnum(hor_max_ui.Value);
        unit_hormax = hor_max_unit.Text;

        valu_vertmax = getnum(vert_max_ui.Value);
        unit_vertmax = vert_max_unit.Text;

        Vehicle1D_PlotForce( ...
          Parent = ax, ...
          VehicleMass = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_M, unit_M), ...
          RoadLoad_A = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_A, unit_A), ...
          RoadLoad_B = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_B, unit_B), ...
          RoadLoad_C = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_C, unit_C), ...
          GravitationalAcceleration = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_g, unit_g), ...
          RoadGrades_pct = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_grades_pct, "1"), ...
          Powers = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_power, unit_power), ...
          MaximumVehicleAcceleration = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_gmax, "1"), ...
          MaximumVehicleSpeed = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_vmax, unit_vmax), ...
          MaximumClimbPower = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_climbPower, unit_climbPower), ...)
          Speed_PlotUpperBound = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_hormax, unit_hormax), ...
          Force_PlotUpperBound = Vehicle1DPerformanceDesignApp.GetSimscapeValue(valu_vertmax, unit_vertmax) )

      end  % function

    end  % function

    function delete(App)
      delete(App.Window)
    end  % function

  end  % methods

  methods (Static)

    function NewSimscapeValue = GetSimscapeValue(SourceValue, UnitString)
      % This function takes value as double or simscape.Value in the first arugment
      % and Simscape unit string in the second argument, and returns a simcape.Value object.

      arguments (Input)
        % Must be either double or simscape.Value
        SourceValue

        % Must be valid as Simscape unit
        UnitString (1,1) string
      end

      arguments (Output)
        NewSimscapeValue simscape.Value
      end

      if isa(SourceValue, "simscape.Value")
        NewSimscapeValue = convert(SourceValue, UnitString);
      else
        NewSimscapeValue = simscape.Value(SourceValue, UnitString);
      end  % if
    end  % function

  end  % methods

  properties (Access = private)
    % Used to use the app in single instance mode.

  end  % properties

end  % classdef
