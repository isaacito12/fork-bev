var sourceData208 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppUtility\\GetFileFolderPath.m","RawFileContents":["function [Result, ErrorMessage] = GetFileFolderPath(FileFolderName, NameValuePairs)\r","%% Returns full path to the given name of file or folder.\r","% This function searches a file or a folder specified by FileFolderName in MATLAB paths.\r","% If a MATLAB project is loaded, the file or folder is searched in project paths too.\r","% If the file or folder is found, a full path to it is returned.\r","% If two or more matches are found, the first one is returned.\r","% If the file or folder is not found, an empty string is returned.\r","%\r","% isfile() and isfolder() take either a full path or a relative path where\r","% relative path must start from the current working folder.\r","% This function first searches the file or folder on MATLAB paths and project paths\r","% then passes the search result to isfile or isfolder.\r","\r","% Copyright 2023 The MathWorks, Inc.\r","\r","arguments (Input)\r","  FileFolderName {mustBeTextScalar} = \"\"\r","  NameValuePairs.Type {mustBeMember(NameValuePairs.Type, [\"File\" \"Folder\"])} = \"File\"\r","end\r","\r","type = NameValuePairs.Type;\r","\r","Result.TargetName = FileFolderName;\r","Result.Type = type;\r","Result.Fullpath = \"\";\r","Result.MultipleMatches = \"\";\r","\r","if FileFolderName == \"\"\r","  if type == \"File\"\r","    ErrorMessage = \"Filename was empty\";\r","  else  % \"Folder\"\r","    ErrorMessage = \"Folder name was empty\";\r","  end  % if\r","  Result.Fullpath = \"\";\r","  return\r","\r","else\r","  % Defaults for files\r","  discover_action = @which;\r","\r","  if type == \"Folder\"\r","    discover_action = @LiteAppUtility.FindFolderPaths;\r","  end  % if\r","\r","  % Discover full paths.\r","  found_paths = discover_action(FileFolderName);\r","\r","  if numel(found_paths) == 0 || found_paths == \"\"\r","    ErrorMessage = type + \" not found\";\r","    Result.Fullpath = \"\";\r","    return\r","\r","  elseif ischar(found_paths) || (isstring(found_paths) && isscalar(found_paths))\r","    % Only one file or folder was found.\r","    % Clean success.\r","    ErrorMessage  = \"\";\r","    Result.Fullpath = string(found_paths);\r","    return\r","\r","  else\r","    % Success, but two or more matches were returned from isfile or isfolder.\r","    % Return the first one.\r","    ErrorMessage = \"\";\r","    Result.MultipleMatches = string(found_paths);\r","    Result.Fullpath = string(found_paths{1});\r","    return\r","\r","  end  % if\r","end  % if\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":83,"ContinuedLine":false},"Statement":[{"LineNumber":17,"Hits":[7,0],"StartColumnNumbers":[18,38],"EndColumnNumbers":[34,40],"ContinuedLine":false},{"LineNumber":18,"Hits":[7,7],"StartColumnNumbers":[23,79],"EndColumnNumbers":[75,85],"ContinuedLine":false},{"LineNumber":21,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":23,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":24,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":25,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":26,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":28,"Hits":7,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":29,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":34,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":35,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":39,"Hits":7,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":41,"Hits":7,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":42,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":46,"Hits":7,"StartColumnNumbers":2,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":48,"Hits":7,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":49,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":50,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":51,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":53,"Hits":7,"StartColumnNumbers":2,"EndColumnNumbers":80,"ContinuedLine":false},{"LineNumber":56,"Hits":7,"StartColumnNumbers":4,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":57,"Hits":7,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":58,"Hits":7,"StartColumnNumbers":4,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":63,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":64,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":65,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":66,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":12,"ContinuedLine":false}]}}