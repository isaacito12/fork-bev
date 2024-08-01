var sourceData157 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\Vehicle1D\\Utility\\Vehicle1D_plotResults.m","RawFileContents":["function fig = Vehicle1D_plotResults(nvpairs)","% plots the simulation result.","","% Copyright 2022-2023 The MathWorks, Inc.","","arguments","  nvpairs.SimData timetable","  nvpairs.FigureHeight (1,1) {mustBePositive} = 300","end","","sigNames = [ ...","  \"Axle torque input\", ...","  \"Brake force\", ...","  \"Road inclination\", ...","  \"Road grade\", ...","  \"G force\", ...","  \"Vehicle speed kph\", ...","  \"Vehicle speed mph\", ...","  \"Axle speed\" ];","","for i = 1 : numel(sigNames)","  fig = plotSimulationResultSignal(SimData = nvpairs.SimData, SignalName = sigNames(i));","  fig.Position(4) = nvpairs.FigureHeight;","end","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":5,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":[5,4],"StartColumnNumbers":[30,48],"EndColumnNumbers":[44,51],"ContinuedLine":false},{"LineNumber":11,"Hits":5,"StartColumnNumbers":0,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":12,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":13,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":15,"ContinuedLine":true},{"LineNumber":14,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":true},{"LineNumber":15,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":14,"ContinuedLine":true},{"LineNumber":16,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":11,"ContinuedLine":true},{"LineNumber":17,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":18,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":19,"Hits":5,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":true},{"LineNumber":21,"Hits":5,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":22,"Hits":40,"StartColumnNumbers":2,"EndColumnNumbers":88,"ContinuedLine":false},{"LineNumber":23,"Hits":40,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":false}]}}