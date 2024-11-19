var sourceData49 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\Utility\\BatteryHV_getReferencedSubsystemFilename.m","RawFileContents":["function refsubName = BatteryHV_getReferencedSubsystemFilename(nvpairs)","%% Finds the referenced system filename of High Voltage Battery block","% Model must be loaded before calling this function.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  nvpairs.ModelName (1,1) {mustBeTextScalar} = \"BatteryHV_harness_model\"","  nvpairs.ReferencedSubsystemPrefix (1,1) {mustBeTextScalar} = \"BatteryHV_refsub_\"","end","","% if not(bdIsLoaded(nvpairs.ModelName))","%   load_system(nvpairs.ModelName)","% end","","% Find the referenced subsystem filename of High Voltage Battery block.","% Returned data can contain multiple elements.","refsubName = Simulink.SubsystemReference.getAllReferencedSubsystemBlockDiagrams(nvpairs.ModelName);","refsubName = string(refsubName);","","% logical index","lix = startsWith(refsubName, nvpairs.ReferencedSubsystemPrefix);","","% Get the intended name only.","refsubName = refsubName(lix);","","assert(refsubName ~= \"\", ...","  \"Referenced subsystem filename was not found.\")","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":71,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"33aacaf6-b9d4-40ec-bf5f-453ff665e972"},"Statement":[{"LineNumber":8,"Hits":[1,1],"StartColumnNumbers":[27,47],"EndColumnNumbers":[43,72],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["e21acc63-6924-49d2-b20b-e55d3912a67b","d090ea94-8d81-4dd8-a7e4-9053f9849b95"]},{"LineNumber":9,"Hits":[1,1],"StartColumnNumbers":[43,63],"EndColumnNumbers":[59,82],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["4cd7a577-2083-4555-9bd0-0ed31f14591c","1df4f268-fbea-460e-b8f9-497ce6ed9999"]},{"LineNumber":18,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":99,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b5ef27ea-289f-484c-aeb2-88a516c10093"},{"LineNumber":19,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f90d4846-ebe6-4a01-91c5-cb3e1b420cc1"},{"LineNumber":22,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b2a042d1-b488-4af3-9f9e-b4c9e1ae8cd1"},{"LineNumber":25,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5499c498-3eeb-4b3a-87ae-811a040e4f9b"},{"LineNumber":27,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"eae6c140-62b8-4eff-8dfd-d906854e02fb"},{"LineNumber":28,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":49,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"eae6c140-62b8-4eff-8dfd-d906854e02fb"}]},"FilterData":[]}