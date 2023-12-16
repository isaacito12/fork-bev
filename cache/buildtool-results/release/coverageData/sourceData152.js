var sourceData152 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\VehicleSpeedReference\\Utility\\Configuration\\VehSpdRef_loadSimulationCase_HighSpeed.m","RawFileContents":["function VehSpdRef_loadSimulationCase_HighSpeed(nvpairs)\r","%% Sets up simulation\r","% Model must be loaded for this function to work.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","arguments\r","  nvpairs.ModelName {mustBeTextScalar} = \"VehSpdRef_harness_model\"\r","  nvpairs.TargetSubsystemPath {mustBeTextScalar} = \"/Vehicle speed reference\"\r","  nvpairs.DisplayMessage (1,1) logical = true\r","end\r","\r","VehSpdRef_loadSimulationCase( ...\r","  CaseName = \"High speed driving\", ...\r","  CaseNumber = 2, ...\r","  StopTime = 200, ...\r","  ...\r","  ModelName = nvpairs.ModelName, ...\r","  TargetSubsystemPath = nvpairs.TargetSubsystemPath, ...\r","  DisplayMessage = nvpairs.DisplayMessage )\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[2,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,66],"ContinuedLine":false},{"LineNumber":9,"Hits":[2,1],"StartColumnNumbers":[31,51],"EndColumnNumbers":[47,77],"ContinuedLine":false},{"LineNumber":10,"Hits":2,"StartColumnNumbers":41,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":13,"Hits":2,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":14,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":15,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":16,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":18,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":19,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true},{"LineNumber":20,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true}]}}