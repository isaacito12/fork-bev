var sourceData238 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\atProjectStartUp.m","RawFileContents":["function atProjectStartUp","%% Runs at project start up","% This is automatically run when the MATLAB Project is opened.","% To change the automatic execution setting, select the Project window,","% and in the PROJECT toolstrip, click Startup Shutdown.","%","% Copyright 2020-2024 The MathWorks, Inc.","","if not(contains(matlabRelease().Release, \"R2024a\"))","  disp(\"This project was developed in R2024a.\")","  relstr = matlabRelease().Release;","  disp(\"This MATLAB Release is \" + relstr(2:end-1) + \".\")","end","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},"Statement":[{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":10,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":11,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":12,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":57,"ContinuedLine":false}]}}