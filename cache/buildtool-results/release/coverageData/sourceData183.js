var sourceData183 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\Checks\\checkCallbackButton.m","RawFileContents":["function checkCallbackButton(targetModel, fileList)","%% Checks ClickFcn callback of Callback Button block","% This function finds Callback Button blocks from the target model (1st argument)","% and checks the content of its ClickFcn callback.","% If ClickFcn contains the `edit` command, check is made such that","% filename passed to it exists in the file list (2nd argument).","% If ClickFcn does not contain `edit`, ClickFcn is evaluated.","%","% There is a strong assumption that ClickFcn is extremely simple and short,","% especially when `edit` is used.","%","% Not evaluating `edit` is important because `edit` always errors","% if MATLAB is launched with -nodesktop option,","% which is the case in Continuous Integration (CI) pipeline,","% meaning that CI fails once `edit` is evaluated.","% Because of this reason, tests during CI never use `edit`.","% However, `edit` is used in some of the callbacks,","% and it is important to make sure that it works in interactive uses.","%","% Callback Button blocks within referenced subsystems included in","% the target model are not checked.","% To check those blocks, pass the referenced subsystem directly to this function.","","% Copyright 2023 The MathWorks, Inc.","","arguments","  targetModel (1,:) {mustBeText} = \"\"","  fileList (:,1) {mustBeText} = \"\"","end","","% Find Callback Button blocks.","pathToCallbackButtons = string(getfullname(Simulink.findBlocksOfType(targetModel, \"CallbackButton\")));","numButtons = numel(pathToCallbackButtons);","","if numButtons == 0","  return  % <======================================================= RETURN","end","","disp(\">>>>>> Checking: \" + targetModel)","","if numButtons >= 2","  disp(\"Found \" + numButtons + \" Callback Button block:\")","else","  disp(\"Found \" + numButtons + \" Callback Button blocks:\")","end","disp(pathToCallbackButtons)","disp(\" \")","","% Find referenced subsystems.","find_opts = Simulink.FindOptions(RegExp = true);","refsubs = Simulink.findBlocksOfType(bdroot, \"SubSystem\", \"ReferencedSubsystem\", \".\", find_opts);","refsubs = string(getfullname(refsubs));","","disp(\"Found referenced subsystem(s):\")","disp(refsubs)","disp(\" \")","","% For each discovered block, check code in ClickFcn callback.","for idx = 1 : numButtons","  disp(newline + \">>> \" + idx + \": \" + pathToCallbackButtons(idx))","","  % Path to target block","  blkPath = pathToCallbackButtons(idx);","","  if startsWith(blkPath, refsubs)","    disp(\"Skipping because the block is under referenced subsystem.\")","    continue  % <================================================= CONTINUE","  end","","  % Get the code to test.","  codeStr = get_param(blkPath, \"ClickFcn\");","","  % If `edit` is used in the code string, the string is not evaluated.","  % Instead, the file being passed to `edit` is checked its existence.","  % This is based on the assumption that","  % if edit is found, the code string only contains one line for edit.","","  pattern_has_edit = letterBoundary + \"edit\" + letterBoundary;","","  pattern_has_openREADME = \"_openREADME\" + letterBoundary;","","  if contains(codeStr, pattern_has_edit)","    disp(\"Found `edit` in ClickFcn. Check that the file passed to `edit` exists in the file list.\")","","    % Attempt to get the filename passed to edit.","    % Pattern matching logic here is kept intentionally simple.","    % The check succeeds only if the line containing edit is","    % straightforward, like edit(\"foo.m\").","","    % edit can be command form or function form.","    %   edit foo","    %   edit(\"foo\")","    %   edit('foo.m')","    filename = string(strip(extractAfter(codeStr, pattern_has_edit)));","    if startsWith(filename, \"(\" + (\"\"\"\"|\"'\")) && endsWith(filename, (\"\"\"\"|\"'\") + \")\")","      % Get foo.m from (\"foo.m\") or ('foo.m')","      filename = extractBetween(filename, \"(\"+(\"\"\"\"|\"'\"), (\"\"\"\"|\"'\")+\")\");","    end","","    disp(\"Filename passed to edit: \" + filename)","","    found = true;","    if endsWith(filename, [\".m\", \".mlx\"])","      lix = endsWith(fileList, filename);  % logical index","      if all(lix == 0)","        found = false;","        warning(\"File not found: \" + filename)","      end","    else","      lix = endsWith(fileList, [filename+\".m\", filename+\".mlx\"]);","      if all(lix == 0)","        found = false;","        warning(\"File not found: \" + filename+\".m, \" + filename+\".mlx\")","      end","    end","","    if found","      assert(nnz(lix) == 1, ...","        \"Only one file should be found, but two or more files were found: \" ...","        + join(fileList(lix), \", \"))","      fullPathToFile = fileList(lix);","      disp(\"Found: \" + fullPathToFile)","    end","","  elseif contains(codeStr, pattern_has_openREADME)","    disp(\"Found openREADME function in ClickFcn. Check that the README.md file exists in the file list.\")","","    fcnName = string(strip(codeStr));","    eval(fcnName + \"(TestRun=true)\")","  else","    % If `edit` is not found in the ClickFcn code string, evaluate it.","    disp(\"  >>> Evaluating ClickFcn. This must finish without warning or error.\")","    eval(codeStr)","    disp(\"  <<< done.\")","","  end  % if","end  % for","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":4,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false},"Statement":[{"LineNumber":27,"Hits":[4,0],"StartColumnNumbers":[21,35],"EndColumnNumbers":[31,37],"ContinuedLine":false},{"LineNumber":28,"Hits":[4,0],"StartColumnNumbers":[18,32],"EndColumnNumbers":[28,34],"ContinuedLine":false},{"LineNumber":32,"Hits":4,"StartColumnNumbers":0,"EndColumnNumbers":102,"ContinuedLine":false},{"LineNumber":33,"Hits":4,"StartColumnNumbers":0,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":35,"Hits":4,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":36,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":76,"ContinuedLine":false},{"LineNumber":39,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":41,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":42,"Hits":2,"StartColumnNumbers":2,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":44,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":46,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":47,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":9,"ContinuedLine":false},{"LineNumber":50,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":51,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":96,"ContinuedLine":false},{"LineNumber":52,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":54,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":55,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":56,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":9,"ContinuedLine":false},{"LineNumber":59,"Hits":3,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":60,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":63,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":65,"Hits":6,"StartColumnNumbers":2,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":66,"Hits":3,"StartColumnNumbers":4,"EndColumnNumbers":69,"ContinuedLine":false},{"LineNumber":67,"Hits":3,"StartColumnNumbers":4,"EndColumnNumbers":76,"ContinuedLine":false},{"LineNumber":71,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":78,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":62,"ContinuedLine":false},{"LineNumber":80,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":82,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":83,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":99,"ContinuedLine":false},{"LineNumber":94,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":95,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":85,"ContinuedLine":false},{"LineNumber":97,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":100,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":102,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":103,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":104,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":105,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":106,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":107,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":110,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false},{"LineNumber":111,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":112,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":113,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":71,"ContinuedLine":false},{"LineNumber":117,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":12,"ContinuedLine":false},{"LineNumber":118,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":119,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":75,"ContinuedLine":true},{"LineNumber":120,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":36,"ContinuedLine":true},{"LineNumber":121,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":122,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":125,"Hits":3,"StartColumnNumbers":2,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":126,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":105,"ContinuedLine":false},{"LineNumber":128,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":129,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":132,"Hits":3,"StartColumnNumbers":4,"EndColumnNumbers":81,"ContinuedLine":false},{"LineNumber":133,"Hits":3,"StartColumnNumbers":4,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":134,"Hits":3,"StartColumnNumbers":4,"EndColumnNumbers":23,"ContinuedLine":false}]}}