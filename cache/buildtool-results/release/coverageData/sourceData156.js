var sourceData156 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\VehicleSpeedReference\\SimulationCases\\VehSpdRef_Case_SimpleDrivePattern.mlx","RawFileContents":["mdl = \"VehSpdRef_harness_model\";","if not(bdIsLoaded(mdl)) ","  load_system(mdl)","end","% No setup script is used with this harness model.","VehSpdRef_loadCase_SimpleDrivePattern","simOut = sim(mdl);","simData = extractTimetable(simOut.logsout);","VehSpdRef_plotResults( SimData = simData );"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":3,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":6,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":7,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":8,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false}]}}