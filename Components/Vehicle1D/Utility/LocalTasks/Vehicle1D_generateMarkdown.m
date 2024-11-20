function NumConversions = Vehicle1D_generateMarkdown(NameValuePairs)
% This function generates Markdown files from Live Scripts.
%
% This function returns the number of files exported.
% The function returns 0 if no file was exported.
%
% By default, the function shows messages about exporting process.
% To turn off messages, set DisplayInfo option to false.

% Copyright 2024 The MathWorks, Inc.

arguments (Input)
  NameValuePairs.DisplayInfo (1,1) logical = true
end

NumConversions = generateMarkdown_fromLiveScript( ...
  LiveScriptFolderNames = fullfile(currentProject().RootFolder, "Components", "Vehicle1D", "SimulationCases"), ...
  MarkdownFolderPath = fullfile(currentProject().RootFolder, "Components", "Vehicle1D", "markdown"), ...
  ForceExport = false, ...
  DisplayInfo = NameValuePairs.DisplayInfo );

end  % function
