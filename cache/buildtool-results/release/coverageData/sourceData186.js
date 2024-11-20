var sourceData186 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Test\\CheckProject\\BEVProject_CheckProject_runtests.m","RawFileContents":["%% Run unit tests","% This script runs unit tests and generates a test result summary in XML","% and a MATLAB code coverage report in HTML.","","% Copyright 2022 The MathWorks, Inc.","","RelStr = matlabRelease().Release;","disp(\"This is MATLAB \" + RelStr + \".\")","","TopFolder = currentProject().RootFolder;","","%% Create test suite","","suite = matlab.unittest.TestSuite.fromFile( ...","  fullfile(TopFolder, \"Test\", \"CheckProject\", \"BEVProject_CheckProject_UnitTest.m\"));","","%% Create test runner","","runner = matlab.unittest.TestRunner.withTextOutput( ...","  OutputDetail = matlab.unittest.Verbosity.Detailed );","","%% JUnit Style Test Result","","plugin = matlab.unittest.plugins.XMLPlugin.producingJUnitFormat( ...","  fullfile(TopFolder, \"Test\", \"CheckProject\", \"BEVProject_CheckProject_TestResults_\"+RelStr+\".xml\"));","","addPlugin(runner, plugin)","","%% Run tests","","results = run(runner, suite);","","assertSuccess(results)",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":7,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e55a1062-37b8-48a2-8cab-4eba4b9a9d8f"},{"LineNumber":8,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3f06f424-7de1-4472-ab54-6b3f9fea491b"},{"LineNumber":10,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"eecdab7f-2ffd-44bf-aee4-490166d69d87"},{"LineNumber":14,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1945652a-081c-4b78-8460-035599647243"},{"LineNumber":15,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":85,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1945652a-081c-4b78-8460-035599647243"},{"LineNumber":19,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d2764018-d955-4126-a7d5-89870d3fcf84"},{"LineNumber":20,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":54,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"d2764018-d955-4126-a7d5-89870d3fcf84"},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"650e650b-d8c4-41e3-a70c-ea4187de78ce"},{"LineNumber":25,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":101,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"650e650b-d8c4-41e3-a70c-ea4187de78ce"},{"LineNumber":27,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0b745046-74c9-46c6-945f-d40f4366fbcf"},{"LineNumber":31,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1f2d976f-0e74-41cd-bd0e-c06d343360d0"},{"LineNumber":33,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0b4f274c-1f20-4e3d-acfe-57eca7966c1e"}]},"FilterData":[]}