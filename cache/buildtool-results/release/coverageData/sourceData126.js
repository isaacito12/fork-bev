var sourceData126 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\Vehicle1D\\Custom\\+Vehicle1DUtility\\reportVehicle1DCustomBlock.mlx","RawFileContents":["% Get parameter values from the block.","% Make sure you have selected the vehicle block before running this script.","block_info = Vehicle1DUtility.getVehicle1DCustomBlockInfo(gcbh);","","fig = Vehicle1DUtility.plotRoadLoad( ...","  VehicleMass_kg = block_info.M_e_kg, ...","  RoadLoadA_N = block_info.A_rl_N, ...","  RoadLoadB_N_per_kph = block_info.B_rl_N_per_kph, ...","  RoadLoadC_N_per_kph2 = block_info.C_rl_N_per_kph2, ...","  GravitationalAcceleration_m_per_s2 = block_info.grav_m_per_s2, ...","  VehicleSpeedVector_kph = linspace(0, 160, 200), ...","  RoadGradeVector_pct = [45, 30, 15, 0] );","","fig.Position(3:4) = [500 400];  % width height"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":3,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":5,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":6,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":true},{"LineNumber":7,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":true},{"LineNumber":8,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":true},{"LineNumber":9,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true},{"LineNumber":10,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":63,"ContinuedLine":true},{"LineNumber":11,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":true},{"LineNumber":12,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":true},{"LineNumber":14,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false}]}}