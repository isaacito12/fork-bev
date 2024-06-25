var sourceData182 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\AboutBEVProject.mlx","RawFileContents":["% Check if any MATLAB Project is currently open.","if not(isempty(matlab.project.rootProject))","  prj = currentProject;","  disp(prj.Name)","  rootfolder = prj.RootFolder;","else","  disp(\"No project is open.\")","  return","end","paths = [prj.ProjectPath.StoredLocation]';","disp(paths)","startups = extractAfter([prj.StartupFiles]', rootfolder);","disp(startups)","simcache = extractAfter(prj.SimulinkCacheFolder, rootfolder);","disp(simcache)","numel(prj.Files)","files = extractAfter([prj.Files.Path]', rootfolder);","% disp(files)","idx = contains(files, \"system_model\", IgnoreCase=true);","sysmdls = files(idx);","disp(sysmdls)","idx = contains(files, \"refsub\", IgnoreCase=true);","refsubs = files(idx);","numel(refsubs)","disp(refsubs)","idx = endsWith(files, \".ssc\");","sscfiles = files(idx);","numel(sscfiles)","disp(sscfiles)"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":3,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":4,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":5,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":7,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":8,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":9,"ContinuedLine":false},{"LineNumber":10,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":12,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":13,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":15,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":17,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":52,"ContinuedLine":false},{"LineNumber":19,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false},{"LineNumber":20,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":21,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":22,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false},{"LineNumber":25,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":27,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":28,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":15,"ContinuedLine":false},{"LineNumber":29,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false}]}}