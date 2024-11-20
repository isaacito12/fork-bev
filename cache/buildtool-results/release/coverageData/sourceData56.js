var sourceData56 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\Utility\\Configuration\\BatteryHV_loadSimulationCase_Random.m","RawFileContents":["function BatteryHV_loadSimulationCase_Random(nvpairs)","%% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.RandomSeed (1,1) {mustBePositive} = 123","  nvpairs.NumTransitions (1,1) {mustBePositive} = 10","  nvpairs.InitialSOC_pct (1,1) {mustBeInRange(nvpairs.InitialSOC_pct, 0, 100)} = 60","end","","deltaInterp = 0.5;","","sig = SignalDesignUtility.buildTrace( ...","  RandomSeed = nvpairs.RandomSeed, ...","  InterpolationStepSize = deltaInterp, ...","  XInitialFlatLength = 5, ... Initial duration for constant current","  YInitialValue = 0, ... Initial value of current","  NumTransitions  = nvpairs.NumTransitions, ...","  TransitionRange = [10 30], ... Time range of transition from one constant segment to the next","  FlatRange = [60 120], ... Time range of constant segment","  YRange = [-10 30], ... Value range of current","  XFinalTransitionLength = 10, ... Duration of final transition","  XFinalFlatLength = 10, ... Duration of final constant current segment","  YFinalValue = 0 );  % Final current value","","% Uncomment below and run this function to see the plot of data points and generated signal trace.","%{","plotDataPoints(sig);","%}","","t_end = sig.Data.X(end);","","BatteryHV_loadSimulationCase( ...","  CaseName = \"Random input\", ...","  ModelName = \"BatteryHV_harness_model\", ...","  StopTime = t_end, ...","  InputSystemPath = \"/Inputs\", ...","  LoadCurrentBlockName = \"Load current\", ...","  LoadCurrentDataPoints = sig.XYData, ...","  LoadCurrentDeltaT = deltaInterp, ...","  HeatFlowBlockName = \"Heat flow\", ...","  HeatFlowDataPoints = [0 1 0], ...","  HeatFlowDeltaT = 0.1, ...","  TerminalVoltage_V = evalin(\"base\", \"batteryHV.nominalVoltage_V\"), ...","  NominalCapacity_kWh = evalin(\"base\", \"batteryHV.nominalCapacity_kWh\"), ...","  InitialSOC_pct = nvpairs.InitialSOC_pct, ...","  InitialBatteryTemperature_K = 273.15 + 20, ...","  DisplayMessage = true );","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"8b5c8624-f6da-4f07-b7de-ee5c2ba513f6"},"Statement":[{"LineNumber":13,"Hits":[6,4],"StartColumnNumbers":[28,46],"EndColumnNumbers":[42,49],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["ca2f11d3-5c10-437b-9c7e-a35d2e540420","f883c101-072e-4732-902c-d3b3bf11b76e"]},{"LineNumber":14,"Hits":[6,4],"StartColumnNumbers":[32,50],"EndColumnNumbers":[46,52],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["d3c64fbc-dc5b-409d-b4aa-6c919e87ece6","3bf79343-5987-4243-843d-7110c6adfa5e"]},{"LineNumber":15,"Hits":[6,4],"StartColumnNumbers":[32,81],"EndColumnNumbers":[77,83],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["78372450-e82f-4712-9e52-3a1931560fc4","40f85410-c949-4763-93da-fe510979c1d2"]},{"LineNumber":18,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"69b9feb3-094c-4aea-9c41-b715105360e1"},{"LineNumber":20,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":21,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":22,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":23,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":24,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":25,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":26,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":27,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":28,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":29,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":30,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":31,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"038f1dde-cc4c-4a6b-8e72-3c51e3b1c0fa"},{"LineNumber":38,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0b31dae3-ef17-42c7-94a6-b5fd3650c9f0"},{"LineNumber":40,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":41,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":42,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":43,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":44,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":45,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":46,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":47,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":48,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":49,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":50,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":51,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":66,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":52,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":71,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":53,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":54,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"},{"LineNumber":55,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"57bc69a6-399c-48cb-a727-901274b444b6"}]},"FilterData":[]}