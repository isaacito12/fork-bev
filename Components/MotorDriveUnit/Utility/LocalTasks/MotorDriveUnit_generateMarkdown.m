function MotorDriveUnit_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( ...
  LiveScriptFolderNames = [
  fullfile(currentProject().RootFolder, "Components", "MotorDriveUnit")
  fullfile(currentProject().RootFolder, "Components", "MotorDriveUnit", "Notes-Efficiency")
  fullfile(currentProject().RootFolder, "Components", "MotorDriveUnit", "SimulationCases")
  ], ...
  MarkdownFolderPath = ...
  fullfile(currentProject().RootFolder, "Components", "MotorDriveUnit", "markdown"), ...
  ForceExport = false )

end  % function
