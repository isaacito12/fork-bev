var sourceData164 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\VehicleSpeedReference\\Utility\\Configuration\\VehSpdRef_loadCase_SimpleDrivePattern.m","RawFileContents":["function VehSpdRef_loadCase_SimpleDrivePattern(nvpairs)","%% Sets up simulation","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.ModelName {mustBeTextScalar} = \"VehSpdRef_harness_model\"","  nvpairs.TargetSubsystemPath {mustBeTextScalar} = \"/Vehicle speed reference\"","  nvpairs.DisplayMessage (1,1) logical = true","end","","VehSpdRef_loadCase( ...","  CaseName = \"Simple drive pattern\", ...","  CaseNumber = 1, ...","  StopTime = 100, ...","  ...","  ModelName = nvpairs.ModelName, ...","  TargetSubsystemPath = nvpairs.TargetSubsystemPath, ...","  DisplayMessage = nvpairs.DisplayMessage )","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":4,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[4,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,66],"ContinuedLine":false},{"LineNumber":9,"Hits":[4,1],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,77],"ContinuedLine":false},{"LineNumber":10,"Hits":4,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":13,"Hits":4,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":14,"Hits":4,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":true},{"LineNumber":15,"Hits":4,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":16,"Hits":4,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":18,"Hits":4,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":19,"Hits":4,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true},{"LineNumber":20,"Hits":4,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true}]}}