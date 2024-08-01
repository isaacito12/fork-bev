classdef VehSpdRef_plotResults_test < BEVTestCase


  % You can run this test class file by opening in MATLAB Editor and
  % clicking the Run Tests button or the Run Current Test button.

  % Copyright 2021-2024 The MathWorks, Inc.

  methods (Test)

    function MQC_Utility_1(~)
      mdl = "VehSpdRef_harness_model";
      load_system(mdl)
      VehSpdRef_loadCase
      simOut = sim(mdl);
      simData = extractTimetable(simOut.logsout);
      % Test target:
      VehSpdRef_plotResults(simData=simData)
    end  % function

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
