var sourceData84 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\ControllerAndEnvironment\\Utility\\Configuration\\CtrlEnv_loadCase_Constant.m","RawFileContents":["function CtrlEnv_loadCase_Constant(nvpairs)","%% Sets up simulation","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.ModelName {mustBeTextScalar} = \"CtrlEnv_harness_model\"","  nvpairs.TargetSubsystemPath {mustBeTextScalar} = \"/Controller and Environment/Vehicle speed reference\"","  nvpairs.DisplayMessage (1,1) logical = true","end","","CtrlEnv_loadCase( ...","  CaseName = \"Constant\", ...","  CaseNumber = 5, ...","  StopTime = 1000, ...","  ...","  ModelName = nvpairs.ModelName, ...","  TargetSubsystemPath = nvpairs.TargetSubsystemPath, ...","  DisplayMessage = nvpairs.DisplayMessage )","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[2,2],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,64],"ContinuedLine":false},{"LineNumber":9,"Hits":[2,2],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,104],"ContinuedLine":false},{"LineNumber":10,"Hits":2,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":13,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":14,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true},{"LineNumber":15,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":16,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":true},{"LineNumber":18,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":19,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true},{"LineNumber":20,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true}]}}