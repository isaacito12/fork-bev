var sourceData55 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\Utility\\Configuration\\BatteryHV_useRefsub.m","RawFileContents":["function BatteryHV_useRefsub(nvpairs)","%% Sets a specified referenced subsystem to the model","% Model must be loaded before calling this function.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.ModelName {mustBeTextScalar} = \"BatteryHV_harness_model\"","  nvpairs.BlockPath {mustBeTextScalar} = \"/High Voltage Battery\"","  nvpairs.RefsubName {mustBeTextScalar}    = \"BatteryHV_refsub_Basic\"","  nvpairs.ParamFileName {mustBeTextScalar} = \"BatteryHV_refsub_Basic_params\"","end","","mdl = nvpairs.ModelName;","blkpath = mdl + nvpairs.BlockPath;","refsub = nvpairs.RefsubName;","paramfile = nvpairs.ParamFileName;","","evalin(\"base\", \"defineBus_HighVoltage\")","","if not(bdIsLoaded(mdl))","  load_system(mdl)","end","","disp(\"Model: \" + mdl)","disp(\"Setting up referenced subsystem: \" + refsub)","evalin(\"base\", paramfile)","set_param( blkpath, ReferencedSubsystem = refsub );","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[24,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,66],"ContinuedLine":false},{"LineNumber":9,"Hits":[24,1],"StartColumnNumbers":[21,41],"EndColumnNumbers":[37,64],"ContinuedLine":false},{"LineNumber":10,"Hits":[24,1],"StartColumnNumbers":[22,45],"EndColumnNumbers":[38,69],"ContinuedLine":false},{"LineNumber":11,"Hits":[24,1],"StartColumnNumbers":[25,45],"EndColumnNumbers":[41,76],"ContinuedLine":false},{"LineNumber":14,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":15,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":16,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":17,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":19,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":21,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":25,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":26,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":27,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":28,"Hits":24,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false}]}}