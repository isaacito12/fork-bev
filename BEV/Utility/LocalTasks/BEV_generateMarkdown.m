function BEV_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( ...
  LiveScriptFolderNames = [
  fullfile(currentProject().RootFolder, "BEV")
  fullfile(currentProject().RootFolder, "BEV", "SimulationCases")
  ], ...
  MarkdownFolderPath = ...
  fullfile(currentProject().RootFolder, "BEV", "markdown"), ...
  ForceExport = true )

end  % function
