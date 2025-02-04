var sourceData71 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\ControllerAndEnvironment\\Harness\\Components\\Vehicle\\Test\\CtrlEnv_Vehicle_UnitTest_MQC.m","RawFileContents":["classdef CtrlEnv_Vehicle_UnitTest_MQC < BEVTestCase","% Class implementation of unit test","%","% These are tests to achieve the Minimum Quality Criteria (MQC).","% MQC is achieved when all runnables (models, scripts, functions) run","% without any errors.","%","% You can run this test by opening in MATLAB Editor and clicking","% Run Tests button or Run Current Test button.","% You can also run this test using test runner (the *_runtests.m script)","% which can not only run tests but also generates test summary and","% a code coverage report.","","% Copyright 2023 The MathWorks, Inc.","","methods (Test)","","%% Component top folder","","function MQC_TopFolder_1(~)","  CtrlEnv_Vehicle_refsub_params","end","","%% Harness folder","","function MQC_Harness_1(~)","  mdl = \"CtrlEnv_Vehicle_harness_model\";","  load_system(mdl)","  sim(mdl);","end","","function MQC_Harness_2(~)","  CtrlEnv_Vehicle_harness_setup","end","","%% Simulation cases folder","","function MQC_SimulationCase_1(~)","  CtrlEnv_Vehicle_Case","end","","%% Utility > Configuration folder","","function MQC_Configuation_1(~)","  mdl = \"CtrlEnv_Vehicle_harness_model\";","  load_system(mdl)","  CtrlEnv_Vehicle_loadSimulationCase","end","","function MQC_Configuation_2(~)","  CtrlEnv_Vehicle_setInitialConditions","end","","%% Utility folder","","function MQC_Utility_1(~)","  CtrlEnv_Vehicle_getMotorSpeedFromVehicleSpeed","end","","function MQC_Utility_2(~)","  mdl = \"CtrlEnv_Vehicle_harness_model\";","  load_system(mdl)","  simOut = sim(mdl);","  simData = extractTimetable(simOut.logsout);","  CtrlEnv_Vehicle_plotResults( SimData = simData );","end","","end  % methods (Test)","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"e722d38d-e140-4d0c-96a0-e518012cebc9"},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"ca3e2b5c-ffcb-4488-8eee-9503a259687e"},{"LineNumber":32,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"87c7b9d0-4c63-4360-aaa9-96507659510b"},{"LineNumber":38,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"9e3b2ae5-0e96-4e85-9519-362f405743a6"},{"LineNumber":44,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"de14bc78-4e6e-40f7-8877-4290aa03f9dc"},{"LineNumber":50,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"3656ab23-e87a-45db-b784-f3f043caefea"},{"LineNumber":56,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"d082d77e-c282-4720-9975-4aba62e9d8ea"},{"LineNumber":60,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"72b2bdff-5bd9-4a94-a854-8658374558f7"}],"Statement":[{"LineNumber":21,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cc89f7ee-5537-4a23-9ddc-0104940c6f65"},{"LineNumber":27,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"84227497-1313-4b83-b97d-96639dc9e57e"},{"LineNumber":28,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5ca9673f-4e3f-42f6-b610-5704fa24c15e"},{"LineNumber":29,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":11,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0dde097b-168c-4c3b-8671-c2fb1010e5f9"},{"LineNumber":33,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c571261c-ea9b-4cef-9755-e5ab692134d7"},{"LineNumber":39,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bed5c9c7-d3ad-4d6f-9df7-ace8dfd7d673"},{"LineNumber":45,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"dd91c7af-cc4b-4ed6-b070-b44f65e516b1"},{"LineNumber":46,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"171e86b9-1805-49bc-9779-1cbcf92d504e"},{"LineNumber":47,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4d731d78-b8e5-463c-bfba-d26c35880705"},{"LineNumber":51,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"de3e3e88-2816-44fb-a02a-18d6608cb3aa"},{"LineNumber":57,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8e37ddb1-9805-4c70-b1fa-f933db10ec99"},{"LineNumber":61,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"abe41958-f1d1-4c75-9f0d-9c5191f16410"},{"LineNumber":62,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6db1080f-7a73-45b7-9651-928f9d45876f"},{"LineNumber":63,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c13724f3-8e25-4626-9477-6cb5d86c900f"},{"LineNumber":64,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e9697393-70d4-4c04-adaa-58d94cc2739b"},{"LineNumber":65,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"230f71de-5697-454d-958c-4ae60a9e4af8"}]},"FilterData":[]}