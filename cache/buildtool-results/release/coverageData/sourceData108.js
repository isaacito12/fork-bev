var sourceData108 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\Utility\\Configuration\\MotorDriveUnit_loadCase.m","RawFileContents":["function MotorDriveUnit_loadCase(nvpairs)","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.CaseName {mustBeTextScalar} = \"Default\"","","  nvpairs.ModelName {mustBeTextScalar} = \"MotorDriveUnit_harness_model\"","","  nvpairs.StopTime (1,1) {mustBePositive} = 10","","  nvpairs.InputSystemPath {mustBeTextScalar} = \"/Inputs\"","","  nvpairs.AxleClutchSwitch_BlockName {mustBeTextScalar} = \"Axle clutch switch\"","  nvpairs.AxleClutchSwitch_DataPoints (:,2) double = [0 0; 1 0]","","  nvpairs.AxleSpeed_BlockName {mustBeTextScalar} = \"Axle speed\"","  nvpairs.AxleSpeed_DataPoints (:,3) double = [0 1 0]","  nvpairs.AxleSpeed_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.AxleTorque_BlockName {mustBeTextScalar} = \"Axle torque\"","  nvpairs.AxleTorque_DataPoints (:,3) double = [0 1 0]","  nvpairs.AxleTorque_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.MotorTorqueCommand_BlockName {mustBeTextScalar} = \"Motor torque command\"","  nvpairs.MotorTorqueCommand_DataPoints (:,3) double = [0 1 0]","  nvpairs.MotorTorqueCommand_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.HeatFlowCommand_BlockName {mustBeTextScalar} = \"Heat flow command\"","  nvpairs.HeatFlowCommand_DataPoints (:,3) double = [0 1 0]","  nvpairs.HeatFlowCommand_DeltaT (1,1) {mustBePositive} = 0.1","","  nvpairs.LoadInertia_kg_m2 (1,1) {mustBePositive} = 100*0.3^2","  nvpairs.LoadDamping_Nm_per_rpm (1,1) {mustBePositive} = 0.03","","  nvpairs.GeartrainInertia_kg_m2 (1,1) {mustBePositive} = 15*0.3^2","  nvpairs.GeartrainDamping_Nm_per_rpm (1,1) {mustBePositive} = 0.001","","  nvpairs.HVBattery_Voltage_V (1,1) {mustBePositive} = 340","  nvpairs.HVBattery_TerminalResistance_Ohm (1,1) {mustBePositive} = 0.01","","  nvpairs.Initial_LoadInertiaSpd_rpm (1,1) double = 0;","  nvpairs.Initial_MotorDriveUnit_RotorSpd_rpm (1,1) double = 0;","  nvpairs.Initial_MotorDriveUnit_Temperature_K (1,1) {mustBePositive} = 273.15 + 20","  nvpairs.Initial_AmbientTemperature_K (1,1) {mustBePositive} = 273.15 + 20","","  nvpairs.DisplayMessage (1,1) logical = true","end","","dispMsg = nvpairs.DisplayMessage;","","if dispMsg","  disp(\"Setting up simulation...\")","  disp(\"Simulation case: \" + nvpairs.CaseName)","end","","mdl = nvpairs.ModelName;","","t_end = nvpairs.StopTime;","","if dispMsg","  disp(\"Setting simulation stop time to \" + t_end + \" sec.\")","end","","set_param(mdl, StopTime = num2str(t_end));","","if dispMsg","  disp(\"Setting block parameters...\")","end","","inpSysPath = mdl + nvpairs.InputSystemPath;","","AxleClutchSwitch_block_path = inpSysPath + \"/\" + nvpairs.AxleClutchSwitch_BlockName;","set_param(AxleClutchSwitch_block_path, dataPoints = mat2str(nvpairs.AxleClutchSwitch_DataPoints))","","AxleSpeed_block_path = inpSysPath + \"/\" + nvpairs.AxleSpeed_BlockName;","set_param(AxleSpeed_block_path, dataPoints = mat2str(nvpairs.AxleSpeed_DataPoints))","set_param(AxleSpeed_block_path, deltaT = num2str(nvpairs.AxleSpeed_DeltaT))","","AxleTorque_block_path = inpSysPath + \"/\" + nvpairs.AxleTorque_BlockName;","set_param(AxleTorque_block_path, dataPoints = mat2str(nvpairs.AxleTorque_DataPoints))","set_param(AxleTorque_block_path, deltaT = num2str(nvpairs.AxleTorque_DeltaT))","","MotorTorqueCommand_block_path = inpSysPath + \"/\" + nvpairs.MotorTorqueCommand_BlockName;","set_param(MotorTorqueCommand_block_path, dataPoints = mat2str(nvpairs.MotorTorqueCommand_DataPoints))","set_param(MotorTorqueCommand_block_path, deltaT = num2str(nvpairs.MotorTorqueCommand_DeltaT))","","HeatFlowCommand_block_path = inpSysPath + \"/\" + nvpairs.HeatFlowCommand_BlockName;","set_param(HeatFlowCommand_block_path, dataPoints = mat2str(nvpairs.HeatFlowCommand_DataPoints))","set_param(HeatFlowCommand_block_path, deltaT = num2str(nvpairs.HeatFlowCommand_DeltaT))","","set_param(mdl + \"/Mechanical Load/Load Inertia\", inertia = num2str(nvpairs.LoadInertia_kg_m2))","set_param(mdl + \"/Mechanical Load/Load Damper\", D = num2str(nvpairs.LoadDamping_Nm_per_rpm))","","set_param(mdl + \"/Mechanical Load/Geartrain Inertia\", inertia = num2str(nvpairs.GeartrainInertia_kg_m2))","set_param(mdl + \"/Mechanical Load/Geartrain Damper\", D = num2str(nvpairs.GeartrainDamping_Nm_per_rpm))","","setValue(\"batteryHV.nominalVoltage_V\", nvpairs.HVBattery_Voltage_V, nvpairs.DisplayMessage)","","setValue(\"batteryHV.internalResistance_Ohm\", nvpairs.HVBattery_TerminalResistance_Ohm, nvpairs.DisplayMessage)","","MotorDriveUnit_setInitialConditions( ...","  Initial_LoadInertiaSpd_rpm = nvpairs.Initial_LoadInertiaSpd_rpm, ...","  Initial_MotorDriveUnit_RotorSpd_rpm = nvpairs.Initial_MotorDriveUnit_RotorSpd_rpm, ...","  Initial_MotorDriveUnit_Temperature_K = nvpairs.Initial_MotorDriveUnit_Temperature_K, ...","  Initial_AmbientTemperature_K = nvpairs.Initial_AmbientTemperature_K, ...","  DisplayMessage = nvpairs.DisplayMessage );","","end  % function","","function setValue(workspaceVarName, value, displayMessage)","arguments","  workspaceVarName {mustBeTextScalar}","  value (1,1) double","  displayMessage (1,1) logical","end","if displayMessage","  disp(workspaceVarName + \" = \" + value)","end","evalin(\"base\", workspaceVarName + \" = \" + value + \";\");","end  % function",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":1,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"ceadede6-894d-4b83-aad1-fae8fb1a53c1"},{"LineNumber":118,"Hits":50,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"37c83191-bf9c-47c8-b42b-5fe2af5e12cd"}],"Statement":[{"LineNumber":13,"Hits":[25,1],"StartColumnNumbers":[20,40],"EndColumnNumbers":[36,49],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["4d9cfc60-1c55-43eb-ac2b-ae1305649542","06c75975-16bb-406b-b829-a6bf0a49e4c5"]},{"LineNumber":15,"Hits":[25,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,71],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["44b86f6a-aa5f-4835-ad34-be7157614337","a1b61df2-cc89-4b64-8982-597ded0dc33f"]},{"LineNumber":17,"Hits":[25,1],"StartColumnNumbers":[26,44],"EndColumnNumbers":[40,46],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["01b22d7e-ba85-4d66-b308-b9bd4c93e3a4","618eda6b-fd35-4dea-8203-ed4780479cfe"]},{"LineNumber":19,"Hits":[25,1],"StartColumnNumbers":[27,47],"EndColumnNumbers":[43,56],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["3cc1d854-397d-4199-8d68-f20dcdafc116","7a3ac103-8172-4575-878d-573c7b3f3206"]},{"LineNumber":21,"Hits":[25,1],"StartColumnNumbers":[38,58],"EndColumnNumbers":[54,78],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["d8199539-20b4-4c81-9d45-ef3a7ec55ec0","bee6c2a7-6cd8-439a-b500-de687102e717"]},{"LineNumber":22,"Hits":1,"StartColumnNumbers":53,"EndColumnNumbers":63,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"db9fef98-285e-43f1-81cf-27170f9dc4ff"},{"LineNumber":24,"Hits":[25,1],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,63],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["de11263e-bf9f-4be7-b921-0e6d02d02fa3","b8f24de6-957d-4dd9-97b0-6f704d254174"]},{"LineNumber":25,"Hits":1,"StartColumnNumbers":46,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e4f1de68-00e2-4725-a050-308b059cf035"},{"LineNumber":26,"Hits":[25,1],"StartColumnNumbers":[34,52],"EndColumnNumbers":[48,55],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["5c6d093b-35c2-476e-b56f-31c875e3f82a","ff22c2f4-88ad-4a39-a34d-f5228ebf0935"]},{"LineNumber":28,"Hits":[25,1],"StartColumnNumbers":[32,52],"EndColumnNumbers":[48,65],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["fa67d8f9-398d-49ed-8ee8-7f54a9e08dfb","72da3103-8887-4ad8-8e6e-88f9f2cb61c4"]},{"LineNumber":29,"Hits":1,"StartColumnNumbers":47,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ff567ae2-6ce2-4f62-a859-849575b61c10"},{"LineNumber":30,"Hits":[25,1],"StartColumnNumbers":[35,53],"EndColumnNumbers":[49,56],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["cc96f006-9317-465a-b767-20e0a2d54f72","e187c315-e321-442e-a255-8ff56a9d2a32"]},{"LineNumber":32,"Hits":[25,1],"StartColumnNumbers":[40,60],"EndColumnNumbers":[56,82],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["9ee7f942-55c7-485a-abf8-1968be3a10dd","673b124c-219a-4dcc-850a-a90223d74157"]},{"LineNumber":33,"Hits":1,"StartColumnNumbers":55,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"068692dd-dc49-4ce0-a1f9-6173592af5f8"},{"LineNumber":34,"Hits":[25,1],"StartColumnNumbers":[43,61],"EndColumnNumbers":[57,64],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["b305e3b3-bedf-4568-90f1-8a10699b61e9","46714379-63ab-4b57-825b-2f4b557fb25c"]},{"LineNumber":36,"Hits":[25,1],"StartColumnNumbers":[37,57],"EndColumnNumbers":[53,76],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["7f52c8f4-48ef-439c-9c83-ecc095be0b8a","900d9809-2243-4574-a0f0-b4d7f33f9213"]},{"LineNumber":37,"Hits":1,"StartColumnNumbers":52,"EndColumnNumbers":59,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ba6b1e07-651b-4797-af4e-b6c2f1498549"},{"LineNumber":38,"Hits":[25,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,61],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["acccf5c2-8fe2-40c3-b219-1758f8677796","cd39c2b4-cb95-4025-a7f3-f96cacbeb3ab"]},{"LineNumber":40,"Hits":[25,1],"StartColumnNumbers":[35,53],"EndColumnNumbers":[49,62],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["6992c122-1146-4863-b1a5-0956847a6958","1e6ae5e9-a21e-4f32-8b7c-24e10e86dde9"]},{"LineNumber":41,"Hits":[25,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,62],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["802fd96d-87f0-49e4-8db0-0b617bdd355f","0b20abb4-cae0-48f2-a98d-6ecf57722a82"]},{"LineNumber":43,"Hits":[25,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,66],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["ce7ce1f3-1292-4e4d-89b8-ab3988f22ddf","cbaea6d9-02b8-4dec-bb42-6b6296832c44"]},{"LineNumber":44,"Hits":[25,1],"StartColumnNumbers":[45,63],"EndColumnNumbers":[59,68],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["f0a6426f-01ad-42fc-be3a-063d0a811f7f","49fa8f66-c2d2-4e34-9b21-31f7f28832c6"]},{"LineNumber":46,"Hits":[25,1],"StartColumnNumbers":[37,55],"EndColumnNumbers":[51,58],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["057a34de-7e12-4e60-bdab-f92bbed86d63","b0b88b0a-0b52-4fee-a45e-65ccc3926600"]},{"LineNumber":47,"Hits":[25,1],"StartColumnNumbers":[50,68],"EndColumnNumbers":[64,72],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["6f689cae-ed8c-413c-940b-2cb30959f637","fa1fefe5-74c3-44f6-9bad-2dfc21587efa"]},{"LineNumber":49,"Hits":1,"StartColumnNumbers":52,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a9636772-a133-4f35-a713-1a2022c2061e"},{"LineNumber":50,"Hits":1,"StartColumnNumbers":61,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2aa8e141-6001-49bf-9619-3d95e7f2e3d2"},{"LineNumber":51,"Hits":[25,1],"StartColumnNumbers":[54,72],"EndColumnNumbers":[68,83],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["b39f3bf7-d33d-46cb-83bb-2cd4cde366a6","70d603df-1623-4b40-98ba-8faf04c41380"]},{"LineNumber":52,"Hits":[25,1],"StartColumnNumbers":[46,64],"EndColumnNumbers":[60,75],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["f7eeea0b-f987-4404-a7bf-8eefdfc0ac6b","e1e355f0-afdd-44c3-9b35-c35a3532abb2"]},{"LineNumber":54,"Hits":1,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5286c6fa-1748-4da6-84aa-f4a63e0d201d"},{"LineNumber":57,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a8819615-3f8e-4eba-9495-93a8c8ff1fa9"},{"LineNumber":59,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cbff6bb5-1bd6-4533-8992-823c2f709281"},{"LineNumber":60,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4992c732-0eef-45d7-9256-81b8873047b0"},{"LineNumber":61,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2909ce18-4007-49b7-a9b3-b00ea088cd7f"},{"LineNumber":64,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d6e52172-7e09-479c-bb66-73bdc2b82832"},{"LineNumber":66,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"451387a1-a769-4817-88c8-9f077a83a073"},{"LineNumber":68,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"731d25b2-f04b-4af0-bcd3-db914073a5fd"},{"LineNumber":69,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":60,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"709a234c-cee3-42ab-aa27-875bb2b010b2"},{"LineNumber":72,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bb2e64da-9b0d-4d8e-91cb-5e13e67ec5a3"},{"LineNumber":74,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f03d2120-c9cb-40b6-8a44-a14170b2e4a6"},{"LineNumber":75,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"67256965-f3fc-4986-8ffd-7c968be8ed08"},{"LineNumber":78,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0da167c4-260d-4bb7-bacc-e6d51342dcce"},{"LineNumber":80,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":84,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5fe6eea1-516d-4448-bd3a-f0b50e948f27"},{"LineNumber":81,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":97,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4c1b05db-d3d8-4443-9751-178682b82a58"},{"LineNumber":83,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":70,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"57b4d129-862a-4fd1-b6b0-71a44260f5e3"},{"LineNumber":84,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":83,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"08aed20a-9c3c-4627-a660-0434b6176316"},{"LineNumber":85,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":75,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ca163d6e-caf3-4191-9acc-b92945ec66a2"},{"LineNumber":87,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4384aeff-fa90-4ac6-98c1-bfd9dce366af"},{"LineNumber":88,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":85,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"96a11c33-4e00-4758-8a41-cf1cc702d588"},{"LineNumber":89,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":77,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d2a611a7-d8b0-44a6-997a-40a0c8f44958"},{"LineNumber":91,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":88,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"402ed740-affa-4b0c-855c-7b7e4564c188"},{"LineNumber":92,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":101,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"89029fc4-3d1f-4dfe-a20d-e26df7349d4c"},{"LineNumber":93,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":93,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fa782a30-f7b0-4cc8-aae3-c05d5c2b6524"},{"LineNumber":95,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"795219eb-8a9e-497d-bae2-8961acd1ce56"},{"LineNumber":96,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":95,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"33d8139d-0779-4d7d-b65c-91b454dd523f"},{"LineNumber":97,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":87,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"259ac874-3a31-48c0-a172-ba000132cefa"},{"LineNumber":99,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":94,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"db1c736e-4c11-4292-a139-3d820fdc609e"},{"LineNumber":100,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":92,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5868858a-2a45-4ffd-940a-d4c0f804a1fd"},{"LineNumber":102,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":104,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bba98783-924f-4677-9bef-7b0ac3414a99"},{"LineNumber":103,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":102,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c07d6234-e062-44c4-8eed-546f9e4002b2"},{"LineNumber":105,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":91,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"25b0eeff-b427-4580-a04b-64a1486f0589"},{"LineNumber":107,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":110,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5bf6bc85-6594-4e46-9e42-c51354c94883"},{"LineNumber":109,"Hits":25,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fabbef4b-322b-42ef-a3f1-f4c303409b5b"},{"LineNumber":110,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"fabbef4b-322b-42ef-a3f1-f4c303409b5b"},{"LineNumber":111,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":83,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"fabbef4b-322b-42ef-a3f1-f4c303409b5b"},{"LineNumber":112,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":85,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"fabbef4b-322b-42ef-a3f1-f4c303409b5b"},{"LineNumber":113,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":69,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"fabbef4b-322b-42ef-a3f1-f4c303409b5b"},{"LineNumber":114,"Hits":25,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"fabbef4b-322b-42ef-a3f1-f4c303409b5b"},{"LineNumber":120,"Hits":50,"StartColumnNumbers":20,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3267dcd9-7304-42f9-b67b-ca7d707ab37a"},{"LineNumber":124,"Hits":50,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"939c6342-17a1-42fc-a29b-b9ccf4dac09f"},{"LineNumber":125,"Hits":50,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"61f3adb3-af7f-4760-a05e-866cffbca8d5"},{"LineNumber":127,"Hits":50,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cbd7d943-394a-43ad-b07f-1b75e8dd8194"}]},"FilterData":[]}