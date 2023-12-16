var sourceData71 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\ControllerAndEnvironment\\Harness\\CtrlEnv_harness_setup.m","RawFileContents":["%% Setup script for Controller and Environment component\r","% This script is run automatically when harness model opens.\r","% If you edit this file, make sure to run this to update variables\r","% before running harness model for simulation.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","%% Controller & Environment\r","\r","% Parameters for converting vehicle speed to motor speed\r","bevControl.MotorSpdRef_tireRollingRadius_m = 0.34;\r","bevControl.MotorSpdRef_reductionGearRaio = 9.1;\r","\r","% PI controller gains\r","bevControl.MotorSpdRef_Ki = 15;\r","bevControl.MotorSpdRef_Kp = 15;\r","\r","% Bounds for torque commands\r","bevControl.MotorDriveUnit_trqMax_Nm = 420;\r","\r","%% Simple vehicle\r","% Outside of the model under Test\r","\r","% Model Parameters\r","\r","bevPlant.AmbientTemperature_K = 273.15;\r","\r","bevPlant.VehicleWeight_kg = 2400;\r","\r","bevPlant.TireRollingRadius_m = bevControl.MotorSpdRef_tireRollingRadius_m;\r","bevPlant.ReductionGearRaio = bevControl.MotorSpdRef_reductionGearRaio;\r","\r","bevPlant.MotorThermalMass_kg = 10;\r","bevPlant.MotorSpecificHeat_J_per_K_per_kg = 890;\r","\r","bevPlant.BatteryThermalMass_kg = 400;\r","bevPlant.BatterySpecificHeat_J_per_K_per_kg = 1000;\r","\r","% Derived model parameters\r","\r","bevPlant.VehicleInertia_kg_m2 = bevPlant.VehicleWeight_kg * bevPlant.TireRollingRadius_m^2;\r","\r","% Initial conditions\r","\r","initial.VehicleSpeed_kph = 0;\r","\r","initial.MotorTemperature_K = bevPlant.AmbientTemperature_K;\r","initial.MotorAmbientTemperature_K = bevPlant.AmbientTemperature_K;\r","\r","initial.BatteryTemperature_K = bevPlant.AmbientTemperature_K;\r","initial.BatteryAmbientTemperature_K = bevPlant.AmbientTemperature_K;\r","\r","% Derived initial conditions\r","\r","initial.vehicleInertiaSpd_rpm = ...\r","  CtrlEnv_Vehicle_getMotorSpeedFromVehicleSpeed( ...\r","    VehicleSpeed_kph = initial.VehicleSpeed_kph, ...\r","    TireRollingRadius_m = bevPlant.TireRollingRadius_m, ...\r","    GearRatio = bevPlant.ReductionGearRaio );\r",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":11,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":12,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":15,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":16,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":19,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":26,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":28,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":30,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":31,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":33,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":34,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":36,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":37,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":41,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":91,"ContinuedLine":false},{"LineNumber":45,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":47,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false},{"LineNumber":48,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":50,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":51,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":68,"ContinuedLine":false},{"LineNumber":55,"Hits":20,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":56,"Hits":20,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":true},{"LineNumber":57,"Hits":20,"StartColumnNumbers":4,"EndColumnNumbers":47,"ContinuedLine":true},{"LineNumber":58,"Hits":20,"StartColumnNumbers":4,"EndColumnNumbers":54,"ContinuedLine":true},{"LineNumber":59,"Hits":20,"StartColumnNumbers":4,"EndColumnNumbers":45,"ContinuedLine":true}]}}