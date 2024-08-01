var sourceData207 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppUtility\\FindFolderPaths.m","RawFileContents":["function foundPaths = FindFolderPaths(folderName)\r","\r","% This is used in GetFileFolderPath.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","arguments\r","  folderName (1,1) string\r","end  % arguments\r","\r","if startsWith(folderName, \"+\")\r","  % Use what.\r","  target_name = extractAfter(folderName, 1);\r","  result = what(target_name);\r","  foundPaths = string({result(:).path}');\r","\r","else\r","  % Use path.\r","  all_paths = string(path);\r","  all_paths = split(all_paths, \";\");\r","  logical_index = endsWith(all_paths, folderName);\r","  if all(logical_index == 0)\r","    % If the specified folder was not found, return an empty string, rather than 0-by-1 string.\r","    foundPaths = \"\";\r","  else\r","    foundPaths = all_paths(logical_index);\r","  end\r","\r","end  % if\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},"Statement":[{"LineNumber":11,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":13,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":14,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":15,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":19,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":20,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":21,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":24,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":26,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":false}]}}