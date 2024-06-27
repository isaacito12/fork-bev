classdef Vehicle1D_Case_test < matlab.unittest.TestCase

  % This is class-based unit test implementation.
  % To navigate test results and see code coverage, use Test Browser (testBrowser).
  %
  % Documentation
  %
  % - Author Class-Based Unit Tests in MATLAB
  %   https://www.mathworks.com/help/matlab/matlab_prog/author-class-based-unit-tests-in-matlab.html
  %
  % - matlab.unittest.TestCase Class
  %   https://www.mathworks.com/help/matlab/ref/matlab.unittest.testcase-class.html
  %
  % - Test Browser
  %   https://www.mathworks.com/help/matlab/ref/testbrowser-app.html

  % Copyright 2024 The MathWorks, Inc.

  methods (Test)
    % Functions in this "Test" section are the tests.
    % Before a function in this section runs, the TestSetup function
    % defined in the "TestMethodSetup" section runs.

    %% Minimum quality check
    % Check that models, scripts, functions, and classes run right out of the box.

    function MQC_Accelerate_1(~)
      Vehicle1D_Case_Accelerate
    end

    function MQC_Braking_1(~)
      Vehicle1D_Case_Braking
    end

    function MQC_Coastdown_1(~)
      Vehicle1D_Case_Coastdown
    end

    function MQC_Constant_1(~)
      Vehicle1D_Case_Constant
    end

  end  % methods

  methods(TestMethodSetup)
    % Functions in this "TestMethodSetup" section always run before
    % each test defined in the "Test" section runs.

    function TestSetup(testcase)
      %%
      close all
      bdclose all

      % addTeardown adds a function which always runs after each test.
      % Even if the execution of a test ends with an error, the teardown function runs.
      % This is useful, for example, to close figure windows
      % after a test which opens figure windows fails.
      addTeardown(testcase, @close_all)

      function close_all
        close all
        bdclose all
      end  % function
    end  % function

  end  % methods
end  % classdef
