var sourceData98 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\MotorDriveUnit_refsub_System_params.m","RawFileContents":["%% Model parameters for motor drive unit component","% This script is for the model using system-level motor and drive block","% without thermal model.","%","% If you edit this file, make sure to run this to update variables","% in the base workspace before running simulation.","","% Copyright 2023 The MathWorks, Inc.","","%% Connection Bus definitions","","defineBus_HighVoltage","defineBus_Rotational","","%% Motor drive unit parameters","","motorDriveUnit.trqMax_Nm = 420;","motorDriveUnit.powerMax_kW = 220;","motorDriveUnit.responseTime_s = 0.02;","","motorDriveUnit.rotorInertia_kg_m2 = 5*0.01^2;","motorDriveUnit.rotorDamping_Nm_per_radps = 1e-5;","","% Single efficiency measurement","motorDriveUnit.efficiency_pct = 95;","motorDriveUnit.spd_eff_rpm = 2000;","motorDriveUnit.trq_eff_Nm = 50;","motorDriveUnit.ironLoss_W = 55;","motorDriveUnit.fixedLoss_W = 40;","","motorDriveUnit.rotorInertia_kg_m2 = 5*0.01^2;","motorDriveUnit.rotorDamping_Nm_per_radps = 1e-5;","","motorDriveUnit.ThermalMass_J_per_K = 90e3;","","%% Ambient parameters","% Included in the motor drive unit component for thermal simulation.","","motorDriveUnit.ambientTemp_K = 273.15 + 20;","","motorDriveUnit.ambientMass_t = 10000;","motorDriveUnit.ambientSpecificHeat_J_per_Kkg = 1000;","","motorDriveUnit.RadiationArea_m2 = 1;","motorDriveUnit.RadiationCoeff_W_per_K4m2 = 5e-10;","","%% Initial conditions","","initial.motorDriveUnit_RotorSpd_rpm = 0;","","initial.motorDriveUnit_Temperature_K = motorDriveUnit.ambientTemp_K;","initial.ambientTemp_K = motorDriveUnit.ambientTemp_K;",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":12,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"19df3ac1-9996-4b15-9a6f-e3059c358008"},{"LineNumber":13,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f8f0bb94-4a25-4781-a179-50f15de441c6"},{"LineNumber":17,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"87927f91-aecd-48d8-b7cf-bb24ba68df3f"},{"LineNumber":18,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"89640044-a58e-4181-89e2-bf65ca77ba85"},{"LineNumber":19,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bb8ac3e3-0bfb-46ce-abbf-3bcc8b1dec18"},{"LineNumber":21,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f7783c07-f3b7-400f-ad17-0f4dbdb267ee"},{"LineNumber":22,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cab7a0d5-9455-477d-a73d-95ff21c9dce8"},{"LineNumber":25,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4b25bd82-edcb-4936-8d16-a08a7d8d8544"},{"LineNumber":26,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d5703c8c-791f-4185-8a8b-b3dfcfc30f89"},{"LineNumber":27,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"85c74b3f-dc3d-4116-9f1e-f0ad8aac66e7"},{"LineNumber":28,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b73a918c-691f-4a76-bbea-bb487dc9a1c5"},{"LineNumber":29,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a1e817d6-ed6f-4703-91b2-e38c095d81d8"},{"LineNumber":31,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"68e7fbf6-cb61-410b-8f0a-a0318e84586a"},{"LineNumber":32,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"594f5143-ca11-4c7f-9934-f166b5af42bf"},{"LineNumber":34,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"49fdd60e-9356-4ffe-ab59-25c61eccd54c"},{"LineNumber":39,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e83eafdb-1c91-4b52-8710-d24d63d0f247"},{"LineNumber":41,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a96437bc-21e1-429c-a813-17379292336b"},{"LineNumber":42,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"570013a2-c64c-4b7e-bc92-0061b77e93d4"},{"LineNumber":44,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d422b1fa-4311-4e23-923f-180b48760613"},{"LineNumber":45,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3c829a19-cab7-4f57-a532-ba6f36f51431"},{"LineNumber":49,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"66b25fe9-948c-4886-a75a-9a28a4798f8a"},{"LineNumber":51,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":68,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b9d969c4-8f11-43ee-9581-0f2f24edba99"},{"LineNumber":52,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"036eb603-dd24-42a4-b7a7-5655e60fd64b"}]},"FilterData":[]}