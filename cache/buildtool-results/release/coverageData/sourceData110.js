var sourceData110 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\Utility\\Configuration\\MotorDriveUnit_loadCase_Drive.m","RawFileContents":["function MotorDriveUnit_loadCase_Drive","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","MotorDriveUnit_loadCase( ...","  CaseName = \"Drive motor\", ...","  ...","  ModelName = \"MotorDriveUnit_harness_model\", ...","  ...","  StopTime = 400, ...","  ...","  InputSystemPath = \"/Inputs\", ...","  ...","  AxleClutchSwitch_BlockName = \"Axle clutch switch\", ...","  AxleClutchSwitch_DataPoints = [0 0; 1 0], ...","  ...","  AxleSpeed_BlockName = \"Axle speed\", ... rpm","  AxleSpeed_DataPoints = [0 1 0], ...","  AxleSpeed_DeltaT = 10, ...","  ...","  AxleTorque_BlockName = \"Axle torque\", ... N*m","  AxleTorque_DataPoints = [0 20 0; 21 300 -10], ...","  AxleTorque_DeltaT = 0.1, ...","  ...","  MotorTorqueCommand_BlockName = \"Motor torque command\", ... N*m","  MotorTorqueCommand_DataPoints = [0 10 0; 60 100 -300; 105 200 200; 205 300 250 ], ... Driving motor","  MotorTorqueCommand_DeltaT = 0.5, ...","  ...","  HeatFlowCommand_BlockName = \"Heat flow command\", ... W","  HeatFlowCommand_DataPoints = [0 50 0; 60 200 -2000; 250 300 -12000], ... Cooling motor","  HeatFlowCommand_DeltaT = 1, ...","  ...","  LoadInertia_kg_m2 = 100*0.3^2, ...","  LoadDamping_Nm_per_rpm = 0.03, ...","  ...","  GeartrainInertia_kg_m2 = 15*0.3^2, ...","  GeartrainDamping_Nm_per_rpm = 0.001, ...","  ...","  HVBattery_Voltage_V = 340, ...","  HVBattery_TerminalResistance_Ohm = 0.01, ...","  ...","  Initial_LoadInertiaSpd_rpm = 0, ...","  Initial_MotorDriveUnit_RotorSpd_rpm = 0, ...","  Initial_MotorDriveUnit_Temperature_K = 273.15 + 20, ...","  Initial_AmbientTemperature_K = 273.15 + 20, ...","  ...","  DisplayMessage = true );","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"4203e11c-e290-47f2-baf4-e034dc6ece17"},"Statement":[{"LineNumber":12,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":13,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":15,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":17,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":19,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":21,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":22,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":24,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":25,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":26,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":28,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":29,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":30,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":32,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":55,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":33,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":82,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":34,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":36,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":37,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":69,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":38,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":40,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":41,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":43,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":44,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":46,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":47,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":49,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":50,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":51,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":52,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"},{"LineNumber":54,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"9856d56e-7536-410c-821f-27bd012ab23e"}]},"FilterData":[]}