var sourceData38 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\SimulationCases\\BatteryHV_Case_Constant.mlx","RawFileContents":["mdl = \"BatteryHV_harness_model\";","load_system(mdl)","","% Load model parameters.","BatteryHV_harness_setup","","% Select battery model.","% BatteryHV_useRefsub_Basic","BatteryHV_useRefsub_SystemTable","% Setup simulation case.","BatteryHV_loadSimulationCase_Constant","set_param(mdl, StopTime=\"3600\")","% Run simulation.","simOut = sim(mdl);","","% Collect logged signals and visualize.","% The basic version of the battery block does not simulate battery temperature.","logged_signals = extractTimetable(simOut.logsout);","BatteryHV_plotResults(logged_signals);"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":12,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":18,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":19,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false}]}}