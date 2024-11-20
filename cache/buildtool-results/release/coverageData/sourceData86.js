var sourceData86 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\ControllerAndEnvironment\\Utility\\Configuration\\CtrlEnv_loadCase.m","RawFileContents":["function CtrlEnv_loadCase(nvpairs)","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.CaseName {mustBeTextScalar} = \"Default\"","","  nvpairs.ModelName {mustBeTextScalar} = \"CtrlEnv_harness_model\"","  nvpairs.TargetSubsystemPath {mustBeTextScalar} = \"/Controller and Environment/Vehicle speed reference\"","","  nvpairs.CaseNumber (1,1) {mustBeMember(nvpairs.CaseNumber, 1:5)} = 1","  nvpairs.StopTime (1,1) {mustBePositive} = 100","","  nvpairs.DisplayMessage (1,1) logical = true","end","","dispMsg = nvpairs.DisplayMessage;","","if dispMsg","  disp(\"Setting up simulation...\")","  disp(\"Simulation case: \" + nvpairs.CaseName)","end","","mdl = nvpairs.ModelName;","","t_end = nvpairs.StopTime;","","if dispMsg","  disp(\"Setting simulation stop time to \" + t_end + \" sec.\")","end","","set_param(mdl, StopTime = num2str(t_end));","","caseNumStr = num2str(nvpairs.CaseNumber);","if dispMsg","  disp(\"Selecting simulation case \" + caseNumStr + \".\")","end","","sysPath = mdl + nvpairs.TargetSubsystemPath;","","set_param( sysPath + \"/Simulation Case\", ...","  Value = caseNumStr)","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"5b39ec19-db95-4dee-907e-f52cccb4f0bd"},"Statement":[{"LineNumber":12,"Hits":[9,1],"StartColumnNumbers":[20,40],"EndColumnNumbers":[36,49],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["cb4aea39-3267-42f9-ac8c-af1670f81d16","0175a21d-9227-4179-ac4e-45abbba5eef5"]},{"LineNumber":14,"Hits":[9,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,64],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["de59a305-d12f-4b89-aa46-e39df875e09e","61b8e636-3174-4da5-8041-d586ef704ec9"]},{"LineNumber":15,"Hits":[9,1],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,104],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["7556f818-f1a9-425e-a643-693dd1763cb5","e49a2726-178e-4212-a410-1fbae671293c"]},{"LineNumber":17,"Hits":[9,1],"StartColumnNumbers":[28,69],"EndColumnNumbers":[65,70],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["2b2b73d1-c1fa-4ee9-b224-3cce7cacaee3","5afb3a17-9336-43ad-8dd2-b0bc3785ecd2"]},{"LineNumber":18,"Hits":[9,1],"StartColumnNumbers":[26,44],"EndColumnNumbers":[40,47],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["45da4bc2-8187-4ab3-87ba-40d20b8a831e","ce73b5b6-49fe-437a-84fc-7942b3dfc4a5"]},{"LineNumber":20,"Hits":1,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0eee52fc-0207-4beb-9bca-038e9dc77dc3"},{"LineNumber":23,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ca5b2c96-e20c-496e-99e0-85038ed24c1d"},{"LineNumber":25,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ee139f06-6251-4355-9c47-ea36cdc0c546"},{"LineNumber":26,"Hits":9,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"84b8385f-a747-4ccb-a058-e021aa9896e8"},{"LineNumber":27,"Hits":9,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7ad775f9-bc7f-4ddb-84dd-18debed9ea5c"},{"LineNumber":30,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5236b8e1-2ce4-4cef-a1df-a1752c75a1d6"},{"LineNumber":32,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"330dfe13-6d9f-4214-bbc1-011404972660"},{"LineNumber":34,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c094b204-c896-480b-b88c-8f1e26b51abe"},{"LineNumber":35,"Hits":9,"StartColumnNumbers":2,"EndColumnNumbers":60,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"471f9f75-0826-4286-90d2-b4111b7a3644"},{"LineNumber":38,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"baa3ed5a-5a77-467e-9617-257db3c04c80"},{"LineNumber":40,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"791bab27-4c7e-4014-b414-0a5e2042d68a"},{"LineNumber":41,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"25bc2413-266f-4169-98bf-d7f2e8eec6b3"},{"LineNumber":42,"Hits":9,"StartColumnNumbers":2,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"613a4186-0cfc-4277-aa27-1dad8bd97339"},{"LineNumber":45,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"58f00c51-9cb0-47c6-91e0-c23d632f3c9b"},{"LineNumber":47,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"85359863-64f3-4081-b7dd-b1330cb35942"},{"LineNumber":48,"Hits":9,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"85359863-64f3-4081-b7dd-b1330cb35942"}]},"FilterData":[]}