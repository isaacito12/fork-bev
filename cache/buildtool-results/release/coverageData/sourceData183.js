var sourceData183 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Test\\BEVProject_runtests.m","RawFileContents":["function BEVProject_runtests()","%% Runs unit tests","% This script runs tests for component-level and system-level tests.","% Note that tests for detailed model applications are not run","% to avoid long-running tests.","","% Copyright 2021-2024 The MathWorks, Inc.","","rel_str = matlabRelease().Release;","disp(\"This is MATLAB \" + rel_str + \".\")","","top_folder = currentProject().RootFolder;","","%% Create test suite","","suite = matlab.unittest.TestSuite.fromProject( currentProject );","","%% Create test runner","","runner = matlab.unittest.TestRunner.withTextOutput( ...","  OutputDetail = matlab.unittest.Verbosity.Detailed);","","%% JUnit style test result","","plugin = matlab.unittest.plugins.XMLPlugin.producingJUnitFormat( ...","  fullfile(top_folder, \"Test\", \"BEV_TestResults_\"+rel_str+\".xml\"));","","addPlugin(runner, plugin)","","%% MATLAB Code Coverage Report","","coverage_report_folder = fullfile(top_folder, \"coverage\" + rel_str);","","coverage_report_object = matlab.unittest.plugins.codecoverage.CoverageReport( ...","  coverage_report_folder, ...","  MainFile = \"Project_Coverage_\" + rel_str + \".html\" );","","plugin = matlab.unittest.plugins.CodeCoveragePlugin.forFile( ...","  [ ...","  fullfile(top_folder, \"Interface\", \"defineBus_HighVoltage.m\")","  fullfile(top_folder, \"Interface\", \"defineBus_Rotational.m\")","  ...","  fullfile(top_folder, \"Test\", \"CheckProject\", \"BEVProject_CheckProject.mlx\")","  ...","  fullfile(top_folder, \"Utility\", \"Checks\", \"checkCallbackButton.m\")","  ...","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalDesignUtility\", \"buildTrace.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalDesignUtility\", \"buildXYData.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalSourceBlockCallback\", \"plotContinuous.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalSourceBlockCallback\", \"plotContinuousMultiStep.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalSourceBlockCallback\", \"plotPieceWiseConstant.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalSourceBlockCallback\", \"plotTraceGenerator.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"+SignalSourceBlockCallback\", \"setDataToLookupTableBlock.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"SignalDesigner.m\")","  fullfile(top_folder, \"Utility\", \"SignalDesigner\", \"SignalDesigner_example.mlx\")","  ...","  fullfile(top_folder, \"Utility\", \"AboutBEVProject.mlx\")","  fullfile(top_folder, \"Utility\", \"adjustFigureHeightAndWindowYPosition.m\")","  fullfile(top_folder, \"Utility\", \"atProjectStartUp.m\")","  fullfile(top_folder, \"Utility\", \"generateHTML.m\")","  fullfile(top_folder, \"Utility\", \"getSimscapeValueFromBlockParameter.m\")","  fullfile(top_folder, \"Utility\", \"plotSimulationResultSignal.m\")","  fullfile(top_folder, \"Utility\", \"setMinimumYRange.m\")","  fullfile(top_folder, \"Utility\", \"verifyBlockCheckbox_custom.m\")","  fullfile(top_folder, \"Utility\", \"verifyBlockDropdown_custom.m\")","  fullfile(top_folder, \"Utility\", \"verifyBlockInitialPriority_custom.m\")","  fullfile(top_folder, \"Utility\", \"verifyBlockParameter_custom.m\")","  ], ...","  Producing = coverage_report_object );","","addPlugin(runner, plugin)","","%% Run tests","","results = run(runner, suite);","","assertSuccess(results)","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"75028c2d-243c-439b-a66e-b30b8d9784ce"},"Statement":[{"LineNumber":9,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8c33cf05-d078-436d-b24a-c1694c5c1513"},{"LineNumber":10,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cf770c6a-6b78-4796-b118-40b858d93780"},{"LineNumber":12,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"35820faa-667b-47b4-a1c0-68e548d4c6e9"},{"LineNumber":16,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4a5d884f-c4bd-4802-895f-b8f81a97cfa7"},{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"89c0f0d6-7849-4a2a-bf65-fb6272ce3eec"},{"LineNumber":21,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":53,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"89c0f0d6-7849-4a2a-bf65-fb6272ce3eec"},{"LineNumber":25,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8556eb64-5af5-432f-9ec2-ab83c1d90703"},{"LineNumber":26,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":67,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"8556eb64-5af5-432f-9ec2-ab83c1d90703"},{"LineNumber":28,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"08259baa-d5dd-4993-8b05-2d6b78fe43fd"},{"LineNumber":32,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":68,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"73e6b223-9d04-4e00-bb70-d1bd8f17a51a"},{"LineNumber":34,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":77,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"07839337-981b-490d-978d-8e5506bc5c28"},{"LineNumber":35,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"07839337-981b-490d-978d-8e5506bc5c28"},{"LineNumber":36,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":55,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"07839337-981b-490d-978d-8e5506bc5c28"},{"LineNumber":38,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":60,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":39,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":3,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":40,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":62,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":41,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":61,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":43,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":77,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":45,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":68,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":47,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":91,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":48,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":92,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":49,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":101,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":50,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":110,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":51,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":108,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":52,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":105,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":53,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":112,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":54,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":71,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":55,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":81,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":57,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":56,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":58,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":75,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":59,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":55,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":60,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":61,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":73,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":62,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":63,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":55,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":64,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":65,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":66,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":72,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":67,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":66,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":68,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":3,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":69,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"f516a26f-0e78-4b49-8a90-448a4ce369fc"},{"LineNumber":71,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e43f8f07-6b9d-4c36-ad91-608d44747ba7"},{"LineNumber":75,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d6e5b111-3779-4d80-80c9-a17d7b703eb9"},{"LineNumber":77,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f2918b86-d799-48c1-82c9-6e38cf434a7b"}]},"FilterData":[]}