function CtrlEnv_Vehicle_generateMarkdown
%% Generates Markdown files from Live Scripts

% Copyright 2024 The MathWorks, Inc.

generateMarkdown_fromLiveScript( [
  fullfile(currentProject().RootFolder, "Components", "ControllerAndEnvironment", ...
    "Harness", "Components", "Vehicle", "SimulationCases")
  ])

end  % function
