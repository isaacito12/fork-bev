function BatteryHV_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( [
  fullfile(currentProject().RootFolder, "Components", "BatteryHighVoltage", "Model-TableBased")
  fullfile(currentProject().RootFolder, "Components", "BatteryHighVoltage", "SimulationCases")
  ])

end  % function
