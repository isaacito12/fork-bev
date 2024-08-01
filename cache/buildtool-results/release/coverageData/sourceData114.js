var sourceData114 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\Utility\\Configuration\\MotorDriveUnit_loadCase_Random.m","RawFileContents":["function MotorDriveUnit_loadCase_Random(nvpairs)","% Sets up simulation","% This function sets up the followings:","% - Simulation stop time","% - Input signals","% - Initial conditions","%","% Model must be loaded for this function to work.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.RandomSeed (1,1) {mustBePositive} = 543","  nvpairs.NumTransitions (1,1) {mustBePositive} = 20","  nvpairs.InitialSOC_pct (1,1) {mustBeInRange(nvpairs.InitialSOC_pct, 0, 100)} = 60","end","","deltaInterp = 0.5;","","sigTrqCmd = SignalDesignUtility.buildTrace( ...","  RandomSeed = nvpairs.RandomSeed, ...","  InterpolationStepSize = deltaInterp, ...","  XInitialFlatLength = 5, ... Initial duration for constant torque command","  YInitialValue = 0, ... Initial value of torque command","  NumTransitions  = nvpairs.NumTransitions, ...","  TransitionRange = [2 5], ... Time range of transition from one constant segment to the next","  FlatRange = [3 20], ... Time range of constant segment","  YRange = [0 100], ... Value range of torque command","  XFinalTransitionLength = 2, ... Duration of final transition","  XFinalFlatLength = 10, ... Duration of final constant torque command segment","  YFinalValue = 0 );  % Final torque command value","","sigAxleTrq = SignalDesignUtility.buildTrace( ...","  RandomSeed = nvpairs.RandomSeed, ...","  InterpolationStepSize = deltaInterp, ...","  XInitialFlatLength = 5, ... Initial duration for constant axle torque","  YInitialValue = 0, ... Initial value of axle torque","  NumTransitions  = ceil( 3 * nvpairs.NumTransitions ), ...","  TransitionRange = [1 3], ... Time range of transition from one constant segment to the next","  FlatRange = [1 5], ... Time range of constant segment","  YRange = [-10 -3], ... Value range of axle torque","  XFinalTransitionLength = 2, ... Duration of final transition","  XFinalFlatLength = 10, ... Duration of final constant axle torque segment","  YFinalValue = 0 );  % Final axle torque value","","t1 = sigTrqCmd.Data.X(end);","t2 = sigAxleTrq.Data.X(end);","if t1 < t2","  t_end = t2;","else","  t_end = t1;","end","","% Uncomment below to plot and see the generated signal traces.","%{","fig1 = plotDataPoints(sigTrqCmd);","fig2 = plotDataPoints(sigAxleTrq);","xlim(fig1, [0, t_end])","xlim(fig2, [0, t_end])","return","%}","","MotorDriveUnit_loadCase( ...","  CaseName = \"Randomly generated input signals\", ...","  ...","  ModelName = \"MotorDriveUnit_harness_model\", ...","  ...","  StopTime = t_end, ...","  ...","  InputSystemPath = \"/Inputs\", ...","  ...","  AxleClutchSwitch_BlockName = \"Axle clutch switch\", ...","  AxleClutchSwitch_DataPoints = [0 0; 1 0], ...","  ...","  AxleSpeed_BlockName = \"Axle speed\", ... rpm","  AxleSpeed_DataPoints = [0 1 0], ...","  AxleSpeed_DeltaT = 10, ...","  ...","  AxleTorque_BlockName = \"Axle torque\", ... N*m","  AxleTorque_DataPoints = sigAxleTrq.XYData, ...","  AxleTorque_DeltaT = deltaInterp, ...","  ...","  MotorTorqueCommand_BlockName = \"Motor torque command\", ... N*m","  MotorTorqueCommand_DataPoints = sigTrqCmd.XYData, ...","  MotorTorqueCommand_DeltaT = deltaInterp, ...","  ...","  HeatFlowCommand_BlockName = \"Heat flow command\", ... W","  HeatFlowCommand_DataPoints = [0 50 0; 60 200 -100; 210 300 -400], ... Cooling motor","  HeatFlowCommand_DeltaT = 1, ...","  ...","  LoadInertia_kg_m2 = 100*0.3^2, ...","  LoadDamping_Nm_per_rpm = 0.03, ...","  ...","  GeartrainInertia_kg_m2 = 15*0.3^2, ...","  GeartrainDamping_Nm_per_rpm = 0.001, ...","  ...","  HVBattery_Voltage_V = 340, ...","  HVBattery_TerminalResistance_Ohm = 0.01, ...","  ...","  Initial_LoadInertiaSpd_rpm = 0, ...","  Initial_MotorDriveUnit_RotorSpd_rpm = 0, ...","  Initial_MotorDriveUnit_Temperature_K = 273.15 + 20, ...","  Initial_AmbientTemperature_K = 273.15 + 20, ...","  ...","  DisplayMessage = true );","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},"Statement":[{"LineNumber":13,"Hits":[6,6],"StartColumnNumbers":[28,46],"EndColumnNumbers":[42,49],"ContinuedLine":false},{"LineNumber":14,"Hits":[6,6],"StartColumnNumbers":[32,50],"EndColumnNumbers":[46,52],"ContinuedLine":false},{"LineNumber":15,"Hits":[6,6],"StartColumnNumbers":[32,81],"EndColumnNumbers":[77,83],"ContinuedLine":false},{"LineNumber":18,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":20,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":21,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":22,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true},{"LineNumber":23,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true},{"LineNumber":24,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true},{"LineNumber":25,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":true},{"LineNumber":26,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true},{"LineNumber":27,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":true},{"LineNumber":28,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":true},{"LineNumber":29,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":true},{"LineNumber":30,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true},{"LineNumber":31,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":true},{"LineNumber":33,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":34,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":35,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true},{"LineNumber":36,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true},{"LineNumber":37,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true},{"LineNumber":38,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":54,"ContinuedLine":true},{"LineNumber":39,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true},{"LineNumber":40,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true},{"LineNumber":41,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true},{"LineNumber":42,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":true},{"LineNumber":43,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true},{"LineNumber":44,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":true},{"LineNumber":46,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":47,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":48,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":49,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":51,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":63,"Hits":6,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":64,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":true},{"LineNumber":66,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true},{"LineNumber":68,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":true},{"LineNumber":70,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":true},{"LineNumber":72,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true},{"LineNumber":73,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":true},{"LineNumber":75,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":true},{"LineNumber":76,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":77,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":true},{"LineNumber":79,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true},{"LineNumber":80,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":true},{"LineNumber":81,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":83,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":55,"ContinuedLine":true},{"LineNumber":84,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":50,"ContinuedLine":true},{"LineNumber":85,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true},{"LineNumber":87,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":true},{"LineNumber":88,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":66,"ContinuedLine":true},{"LineNumber":89,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":true},{"LineNumber":91,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":92,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":true},{"LineNumber":94,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":true},{"LineNumber":95,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":true},{"LineNumber":97,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":true},{"LineNumber":98,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true},{"LineNumber":100,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":101,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":true},{"LineNumber":102,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":true},{"LineNumber":103,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":true},{"LineNumber":105,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":26,"ContinuedLine":true}]}}