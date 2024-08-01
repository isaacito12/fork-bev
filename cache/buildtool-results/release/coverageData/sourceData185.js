var sourceData185 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Test\\BEVProject_UnitTest_MQC.m","RawFileContents":["classdef BEVProject_UnitTest_MQC < BEVTestCase","%% Class implementation of unit test","","% Copyright 2023 The MathWorks, Inc.","","methods (Test)","","%% Utility > SignalDesigner folder","","function MQC_SignalDesigner_1(~)","  SignalDesignUtility.buildTrace","end","","function MQC_SignalDesigner_2(~)","  SignalDesignUtility.buildXYData","end","","function MQC_SignalDesigner_3(~)","  mdl = \"SignalSourceBlocks_example\";","  load_system(mdl)","  SignalSourceBlockCallback.plotContinuous(mdl + \"/Continuous\")","  SignalSourceBlockCallback.plotContinuousMultiStep(mdl + \"/Continuous Multi-Step\")","  SignalSourceBlockCallback.plotPieceWiseConstant(mdl + \"/Piece-Wise Constant\")","  SignalSourceBlockCallback.plotTraceGenerator(mdl + \"/Trace Generator\")","end","","","function MQC_SignalDesigner_4(~)","  SignalDesigner","end","","function MQC_SignalDesigner_5(~)","  SignalDesigner_example","end","","%% Utility folder","","function MQC_Utility_1(~)","  AboutBEVProject","end","","function MQC_Utility_2(~)","  atProjectStartUp","end","","","% This passes locally but fails in CI.","function MQC_Utility_3(~)","  generateHTML","end","","","function MQC_Utility_4(~)","  fig = figure;","  fig.Position(4) = 800;  % height","  plot(1:10, 10:-1:1)","  % Test target:","  fig.Position = adjustFigureHeightAndWindowYPosition(fig);","end","","end  % methods (Test)","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":10,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":18,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":28,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":32,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":38,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":42,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":48,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":53,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false}],"Statement":[{"LineNumber":11,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":15,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":19,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":20,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":63,"ContinuedLine":false},{"LineNumber":22,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":83,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":39,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":43,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":49,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":54,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":15,"ContinuedLine":false},{"LineNumber":55,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":56,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":58,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":59,"ContinuedLine":false}]}}