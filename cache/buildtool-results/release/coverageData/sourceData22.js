var sourceData22 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BEVController\\SimulationCases\\BEVController_Case_test.m","RawFileContents":["classdef BEVController_Case_test < matlab.unittest.TestCase\r","\r","  % This is class-based unit test implementation.\r","  % To navigate test results and see code coverage, use Test Browser (testBrowser).\r","  %\r","  % Documentation\r","  %\r","  % - Author Class-Based Unit Tests in MATLAB\r","  %   https://www.mathworks.com/help/matlab/matlab_prog/author-class-based-unit-tests-in-matlab.html\r","  %\r","  % - matlab.unittest.TestCase Class\r","  %   https://www.mathworks.com/help/matlab/ref/matlab.unittest.testcase-class.html\r","  %\r","  % - Test Browser\r","  %   https://www.mathworks.com/help/matlab/ref/testbrowser-app.html\r","\r","  % Copyright 2024 The MathWorks, Inc.\r","\r","  methods (Test)\r","    % Functions in this \"Test\" section are the tests.\r","    % Before a function in this section runs, the TestSetup function\r","    % defined in the \"TestMethodSetup\" section runs.\r","\r","    %% Minimum quality check\r","    % Check that models, scripts, functions, and classes run right out of the box.\r","\r","    function MQC_Charge_1(~)\r","      BEVController_Case\r","    end\r","\r","  end  % methods\r","\r","  methods(TestMethodSetup)\r","    % Functions in this \"TestMethodSetup\" section always run before\r","    % each test defined in the \"Test\" section runs.\r","\r","    function TestSetup(testcase)\r","      %%\r","      close all\r","      bdclose all\r","\r","      % addTeardown adds a function which always runs after each test.\r","      % Even if the execution of a test ends with an error, the teardown function runs.\r","      % This is useful, for example, to close figure windows\r","      % after a test which opens figure windows fails.\r","      addTeardown(testcase, @close_all)\r","\r","      function close_all\r","        close all\r","        bdclose all\r","      end  % function\r","    end  % function\r","\r","  end  % methods\r","end  % classdef\r",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":27,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"c0730c7b-79a7-4f97-8399-706a492aa346"},{"LineNumber":37,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"803017af-24cd-435d-bca1-04012d89bc5e"},{"LineNumber":48,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"22140199-4572-46d2-ba38-d3a1b0e61589"}],"Statement":[{"LineNumber":28,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e76e5917-ddb2-4045-a9b2-ca76c52e0d29"},{"LineNumber":39,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":17,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7189345e-e3a7-49dd-9643-21bbae69742f"},{"LineNumber":40,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"79da84c6-f56a-4636-a51a-5e0b4142820f"},{"LineNumber":46,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"388e9e4c-ed3f-46db-bb90-9c0fe3fbe0d3"},{"LineNumber":49,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7fe079df-0694-4b88-9256-31d551be45fc"},{"LineNumber":50,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b2357ee5-e61e-4146-bbf0-4e897778063c"}]},"FilterData":[]}