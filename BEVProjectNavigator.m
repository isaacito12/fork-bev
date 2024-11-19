function App = BEVProjectNavigator()
%% BEV project navigator app

% Copyright 2024 The MathWorks, Inc.

arguments (Output)
  App (1,1) struct
end

win = LiteAppWindow(SourceFilename=mfilename);
App.Window = win;

win.Name = "BEV Project Navigator";
win.Width = 560;
win.Height = 560;

width_unit = LiteAppUtility.Constant.Width{"unitwidth"};
indent = width_unit * 2;

layout = win.MainLayout;

area = NewArea(layout);
column = NewColumn(layout, area);

%% ============================================================================
row = NewRow(layout, column);

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "\textbf{Project}";

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_project_main_page = "BEVProject_main_script.html";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_project_main_page);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "BEV project main page";
link_ui.Tooltip = "Open page: " + target_project_main_page;
link_ui.HyperlinkClickedCallback = @() open_target_page(target_project_main_page);

%% ============================================================================
row = NewRow(layout, column);

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "\textbf{BEV system model}";

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_BEV_system_model = "BEV_system_model";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_BEV_system_model);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "BEV system model";
link_ui.Tooltip = "Open model: " + target_BEV_system_model;
link_ui.HyperlinkClickedCallback = @() open_target_model(target_BEV_system_model);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_BEV_main_script = "BEV_main_script";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_BEV_main_script);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "BEV main script";
link_ui.Tooltip = "Open script: " + target_BEV_main_script;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_BEV_main_script);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_BEV_Case_FTP75_Basic = "BEV_Case_FTP75_Basic";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_BEV_Case_FTP75_Basic);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Simulation case: FTP75";
link_ui.Tooltip = "Open script: " + target_BEV_Case_FTP75_Basic;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_BEV_Case_FTP75_Basic);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_BEV_Case_SimpleDrivePattern_Basic = "BEV_Case_SimpleDrivePattern_Basic";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_BEV_Case_SimpleDrivePattern_Basic);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Simulation case: Simple drive pattern";
link_ui.Tooltip = "Open script: " + target_BEV_Case_SimpleDrivePattern_Basic;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_BEV_Case_SimpleDrivePattern_Basic);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "See BEV / SimulationCases for more cases";

%% ============================================================================
row = NewRow(layout, column);

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "\textbf{High voltage battery component}";

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_hvbattery_harness_model = "BatteryHV_harness_model";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_hvbattery_harness_model);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "High voltage battery harness model";
link_ui.Tooltip = "Open model: " + target_hvbattery_harness_model;
link_ui.HyperlinkClickedCallback = @() open_target_model(target_hvbattery_harness_model);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_hvbattery_main_script = "BatteryHV_main_script";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_hvbattery_main_script);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "High voltage battery main script";
link_ui.Tooltip = "Open script: " + target_hvbattery_main_script;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_hvbattery_main_script);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_hvbattery_visualization_script = "BatteryHV_Table_visualizeParameters";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_hvbattery_visualization_script);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "High voltage battery parameter visualization script";
link_ui.Tooltip = "Open script: " + target_hvbattery_visualization_script;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_hvbattery_visualization_script);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_hvbattery_parameter_build_script = "BatteryHV_Table_buildParameters";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_hvbattery_parameter_build_script);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "High voltage battery parameter build script";
link_ui.Tooltip = "Open script: " + target_hvbattery_parameter_build_script;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_hvbattery_parameter_build_script);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_BatteryHV_Case_Random = "BatteryHV_Case_Random";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_BatteryHV_Case_Random);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Simulation case: Random load current";
link_ui.Tooltip = "Open script: " + target_BatteryHV_Case_Random;
link_ui.HyperlinkClickedCallback = @() open_target_script(target_BatteryHV_Case_Random);

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "See Components / BatteryHighVoltage / SimulationCases for more cases";

%% ============================================================================
row = NewRow(layout, column);

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "\textbf{Vehicle1D component}";

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

target_app = "Vehicle1DPerformanceDesignApp";
[~, error_message] = LiteAppUtility.GetFileFolderPath(target_app);
assert(error_message == "", error_message)

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Vehicle longitudinal performance design app";
link_ui.Tooltip = "Open app: " + target_app;
link_ui.HyperlinkClickedCallback = @() open_app(target_app);

%% ============================================================================
row = NewRow(layout, column);

label_ui = LiteAppComponent.Label(NewSlot(layout, row));
label_ui.Text = "\textbf{Quality}";

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Code analyzer";
link_ui.Tooltip = "Open tool: codeAnalyzer";
link_ui.HyperlinkClickedCallback = @() codeAnalyzer(currentProject().RootFolder);

doclink_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row, Width="fit"));
doclink_ui.ComponentWidth = "fit";
doclink_ui.HyperlinkText = "doc";
doclink_ui.Tooltip = "Open documentation: " + link_ui.HyperlinkText;
doclink_ui.HyperlinkClickedCallback = @() ...
  web("https://www.mathworks.com/help/matlab/ref/codeanalyzer-app.html");

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Test browser";
link_ui.Tooltip = "Open tool: testBrowser";
link_ui.HyperlinkClickedCallback = @() testBrowser;

doclink_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row, Width="fit"));
doclink_ui.ComponentWidth = "fit";
doclink_ui.HyperlinkText = "doc";
doclink_ui.Tooltip = "Open documentation: " + link_ui.HyperlinkText;
doclink_ui.HyperlinkClickedCallback = @() ...
  web("https://www.mathworks.com/help/matlab/ref/testbrowser-app.html");

%%
row = NewRow(layout, column);
LiteAppComponent.Label(NewSlot(layout, row, Width=indent), Text="");

link_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row));
link_ui.HyperlinkText = "Test manager";
link_ui.Tooltip = "Open tool: matlabTestManager (requires MATLAB Test license)";
link_ui.HyperlinkClickedCallback = @() matlabTestManager;

doclink_ui = LiteAppComponent.Hyperlink(NewSlot(layout, row, Width="fit"));
doclink_ui.ComponentWidth = "fit";
doclink_ui.HyperlinkText = "doc";
doclink_ui.Tooltip = "Open documentation: " + link_ui.HyperlinkText;
doclink_ui.HyperlinkClickedCallback = @() ...
  web("https://www.mathworks.com/help/matlab-test/ref/matlabtestmanager-app.html");

%%
Show(win)

end  % function

function open_target_script(target_script)
  disp("Opening script: " + target_script)
  open(target_script)
end  % function

function open_target_model(target_model)
  disp("Opening model: " + target_model)
  open_system(target_model)
end  % function

function open_target_page(target_page)
  disp("Opening page: " + target_page)
  open(target_page)
end  % function

function open_app(target_app)
  disp("Opening app: " + target_app)
  feval(target_app);
end  % function
