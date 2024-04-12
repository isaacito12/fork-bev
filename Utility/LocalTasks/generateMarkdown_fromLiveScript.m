function generateMarkdown_fromLiveScript(LiveScriptFolderNames)
%% Generates Markdown files from Live Scripts

% This function converts Live Scripts in the specified folders to Markdown files.
% Live Scripts must be registered in MTALB project.
% Those that are not registered in MATLAB project are not converted.
%
% Markdown files are saved in the "Markdown" folder under the specified folder.

% Copyright 2024 The MathWorks, Inc.

arguments (Input)
  LiveScriptFolderNames (:,1) string {mustBeFolder} = "."
end

project_files = currentProject().Files';
project_file_paths = [project_files.Path]';

numFolders = numel(LiveScriptFolderNames);

for idx = 1 : numFolders
  live_script_folder_path = LiveScriptFolderNames(idx);

  logical_index = startsWith(project_file_paths, live_script_folder_path);
  files_in_live_script_folder = project_file_paths(logical_index);

  logical_index = endsWith(files_in_live_script_folder, ".mlx");
  mlxfiles = files_in_live_script_folder(logical_index);

  numFiles = numel(mlxfiles);
  if numFiles == 0
    disp("No project-registered Live Script was found in " + live_script_folder_path)
    continue
  end

  markdown_folder_path = fullfile(live_script_folder_path, "Markdowns");

  % action(markdown_folder_path, mlxfiles)
  LiveScript_Utility.CheckAndGenerateMarkdowns( ...
    mlxfiles, ...
    MarkdownFolderPath = markdown_folder_path, ...
    MediaFolderName = "Media" )

end  % for

end  % function
