var sourceData175 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\DetailedModelApplications\\MotorDrivePmsmFem\\MotorDrivePmsmFemParams.m","RawFileContents":["%% Model Parameters for Motor Drive Model","","% Copyright 2020 The MathWorks, Inc.","","PmsmFemParams","","%% PMSM Controller Subsystem","","clear foc","foc.initialHighV_V = 500;","","%% Model Parameters for PMSM Field-Oriented Controller","","clear tmp","","% Control parameters","tmp.Ts = 2e-6;  % Fundamental sample time ","tmp.fsw = 2e3;  % Switching frequency (Hz) ","tmp.fc = tmp.fsw*10;  % Control loop frequency (Hz)  ","tmp.Tsc = 1/tmp.fc;  % Control loop sample time","","% PMSM parameters ","tmp.PM = 0.1447;  % Permanent magnet flux linkage ","tmp.Ld =0.0012975;  % H d-axis inductance  -","tmp.Lq = 0.00393;  % H q-axis inductance","tmp.N = 4;  % Number of pole pairs","","% Operating and derived limits","tmp.iq_max = 249.8477;  % current component on the Q-axis","tmp.id_max = 8.7249;  % current component on the D-axis","","tmp.Tmax = 1.5*(tmp.N*tmp.PM*tmp.iq_max+(tmp.Ld - tmp.Lq)*tmp.id_max*tmp.iq_max);","  % Max electromagnetic torque","","% General","","  % Control mode: Velocity control","","  % Nominal dc-link voltage (V)","  foc.nominalDC_V = foc.initialHighV_V;","  ","  % Maximum power (W)","  foc.maxPower_W = 60000;","  ","  % Maximum torque (N*m)","  foc.maxTrq_Nm = tmp.Tmax;","  ","  % Number of rotor pole pairs","  foc.numPolePairs = tmp.N;","  ","  % Inverter dc-link voltage threshold (V)","  foc.DCthresh_V = 10;","  ","  % Fundamental sample time (s)","  foc.sampleTime_s = tmp.Ts;","  ","  % Control sample time (s)","  foc.controlSampleTime_s = tmp.Tsc;","","% Outer Loop","  ","  % Permanent magnet flux linkage (Wb)","  foc.PM_Wb = tmp.PM;","","% Inner Loop","  ","  % D-axis inductance for feed-forward pre-control (H)","  foc.Ld_H = tmp.Ld;","  ","  % Q-axis inductance for feed-forward pre-control (H)","  foc.Lq_H = tmp.Lq;","  ","  % Permanent magnet flux linkage for feed-forward pre-control (Wb)","  foc.PM_Wb = tmp.PM;","","% PWM","  ","  % Switching frequency (Hz)","  foc.fsw_Hz = tmp.fsw;","","clear tmp",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":5,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a2f72adc-ab8d-443e-b284-4d13f17b36c0"},{"LineNumber":9,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b76d4b38-dd2a-43d6-9996-cf586eb7a7ac"},{"LineNumber":10,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f642c240-8ab1-4e16-a74d-d2002803fc43"},{"LineNumber":14,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"94072cd6-6665-4672-ad15-437aec491018"},{"LineNumber":17,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fa513466-5dd9-4b66-956a-13e06dfe38aa"},{"LineNumber":18,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6279c7a4-ee46-42c3-a885-753724579b17"},{"LineNumber":19,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"303fbe9c-3a55-444f-8049-eb5f41d929d0"},{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b9b5e764-43fd-478e-bd8b-674f1a47ce83"},{"LineNumber":23,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8b183077-5a59-4240-b14a-0b43de00cf3d"},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4043a196-5f48-4e8e-a0fb-84092f7b5718"},{"LineNumber":25,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b82580b9-1e13-41f5-b05a-25d87f8479c7"},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"64895c1a-27b7-481a-a089-ed75e85f1e09"},{"LineNumber":29,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8e728111-db83-469f-9950-ebc7e024b7c3"},{"LineNumber":30,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e0090430-b618-40b4-99a2-7a82460780c0"},{"LineNumber":32,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":81,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cf146392-ab8f-4345-b00e-fcc74d787320"},{"LineNumber":40,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f19bba94-c8df-41ca-a94d-1166b835f816"},{"LineNumber":43,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"23be2c0a-7832-45f5-a0ec-0f6bd9beed3c"},{"LineNumber":46,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f205633d-06d9-4e5e-a591-a2b04c2bd778"},{"LineNumber":49,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3fecc17d-9ce2-4032-bcdd-c385f0a8bb54"},{"LineNumber":52,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"44e10144-dabd-4f67-9f10-66a17eace319"},{"LineNumber":55,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d18cd96c-8ad0-4217-8343-3e0d40482f87"},{"LineNumber":58,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fd3c085c-72ce-41c5-9ded-b7c3c77edbc6"},{"LineNumber":63,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0230cd6a-f7a9-4c04-ab96-17d232037ec7"},{"LineNumber":68,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c99c1ed8-b45c-4950-8fd3-ed36b3a20cf5"},{"LineNumber":71,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8a920fdd-02fe-43ee-9ab1-23a280f195c5"},{"LineNumber":74,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aa78864c-aa63-4eec-ac9a-2d711ac06034"},{"LineNumber":79,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c731a80f-c2ce-45da-be53-6312e5672956"},{"LineNumber":81,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":10,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b356b3d4-0218-4d95-9caa-28453b7c1606"}]},"FilterData":[]}