var sourceData169 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\VehicleSpeedReference\\SimulationCases\\VehSpdRef_loadCase_HighSpeed.m","RawFileContents":["function VehSpdRef_loadCase_HighSpeed(NameValuePair)","%% Sets up simulation","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  NameValuePair.ModelName {mustBeTextScalar} = \"VehSpdRef_harness_model\"","  NameValuePair.TargetSubsystemPath {mustBeTextScalar} = \"/Vehicle speed reference\"","  NameValuePair.DisplayMessage (1,1) logical = true","end","","VehSpdRef_loadCase( ...","  CaseName = \"High speed driving\", ...","  CaseNumber = 2, ...","  StopTime = 200, ...","  ...","  ModelName = NameValuePair.ModelName, ...","  TargetSubsystemPath = NameValuePair.TargetSubsystemPath, ...","  DisplayMessage = NameValuePair.DisplayMessage )","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[2,1],"StartColumnNumbers":[27,47],"EndColumnNumbers":[43,72],"ContinuedLine":false},{"LineNumber":9,"Hits":[2,1],"StartColumnNumbers":[37,57],"EndColumnNumbers":[53,83],"ContinuedLine":false},{"LineNumber":10,"Hits":2,"StartColumnNumbers":47,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":13,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":14,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":15,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":16,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":18,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true},{"LineNumber":19,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":57,"ContinuedLine":true},{"LineNumber":20,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":true}]}}