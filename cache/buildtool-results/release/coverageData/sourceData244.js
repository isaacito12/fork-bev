var sourceData244 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\verifyBlockDropdown_custom.m","RawFileContents":["function verifyBlockDropdown_custom(testCase, blockPath, paramName, expectedSelection)","%%","","% Copyright 2022 The MathWorks, Inc.","","arguments","  testCase","  blockPath {mustBeTextScalar}","  paramName {mustBeTextScalar}","  expectedSelection {mustBeTextScalar}","end","","actual_priority = get_param(blockPath, paramName);","verifyEqual(testCase, actual_priority, expectedSelection)","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":86,"ContinuedLine":false},"Statement":[{"LineNumber":8,"Hits":9,"StartColumnNumbers":13,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":9,"Hits":9,"StartColumnNumbers":13,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":10,"Hits":9,"StartColumnNumbers":21,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":13,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":14,"Hits":9,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false}]}}