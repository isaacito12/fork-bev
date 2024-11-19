var sourceData153 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\Vehicle1D\\Utility\\Vehicle1D_plotProperties_Basic.m","RawFileContents":["function fig = Vehicle1D_plotProperties_Basic(nvpairs)","%% Plots vehicle properties specified in block parameters.","% This function reads block parameters of Longitudinal Vehicle block","% and makes the plots of the Road-Load curve (i.e., resistin gforce) and","% corresponding power curve as a function of vehicle speed.","%","% Model must be loaded and target subsystem must be opened","% before calling this function.","","% Copyright 2022-2023 The MathWorks, Inc.","","arguments","  nvpairs.ModelName {mustBeTextScalar} = \"Vehicle1D_harness_model\"","  nvpairs.BlockPathToTargetSubsystem {mustBeTextScalar} = \"/Longitudinal Vehicle\"","  nvpairs.TargetBlockName {mustBeTextScalar} = \"Longitudinal Vehicle\"","end","","mdl = nvpairs.ModelName;","sybsys_fullpath = mdl + nvpairs.BlockPathToTargetSubsystem;","","blockPaths = getfullname(Simulink.findBlocksOfType( sybsys_fullpath, ...","  \"SimscapeBlock\", ...","  Simulink.FindOptions( SearchDepth = 1 )));","","targetBlockName = nvpairs.TargetBlockName;","","% logical index","lix = endsWith(blockPaths, targetBlockName);","","% Block name in a subsystem is guaranteed to be unique.","% Target block should be found, and the number of match is required to be 1.","assert(nnz(lix) == 1, ...","  \"Block was not found: \" + targetBlockName)","","% block_info = sdlUtility.getLongitudinalVehicleInfo(block_handle);","block_info = Vehicle1D_getLongitudinalVehicleInfo(targetBlockName);","","plotSpeedUnit = \"km/hr\";","plotSpeedUpperBound_kph = 160;","","fig = sdlUtility.plotLongitudinalVehicleResistance( ...","  VehicleMass = block_info.VehicleMass, ...","  RoadLoadA = block_info.RoadLoadA, ...","  RoadLoadB = block_info.RoadLoadB, ...","  RoadLoadC = block_info.RoadLoadC, ...","  GravitationalAcceleration = block_info.GravitationalAcceleration, ...","  VehicleSpeedVector = simscape.Value(0:160, \"km/hr\")', ...","  RoadGradeVector = [30, 15, 0], ...","  VehicleSpeedPlotUnit = plotSpeedUnit );","","allLegends = findall(fig, type=\"legend\");","% Legends are stored in the reverse order.","% The legend property of the first plot of the two is at the second element.","allLegends(2).Location = \"northwest\";","","allAxes = findall(fig, type=\"axes\");","linkaxes(allAxes, \"x\")","xlim(gca, [0 plotSpeedUpperBound_kph])","","% Lower the position of the plot window","% because the top part of the plot window goes outside of the screen.","fig.Position(2) = fig.Position(2) - 100;","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"c9e570e4-9d43-43fc-98db-d30eac2f061d"},"Statement":[{"LineNumber":13,"Hits":[1,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,66],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["77719850-c5f2-4321-84f7-c170d76a005b","002f8480-7e63-4e90-b507-b033ca418123"]},{"LineNumber":14,"Hits":[1,1],"StartColumnNumbers":[38,58],"EndColumnNumbers":[54,81],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["3379b04e-cab7-4b4e-bc0b-17f9d519028f","d38f9df0-0c39-426f-8386-46ee6cc778f2"]},{"LineNumber":15,"Hits":[1,1],"StartColumnNumbers":[27,47],"EndColumnNumbers":[43,69],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["4955f9ff-341b-4589-8b15-7d07545b72e6","e4c65e9e-7e56-431f-a4d3-68665a24706f"]},{"LineNumber":18,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"33881288-824e-4ae2-8922-5bfa8b68331c"},{"LineNumber":19,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0ebbdd2e-b5d6-4cef-aa5a-ba90e4c8b6c6"},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":67,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bf95d48e-72bc-4a4d-bfe6-eb30a8c0cf23"},{"LineNumber":22,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"bf95d48e-72bc-4a4d-bfe6-eb30a8c0cf23"},{"LineNumber":23,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"bf95d48e-72bc-4a4d-bfe6-eb30a8c0cf23"},{"LineNumber":25,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3ad0b1b3-e844-4366-81c5-dfbba6e4e5ae"},{"LineNumber":28,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"23b8d2b3-5ea6-4b64-b013-da62bf62244c"},{"LineNumber":32,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"83fbad12-ff2b-492d-912f-4c521fb29f62"},{"LineNumber":33,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"83fbad12-ff2b-492d-912f-4c521fb29f62"},{"LineNumber":36,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":67,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d646e89c-c889-4c82-80d0-2539dee0b71e"},{"LineNumber":38,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d1367221-4e5b-457a-9ae3-ffb148322ef3"},{"LineNumber":39,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0378d198-e476-4ae7-a055-76ea60a3cee1"},{"LineNumber":41,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":42,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":43,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":44,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":45,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":46,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":66,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":47,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":54,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":48,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":49,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"4183e490-f4f6-48d5-ad2b-8cec5c48056c"},{"LineNumber":51,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5eced9c9-db14-4f52-a4fb-b1a401ca5cf5"},{"LineNumber":54,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"47106f25-5838-477d-be58-3f31c8eb0d06"},{"LineNumber":56,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5bd030d9-6577-46a2-8331-0ec8c355f4db"},{"LineNumber":57,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9f5dc10d-3bcf-4452-b7ab-7aa6a17f62f3"},{"LineNumber":58,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"572f05a0-c146-4e83-ba7c-7d7350d1e4a9"},{"LineNumber":62,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"79aeb590-df70-41b3-be8a-2ccc1e688e6f"}]},"FilterData":[]}