function atProjectStartUp
%% Runs at project start up
% This is automatically run when the MATLAB Project is opened.
% To change the automatic execution setting, select the Project window,
% and in the PROJECT toolstrip, click Startup Shutdown.
%
% Copyright 2020-2024 The MathWorks, Inc.

if not(contains(matlabRelease().Release, "R2024a"))
  disp("This project was developed in R2024a.")
  relstr = matlabRelease().Release;
  disp("This MATLAB Release is " + relstr(2:end-1) + ".")
end

end  % function
