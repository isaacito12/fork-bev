var sourceData5 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\BEV\\SimulationCases\\BEV_Case_Constant_Thermal.mlx","RawFileContents":["modelName = \"BEV_system_model\";","load_system(modelName)","% Use thermal-model-enabled components.","BEV_useComponents_Thermal","VehSpdRef_loadCase_Constant( ...","  ModelName = modelName, ...","  TargetSubsystemPath = ...","    \"/Controller & Environment\" + ...","    \"/Vehicle speed reference\" )","simOut = sim(modelName);","simData = extractTimetable(simOut.logsout);","fig = BEV_plotResultsCompact( SimData = simData );"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"783fa5cd-3416-4c44-b0f5-62753b5f9e6b"},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8ac6ee33-3243-44be-933f-42c5205d4b97"},{"LineNumber":4,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1ce9c111-5384-44c3-8763-e70f21423efa"},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bf897e26-5edb-4e14-97a4-a45445072a58"},{"LineNumber":6,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"bf897e26-5edb-4e14-97a4-a45445072a58"},{"LineNumber":7,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"bf897e26-5edb-4e14-97a4-a45445072a58"},{"LineNumber":8,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"bf897e26-5edb-4e14-97a4-a45445072a58"},{"LineNumber":9,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"bf897e26-5edb-4e14-97a4-a45445072a58"},{"LineNumber":10,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"810114b0-38db-45e7-9cc0-f9359b448765"},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ca8b9c38-3380-4367-a9a1-bacdc12b5047"},{"LineNumber":12,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d0651276-94e1-48e2-8da5-f0dea9daed52"}]},"FilterData":[]}