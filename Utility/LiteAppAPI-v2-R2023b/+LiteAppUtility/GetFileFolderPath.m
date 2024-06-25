function [Result, ErrorMessage] = GetFileFolderPath(FileFolderName, NameValuePairs)
%% Returns full path to the given name of file or folder.
% This function searches a file or a folder specified by FileFolderName in MATLAB paths.
% If a MATLAB project is loaded, the file or folder is searched in project paths too.
% If the file or folder is found, a full path to it is returned.
% If two or more matches are found, the first one is returned.
% If the file or folder is not found, an empty string is returned.
%
% isfile() and isfolder() take either a full path or a relative path where
% relative path must start from the current working folder.
% This function first searches the file or folder on MATLAB paths and project paths
% then passes the search result to isfile or isfolder.

% Copyright 2023 The MathWorks, Inc.

arguments (Input)
  FileFolderName {mustBeTextScalar} = ""
  NameValuePairs.Type {mustBeMember(NameValuePairs.Type, ["File" "Folder"])} = "File"
end

type = NameValuePairs.Type;

Result.TargetName = FileFolderName;
Result.Type = type;
Result.Fullpath = "";
Result.MultipleMatches = "";

if FileFolderName == ""
  if type == "File"
    ErrorMessage = "Filename was empty";
  else  % "Folder"
    ErrorMessage = "Folder name was empty";
  end  % if
  Result.Fullpath = "";
  return

else
  % Defaults for files
  discover_action = @which;

  if type == "Folder"
    discover_action = @LiteAppUtility.FindFolderPaths;
  end  % if

  % Discover full paths.
  found_paths = discover_action(FileFolderName);

  if numel(found_paths) == 0 || found_paths == ""
    ErrorMessage = type + " not found";
    Result.Fullpath = "";
    return

  elseif ischar(found_paths) || (isstring(found_paths) && isscalar(found_paths))
    % Only one file or folder was found.
    % Clean success.
    ErrorMessage  = "";
    Result.Fullpath = string(found_paths);
    return

  else
    % Success, but two or more matches were returned from isfile or isfolder.
    % Return the first one.
    ErrorMessage = "";
    Result.MultipleMatches = string(found_paths);
    Result.Fullpath = string(found_paths{1});
    return

  end  % if
end  % if

end  % function
