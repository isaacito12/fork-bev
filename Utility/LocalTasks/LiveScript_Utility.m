classdef LiveScript_Utility

  %{

From R2022a MATLAB, you can generate a Markdown file from a Live Script
with `export` command.

- https://www.mathworks.com/help/matlab/ref/export.html

`LiveScript_Utility` is a wrapper of `export` command,
and it provides two functions:

1. `LiveScript_Utility.CheckAndGenerateMarkdowns`
2. `LiveScript_Utility.GenerateMarkdown`

With these functions, you can specify the folder to store the Markdown and
media files.

`LiveScript_Utility.CheckAndGenerateMarkdowns` also checks the need of
generating a new Markdown file, and it skips the generation
if the source Live Script is not updated.

  %}

  % Copyright 2023-2024 The MathWorks, Inc.

  methods (Static)

    function CheckAndGenerateMarkdowns(LiveScriptFilenames, NameValuePairs)
      %% Generates Markdown files from Live Scripts.

      arguments (Input)
        % One or more Live Script files to convert to Markdown files.
        % Filenames can include either a relative or full path.
        LiveScriptFilenames (:,1) string {mustBeFile} = "MyLiveScript.mlx"

        % A path to the folder to store Markdown files.
        % This path can be either relative or full.
        % If the folder does not exist, it is created.
        NameValuePairs.MarkdownFolderPath (1,1) string = "Markdowns"

        % This path is relative to MarkdownFolderPath.
        % If the folder does not exist, it is created.
        NameValuePairs.MediaFolderName (1,1) string = "Media"

        NameValuePairs.ForceExport (1,1) logical = false
      end

      assert(all(endsWith(LiveScriptFilenames, ".mlx")), "File extension must be "".mlx""")

      assert(NameValuePairs.MarkdownFolderPath ~= ".", "MarkdownFolderPath must not be the current folder.")

      assert(NameValuePairs.MediaFolderName ~= ".", "MediaFolderName must not be the current folder.")

      source_files = LiveScriptFilenames;

      dest_files = fullfile( NameValuePairs.MarkdownFolderPath, ...
                             replace(LiveScriptFilenames, ".mlx", ".md") );

      for idx = 1 : numel(source_files)
        if NameValuePairs.ForceExport ...
        || LiveScript_Utility.SourceFile_isNewerThan_destinationFile( ...
            Source = source_files(idx), ...
            Destination = dest_files(idx) )

          disp("--> Exporting markdown from " + source_files(idx))

          mlxfile = source_files(idx);

          LiveScript_Utility.GenerateMarkdown( ...
            mlxfile, ...
            MarkdownFolderPath = NameValuePairs.MarkdownFolderPath, ...
            MediaFolderName = NameValuePairs.MediaFolderName )

        else
          disp("--> Skip. Markdown file is up to date for " + source_files(idx))
        end  % if
      end  % for
    end  % function


    function GenerateMarkdown(LiveScriptFilename, NameValuePairs)
      %% Generates a Markdown file from a Live Script.

      % This is a wrapper function for MALTAB's export command to generate
      % a Markdown file from a Live Script.
      %
      % If you convert "mycode1.mlx" Live Script with the export command,
      % it creates "mycode1.md" Markdown file and "mycode1_media" folder
      % in the current folder. "mycode1_media" folder is used to store image files
      % generated from the Live Script and used by the Markdown file.
      %
      %   pwd >
      %       mycode1_media > figure_0.png, figure_1.png, ...
      %       mycode1.md
      %       mycode1.mlx
      %
      % If you convert "mycode2.mlx" and "mycode3.mlx" files to Markdown files,
      % you have "mycode2_media" and "mycode3_media" folders in the current folder too.
      %
      %   pwd >
      %       mycode1_media > figure_0.png, figure_1.png, ...
      %       mycode2_media > figure_0.png, figure_1.png, ...
      %       mycode3_media > figure_0.png, figure_1.png, ...
      %       mycode1.md
      %       mycode1.mlx
      %       mycode2.md
      %       mycode2.mlx
      %       mycode3.md
      %       mycode3.mlx
      %
      % With this wrapper function, by default, Markdown file is saved in
      % "Markdowns" folder in the current folder, and the "media" folder is
      % moved below "Markdowns > Media" folder.
      %
      %   pwd > 
      %       Markdowns >
      %           Media > 
      %               mycode1_media > figure_0.png, figure_1.png, ...
      %               mycode2_media > figure_0.png, figure_1.png, ...
      %               mycode3_media > figure_0.png, figure_1.png, ...
      %           mycode1.md
      %           mycode2.md
      %           mycode3.md
      %       mycode1.mlx
      %       mycode2.mlx
      %       mycode3.mlx

      arguments
        % A Live Script file to convert to a Markdown file.
        % This filename can include either a relative or full path.
        LiveScriptFilename (1,1) string {mustBeFile} = "MyLiveScript.mlx"

        % A path to the folder to store Markdown files.
        % This path can be either relative or full.
        % If the folder does not exist, it is created.
        NameValuePairs.MarkdownFolderPath (1,1) string = "Markdowns"

        % This path is relative to MarkdownFolderPath.
        % If the folder does not exist, it is created.
        NameValuePairs.MediaFolderName (1,1) string = "Media"
      end

      assert(endsWith(LiveScriptFilename, ".mlx"), "File extension must be "".mlx""")

      assert(NameValuePairs.MarkdownFolderPath ~= ".", "MarkdownFolderPath must not be the current folder.")

      assert(NameValuePairs.MediaFolderName ~= ".", "MediaFolderName must not be the current folder.")

      [~, name_part, ~] = fileparts(LiveScriptFilename);

      markdown_destination_folder_path = NameValuePairs.MarkdownFolderPath;

      if not(isfolder(markdown_destination_folder_path))
        disp("Creating destination folder: " + markdown_destination_folder_path)
        mkdir(markdown_destination_folder_path)
      end

      media_folder_basename = name_part + "_media";

      media_folder_original_path = media_folder_basename;

      media_folder_new_path = fullfile( markdown_destination_folder_path, ...
                                        NameValuePairs.MediaFolderName );

      if not(isfolder(media_folder_new_path))
        disp("Creating media folder: " + media_folder_new_path)
        mkdir(media_folder_new_path)
      end

      % Media subfolder does not exist yet. It is created later.
      media_subfolder_new_path = fullfile( media_folder_new_path, ...
                                           media_folder_basename );

      markdown_file_name = name_part + ".md";

      markdown_file_fullpath = fullfile(markdown_destination_folder_path, markdown_file_name);

      disp("Generating Markdown file from Live Script: " + LiveScriptFilename)

      export( LiveScriptFilename, ...
        Format = "markdown", ...
        AcceptHTML = true, ...  Must be true to show images
        RenderLaTexOnline = "off", ... Do not access external internet sites from markdown file
        HideCode = false, ... Do not hide MATLAB code
        Run = true, ... Run script before export. Takes time, but necessary to always get expected result.
        IncludeOutputs = true, ... Include MATLAB output
        EmbedImages = false, ... Save images to individual image files
        FigureFormat = "png", ...
        FigureResolution = 120 ); ... This affects the size of image file

      %% Update path strings in markdown file to point to the new image file path

      % Generated Markdown file is in the current working folder.
      assert(isfile(markdown_file_name))
      content = fileread(markdown_file_name);
      content = string(content);

      % File separator must be forward slash.
      target_string = "<img src=""" + media_folder_basename + "/";

      if contains(content, target_string) && (NameValuePairs.MediaFolderName ~= ".")
        disp("Updating the path strings in the Markdown file for images.")

        % This path string is used within the generated Markdown
        % where 1) the path must be relative from the Markdown file's folder,
        % and 2) the folder separator must be backslash.
        new_path = NameValuePairs.MediaFolderName + "/" + media_folder_basename;

        new_string = "<img src=""" + new_path + "/";

        new_content = replace(content, target_string, new_string);
      else
        new_content = content;
      end

      %% Move media folder and files generated from Live Script

      disp("Moving the media folder: " + media_subfolder_new_path)

      copyfile(media_folder_original_path + "/*", media_subfolder_new_path)
      rmdir(media_folder_original_path, "s")

      %% Move Markdown file to user-specified folder

      new_tmp_mdfile = tempname(pwd) + ".md";

      fd = fopen(new_tmp_mdfile, "w");
      fprintf(fd, "%s", new_content);
      fclose(fd);

      disp("Moving Markdown file: " + markdown_file_fullpath)

      copyfile(new_tmp_mdfile, markdown_file_fullpath)
      delete(new_tmp_mdfile)

      if markdown_destination_folder_path ~= string(pwd)
        delete(markdown_file_name)
      end

      disp("done")

    end  % function


    function source_is_newer = SourceFile_isNewerThan_destinationFile(NameValuePairs)
      %%
      arguments (Input)
        % Source file must exist.
        NameValuePairs.Source (1,1) {mustBeFile}

        % Destination file may not exist.
        NameValuePairs.Destination (1,1) string
      end
      arguments (Output)
        % This is true if either of these condisions is met:
        % - The source file is newer than the destination file.
        % - The destination file does not exist.
        source_is_newer (1,1) logical
      end
      source_is_newer = false;
      sourcefile_info = dir(NameValuePairs.Source);
      % As of R2022b, serial date numbers are not recommended.
      % Convert the serial date number to a datetime value by using the datetime function.
      sourcefile_datetime = datetime(sourcefile_info.datenum, ConvertFrom="datenum");
      if isfile(NameValuePairs.Destination)
        destfile_info = dir(NameValuePairs.Destination);
        destfile_datetime = datetime(destfile_info.datenum, ConvertFrom="datenum");
        if sourcefile_datetime > destfile_datetime
          source_is_newer = true;
        end  % if
      else
        % Destination file does not exist.
        source_is_newer = true;
      end  % if
    end  % function

  end  % methods

end  % classdef
