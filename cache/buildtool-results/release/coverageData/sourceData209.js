var sourceData209 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppUtility\\mustBeTextOrPositiveInteger.m","RawFileContents":["function mustBeTextOrPositiveInteger(x)\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","is_pos_int = @(v) isnumeric(v) && isscalar(v) && round(v) == v && v > 0;\r","\r","is_a_string = @(v) isstring(v) && all(size(v) == [1 1]);\r","\r","is_a_char_array = @(v) ischar(v) && height(v) == 1;\r","\r","if not(is_pos_int(x) || is_a_string(x) || is_a_char_array(x))\r","  error_id = \"Type:notCorrectType\";\r","  error_message = \"Input must be either a positive integer, a string, or a char array.\";\r","  throwAsCaller(MException(error_id, error_message))\r","end  % if\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"13ef7015-876b-4f30-b24e-dd6819f855bd"},"Statement":[{"LineNumber":5,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5fee9c45-d128-438c-b731-775ba30be2fb"},{"LineNumber":7,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ebd155a7-c46c-4a24-bce3-ce41b8a83491"},{"LineNumber":9,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"49f28ec9-e171-450d-a38f-2807d9f710eb"},{"LineNumber":11,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"24cd12f5-686d-434c-a2be-7602d241f7aa"},{"LineNumber":12,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"819a6a1e-1067-4e80-a1dc-6925546e59c9"},{"LineNumber":13,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":88,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2384f1ae-8461-41e1-86f1-33feaf260879"},{"LineNumber":14,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5b83b806-0d58-4498-bdf5-5e4836217a12"}]},"FilterData":[]}