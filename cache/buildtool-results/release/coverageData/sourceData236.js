var sourceData236 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\atProjectStartUp.m","RawFileContents":["function atProjectStartUp","%% Runs at project start up","% This automatically runs when the MATLAB Project is opened.","% To change the automatic execution setting, select the Project window,","% and in the PROJECT toolstrip, click Startup Shutdown.","%","% Copyright 2020-2024 The MathWorks, Inc.","","if not(contains(matlabRelease().Release, \"R2024b\"))","  disp(\"This project was developed in R2024b.\")","  relstr = matlabRelease().Release;","  disp(\"This MATLAB Release is \" + relstr(2:end-1) + \".\")","end","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"ceaa797b-19f1-4c06-a509-8d82ec216a80"},"Statement":[{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e834f5fe-7a84-47a6-af2f-ff33730116f5"},{"LineNumber":10,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c2bff287-ccbd-4a85-8f24-648814058242"},{"LineNumber":11,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b1406b0a-cd25-41ca-833d-3d452e58881b"},{"LineNumber":12,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d09c4ca2-ea3a-448e-ae54-ee94ecfd42cb"}]},"FilterData":[]}