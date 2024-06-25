classdef Vehicle1DPerformanceDesignApp_uitest < matlab.uitest.TestCase

  % Overview of App Testing Framework
  % https://www.mathworks.com/help/matlab/matlab_prog/overview-of-app-testing-framework.html

  % Copyright 2024 The MathWorks, Inc.

  properties
    app Vehicle1DPerformanceDesignApp {mustBeScalarOrEmpty}
  end

  methods (Test)

    %% Minimum quality check (MQC)
    % Check that models, scripts, and functions run right out of the box.

    function MQC_Vehicle1DPerformanceDesignApp(testcase)
      testcase.app = Vehicle1DPerformanceDesignApp;
      pause(2)
    end

    %% UI test

    function uitest_Information(testcase)

      testcase.app = Vehicle1DPerformanceDesignApp;
      pause(2)

      % A browser window must open.
      press(testcase, testcase.app.InfoLinkUI.MainHyperlink)
      pause(2)

    end  % function

    function uitest_EditField_Mass(testcase)

      testcase.app = Vehicle1DPerformanceDesignApp;
      pause(2)

      % Plot must update when a new value is typed in.
      type(testcase, testcase.app.MassUI.MainEditField, "1000")
      pause(2)

    end  % function

    function uitest_Preset(testcase)

      testcase.app = Vehicle1DPerformanceDesignApp;
      pause(2)

      for idx = 1 : numel(testcase.app.PresetUI.MainListBox.Items)
        % Plot must update as a preset is selected.
        choose(testcase, testcase.app.PresetUI.MainListBox, idx)
        pause(1)
      end

    end  % function

    function uitest_OpenFigure(testcase)
      close all
      bdclose all

      testcase.app = Vehicle1DPerformanceDesignApp;
      pause(2)

      % A new figure window must open when the link is clicked.
      press(testcase, testcase.app.OpenFigureWindowUI.MainHyperlink)
      pause(2)

    end  % function

    function uitest_UpdateButton(testcase)

      testcase.app = Vehicle1DPerformanceDesignApp;
      pause(2)

      % Select the final item in the preset.
      choose(testcase, testcase.app.PresetUI.MainListBox, testcase.app.PresetUI.MainListBox.Items(end))
      pause(2)

      % Update a base workspace variable which is used in the app.
      str = "Vehicle.Mass = simscape.Value(1000, ""kg"");";
      evalin("base", str);
      disp("Evaluate in base workspace:" + newline + str)
      pause(2)

      % Use a base workspace variable.
      type(testcase, testcase.app.MassUI.MainEditField, "Vehicle.Mass")

      % Click the Update button.
      % This must update the plot.
      press(testcase, testcase.app.UpdateButtonUI.MainButton)
      pause(2)

      evalin("base", "clear Vehicle");

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
        % Close app window
        delete(testcase.app.Window)

        close all
        bdclose all
      end

    end  % function
  end  % methods
end  % classdef
