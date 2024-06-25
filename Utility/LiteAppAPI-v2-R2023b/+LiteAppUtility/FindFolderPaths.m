function foundPaths = FindFolderPaths(folderName)

% This is used in GetFileFolderPath.

% Copyright 2023 The MathWorks, Inc.

arguments
  folderName (1,1) string
end  % arguments

if startsWith(folderName, "+")
  % Use what.
  target_name = extractAfter(folderName, 1);
  result = what(target_name);
  foundPaths = string({result(:).path}');

else
  % Use path.
  all_paths = string(path);
  all_paths = split(all_paths, ";");
  logical_index = endsWith(all_paths, folderName);
  if all(logical_index == 0)
    % If the specified folder was not found, return an empty string, rather than 0-by-1 string.
    foundPaths = "";
  else
    foundPaths = all_paths(logical_index);
  end

end  % if

end  % function
