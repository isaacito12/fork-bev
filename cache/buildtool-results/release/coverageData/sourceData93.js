var sourceData93 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\MotorDriveUnit\\Notes-Efficiency\\MotorDriveUnit_note_Efficiency_System.mlx","RawFileContents":["mdl = \"MotorDriveUnit_refsub_System\";","MotorDriveUnit_refsub_System_params","load_system(mdl)","blkpath = mdl + \"/Motor Drive/Motor & Drive (System Level)\";","info = MotorDriveUnit_getBlockInfo_System(blkpath)","MotorDriveUnit_plotEfficiency( ...","  ... In road vehicle applications,","  ... maximum motor speed is determined by vehicle top speed,","  ... tire rolling radius, and reduction gear ratio. ","  MaxSpeed_rpm = 15000, ...","  ...","  MaxTorque_Nm = info.MaxTorque_Nm, ...","  MaxPower_kW = info.MaxPower_kW, ...","  Efficiency_pct = info.Efficiency_pct, ...","  Speed_measured_rpm = info.Speed_measured_rpm, ...","  Torque_measured_Nm = info.Torque_measured_Nm, ...","  ...","  IronToNominalLossRatio_pct = info.IronToNominalLossRatio_pct, ...","  FixedLoss_W = info.FixedLoss_W, ...","  ...","  RotorDamping_Nm_per_radps = info.RotorDamping_Nm_per_radps, ...","  ...","  ContourLevels_pct = [1 60 80 90 92 94 96 97 98 99], ...","  PlotResolution = 500 );","","%{","FullpathToFolder = fullfile(currentProject().RootFolder, ...","  \"Components\", \"MotorDriveUnit\", \"Utility\", \"Images\");","imgFilename = mdl + \"_efficiency.png\"","exportgraphics(gca, fullfile(FullpathToFolder, imgFilename))","%}"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":3,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":4,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":6,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":10,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true},{"LineNumber":12,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true},{"LineNumber":13,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":14,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true},{"LineNumber":15,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":true},{"LineNumber":16,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":true},{"LineNumber":18,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":62,"ContinuedLine":true},{"LineNumber":19,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":21,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":60,"ContinuedLine":true},{"LineNumber":23,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":true},{"LineNumber":24,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true}]}}