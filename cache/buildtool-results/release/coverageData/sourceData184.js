var sourceData184 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppComponent\\Button.m","RawFileContents":["classdef Button < LiteAppComponent.LiteAppComponentBase","  %% Button component","","  % Copyright 2023-2024 The MathWorks, Inc.","","  properties","","    MainButton (1,1) matlab.ui.control.Button","","    ButtonPushedCallback {LiteAppUtility.mustBeFunctionHandleOrEmpty} = []","","    ComponentWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = \"1x\"","    ButtonWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Width{\"unitwidth\"} * 10","    HorizontalAlignment (1,1) {mustBeMember( HorizontalAlignment, [\"left\", \"center\", \"right\"])} = \"center\"","","    ComponentHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline++\"}","    ButtonHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline+\"}","    VerticalAlignment (1,1) {mustBeMember( VerticalAlignment, [\"top\", \"center\", \"bottom\"])} = \"center\"","","  end  % properties","","  properties (Dependent)","","    Text (1,1) string","","    % Icon image to show in button. This property supports uibutton's predefined icons only.","    % For more information, see the documentation about Icon property of uibutton.","    Icon (1,1) string {mustBeMember(Icon, [\"none\", \"question\", \"info\", \"success\", \"warning\", \"error\"])}","","    Enable (1,1) matlab.lang.OnOffSwitchState","","  end  % properties","","  methods (Access=protected)","","    function setup(component)","      %%","      setup@LiteAppComponent.LiteAppComponentBase(component)","","      component.gridObj = uigridlayout(component.baseGridObject);","      component.gridObj.Layout.Row = 1;","      component.gridObj.Layout.Column = 1;","      component.gridObj.RowHeight = {'1x', 'fit', '1x'};","      component.gridObj.ColumnWidth = {'1x', 'fit', '1x'};","      component.gridObj.Padding = component.CommonPadding;","      component.gridObj.ColumnSpacing = component.CommonColumnSpacing;","      component.gridObj.RowSpacing = component.CommonRowSpacing;","","      % The main element of this component.","      component.MainButton = uibutton(component.gridObj);","      component.MainButton.Layout.Row = 2;","      component.MainButton.Layout.Column = 2;","      component.MainButton.ButtonPushedFcn = @(sourceObject, eventData) buttonPushed(component);","      component.MainButton.FontSize = component.CommonFontSize;","","      % -----------------------------------------------------------------------","      % Default settings","","      component.Text = \"Button\";","      component.Icon = \"none\";","      component.Enable = \"on\";","","    end  % function","","    function update(component)","      %%","      update@LiteAppComponent.LiteAppComponentBase(component)","","      component.baseGridObject.RowHeight{1} = component.ComponentHeight;","      component.baseGridObject.ColumnWidth{1} = component.ComponentWidth;","","      switch component.VerticalAlignment","        case \"top\"","          component.gridObj.RowHeight = {0, component.ButtonHeight, '1x'};","        case \"center\"","          component.gridObj.RowHeight = {'1x', component.ButtonHeight, '1x'};","        case \"bottom\"","          component.gridObj.RowHeight = {'1x', component.ButtonHeight, 0};","      end  % switch","","      switch component.HorizontalAlignment","        case \"left\"","          component.gridObj.ColumnWidth = {  0,  component.ButtonWidth, '1x'};","        case \"center\"","          component.gridObj.ColumnWidth = {'1x', component.ButtonWidth, '1x'};","        case \"right\"","          component.gridObj.ColumnWidth = {'1x', component.ButtonWidth,   0 };","      end  % switch","","      if component.HighlightBackground","        component.gridObj.BackgroundColor = component.HighlightBackgroundColor;","      end  % if","    end  % function","","  end  % methods","","  methods","","    % -------------------------------------------------------------------------","","    function x = get.Text(component)","      arguments (Output)","        x (1,1) string","      end","      x = string(component.MainButton.Text);","    end  % function","","    function set.Text(component, x)","      arguments (Input)","        component","        x (1,1) string","      end","      component.MainButton.Text = x;","    end  % function","","    % -------------------------------------------------------------------------","","    function x = get.Icon(component)","      arguments (Output)","        x (1,1) string","      end","      tmp = string(component.MainButton.Icon);","      if tmp == \"\"","        x = \"none\";","      else","        x = tmp;","      end","    end  % function","","    function set.Icon(component, x)","      arguments (Input)","        component","        x (1,1) string {mustBeMember(x, [\"none\", \"question\", \"info\", \"success\", \"warning\", \"error\"])}","      end","      if x == \"none\"","        component.MainButton.Icon = \"\";","      else","        component.MainButton.Icon = x;","      end","    end  % function","","    % -------------------------------------------------------------------------","","    function x = get.Enable(component)","      arguments (Output)","        x (1,1) matlab.lang.OnOffSwitchState","      end","      x = component.MainButton.Enable;","    end  % function","","    function set.Enable(component, x)","      arguments (Input)","        component","        x (1,1) matlab.lang.OnOffSwitchState","      end","      component.MainButton.Enable = x;","    end  % function","","  end  % methods","","  properties (Access=private, Transient, NonCopyable)","    gridObj matlab.ui.container.GridLayout","  end  % properties","","  methods (Access=private)","    function buttonPushed(component)","      if not(isempty(component.ButtonPushedCallback)) ...","          && isa(component.ButtonPushedCallback, 'function_handle')","        component.ButtonPushedCallback()","      end","    end  % function","  end  % methods","","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":36,"Hits":6,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":65,"Hits":14,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":101,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":108,"Hits":12,"StartColumnNumbers":4,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":118,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":130,"Hits":6,"StartColumnNumbers":4,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":144,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":151,"Hits":6,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":166,"Hits":1,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false}],"Statement":[{"LineNumber":38,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":40,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false},{"LineNumber":41,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":42,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":43,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false},{"LineNumber":44,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":45,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":46,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":70,"ContinuedLine":false},{"LineNumber":47,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":50,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":51,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":52,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":53,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":96,"ContinuedLine":false},{"LineNumber":54,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":63,"ContinuedLine":false},{"LineNumber":59,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":60,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":61,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":67,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":69,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":70,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":73,"ContinuedLine":false},{"LineNumber":72,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":73,"Hits":14,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":74,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":75,"Hits":14,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":76,"Hits":14,"StartColumnNumbers":10,"EndColumnNumbers":77,"ContinuedLine":false},{"LineNumber":77,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":78,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":74,"ContinuedLine":false},{"LineNumber":81,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":82,"Hits":14,"StartColumnNumbers":8,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":83,"Hits":14,"StartColumnNumbers":10,"EndColumnNumbers":78,"ContinuedLine":false},{"LineNumber":84,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":85,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":78,"ContinuedLine":false},{"LineNumber":86,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":87,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":78,"ContinuedLine":false},{"LineNumber":90,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":91,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":105,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":113,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":122,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":46,"ContinuedLine":false},{"LineNumber":123,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":124,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":19,"ContinuedLine":false},{"LineNumber":126,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":133,"Hits":6,"StartColumnNumbers":24,"EndColumnNumbers":100,"ContinuedLine":false},{"LineNumber":135,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":136,"Hits":6,"StartColumnNumbers":8,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":138,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":148,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":156,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":167,"Hits":1,"StartColumnNumbers":6,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":168,"Hits":1,"StartColumnNumbers":10,"EndColumnNumbers":67,"ContinuedLine":true},{"LineNumber":169,"Hits":1,"StartColumnNumbers":8,"EndColumnNumbers":40,"ContinuedLine":false}]}}