function BEVController_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( ...
  LiveScriptFolderNames = [
  fullfile(currentProject().RootFolder, "Components", "BEVController")
  fullfile(currentProject().RootFolder, "Components", "BEVController", "SimulationCases")
  ], ...
  MarkdownFolderPath = ...
  fullfile(currentProject().RootFolder, "Components", "BEVController", "markdown"), ...
  ForceExport = false )

end  % function
