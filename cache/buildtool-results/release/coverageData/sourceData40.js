var sourceData40 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\SimulationCases\\BatteryHV_Case_Random.mlx","RawFileContents":["mdl = \"BatteryHV_harness_model\";","load_system(mdl)","","% Load model parameters.","BatteryHV_harness_setup","","% Select battery model.","% BatteryHV_useRefsub_Basic","BatteryHV_useRefsub_SystemTable","% Setup simulation case.","BatteryHV_loadSimulationCase_Random( ...","  RandomSeed = 125, ...","  NumTransitions = 20, ...","  InitialSOC_pct = 50 );","% Run simulation.","simOut = sim(mdl);","","% Collect logged signals and visualize.","% The basic version of the battery block does not simulate battery temperature.","logged_signals = extractTimetable(simOut.logsout);","BatteryHV_plotResults(logged_signals);"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":12,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":true},{"LineNumber":13,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":14,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":20,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false}]}}