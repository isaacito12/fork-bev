var sourceData143 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\Vehicle1D\\Utility\\Configuration\\Vehicle1D_loadCase_Braking.m","RawFileContents":["function Vehicle1D_loadCase_Braking","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","Vehicle1D_loadCase( ...","  CaseName = \"Braking\", ...","  ...","  ModelName = \"Vehicle1D_harness_model\", ...","  ...","  StopTime = 400, ...","  ...","  InputSystemPath = \"/Inputs\", ...","  ...","  BrakeForce_BlockName = \"Brake force\", ... N","  BrakeForce_DataPoints = [0 100 0; 103 nan 3000; 110 200 0; 205 nan 5000; 210 300 0; 370 390 3000], ...","  BrakeForce_DeltaT = 0.2, ...","  ...","  RoadGrade_BlockName = \"Road grade\", ... %","  RoadGrade_DataPoints = [0 5 0; 10 500 -7; 520 1000 -4], ...","  RoadGrade_DeltaT = 0.5, ...","  ...","  AxleTorque_BlockName = \"Axle torque\", ... N*m","  AxleTorque_DataPoints = [0 10 0], ... ; 30 60 1000; 62 70 1000], ...","  AxleTorque_DeltaT = 0.5, ...","  ...","  GeartrainInertia_kg_m2 = 15*0.3^2, ...","  GeartrainDamping_Nm_per_rpm = 0.001, ...","  ...","  Initial_GeartrainInertiaSpd_rpm = 0, ...","  Initial_VehicleSpeed_kph = 0, ...","  ...","  DisplayMessage = true );","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"84fa5c44-18ad-4976-80ad-2f4a0d73ebec"},"Statement":[{"LineNumber":12,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":13,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":15,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":17,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":19,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":21,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":22,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":99,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":23,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":25,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":26,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":56,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":27,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":29,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":30,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":31,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":33,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":34,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":36,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":37,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"},{"LineNumber":39,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"742b7558-e07f-4731-babb-7839a3781888"}]},"FilterData":[]}