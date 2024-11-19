var sourceData214 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LocalTasks\\generateMarkdown_fromLiveScript.m","RawFileContents":["function generateMarkdown_fromLiveScript(NameValuePairs)\r","%% Generates Markdown files from Live Scripts\r","\r","% This function finds project-registered Live Scripts in the specified folder\r","% and exports them to Markdown files.\r","% Live Scripts that are not registered in MATLAB project are skipped.\r","%\r","% By default, all the generated Markdown files are saved in the \"markdown\" folder.\r","% Use MarkdownFolderPath option to change the folder to save Markdown files.\r","%\r","% If an up-to-date Markdown file already exists for the corresponding Live Script,\r","% no new Markdown file is generated. To generate a Markdown file,\r","% set ForceExport option to true.\r","\r","% Copyright 2024 The MathWorks, Inc.\r","\r","arguments (Input)\r","  NameValuePairs.LiveScriptFolderNames (:,1) string {mustBeFolder} = \".\"\r","  NameValuePairs.MarkdownFolderPath (1,1) string = \"markdown\"\r","  NameValuePairs.ForceExport (1,1) logical = false\r","end\r","\r","project_files = currentProject().Files';\r","project_file_paths = [project_files.Path]';\r","\r","num_folders = numel(NameValuePairs.LiveScriptFolderNames);\r","\r","for k = 1 : num_folders\r","\r","  live_script_folder_path = NameValuePairs.LiveScriptFolderNames(k);\r","\r","  % Get the list of project files in the specified folder and its subfolders.\r","  logical_index = startsWith(project_file_paths, live_script_folder_path);\r","  all_project_files_in_live_script_folder = project_file_paths(logical_index);\r","\r","  % Get mlx files that are in the k-th specified folder.\r","  % Don't get mlx files that are in the subfolders of the target folder.\r","  logical_index = endsWith(all_project_files_in_live_script_folder, \".mlx\") ...\r","    & not( startsWith( all_project_files_in_live_script_folder, ...\r","    live_script_folder_path + filesep + wildcardPattern(1,inf) + filesep));\r","\r","  mlxfiles_fullpaths = all_project_files_in_live_script_folder(logical_index);\r","\r","  num_files = numel(mlxfiles_fullpaths);\r","  if num_files == 0\r","    disp(\"No project-registered Live Script was found in \" + live_script_folder_path)\r","    continue\r","  end\r","\r","  disp(\">>> Exporting live scripts in the folder: \" + live_script_folder_path)\r","\r","  if num_files == 1\r","    disp(\">>> 1 Live Script found.\")\r","  elseif num_files > 1\r","    disp(\">>> \" + num_files + \" Live Scripts found.\")\r","  end\r","\r","  exported = LiveScriptUtility2.CheckAndGenerateMarkdown( ...\r","    mlxfiles_fullpaths, ...\r","    MarkdownFolderPath = NameValuePairs.MarkdownFolderPath, ...\r","    ForceExport = NameValuePairs.ForceExport );\r","\r","  num_exported = nnz(exported);\r","  if num_exported == 1\r","    disp(\"1 Live Script was exported.\")\r","  elseif num_exported > 1\r","    disp(num_exported + \" Live Scripts were exported to Markdown files.\")\r","  end\r","\r","end  % for\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"00ec0854-3d04-49c7-88ac-1934c07e548b"},"Statement":[{"LineNumber":18,"Hits":[0,0],"StartColumnNumbers":[53,69],"EndColumnNumbers":[65,72],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["2d33b23d-acf0-48b6-a999-9daf8cd7874e","ebeebbb4-9888-45e2-83b1-d1d8340940ab"]},{"LineNumber":19,"Hits":0,"StartColumnNumbers":51,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b607abc6-e057-4626-85d9-cdfb46cb19fc"},{"LineNumber":20,"Hits":0,"StartColumnNumbers":45,"EndColumnNumbers":50,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"026c5dcc-0071-48d9-82a0-a9db66dd5ce5"},{"LineNumber":23,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1fdb246a-1dbb-4b14-95a8-e31b65669d28"},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d7a998b0-798b-496c-a741-9e160220c8e3"},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5023ee54-de0d-422b-87a2-f7c0335b2018"},{"LineNumber":28,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"12e82ca4-d0d8-432e-aa0d-96816415e471"},{"LineNumber":30,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":68,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"976c5e58-6f24-4910-8dbd-c2aa1c5fcac3"},{"LineNumber":33,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":74,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"77d3c274-788f-4c4a-9e2e-eace57690c8e"},{"LineNumber":34,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":78,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ee4a21e1-edbd-4d24-b4c6-acb9ee917aa5"},{"LineNumber":38,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":75,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"09f3eff9-48fa-434a-b4d1-a282930029c6"},{"LineNumber":39,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":62,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"09f3eff9-48fa-434a-b4d1-a282930029c6"},{"LineNumber":40,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":75,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"09f3eff9-48fa-434a-b4d1-a282930029c6"},{"LineNumber":42,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":78,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2d15c380-09c7-438e-bfa0-812ad7b5b8d7"},{"LineNumber":44,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4771e800-ceaa-4505-9231-6d8f9952647b"},{"LineNumber":45,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"be54989c-c45f-4e85-8895-0808b7d207fa"},{"LineNumber":46,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":85,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2ea999cb-c36b-49c5-8202-ec6d88a8444c"},{"LineNumber":47,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":14,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d600061f-4683-495a-a1cd-6f066025544d"},{"LineNumber":50,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":78,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"24535af2-d1e6-4514-ad96-544eb16fa703"},{"LineNumber":52,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ea4eb311-542e-42e3-bb6c-5c78eeb043b7"},{"LineNumber":53,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e4f1180e-6620-459f-9dab-d4da2987f115"},{"LineNumber":54,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8fe3293a-a0be-4018-b753-bb9a4ace70ca"},{"LineNumber":55,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e392d1f2-572a-4136-be3c-6167fd2db3c8"},{"LineNumber":58,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"21695e29-ba1f-4cac-9ccc-220cdc7df842"},{"LineNumber":59,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":22,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"21695e29-ba1f-4cac-9ccc-220cdc7df842"},{"LineNumber":60,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":58,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"21695e29-ba1f-4cac-9ccc-220cdc7df842"},{"LineNumber":61,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":47,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"21695e29-ba1f-4cac-9ccc-220cdc7df842"},{"LineNumber":63,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f72087e0-48f5-4f71-8c6b-919a16a33188"},{"LineNumber":64,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c53711a8-c716-4d8a-b264-b7ea90b89d2d"},{"LineNumber":65,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aa0e9791-0404-455a-96cd-e5dbb8790c47"},{"LineNumber":66,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4ff9fa1f-9c70-42f3-b8ec-ca4e333efc32"},{"LineNumber":67,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":73,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"769960e4-6109-48f1-bc3c-ec6177b900fc"}]},"FilterData":[]}