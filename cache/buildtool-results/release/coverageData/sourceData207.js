var sourceData207 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppUtility\\mustBeFunctionHandleOrEmpty.m","RawFileContents":["function mustBeFunctionHandleOrEmpty(x)\r","\r","% Copyright 2024 The MathWorks, Inc.\r","\r","if not(isa(x, 'function_handle')) && not(isempty(x))\r","  error_id = \"Type:notCorrectType\";\r","  error_message = \"Input must be a function handle or empty.\";\r","  throwAsCaller(MException(error_id, error_message))\r","end  % if\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":149,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"b0dbf95d-6b22-417f-be37-4be594d25c10"},"Statement":[{"LineNumber":5,"Hits":149,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a377ba3c-8957-496a-85ad-dbb5979204d8"},{"LineNumber":6,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"82b7fd6f-a0df-4e53-92e3-4825c9aad53a"},{"LineNumber":7,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7103b97b-8c62-4c98-9058-285c2752ff44"},{"LineNumber":8,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":52,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"da3eb893-4a24-46fa-8dc5-8ad4a5a6a23d"}]},"FilterData":[]}