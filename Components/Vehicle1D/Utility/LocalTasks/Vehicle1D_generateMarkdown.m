function Vehicle1D_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( ...
  LiveScriptFolderNames = [
  fullfile(currentProject().RootFolder, "Components", "Vehicle1D")
  fullfile(currentProject().RootFolder, "Components", "Vehicle1D", "SimulationCases")
  ], ...
  MarkdownFolderPath = ...
  fullfile(currentProject().RootFolder, "Components", "Vehicle1D", "markdown"), ...
  ForceExport = false )

end  % function
