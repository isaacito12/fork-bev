var sourceData235 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\verifyBlockParameter_custom.m","RawFileContents":["function verifyBlockParameter_custom(testCase, blockPath, paramName, expectedVar, expectedUnit)","%%","","% Copyright 2022 The MathWorks, Inc.","","actual_entry = get_param(blockPath, paramName);","verifyEqual(testCase, actual_entry, expectedVar)","","actual_unit = get_param(blockPath, paramName+\"_unit\");","One_in_actual_unit = simscape.Value(1, actual_unit);","value_in_expected_unit = value(One_in_actual_unit, expectedUnit);","verifyEqual(testCase, value_in_expected_unit, 1)","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":95,"ContinuedLine":false},"Statement":[{"LineNumber":6,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":7,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":9,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":10,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":11,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":65,"ContinuedLine":false},{"LineNumber":12,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false}]}}