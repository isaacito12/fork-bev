classdef Vehicle1D_UnitTest < matlab.unittest.TestCase
  % Class implementation of unit test
  %
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

  % Copyright 2021-2024 The MathWorks, Inc.

  properties (Constant)
    modelName = "Vehicle1D_harness_model";
  end

  methods (Test)
    % Functions in this "Test" section are the tests.
    % Before a function in this section runs, the TestSetup function
    % defined in the "TestMethodSetup" section runs.

    function blockParameters_Vehicle1D_Driveline(testcase)
      %% Check that block parameters are properly set up
      % Default referenced subsystem

      mdl = "Vehicle1D_refsub_Basic";
      load_system(mdl)

      function verifyParameter(test_case, block_path, parameter_name, expected_variable, expected_unit)
        actual_entry = string(get_param(block_path, parameter_name));
        verifyEqual(test_case, actual_entry, expected_variable)

        actual_unit = string(get_param(block_path, parameter_name+"_unit"));
        One_in_actual_unit = simscape.Value(1, actual_unit);
        value_in_expected_unit = value(One_in_actual_unit, expected_unit);
        verifyEqual(test_case, value_in_expected_unit, 1)
      end

      blkpath = mdl + "/Longitudinal Vehicle";

      actual = string(get_param(blkpath, "vehParamType"));
      verifyEqual(testcase, actual, "sdl.enum.VehicleParameterizationType.Regular")

      verifyParameter(testcase, blkpath, "M_vehicle", "vehicle.mass_kg", "kg")
      verifyParameter(testcase, blkpath, "R_tireroll", "vehicle.tireRollingRadius_m", "m")
      verifyParameter(testcase, blkpath, "C_tireroll", "vehicle.tireRollingCoeff", "1")
      verifyParameter(testcase, blkpath, "C_airdrag", "vehicle.airDragCoeff", "1")
      verifyParameter(testcase, blkpath, "A_front", "vehicle.frontalArea_m2", "m^2")
      verifyParameter(testcase, blkpath, "g", "vehicle.gravAccel_m_per_s2", "m/s^2")
      verifyParameter(testcase, blkpath, "V_1", "smoothing.vehicle_speedThreshold_kph", "km/hr")
      verifyParameter(testcase, blkpath, "w_1", "smoothing.vehicle_axleSpeedThreshold_rpm", "rpm")
      verifyParameter(testcase, blkpath, "V_x", "initial.vehicle_speed_kph", "km/hr")

    end  % function

    function markdown(testcase)
      %%
      % Check that all Live Scripts in SimulationCases folder are exported to Markdown files.
      expected = 0;
      actual = Vehicle1D_generateMarkdown(DisplayInfo=false);
      verifyEqual(testcase, actual, expected, string(actual) + " live scripts are not exported to Markdown files.")
    end  % function

  end  % methods

  methods (TestMethodSetup)
    % Functions in this "TestMethodSetup" section always run before
    % each test defined in the "Test" section runs.

    function TestSetup(testcase)
      %%
      close all
      bdclose all

      % addTeardown adds a function which always runs after each test.
      % Even if the execution of a test ends with an error, the teardown function runs.
      % This is useful, for example, to close a model or a figure after test failure.
      addTeardown(testcase, @close_all)

      function close_all
        close all
        bdclose all
      end  % function
    end  % function

  end  % methods

end  % classdef
