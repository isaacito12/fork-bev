var sourceData151 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\Vehicle1D\\Utility\\Vehicle1D_getLongitudinalVehicleInfo.m","RawFileContents":["function info = Vehicle1D_getLongitudinalVehicleInfo(targetBlockName)","% Collects block parameter values from Longitudinal Vehicle block.","% To use this function, make sure to select the block in Simulink canvas and","% then pass block handle to this function.","","% Copyright 2021-2022 The MathWorks, Inc.","","arguments","  targetBlockName {mustBeTextScalar} = \"Longitudinal Vehicle\"","end","","blockPaths = getfullname(Simulink.findBlocksOfType( gcs, ...","  \"SimscapeBlock\", ...","  Simulink.FindOptions( SearchDepth = 1 )));","","% logical index","lix = endsWith(blockPaths, targetBlockName);","","% Block name in a subsystem is guaranteed to be unique.","% Target block should be found, and the number of match is required to be 1.","assert(nnz(lix) == 1, ...","  \"Block was not found: \" + targetBlockName)","","fullpathToBlock = gcs + \"/\" + targetBlockName(lix);","% block_handle = getSimulinkBlockHandle(block_path);","","% Collect mask workspace variables.","% They have been evaluated.","% See the documentation for Simulink.VariableUsage.","maskVars = get_param(fullpathToBlock, \"MaskWSVariables\");","varNames = string({maskVars.Name});","varValues = {maskVars.Value};","","getPar = @(varName) varValues{varNames == varName};","","% Block parameters can have physical units.","% To use correct units, first get the value and unit of a parameter","% and build a Simscape value object using getSscVal defined here:","getSscVal = @(varName) simscape.Value(getPar(varName), getPar(varName + \"_unit\"));","% Then obtain the value in the expected unit using the value function.","","% ================","% Block parameters","","info.ParameterizationType = getPar(\"vehParamType\");","vehparamType = info.ParameterizationType;","","switch vehparamType","case sdl.enum.VehicleParameterizationType.RoadLoad","  M = getSscVal('M_vehicle');","  R = getSscVal('R_tireroll');","  A = getSscVal('A_rl');","  B = getSscVal('B_rl');","  C = getSscVal('C_rl');","  info.VehicleMass = M;","  info.TireRadius = R;","  info.RoadLoadA = A;","  info.RoadLoadB = B;","  info.RoadLoadC = C;","","case sdl.enum.VehicleParameterizationType.Regular","  M = getSscVal('M_vehicle');","  R = getSscVal('R_tireroll');","  Cr = getSscVal('C_tireroll');","  Cd = getSscVal('C_airdrag');","  Af = getSscVal('A_front');","  air_density = getSscVal('air_density');","","case sdl.enum.VehicleParameterizationType.Small","  M = simscape.Value(1100, 'kg');","  R = simscape.Value(0.3, 'm');","  Cr = simscape.Value(0.0130, '1');","  Cd = simscape.Value(0.30, '1');","  Af = 0.9*simscape.Value(1.65, 'm')*simscape.Value(1.45, 'm');","  air_density = simscape.Value(1.184, 'kg/m^3');","","case sdl.enum.VehicleParameterizationType.Medium","  M = simscape.Value(1800, 'kg');","  R = simscape.Value(0.3, 'm');","  Cr = simscape.Value(0.0136, '1');","  Cd = simscape.Value(0.31, '1');","  Af = 0.9*simscape.Value(1.75, 'm')*simscape.Value(1.5, 'm');","  air_density = simscape.Value(1.184, 'kg/m^3');","","case sdl.enum.VehicleParameterizationType.Large","  M = simscape.Value(2600, 'kg');","  R = simscape.Value(0.4, 'm');","  Cr = simscape.Value(0.014, '1');","  Cd = simscape.Value(0.36, '1');","  Af = 0.9*simscape.Value(1.88, 'm')*simscape.Value(1.85, 'm');","  air_density = simscape.Value(1.184, 'kg/m^3');","","end","","g = getSscVal('g');","","if vehparamType ~= sdl.enum.VehicleParameterizationType.RoadLoad","  A = Cr*M*g;","  B = simscape.Value(0, 'N/(m/s)');","  C = 0.5*Cd*Af*air_density;","  info.VehicleMass = M;","  info.TireRadius = R;","  info.RollingCoefficient = Cr;","  info.AirDragCoefficient = Cd;","  info.FrontalArea = Af;","  info.AirDensity = air_density;","  info.RoadLoadA = A;","  info.RoadLoadB = B;","  info.RoadLoadC = C;","end","","info.GravitationalAcceleration = g;","info.VehicleSpeedThreshold = getSscVal('V_1');","info.AxleSpeedThreshold = getSscVal('w_1');","","end",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"07c135ad-141e-4812-96f1-5dd127ca7274"},"Statement":[{"LineNumber":9,"Hits":[2,1],"StartColumnNumbers":[19,39],"EndColumnNumbers":[35,61],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["2c2a4b02-3df2-4c8c-93ce-bc4d4d29bcad","4ea7cd9e-4c3e-457e-b296-0dabd22287ac"]},{"LineNumber":12,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7b054e6e-d8aa-4788-b589-f0cd6eb8ae16"},{"LineNumber":13,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7b054e6e-d8aa-4788-b589-f0cd6eb8ae16"},{"LineNumber":14,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7b054e6e-d8aa-4788-b589-f0cd6eb8ae16"},{"LineNumber":17,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1cc3d6c9-8653-4827-be47-3a458bc66cf1"},{"LineNumber":21,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a2d53343-b3a8-48a9-8f5c-3d40bfa375d4"},{"LineNumber":22,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"a2d53343-b3a8-48a9-8f5c-3d40bfa375d4"},{"LineNumber":24,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"01b5bcc7-5b73-461b-ac1f-ac7354cae4dc"},{"LineNumber":30,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3944c9f0-6fcf-4868-bb1f-abd478d14eca"},{"LineNumber":31,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bb97581e-45aa-408c-8258-0215fd754fd4"},{"LineNumber":32,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"90b6099e-1ad6-44be-b653-72b09a66c852"},{"LineNumber":34,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d79225d5-dd34-4dfb-98ef-ae59ed4c939e"},{"LineNumber":39,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"faa63c88-6280-4de4-83b3-59ec1ad0d2fe"},{"LineNumber":45,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6acf0dca-8780-47ec-b683-63a622bc847a"},{"LineNumber":46,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8dd7d4ac-0444-42a1-9f51-d1c92ebae2cd"},{"LineNumber":48,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ed8354ee-ff8f-43f5-b4c9-80964a848428"},{"LineNumber":49,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6169a703-a896-44e6-a0c5-1ed2ca64496f"},{"LineNumber":50,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f858961c-f3b9-4d83-b9d0-a6c0511ef41e"},{"LineNumber":51,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"18442f84-6cc9-4d68-83ea-0ad591b26f2e"},{"LineNumber":52,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9cd06f14-17f9-4da8-ac8f-696a39942b58"},{"LineNumber":53,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d24cebb4-f315-473b-84af-db5c81985659"},{"LineNumber":54,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6c2d0cf4-dd1d-471f-9732-03e6c96cdb25"},{"LineNumber":55,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1446161e-6475-469f-86b5-66784c3025b7"},{"LineNumber":56,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ce14cf44-5503-441f-9ce4-f98f2fdf25b8"},{"LineNumber":57,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c2510340-1006-4f39-8ca7-cce42d52f1e3"},{"LineNumber":58,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5f41b573-4ed8-4b6e-9eef-90aaebb222b3"},{"LineNumber":59,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a938e591-ce69-4cf2-b2f4-bd8ff828410a"},{"LineNumber":61,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"efb11da8-98c8-466b-af49-5812035a4061"},{"LineNumber":62,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d87aedc9-c131-46c9-9129-0928fed88a01"},{"LineNumber":63,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bc310641-6879-4135-8b55-35a19ed775c9"},{"LineNumber":64,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d13ed70d-55da-45cb-b122-5a8dac65d6ef"},{"LineNumber":65,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4d8fa430-40b7-49b1-b56b-8472e1aa55af"},{"LineNumber":66,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7f51c11b-ec3b-4a49-be61-65adb65abda3"},{"LineNumber":67,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1ba6133c-ca95-4dbb-88de-160d8073c1ac"},{"LineNumber":69,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e427ab1c-5949-4096-ba80-7079ba08b92a"},{"LineNumber":70,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"705410ab-f6da-479f-be00-fa1332ac9767"},{"LineNumber":71,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3eaf2a72-afd9-492e-b950-1dfeb2a9ef80"},{"LineNumber":72,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"acce8160-b56d-4ea8-9b92-c6b568d0ec60"},{"LineNumber":73,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a6f30280-df48-4a4b-a60a-d7832bf50404"},{"LineNumber":74,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":63,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bd2c3558-9015-449a-9950-af32d428a921"},{"LineNumber":75,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ba380027-c789-4f94-afa0-1d65940833b3"},{"LineNumber":77,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e674a69c-dff5-4cd0-8b36-d617f53a3b4c"},{"LineNumber":78,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"26b114ef-2355-47da-a427-74217f632d5d"},{"LineNumber":79,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"afa39192-86d9-4cc0-8ad3-756ec539c192"},{"LineNumber":80,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e0142cb0-ff6f-4fde-a634-40106862b15b"},{"LineNumber":81,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d46bdd13-7be4-4cbb-8e1e-32242e8544c6"},{"LineNumber":82,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b482ede6-37b2-44c2-b5b9-022e6eb1db08"},{"LineNumber":83,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7621cf91-df62-4117-921d-24d3a6d6f430"},{"LineNumber":85,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f944ab6b-5565-4821-b672-6d550847e13a"},{"LineNumber":86,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c7feccb7-152d-412a-a38e-b021362e5ed4"},{"LineNumber":87,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ac3f89a5-9f7b-4da2-a952-b05da730e1d6"},{"LineNumber":88,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4c04827c-894a-43d8-b1b9-0b911fe0f158"},{"LineNumber":89,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"71a1b59f-9331-4d0e-b257-e06917f023b4"},{"LineNumber":90,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":63,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"87ef19c3-7818-44ad-80bf-9d4866d19b00"},{"LineNumber":91,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ed876002-67a6-4952-a582-57cf5c3f9e77"},{"LineNumber":95,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f5ba3555-9d2d-4ca2-aed0-7c0059d420fc"},{"LineNumber":97,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5f7baae0-fa78-4a9e-ab15-f57f73deda0e"},{"LineNumber":98,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":13,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6225e77a-f063-4111-a785-454a7226843e"},{"LineNumber":99,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"83f0eec1-c489-4d6f-83e1-76f4af4294be"},{"LineNumber":100,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f3cd97e8-e85b-46fd-b6f9-ec349a109b8d"},{"LineNumber":101,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f7522a29-5edc-4bab-ba73-015853c1a94e"},{"LineNumber":102,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2c25dcb8-1281-434f-b30c-c2a7a3753a37"},{"LineNumber":103,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c4b03c80-db8e-4337-9a1e-7c846d72e8ee"},{"LineNumber":104,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a4ab234b-48b5-45f5-8fe4-17e1d87bd617"},{"LineNumber":105,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"68916d26-dffe-4257-983c-29d298b037b8"},{"LineNumber":106,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3deda6ae-9fb8-4b52-a08e-9ac51039a4c7"},{"LineNumber":107,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7d987804-32cf-43fd-afed-81613a5c8977"},{"LineNumber":108,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3fc5c1d8-436b-4fc2-b304-1e7e082b94dc"},{"LineNumber":109,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7f14be77-e058-4658-a8b8-dbab52b5583b"},{"LineNumber":112,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fb0dbb82-2b72-4722-8f0d-4159231c3f0d"},{"LineNumber":113,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c18578ca-097b-4281-a27b-e270341d5933"},{"LineNumber":114,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"31428c80-f846-4719-a569-e565d6c89913"}]},"FilterData":[]}