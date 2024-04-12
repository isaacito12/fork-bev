function MotorDriveUnit_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( [
  fullfile(currentProject().RootFolder, "Components", "MotorDriveUnit", "Notes-Efficiency")
  fullfile(currentProject().RootFolder, "Components", "MotorDriveUnit", "SimulationCases")
  ])

end  % function
