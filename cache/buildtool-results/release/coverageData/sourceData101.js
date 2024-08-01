var sourceData101 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\MotorDriveUnit_refsub_System_params.m","RawFileContents":["%% Model parameters for motor drive unit component","% This script is for the model using system-level motor and drive block","% without thermal model.","%","% If you edit this file, make sure to run this to update variables","% in the base workspace before running simulation.","","% Copyright 2023 The MathWorks, Inc.","","%% Connection Bus definitions","","defineBus_HighVoltage","defineBus_Rotational","","%% Motor drive unit parameters","","motorDriveUnit.trqMax_Nm = 420;","motorDriveUnit.powerMax_kW = 220;","motorDriveUnit.responseTime_s = 0.02;","","motorDriveUnit.rotorInertia_kg_m2 = 5*0.01^2;","motorDriveUnit.rotorDamping_Nm_per_radps = 1e-5;","","% Single efficiency measurement","motorDriveUnit.efficiency_pct = 95;","motorDriveUnit.spd_eff_rpm = 2000;","motorDriveUnit.trq_eff_Nm = 50;","motorDriveUnit.ironLoss_W = 55;","motorDriveUnit.fixedLoss_W = 40;","","motorDriveUnit.rotorInertia_kg_m2 = 5*0.01^2;","motorDriveUnit.rotorDamping_Nm_per_radps = 1e-5;","","motorDriveUnit.ThermalMass_J_per_K = 90e3;","","%% Ambient parameters","% Included in the motor drive unit component for thermal simulation.","","motorDriveUnit.ambientTemp_K = 273.15 + 20;","","motorDriveUnit.ambientMass_t = 10000;","motorDriveUnit.ambientSpecificHeat_J_per_Kkg = 1000;","","motorDriveUnit.RadiationArea_m2 = 1;","motorDriveUnit.RadiationCoeff_W_per_K4m2 = 5e-10;","","%% Initial conditions","","initial.motorDriveUnit_RotorSpd_rpm = 0;","","initial.motorDriveUnit_Temperature_K = motorDriveUnit.ambientTemp_K;","initial.ambientTemp_K = motorDriveUnit.ambientTemp_K;",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":12,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":13,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":17,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":18,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":19,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":21,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":22,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":25,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":26,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":27,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":28,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":29,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":31,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":32,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":34,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":39,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":41,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":42,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":44,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":45,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":49,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":51,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":68,"ContinuedLine":false},{"LineNumber":52,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false}]}}