var sourceData190 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Utility\\generateHTML.m","RawFileContents":["function htmlFilePath = generateHTML()\r","%% Generates HTML files from some files in the project.\r","% Currently this file is considered experimental.\r","%\r","% This function exports a Live Script to an HTML file and saves it\r","% in the `docs` folder.\r","% This returns a string containing the path to the HTML file.\r","% If the source file is not found, it returns an empty string.\r","% If two or more files match, the first file is used.\r","\r","% Copyright 2022-2023 The MathWorks, Inc.\r","\r","prj = currentProject;\r","rootfolder = prj.RootFolder;\r","\r","htmlfolder = rootfolder + \"/docs\";\r","if not(exist(htmlfolder, \"dir\"))\r","  mkdir(htmlfolder)\r","end\r","\r","files = [prj.Files.Path]';\r","\r","idx = contains(files, \"AboutBEVProject.mlx\");\r","sourceFile = files(idx);\r","\r","if isempty(sourceFile)\r","  htmlFilePath = \"\";\r","  return\r","elseif numel(sourceFile) > 1\r","  sourceFile = sourceFile(1);\r","end\r","\r","[~, htmlBaseFileName, ~] = fileparts(sourceFile);\r","htmlFilePath =  fullfile(rootfolder, \"docs\", htmlBaseFileName+\".html\");\r","\r","export(sourceFile, htmlFilePath, Run=true, HideCode=false);\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},"Statement":[{"LineNumber":13,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":17,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":27,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":28,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":10,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":34,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":36,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false}]}}