var sourceData5 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\BEV\\SimulationCases\\BEV_Case_Constant_Thermal.mlx","RawFileContents":["modelName = \"BEV_system_model\";","load_system(modelName)","% Use thermal-model-enabled components.","BEV_useComponents_Thermal","VehSpdRef_loadCase_Constant( ...","  ModelName = modelName, ...","  TargetSubsystemPath = ...","    \"/Controller & Environment\" + ...","    \"/Vehicle speed reference\" )","simOut = sim(modelName);","simData = extractTimetable(simOut.logsout);","fig = BEV_plotResultsCompact( SimData = simData );"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c99d179e-e441-45d0-aa0c-258fc58c2b0d"},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a31f6227-c937-4445-9fa6-6305284b9071"},{"LineNumber":4,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d14a9fdc-d25a-4ba8-963d-00f577e8ed4d"},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e831bf7a-66f5-47ba-a732-1f66b68e5795"},{"LineNumber":6,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"e831bf7a-66f5-47ba-a732-1f66b68e5795"},{"LineNumber":7,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"e831bf7a-66f5-47ba-a732-1f66b68e5795"},{"LineNumber":8,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"e831bf7a-66f5-47ba-a732-1f66b68e5795"},{"LineNumber":9,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"e831bf7a-66f5-47ba-a732-1f66b68e5795"},{"LineNumber":10,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"377fa2d7-63fe-4033-bbd6-fd3f546f3651"},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8205c29c-29a9-4099-b896-0acb593e623c"},{"LineNumber":12,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8e7fa68a-ac6e-41e8-b5c9-05e65a3f1e97"}]},"FilterData":[]}