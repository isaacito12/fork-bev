var sourceData71 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\ControllerAndEnvironment\\Harness\\Components\\Vehicle\\Test\\CtrlEnv_Vehicle_UnitTest_MQC.m","RawFileContents":["classdef CtrlEnv_Vehicle_UnitTest_MQC < BEVTestCase","% Class implementation of unit test","%","% These are tests to achieve the Minimum Quality Criteria (MQC).","% MQC is achieved when all runnables (models, scripts, functions) run","% without any errors.","%","% You can run this test by opening in MATLAB Editor and clicking","% Run Tests button or Run Current Test button.","% You can also run this test using test runner (the *_runtests.m script)","% which can not only run tests but also generates test summary and","% a code coverage report.","","% Copyright 2023 The MathWorks, Inc.","","methods (Test)","","%% Component top folder","","function MQC_TopFolder_1(~)","  CtrlEnv_Vehicle_refsub_params","end","","%% Harness folder","","function MQC_Harness_1(~)","  mdl = \"CtrlEnv_Vehicle_harness_model\";","  load_system(mdl)","  sim(mdl);","end","","function MQC_Harness_2(~)","  CtrlEnv_Vehicle_harness_setup","end","","%% Simulation cases folder","","function MQC_SimulationCase_1(~)","  CtrlEnv_Vehicle_Case","end","","%% Utility > Configuration folder","","function MQC_Configuation_1(~)","  mdl = \"CtrlEnv_Vehicle_harness_model\";","  load_system(mdl)","  CtrlEnv_Vehicle_loadSimulationCase","end","","function MQC_Configuation_2(~)","  CtrlEnv_Vehicle_setInitialConditions","end","","%% Utility folder","","function MQC_Utility_1(~)","  CtrlEnv_Vehicle_getMotorSpeedFromVehicleSpeed","end","","function MQC_Utility_2(~)","  mdl = \"CtrlEnv_Vehicle_harness_model\";","  load_system(mdl)","  simOut = sim(mdl);","  simData = extractTimetable(simOut.logsout);","  CtrlEnv_Vehicle_plotResults( SimData = simData );","end","","end  % methods (Test)","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"fd1a40a0-a46f-4395-af56-1fd8a2b66a37"},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"efea7865-0f1b-47b8-972e-abf04fc06102"},{"LineNumber":32,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"8f425ec9-1915-4d01-a12e-4fc1eec022e3"},{"LineNumber":38,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"c7c8d0c0-f1d7-4f65-b628-67ea78cbf287"},{"LineNumber":44,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"a8bab9ce-108c-4831-943d-4926a1f7e005"},{"LineNumber":50,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"472fc4f7-995c-44ad-8272-047e797b648f"},{"LineNumber":56,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"6f141d79-ebeb-4183-9279-06d3ff61e8d1"},{"LineNumber":60,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"a1654006-c0e7-48a3-b360-f61a1ffcf7ba"}],"Statement":[{"LineNumber":21,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d9e25a93-a5b2-4277-a2cc-fe10d7438322"},{"LineNumber":27,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f44b4b60-e71e-4136-8189-d5450965cecb"},{"LineNumber":28,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"478c130f-e93a-432f-a17e-c932a98b1e5a"},{"LineNumber":29,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":11,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1ccc0583-0861-417e-b8d3-424829cfaa3e"},{"LineNumber":33,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b080f823-cd45-441b-9306-3e12bccf72f4"},{"LineNumber":39,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7a8b31c3-f8f2-4012-bc8c-31afce3b7a3f"},{"LineNumber":45,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2fa3bd30-270f-4597-ab8d-6b50fa38db08"},{"LineNumber":46,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c24ef3b6-7944-4b7f-acd7-4a338a2f7044"},{"LineNumber":47,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6108e359-e238-4df4-901c-b80a4e07138a"},{"LineNumber":51,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4eb65e6e-9fd1-4c71-9622-b53f4bfeaba6"},{"LineNumber":57,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"12e959bf-37af-4d8f-98ba-d41d5c60fc16"},{"LineNumber":61,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9a0b10a5-94d1-4209-99d1-88d76d77af66"},{"LineNumber":62,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c776b78b-c1f9-493f-b311-30af615c2923"},{"LineNumber":63,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"683f4708-e479-442e-9293-d9b33e366173"},{"LineNumber":64,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"67035233-69c0-4606-8809-ecfd90a12dac"},{"LineNumber":65,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"482855e6-ebfc-448c-b87c-2326706cbe82"}]},"FilterData":[]}