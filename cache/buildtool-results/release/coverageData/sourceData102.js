var sourceData102 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\MotorDriveUnit\\Notes-Efficiency\\MotorDriveUnit_note_Efficiency_Basic.mlx","RawFileContents":["mdl = \"MotorDriveUnit_refsub_Basic\";","MotorDriveUnit_refsub_Basic_params","load_system(mdl)","blkpath = mdl + \"/Motor & Drive (Driveline)\";","info = MotorDriveUnit_getBlockInfo_Basic(blkpath)","dampParam = getSimscapeValueFromBlockParameter( mdl+\"/Rotor damper\", \"D\" );","k_damp = value(dampParam, \"N*m/(rad/s)\");","","MotorDriveUnit_plotEfficiency_Basic( ...","  ... In road vehicle applications,","  ... maximum motor speed is determined by vehicle top speed,","  ... tire rolling radius, and reduction gear ratio. ","  MaxSpeed_rpm = 15000, ...","  ...","  MaxTorque_Nm = info.MaxTorque_Nm, ...","  MaxPower_kW = info.MaxPower_kW, ...","  Efficiency_pct = info.Efficiency_pct, ...","  Speed_measured_rpm = info.Speed_measured_rpm, ...","  Torque_measured_Nm = info.Torque_measured_Nm, ...","  RotorDamping_Nm_per_radps = k_damp, ...","  ContourLevels_pct = [1 60 80 90 92 94 96 97 98 99], ...","  PlotResolution = 500 );","","%{","FullpathToFolder = fullfile(currentProject().RootFolder, ...","  \"Components\", \"MotorDriveUnit\", \"Utility\", \"Images\");","imgFilename = mdl + \"_efficiency.png\"","exportgraphics(gca, fullfile(FullpathToFolder, imgFilename))","%}"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":3,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":4,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":6,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":75,"ContinuedLine":false},{"LineNumber":7,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":13,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true},{"LineNumber":15,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":34,"ContinuedLine":true},{"LineNumber":16,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":17,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":true},{"LineNumber":18,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":true},{"LineNumber":19,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":46,"ContinuedLine":true},{"LineNumber":20,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":true},{"LineNumber":21,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":true},{"LineNumber":22,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":true}]}}