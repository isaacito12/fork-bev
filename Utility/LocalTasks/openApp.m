function openApp(target_app)
% This function opens an app with visual feedback.
%
% This function is just a wrapper for the run command which can run
% any MATLAB code files or open models, but this function is meant
% for opening an app showing a message that the app is loading.

% Copyright 2024 The MathWorks, inc.

arguments (Input)
  target_app (1,1) string = "BEVProjectNavigator"
end

% Provide visual feedback.
disp("Opening app: " + target_app)

run(target_app)

end  % function
