var sourceData231 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\SignalDesigner\\+SignalSourceBlockCallback\\plotPieceWiseConstant.m","RawFileContents":["function [fig, sig] = plotPieceWiseConstant(fullpathToBlock)","%% Plots signal defined in Piece-Wise Constant block in a model","%","% This function reads the block parameters of Piece-Wise Constant block","% and makes the plot of a signal trace.","% The model must be loaded for this function to work.","%","% This function returns the figure object and the Signal Designer object.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  fullpathToBlock {mustBeText} = gcb","end","","blockName = extractAfter(fullpathToBlock, asManyOfPattern(wildcardPattern + \"/\"));","","% Collect mask workspace variables.","% They have been evaluated.","% See the documentation for Simulink.VariableUsage.","maskVars = get_param(fullpathToBlock, \"MaskWSVariables\");","varNames = string({maskVars.Name});","varValues = {maskVars.Value};","dataPoints = varValues{varNames == \"dataPoints\"};","","sig = SignalDesigner(\"PieceWiseConstant\");","sig.XYData = dataPoints;","","sig.XName = \"Time\";","sig.XUnit = \"s\";","sig.YName = \"\";","sig.Title = blockName;","","update(sig)","","fig = plotDataPoints(sig);","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":60,"ContinuedLine":false},"Statement":[{"LineNumber":13,"Hits":[1,0],"StartColumnNumbers":[19,33],"EndColumnNumbers":[29,36],"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":22,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":27,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":30,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":31,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":15,"ContinuedLine":false},{"LineNumber":32,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":34,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":36,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false}]}}