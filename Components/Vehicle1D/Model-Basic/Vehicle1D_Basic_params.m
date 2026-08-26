%% Parameters for Vehicle1D Component

% Copyright 2020-2022 The MathWorks, Inc.

%% Bus definitions

defineBus_Rotational

%% Vehicle block parameters

Vehicle = bevutil1.app.Vehicle1DForce.Vehicle1DForceAppParameters;

Vehicle.VehicleMass = simscape.Value(2400, "kg");

% This field is not used by the vehicle app but is defined for use with the vehicle block.
Vehicle.TireRollingRadius = simscape.Value(0.34, "m");

Vehicle.TireRollingCoefficient = 0.0136;
Vehicle.AirDragCoefficient = 0.31;
Vehicle.FrontalArea = simscape.Value(0.9 * 1.921 * 1.624, "m^2");
Vehicle.GravitationalAcceleration = simscape.Value(9.81, "m/s^2");

smoothing.VehicleSpeedThreshold = simscape.Value(1, "km/hr");
smoothing.VehicleAxleSpeedThreshold = simscape.Value(1, "rpm");

%% Initial conditions

initial.VehicleSpeed = simscape.Value(0, "km/hr");
