var sourceData228 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\SignalDesigner\\+SignalSourceBlockCallback\\plotContinuousMultiStep.m","RawFileContents":["function [fig, sig] = plotContinuousMultiStep(fullpathToBlock)","%% Plots signal defined in Continuous Multi-Step block in a model","%","% This functions reads the block parameters of Continuous Multi-Step block","% and makes the plot of a signal trace.","% The model must be loaded for this function to work.","%","% This function returns the figure object and the Signal Designer object.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  fullpathToBlock {mustBeText} = gcb","end","","blockName = extractAfter(fullpathToBlock, asManyOfPattern(wildcardPattern + \"/\"));","","% Collect mask workspace variables.","% They have been evaluated.","% See the documentation for Simulink.VariableUsage.","maskVars = get_param(fullpathToBlock, \"MaskWSVariables\");","varNames = string({maskVars.Name});","varValues = {maskVars.Value};","dataPoints = varValues{varNames == \"dataPoints\"};","deltaT = varValues{varNames == \"deltaT\"};","","sig = SignalDesigner(\"ContinuousMultiStep\");","sig.XYData = dataPoints;","sig.DeltaX = deltaT;","","sig.XName = \"Time\";","sig.XUnit = \"s\";","sig.YName = \"\";","sig.Title = blockName;","","update(sig)","","fig = plotDataPoints(sig);","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"cb9d31ce-4b4d-4961-94d8-c87f8b639cf9"},"Statement":[{"LineNumber":13,"Hits":[1,0],"StartColumnNumbers":[19,33],"EndColumnNumbers":[29,36],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["0834c0b2-8767-421e-912a-5251b4a04b25","befe6c87-df2d-48e0-b453-81dbff1ad0b4"]},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b9e54633-5f20-42df-95ca-81de00d1cd0d"},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"018bd82b-0bea-4f7b-9ad5-577a3684f108"},{"LineNumber":22,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e447cb83-2e02-4f62-9e78-a8d7ac7221fc"},{"LineNumber":23,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f5fac697-b530-4fb6-912b-bb9cc67476e0"},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8bb515ff-3d9b-418c-9c1e-a2d93de86da1"},{"LineNumber":25,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5fe11394-354d-4548-b101-67b3a7b78693"},{"LineNumber":27,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"67570109-e4b2-4cfd-834a-64ed3daad45c"},{"LineNumber":28,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"053c80a1-160f-4fbc-9b83-4fb48f116041"},{"LineNumber":29,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fc20a421-cdd0-4b9d-bd4a-c741c6d7b458"},{"LineNumber":31,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8f23f305-1795-46d3-af63-e895745e4d44"},{"LineNumber":32,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1b1bccf6-3b1f-47dc-ae47-b8fc47d56c1b"},{"LineNumber":33,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":15,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"459f7c22-b4d1-43d4-8254-6dff1a9a8518"},{"LineNumber":34,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2b3cfa85-3eaf-4ca5-b68e-d5ca1c8d3ba0"},{"LineNumber":36,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a23aab79-06b5-4903-bd8f-515ea736b504"},{"LineNumber":38,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"743d83d2-081f-4477-9355-8b7ef31ef92e"}]},"FilterData":[]}