var sourceData212 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppUtility\\mustBeTextOrPositiveInteger.m","RawFileContents":["function mustBeTextOrPositiveInteger(x)\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","is_pos_int = @(v) isnumeric(v) && isscalar(v) && round(v) == v && v > 0;\r","\r","is_a_string = @(v) isstring(v) && all(size(v) == [1 1]);\r","\r","is_a_char_array = @(v) ischar(v) && height(v) == 1;\r","\r","if not(is_pos_int(x) || is_a_string(x) || is_a_char_array(x))\r","  error_id = \"Type:notCorrectType\";\r","  error_message = \"Input must be either a positive integer, a string, or a char array.\";\r","  throwAsCaller(MException(error_id, error_message))\r","end  % if\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},"Statement":[{"LineNumber":5,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":7,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false},{"LineNumber":9,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":11,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":12,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":13,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":88,"ContinuedLine":false},{"LineNumber":14,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":false}]}}