function VehSpdRef_loadCase_FTP75(NameValuePair)
%% Sets up simulation
% Model must be loaded for this function to work.

% Copyright 2023-2024 The MathWorks, Inc.

arguments
  NameValuePair.ModelName {mustBeTextScalar} = "VehSpdRef_harness_model"
  NameValuePair.TargetSubsystemPath {mustBeTextScalar} = "/Vehicle speed reference"
  NameValuePair.DisplayMessage (1,1) logical = true
end

VehSpdRef_loadCase( ...
  CaseName = "FTP-75 using Drive Cycle Source block", ...
  CaseNumber = 3, ...
  StopTime = 2474, ...
  ...
  ModelName = NameValuePair.ModelName, ...
  TargetSubsystemPath = NameValuePair.TargetSubsystemPath, ...
  DisplayMessage = NameValuePair.DisplayMessage )

end  % function
