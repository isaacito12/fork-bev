var sourceData244 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\verifyBlockParameter_custom.m","RawFileContents":["function verifyBlockParameter_custom(testCase, blockPath, paramName, expectedVar, expectedUnit)","%%","","% Copyright 2022 The MathWorks, Inc.","","actual_entry = get_param(blockPath, paramName);","verifyEqual(testCase, actual_entry, expectedVar)","","actual_unit = get_param(blockPath, paramName+\"_unit\");","One_in_actual_unit = simscape.Value(1, actual_unit);","value_in_expected_unit = value(One_in_actual_unit, expectedUnit);","verifyEqual(testCase, value_in_expected_unit, 1)","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":95,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"fa713143-2e61-4e60-9c6a-1691ef67e8a2"},"Statement":[{"LineNumber":6,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6f5adee1-61e8-4d37-be05-f7d08d0979e2"},{"LineNumber":7,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8b1a854b-9c49-47d8-b5bb-b544c33e527b"},{"LineNumber":9,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9d09b178-8f25-4731-937b-1ae43b0a2549"},{"LineNumber":10,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0bb3d4d9-f5c2-4874-9dd2-6f35c77fd902"},{"LineNumber":11,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"43560434-5a8b-426f-9c76-8a68768dd52d"},{"LineNumber":12,"Hits":48,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"52844466-42ec-4ed0-b410-5d66f7c51f3b"}]},"FilterData":[]}