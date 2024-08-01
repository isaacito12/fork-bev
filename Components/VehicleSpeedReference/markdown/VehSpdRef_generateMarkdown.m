function VehSpdRef_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( ...
  LiveScriptFolderNames = [
  fullfile(currentProject().RootFolder, "Components", "VehicleSpeedReference")
  fullfile(currentProject().RootFolder, "Components", "VehicleSpeedReference", "SimulationCases")
  ], ...
  MarkdownFolderPath = ...
  fullfile(currentProject().RootFolder, "Components", "VehicleSpeedReference", "markdown"), ...
  ForceExport = false )

end  % function
