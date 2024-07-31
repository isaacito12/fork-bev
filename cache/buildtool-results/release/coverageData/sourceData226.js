var sourceData226 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\generateHTML.m","RawFileContents":["function htmlFilePath = generateHTML()","%% Generates HTML files from some files in the project.","% Currently this file is considered experimental.","%","% This function exports a Live Script to an HTML file and saves it","% in the `docs` folder.","% This returns a string containing the path to the HTML file.","% If the source file is not found, it returns an empty string.","% If two or more files match, the first file is used.","","% Copyright 2022-2023 The MathWorks, Inc.","","prj = currentProject;","rootfolder = prj.RootFolder;","","htmlfolder = rootfolder + \"/docs\";","if not(exist(htmlfolder, \"dir\"))","  mkdir(htmlfolder)","end","","files = [prj.Files.Path]';","","idx = contains(files, \"AboutBEVProject.mlx\");","sourceFile = files(idx);","","if isempty(sourceFile)","  htmlFilePath = \"\";","  return","elseif numel(sourceFile) > 1","  sourceFile = sourceFile(1);","end","","[~, htmlBaseFileName, ~] = fileparts(sourceFile);","htmlFilePath =  fullfile(rootfolder, \"docs\", htmlBaseFileName+\".html\");","","export(sourceFile, htmlFilePath, Run=true, HideCode=false);","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},"Statement":[{"LineNumber":13,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":17,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":27,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":28,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":9,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":34,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":36,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false}]}}