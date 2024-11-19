var sourceData90 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\ControllerAndEnvironment\\Utility\\Configuration\\CtrlEnv_loadCase_SimpleDrivePattern.m","RawFileContents":["function CtrlEnv_loadCase_SimpleDrivePattern(nvpairs)","%% Sets up simulation","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.ModelName {mustBeTextScalar} = \"CtrlEnv_harness_model\"","  nvpairs.TargetSubsystemPath {mustBeTextScalar} = \"/Controller and Environment/Vehicle speed reference\"","  nvpairs.DisplayMessage (1,1) logical = true","end","","CtrlEnv_loadCase( ...","  CaseName = \"Simple drive pattern\", ...","  CaseNumber = 1, ...","  StopTime = 100, ...","  ...","  ModelName = nvpairs.ModelName, ...","  TargetSubsystemPath = nvpairs.TargetSubsystemPath, ...","  DisplayMessage = nvpairs.DisplayMessage )","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"42cba7ae-6629-4c6c-a5ba-32c17aec985a"},"Statement":[{"LineNumber":8,"Hits":[2,2],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,64],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["42380d8d-be35-411b-9102-07863aad23f9","6769d9c1-a38e-4027-ae11-d1bc0c4c3ca1"]},{"LineNumber":9,"Hits":[2,2],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,104],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["8fd7ec60-cf67-4121-a5a7-547864da1590","78a00e5e-2f12-4017-ba42-53d141197b8d"]},{"LineNumber":10,"Hits":2,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"850b7f8d-cd51-41f1-bb11-6ca7949bb6a0"},{"LineNumber":13,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"},{"LineNumber":14,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"},{"LineNumber":15,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"},{"LineNumber":16,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"},{"LineNumber":18,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"},{"LineNumber":19,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"},{"LineNumber":20,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"53743ae3-45be-442c-9cbb-00e2a53c466d"}]},"FilterData":[]}