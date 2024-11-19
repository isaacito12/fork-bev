var sourceData226 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\SignalDesigner\\+SignalDesignUtility\\buildXYData.m","RawFileContents":["function xydata = buildXYData(nvpairs)","","arguments","  nvpairs.RandomSeed (1,1) {mustBeInteger, mustBePositive} = 123","  nvpairs.XScale (1,1) {mustBePositive} = 1","  nvpairs.YScale (1,1) {mustBePositive} = 1","","  nvpairs.XInitialFlatLength (1,1) {mustBePositive} = 5","  nvpairs.YInitialValue (1,1) double = 0","","  nvpairs.NumTransitions (1,1) {mustBeInteger, mustBePositive} = 5 ...","    % Number of transitions excluding initial and final segments","","  nvpairs.TransitionRange (1,2) {mustBePositive} = [20 50]","  nvpairs.FlatRange (1,2) {mustBePositive} = [50 100]","","  nvpairs.YRange (1,2) double = [0 10]","","  nvpairs.XFinalTransitionLength (1,1) {mustBePositive} = 30","  nvpairs.XFinalFlatLength (1,1) {mustBePositive} = 10","  nvpairs.YFinalValue (1,1) double = 0","end","","xScale = nvpairs.XScale;","yScale = nvpairs.YScale;","","xIni_2 = nvpairs.XInitialFlatLength;","xTransitionFinal = nvpairs.XFinalTransitionLength;","","rng(nvpairs.RandomSeed)","","N = nvpairs.NumTransitions;","","% First column","r1 = randi(nvpairs.TransitionRange, N, 1);","","% Second column","r2 = randi(nvpairs.FlatRange, N, 1);","","x = nan(N*2, 1);","x(1:2:end-1) = r1;","x(2:2:end) = r2;","x = (cumsum(x) + xIni_2) / xScale;","","x1 = x(1:2:end);","x2 = x(2:2:end);","","y = randi(nvpairs.YRange, N, 1) / yScale;","","middleRows = horzcat(x1, x2, y);","","initialRow = [0, xIni_2/xScale, nvpairs.YInitialValue/yScale];","","xFinal_1 =  x2(end) + xTransitionFinal/xScale;","xFinal_2 = xFinal_1 + nvpairs.XFinalFlatLength/xScale;","finalRow = [ xFinal_1, xFinal_2, nvpairs.YFinalValue ];","","xydata = vertcat(initialRow, middleRows, finalRow);","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"e0b1cfa3-fb67-4bda-9c7a-b8c29890a0d1"},"Statement":[{"LineNumber":4,"Hits":[65,65,1],"StartColumnNumbers":[28,43,61],"EndColumnNumbers":[41,57,64],"ContinuedLine":false,"Filterable":[false,false,false],"FilterDataUUID":["83b8650a-4bbb-4e2e-a1d5-bb81ee80d4fe","8613a5e1-eebe-4aec-b145-685706f985b5","fc3d6505-c391-4417-a19a-b865ee5c8f5d"]},{"LineNumber":5,"Hits":[65,1],"StartColumnNumbers":[24,42],"EndColumnNumbers":[38,43],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["3e1e2fab-c8d9-420a-9190-ae9c2e757c52","84a911d9-a3cf-4cbd-8a4d-16115d6b12b3"]},{"LineNumber":6,"Hits":[65,1],"StartColumnNumbers":[24,42],"EndColumnNumbers":[38,43],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["abb7e5f3-a5a6-444e-abb1-0d5a20f83a58","09f5b102-71a9-4798-91fe-6b4a4085decc"]},{"LineNumber":8,"Hits":[65,1],"StartColumnNumbers":[36,54],"EndColumnNumbers":[50,55],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["df7db37f-93cc-47ed-b899-e41fa865875d","4bc393a2-af3f-437d-a013-8d444d15896b"]},{"LineNumber":9,"Hits":1,"StartColumnNumbers":39,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bb822405-bde1-43d9-b78a-36c051513e13"},{"LineNumber":11,"Hits":[65,65,1],"StartColumnNumbers":[32,47,65],"EndColumnNumbers":[45,61,66],"ContinuedLine":false,"Filterable":[false,false,false],"FilterDataUUID":["eedc2959-1326-435f-8ff0-f5ad1c1a03d1","921c5178-98a7-406c-b256-f689cfca2590","de5cef85-0d42-4331-8231-6327d651bf85"]},{"LineNumber":14,"Hits":[65,1],"StartColumnNumbers":[33,51],"EndColumnNumbers":[47,58],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["6d396313-ef56-4747-be4d-9e507a626f0c","721e6be8-7a6c-44c4-bfee-f0eee68a0802"]},{"LineNumber":15,"Hits":[65,1],"StartColumnNumbers":[27,45],"EndColumnNumbers":[41,53],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["79c04e03-f392-48f2-a3ae-e88ecc12201a","1f29ec80-c816-4c3e-a7ee-d27e23b1e055"]},{"LineNumber":17,"Hits":1,"StartColumnNumbers":32,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b1498ba8-d352-49c5-9d71-2470f03cbe56"},{"LineNumber":19,"Hits":[65,1],"StartColumnNumbers":[40,58],"EndColumnNumbers":[54,60],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["08a0b544-2ef4-4731-8d41-d7f65cc9a1c6","ff305c2d-5896-4e24-8b19-a17a8ec57830"]},{"LineNumber":20,"Hits":[65,1],"StartColumnNumbers":[34,52],"EndColumnNumbers":[48,54],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["a995b517-80b7-42cb-93eb-8f85ab73c086","02f0754e-8850-4657-adfc-284f313237dc"]},{"LineNumber":21,"Hits":1,"StartColumnNumbers":37,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9e0028c9-01a5-4cba-bc22-e8766c68ff47"},{"LineNumber":24,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8539bae1-f865-4234-8894-e4c72503465a"},{"LineNumber":25,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"46a8fcd4-3ce2-4398-98af-6be6426e7fb5"},{"LineNumber":27,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a9a49e91-172b-43f2-aa85-d7c30fcc5d54"},{"LineNumber":28,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ee26debe-8454-42f0-a877-d9368591c022"},{"LineNumber":30,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f260d7d7-32ac-4187-85bc-f53c678da4b6"},{"LineNumber":32,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e67c43e1-28da-44ea-aeb9-dffbd9e3251c"},{"LineNumber":35,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7bf1816a-fe97-4ad6-8287-1fd07b29e3af"},{"LineNumber":38,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"92b6eda8-3906-42f3-bf9a-8bb3b04d4518"},{"LineNumber":40,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"52aad56b-5eec-4fdd-9c42-36439adf4414"},{"LineNumber":41,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7a3e8125-5375-45fe-be70-bf3128f4bfab"},{"LineNumber":42,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"be69035e-8677-44d6-8acb-b32d51eaeaf9"},{"LineNumber":43,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bf8cadc8-f143-4f2f-9088-5b710e879e36"},{"LineNumber":45,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"edad8192-67af-4979-8ec6-7b24cbbce6cc"},{"LineNumber":46,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bf8dfc8b-c8e3-4580-a019-d8909a443efd"},{"LineNumber":48,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9b92cc7d-1d7b-40a6-85ee-054fa4057450"},{"LineNumber":50,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1ac4680b-cdf8-426e-abd3-13177e9071ad"},{"LineNumber":52,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6d908d59-c5bc-44be-844b-46a9bd971b91"},{"LineNumber":54,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7cd58a04-ce80-444e-b64e-d3bf9c45ef0e"},{"LineNumber":55,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"47e03b4a-b4fe-4201-9e8f-3a214e97261c"},{"LineNumber":56,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4453499c-6d48-4f8f-a2ea-48b23ca59121"},{"LineNumber":58,"Hits":65,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4c9e40ea-06f3-49a2-b0ce-8d3ced53efbf"}]},"FilterData":[]}