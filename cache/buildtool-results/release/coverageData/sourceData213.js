var sourceData213 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LocalTasks\\LiveScript_Utility.m","RawFileContents":["classdef LiveScript_Utility\r","\r","  %{\r","\r","From R2022a MATLAB, you can generate a Markdown file from a Live Script\r","with `export` command.\r","\r","- https://www.mathworks.com/help/matlab/ref/export.html\r","\r","`LiveScript_Utility` is a wrapper of `export` command,\r","and it provides two functions:\r","\r","1. `LiveScript_Utility.CheckAndGenerateMarkdowns`\r","2. `LiveScript_Utility.GenerateMarkdown`\r","\r","With these functions, you can specify the folder to store the Markdown and\r","media files.\r","\r","`LiveScript_Utility.CheckAndGenerateMarkdowns` also checks the need of\r","generating a new Markdown file, and it skips the generation\r","if the source Live Script is not updated.\r","\r","  %}\r","\r","  % Copyright 2023-2024 The MathWorks, Inc.\r","\r","  methods (Static)\r","\r","    function CheckAndGenerateMarkdowns(LiveScriptFilenames, NameValuePairs)\r","      %% Generates Markdown files from Live Scripts.\r","\r","      arguments (Input)\r","        % One or more Live Script files to convert to Markdown files.\r","        % Filenames can include either a relative or full path.\r","        LiveScriptFilenames (:,1) string {mustBeFile} = \"MyLiveScript.mlx\"\r","\r","        % A path to the folder to store Markdown files.\r","        % This path can be either relative or full.\r","        % If the folder does not exist, it is created.\r","        NameValuePairs.MarkdownFolderPath (1,1) string = \"Markdowns\"\r","\r","        % This path is relative to MarkdownFolderPath.\r","        % If the folder does not exist, it is created.\r","        NameValuePairs.MediaFolderName (1,1) string = \"Media\"\r","\r","        NameValuePairs.ForceExport (1,1) logical = false\r","      end\r","\r","      assert(all(endsWith(LiveScriptFilenames, \".mlx\")), \"File extension must be \"\".mlx\"\"\")\r","\r","      assert(NameValuePairs.MarkdownFolderPath ~= \".\", \"MarkdownFolderPath must not be the current folder.\")\r","\r","      assert(NameValuePairs.MediaFolderName ~= \".\", \"MediaFolderName must not be the current folder.\")\r","\r","      source_files = LiveScriptFilenames;\r","\r","      dest_files = fullfile( NameValuePairs.MarkdownFolderPath, ...\r","                             replace(LiveScriptFilenames, \".mlx\", \".md\") );\r","\r","      for idx = 1 : numel(source_files)\r","        if NameValuePairs.ForceExport ...\r","        || LiveScript_Utility.SourceFile_isNewerThan_destinationFile( ...\r","            Source = source_files(idx), ...\r","            Destination = dest_files(idx) )\r","\r","          disp(\"--> Exporting markdown from \" + source_files(idx))\r","\r","          mlxfile = source_files(idx);\r","\r","          LiveScript_Utility.GenerateMarkdown( ...\r","            mlxfile, ...\r","            MarkdownFolderPath = NameValuePairs.MarkdownFolderPath, ...\r","            MediaFolderName = NameValuePairs.MediaFolderName )\r","\r","        else\r","          disp(\"--> Skip. Markdown file is up to date for \" + source_files(idx))\r","        end  % if\r","      end  % for\r","    end  % function\r","\r","\r","    function GenerateMarkdown(LiveScriptFilename, NameValuePairs)\r","      %% Generates a Markdown file from a Live Script.\r","\r","      % This is a wrapper function for MALTAB's export command to generate\r","      % a Markdown file from a Live Script.\r","      %\r","      % If you convert \"mycode1.mlx\" Live Script with the export command,\r","      % it creates \"mycode1.md\" Markdown file and \"mycode1_media\" folder\r","      % in the current folder. \"mycode1_media\" folder is used to store image files\r","      % generated from the Live Script and used by the Markdown file.\r","      %\r","      %   pwd >\r","      %       mycode1_media > figure_0.png, figure_1.png, ...\r","      %       mycode1.md\r","      %       mycode1.mlx\r","      %\r","      % If you convert \"mycode2.mlx\" and \"mycode3.mlx\" files to Markdown files,\r","      % you have \"mycode2_media\" and \"mycode3_media\" folders in the current folder too.\r","      %\r","      %   pwd >\r","      %       mycode1_media > figure_0.png, figure_1.png, ...\r","      %       mycode2_media > figure_0.png, figure_1.png, ...\r","      %       mycode3_media > figure_0.png, figure_1.png, ...\r","      %       mycode1.md\r","      %       mycode1.mlx\r","      %       mycode2.md\r","      %       mycode2.mlx\r","      %       mycode3.md\r","      %       mycode3.mlx\r","      %\r","      % With this wrapper function, by default, Markdown file is saved in\r","      % \"Markdowns\" folder in the current folder, and the \"media\" folder is\r","      % moved below \"Markdowns > Media\" folder.\r","      %\r","      %   pwd > \r","      %       Markdowns >\r","      %           Media > \r","      %               mycode1_media > figure_0.png, figure_1.png, ...\r","      %               mycode2_media > figure_0.png, figure_1.png, ...\r","      %               mycode3_media > figure_0.png, figure_1.png, ...\r","      %           mycode1.md\r","      %           mycode2.md\r","      %           mycode3.md\r","      %       mycode1.mlx\r","      %       mycode2.mlx\r","      %       mycode3.mlx\r","\r","      arguments\r","        % A Live Script file to convert to a Markdown file.\r","        % This filename can include either a relative or full path.\r","        LiveScriptFilename (1,1) string {mustBeFile} = \"MyLiveScript.mlx\"\r","\r","        % A path to the folder to store Markdown files.\r","        % This path can be either relative or full.\r","        % If the folder does not exist, it is created.\r","        NameValuePairs.MarkdownFolderPath (1,1) string = \"Markdowns\"\r","\r","        % This path is relative to MarkdownFolderPath.\r","        % If the folder does not exist, it is created.\r","        NameValuePairs.MediaFolderName (1,1) string = \"Media\"\r","      end\r","\r","      assert(endsWith(LiveScriptFilename, \".mlx\"), \"File extension must be \"\".mlx\"\"\")\r","\r","      assert(NameValuePairs.MarkdownFolderPath ~= \".\", \"MarkdownFolderPath must not be the current folder.\")\r","\r","      assert(NameValuePairs.MediaFolderName ~= \".\", \"MediaFolderName must not be the current folder.\")\r","\r","      [~, name_part, ~] = fileparts(LiveScriptFilename);\r","\r","      markdown_destination_folder_path = NameValuePairs.MarkdownFolderPath;\r","\r","      if not(isfolder(markdown_destination_folder_path))\r","        disp(\"Creating destination folder: \" + markdown_destination_folder_path)\r","        mkdir(markdown_destination_folder_path)\r","      end\r","\r","      media_folder_basename = name_part + \"_media\";\r","\r","      media_folder_original_path = media_folder_basename;\r","\r","      media_folder_new_path = fullfile( markdown_destination_folder_path, ...\r","                                        NameValuePairs.MediaFolderName );\r","\r","      if not(isfolder(media_folder_new_path))\r","        disp(\"Creating media folder: \" + media_folder_new_path)\r","        mkdir(media_folder_new_path)\r","      end\r","\r","      % Media subfolder does not exist yet. It is created later.\r","      media_subfolder_new_path = fullfile( media_folder_new_path, ...\r","                                           media_folder_basename );\r","\r","      markdown_file_name = name_part + \".md\";\r","\r","      markdown_file_fullpath = fullfile(markdown_destination_folder_path, markdown_file_name);\r","\r","      disp(\"Generating Markdown file from Live Script: \" + LiveScriptFilename)\r","\r","      export( LiveScriptFilename, ...\r","        Format = \"markdown\", ...\r","        AcceptHTML = true, ...  Must be true to show images\r","        RenderLaTexOnline = \"off\", ... Do not access external internet sites from markdown file\r","        HideCode = false, ... Do not hide MATLAB code\r","        Run = true, ... Run script before export. Takes time, but necessary to always get expected result.\r","        IncludeOutputs = true, ... Include MATLAB output\r","        EmbedImages = false, ... Save images to individual image files\r","        FigureFormat = \"png\", ...\r","        FigureResolution = 120 ); ... This affects the size of image file\r","\r","      %% Update path strings in markdown file to point to the new image file path\r","\r","      % Generated Markdown file is in the current working folder.\r","      assert(isfile(markdown_file_name))\r","      content = fileread(markdown_file_name);\r","      content = string(content);\r","\r","      % File separator must be forward slash.\r","      target_string = \"<img src=\"\"\" + media_folder_basename + \"/\";\r","\r","      if contains(content, target_string) && (NameValuePairs.MediaFolderName ~= \".\")\r","        disp(\"Updating the path strings in the Markdown file for images.\")\r","\r","        % This path string is used within the generated Markdown\r","        % where 1) the path must be relative from the Markdown file's folder,\r","        % and 2) the folder separator must be backslash.\r","        new_path = NameValuePairs.MediaFolderName + \"/\" + media_folder_basename;\r","\r","        new_string = \"<img src=\"\"\" + new_path + \"/\";\r","\r","        new_content = replace(content, target_string, new_string);\r","      else\r","        new_content = content;\r","      end\r","\r","      %% Move media folder and files generated from Live Script\r","\r","      disp(\"Moving the media folder: \" + media_subfolder_new_path)\r","\r","      copyfile(media_folder_original_path + \"/*\", media_subfolder_new_path)\r","      rmdir(media_folder_original_path, \"s\")\r","\r","      %% Move Markdown file to user-specified folder\r","\r","      new_tmp_mdfile = tempname(pwd) + \".md\";\r","\r","      fd = fopen(new_tmp_mdfile, \"w\");\r","      fprintf(fd, \"%s\", new_content);\r","      fclose(fd);\r","\r","      disp(\"Moving Markdown file: \" + markdown_file_fullpath)\r","\r","      copyfile(new_tmp_mdfile, markdown_file_fullpath)\r","      delete(new_tmp_mdfile)\r","\r","      if markdown_destination_folder_path ~= string(pwd)\r","        delete(markdown_file_name)\r","      end\r","\r","      disp(\"done\")\r","\r","    end  % function\r","\r","\r","    function source_is_newer = SourceFile_isNewerThan_destinationFile(NameValuePairs)\r","      %%\r","      arguments (Input)\r","        % Source file must exist.\r","        NameValuePairs.Source (1,1) {mustBeFile}\r","\r","        % Destination file may not exist.\r","        NameValuePairs.Destination (1,1) string\r","      end\r","      arguments (Output)\r","        % This is true if either of these condisions is met:\r","        % - The source file is newer than the destination file.\r","        % - The destination file does not exist.\r","        source_is_newer (1,1) logical\r","      end\r","      source_is_newer = false;\r","      sourcefile_info = dir(NameValuePairs.Source);\r","      % As of R2022b, serial date numbers are not recommended.\r","      % Convert the serial date number to a datetime value by using the datetime function.\r","      sourcefile_datetime = datetime(sourcefile_info.datenum, ConvertFrom=\"datenum\");\r","      if isfile(NameValuePairs.Destination)\r","        destfile_info = dir(NameValuePairs.Destination);\r","        destfile_datetime = datetime(destfile_info.datenum, ConvertFrom=\"datenum\");\r","        if sourcefile_datetime > destfile_datetime\r","          source_is_newer = true;\r","        end  % if\r","      else\r","        % Destination file does not exist.\r","        source_is_newer = true;\r","      end  % if\r","    end  % function\r","\r","  end  % methods\r","\r","end  % classdef\r",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":29,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":75,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"1dc253e4-45f5-4eef-b70b-bb307ba046fe"},{"LineNumber":82,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"ab5ad7c8-3211-4e70-ace9-e8e4a6c92981"},{"LineNumber":246,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":85,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"25269f51-4189-471c-adf1-1de97f85035e"}],"Statement":[{"LineNumber":35,"Hits":[0,0],"StartColumnNumbers":[42,56],"EndColumnNumbers":[52,74],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["a4184135-11c5-4372-8663-4db8801cc59c","3a1d08d5-5e41-4714-81d8-fa9ad0f34b9e"]},{"LineNumber":40,"Hits":0,"StartColumnNumbers":57,"EndColumnNumbers":68,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1d337edb-8cc1-4243-8902-af43356302fa"},{"LineNumber":44,"Hits":0,"StartColumnNumbers":54,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cce840a5-327f-452d-9c8f-7c48696beed7"},{"LineNumber":46,"Hits":0,"StartColumnNumbers":51,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f561edde-0d72-4b4c-89cb-8c6be990f1d7"},{"LineNumber":49,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":91,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"667bf540-def5-49be-89d4-9adffd8ed1d9"},{"LineNumber":51,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":108,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"047ac152-cd39-44d2-9f4d-aa94313f16e2"},{"LineNumber":53,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":102,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"943fbf15-572e-43e0-8715-b1377714bc5e"},{"LineNumber":55,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"64dda69c-b9a6-4bf0-b253-f674718e267a"},{"LineNumber":57,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b724bd58-49a0-4d01-a576-c6d4eb895683"},{"LineNumber":58,"Hits":0,"StartColumnNumbers":29,"EndColumnNumbers":75,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"b724bd58-49a0-4d01-a576-c6d4eb895683"},{"LineNumber":60,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5d7d9e91-9b9c-45b1-84c2-181507e0dc08"},{"LineNumber":61,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"378eb255-d7a3-4d58-aea7-c0adebfc09da"},{"LineNumber":62,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":69,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"378eb255-d7a3-4d58-aea7-c0adebfc09da"},{"LineNumber":63,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":38,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"378eb255-d7a3-4d58-aea7-c0adebfc09da"},{"LineNumber":64,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":43,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"378eb255-d7a3-4d58-aea7-c0adebfc09da"},{"LineNumber":66,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":66,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c297982a-5762-48e2-89f6-05ba6618a2cf"},{"LineNumber":68,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"64bfde19-b4f4-43b2-91c3-4a006750a70d"},{"LineNumber":70,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"78fcc4f2-122a-474b-a599-2b405e078e5c"},{"LineNumber":71,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":19,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"78fcc4f2-122a-474b-a599-2b405e078e5c"},{"LineNumber":72,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":66,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"78fcc4f2-122a-474b-a599-2b405e078e5c"},{"LineNumber":73,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":62,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"78fcc4f2-122a-474b-a599-2b405e078e5c"},{"LineNumber":76,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":80,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1bbd95ba-a0c0-48ee-bd66-0893eb8447b8"},{"LineNumber":132,"Hits":[0,0],"StartColumnNumbers":[41,55],"EndColumnNumbers":[51,73],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["e675a819-644d-4c5f-96c2-812893c42e47","e6e71029-b4b6-4b39-b53a-e81d4f599561"]},{"LineNumber":137,"Hits":0,"StartColumnNumbers":57,"EndColumnNumbers":68,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8ae2c607-29f9-426d-a070-4d7ce7da1b91"},{"LineNumber":141,"Hits":0,"StartColumnNumbers":54,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e0f81ce5-6547-4738-ad64-2c78593afed2"},{"LineNumber":144,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":85,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4c83ebd6-c72d-4330-8dd6-c87b7e57b6ac"},{"LineNumber":146,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":108,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e29449d9-4fd1-4bd2-b28e-050c4aaf5a9c"},{"LineNumber":148,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":102,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bc65328d-5c32-4604-b892-02f5939660d6"},{"LineNumber":150,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"afb038fd-3580-45b5-994a-ae57a1b02280"},{"LineNumber":152,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":75,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"40752bee-898b-483c-946d-b766618c2aeb"},{"LineNumber":154,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d0c77042-550a-49ff-8d86-c3d692087b13"},{"LineNumber":155,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":80,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7e9bb502-1dfe-49e5-93bd-76607f7f6876"},{"LineNumber":156,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"60187654-4407-4b4f-a021-80acd25370ff"},{"LineNumber":159,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4e9f1b46-3ee7-4d8b-97ec-a182a5b6639f"},{"LineNumber":161,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"97803ef5-0caa-4e6a-9688-ab92e60fde68"},{"LineNumber":163,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"05dcca96-bf63-4276-ab2c-71e9d4ee229a"},{"LineNumber":164,"Hits":0,"StartColumnNumbers":40,"EndColumnNumbers":73,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"05dcca96-bf63-4276-ab2c-71e9d4ee229a"},{"LineNumber":166,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"465a67af-6ea3-4ed3-861d-274ef9290635"},{"LineNumber":167,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":63,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a50619ad-040f-46ec-8e32-e3999d20aa6d"},{"LineNumber":168,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f81e715f-1250-421c-a02c-b5297a04fc7f"},{"LineNumber":172,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3eda12db-2a0c-4640-a1bd-381860050869"},{"LineNumber":173,"Hits":0,"StartColumnNumbers":43,"EndColumnNumbers":67,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"3eda12db-2a0c-4640-a1bd-381860050869"},{"LineNumber":175,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"57eb51e4-4357-4a56-a2a9-7f4ac238df81"},{"LineNumber":177,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":94,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f4bc8983-cd8a-4961-8e18-a108b3d27312"},{"LineNumber":179,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":78,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3286badc-89fc-4638-8ef8-93b4c1356dad"},{"LineNumber":181,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":182,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":27,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":183,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":25,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":184,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":185,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":24,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":186,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":187,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":29,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":188,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":27,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":189,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":28,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":190,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":33,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"1ca9e82c-4d0f-400d-a28f-813affd067b1"},{"LineNumber":195,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a25da8f9-497b-4ff0-b57b-3b4149c637a0"},{"LineNumber":196,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7ce74ce6-9ff6-49a1-b9c1-2447b0b055a5"},{"LineNumber":197,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fdaf4555-fd68-4139-b1af-49855701b3e3"},{"LineNumber":200,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"07e49b20-2e99-49eb-bf4f-47ca6a2adfa9"},{"LineNumber":202,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":84,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c8f0adce-0d44-40b6-b194-7dc0cef5f348"},{"LineNumber":203,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":74,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6a90b0e4-c7cc-4f8f-b78f-d9ad75f1894d"},{"LineNumber":208,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":80,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"00c76e18-ae9f-477f-baed-04b90c31c77c"},{"LineNumber":210,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":52,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"021a5b86-5b50-48f3-a020-890653201151"},{"LineNumber":212,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":66,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"739781c6-9259-4927-80e5-d1ef5c5edefe"},{"LineNumber":214,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"22eb67e5-9b8a-412e-b98b-87c13a460f38"},{"LineNumber":219,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e8776676-1f5e-4613-938a-46a4f808d9b6"},{"LineNumber":221,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":75,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"adfaa150-a736-416c-8a85-68c8c91615e5"},{"LineNumber":222,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8f58ef2a-3f16-4d91-8d2e-27b0079d2231"},{"LineNumber":226,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a617fd65-ce62-496e-9343-cd86476a5096"},{"LineNumber":228,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bf2326ae-4c1b-4b47-8737-6fbc18b20ec7"},{"LineNumber":229,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9de32b3f-9730-4067-944d-dac34c316e30"},{"LineNumber":230,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":17,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a44026ef-9b09-4432-9e9d-ed29e8dbf353"},{"LineNumber":232,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c87157e6-439b-4782-85c8-d6295cf2f0a2"},{"LineNumber":234,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"da7acc0e-3931-43d4-9b15-1248bbc2f39a"},{"LineNumber":235,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c3127527-1413-4794-8cb2-5bb73b29a5dc"},{"LineNumber":237,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"06f3a781-e638-4481-add9-ccb5a0b6f32b"},{"LineNumber":238,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e3b37b4b-1f7d-468b-a375-fb6b2f6f1591"},{"LineNumber":241,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4f6b4c13-aa0a-42a8-a18f-5557007b5ff6"},{"LineNumber":250,"Hits":0,"StartColumnNumbers":37,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9043fe7e-9906-46e2-931f-6e169b461479"},{"LineNumber":261,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"44733826-5f3a-4fe3-9975-a5996161929b"},{"LineNumber":262,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8d7089d9-e431-45a9-b565-f741d6bdb296"},{"LineNumber":265,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":85,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5f57f009-f0e9-43a1-a450-4ed365c58c87"},{"LineNumber":266,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"95bc63a9-10f2-4b39-b3d9-6eca545c1126"},{"LineNumber":267,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"10d95957-8471-46f9-b6b4-4b149f540535"},{"LineNumber":268,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":83,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"96ce3fe0-e171-4869-b713-a6c5123446d7"},{"LineNumber":269,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":50,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"86b1d55f-f68b-4dbd-bafe-590da170a529"},{"LineNumber":270,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b1ca46dd-5f29-4bc5-8176-487689af3fd0"},{"LineNumber":274,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6787ad55-5824-4fc5-8c24-33e30aca6cb4"}]},"FilterData":[]}