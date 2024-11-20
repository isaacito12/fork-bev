var sourceData190 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppComponent\\CheckBox.m","RawFileContents":["classdef CheckBox < LiteAppComponent.LiteAppComponentBase","  %% Check box component","","  % Copyright 2023-2024 The MathWorks, Inc.","","  properties","","    MainCheckBox matlab.ui.control.CheckBox","","    ValueChangedCallback {LiteAppUtility.mustBeFunctionHandleOrEmpty} = []","","    ComponentWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = \"1x\"","    CheckBoxWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveInteger} = \"fit\"","    HorizontalAlignment (1,1) {mustBeMember( HorizontalAlignment, [\"left\", \"center\", \"right\"])} = \"left\"","","    ComponentHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline++\"}","    % Check box height is not configurable, i.e., it is constant.","    VerticalAlignment (1,1) {mustBeMember( VerticalAlignment, [\"top\", \"center\", \"bottom\"])} = \"center\"","","  end  % properties","","  properties (Dependent)","","    % True for checked. False for unchecked.","    Value (1,1) logical","","    Text (1,1) string","","  end  % properties","","  methods (Access=protected)","","    function setup(component)","      %%","      setup@LiteAppComponent.LiteAppComponentBase(component)","","      component.gridObj = uigridlayout(component.baseGridObject);","      component.gridObj.Layout.Row = 1;","      component.gridObj.Layout.Column = 1;","      component.gridObj.RowHeight = {'1x', 'fit', '1x'};","      component.gridObj.ColumnWidth = {0, 'fit', '1x'};","      component.gridObj.Padding = component.CommonPadding;","      component.gridObj.ColumnSpacing = component.CommonColumnSpacing;","      component.gridObj.RowSpacing = component.CommonRowSpacing;","","      % The main element of this component.","      component.MainCheckBox = uicheckbox(component.gridObj);","      component.MainCheckBox.Layout.Row = 2;","      component.MainCheckBox.Layout.Column = 2;","      component.MainCheckBox.FontSize = component.CommonFontSize;","      component.MainCheckBox.ValueChangedFcn = ...","        @(sourceObject, eventData) checkboxValueChanged(component);","      component.MainCheckBox.WordWrap = \"off\";","","      % -----------------------------------------------------------------------","      % Default settings","","      component.Value = false;","      component.Text = \"Check box\";","","    end  % function","","    function update(component)","      %%","      update@LiteAppComponent.LiteAppComponentBase(component)","","      component.baseGridObject.RowHeight{1} = component.ComponentHeight;","      component.baseGridObject.ColumnWidth{1} = component.ComponentWidth;","","      switch component.VerticalAlignment","        case \"top\"","          component.gridObj.RowHeight = {0, 'fit', '1x'};","        case \"center\"","          component.gridObj.RowHeight = {'1x', 'fit', '1x'};","        case \"bottom\"","          component.gridObj.RowHeight = {'1x', 'fit', 0};","      end  % switch","","      switch component.HorizontalAlignment","        case \"left\"","          component.gridObj.ColumnWidth = {0, component.CheckBoxWidth, '1x'};","        case \"center\"","          component.gridObj.ColumnWidth = {'1x', component.CheckBoxWidth, '1x'};","        case \"right\"","          component.gridObj.ColumnWidth = {'1x', component.CheckBoxWidth, 0};","      end  % switch","","      if component.HighlightBackground","        component.gridObj.BackgroundColor = component.HighlightBackgroundColor;","      end  % if","    end  % function","","  end  % methods","","  methods","","    % -------------------------------------------------------------------------","","    function on_off = get.Value(component)","      arguments (Output)","        on_off (1,1) matlab.lang.OnOffSwitchState","      end","      on_off = component.MainCheckBox.Value;","    end  % function","","    function set.Value(component, on_off)","      arguments (Input)","        component","        on_off (1,1) matlab.lang.OnOffSwitchState","      end","      component.MainCheckBox.Value = on_off;","    end  % function","","    % -------------------------------------------------------------------------","","    function txt = get.Text(component)","      arguments (Output)","        txt (1,1) string","      end","      txt = component.MainCheckBox.Text;","    end  % function","","    function set.Text(component, txt)","      arguments (Input)","        component","        txt (1,1) string","      end","      component.MainCheckBox.Text = txt;","    end  % function","","  end  % methods","","  properties (Access=private, Transient, NonCopyable)","    gridObj matlab.ui.container.GridLayout","  end  % properties","","  methods (Access=private)","","    function checkboxValueChanged(component)","","      if not(isempty(component.ValueChangedCallback)) ...","          && isa(component.ValueChangedCallback, 'function_handle')","        component.ValueChangedCallback()","      end","","      notify(component, \"CheckBoxValueChanged\")","      % Make sure to define CheckBoxValueChanged event.","","    end  % function","","  end  % methods","","  events (HasCallbackProperty, NotifyAccess=protected)","","    % CheckBoxValueChanged event adds CheckBoxValueChangedFcn property to this class.","    % This event is created when check box is either checked or unchecked.","    CheckBoxValueChanged","","  end  % events","","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":33,"Hits":7,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"b063dd8c-6cf8-4c0a-af03-0882c6c0c692"},{"LineNumber":63,"Hits":26,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"1c8efc92-89c8-4c48-81ac-8ae6d3d93fe5"},{"LineNumber":99,"Hits":6,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"43455fbb-725f-4b60-a3c3-636c7586d9d3"},{"LineNumber":106,"Hits":13,"StartColumnNumbers":4,"EndColumnNumbers":41,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"330803ae-a83a-4220-a549-0a14227d4055"},{"LineNumber":116,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"b556d9f5-6a64-4515-8fd9-e7e15993e7e7"},{"LineNumber":123,"Hits":14,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"3b23f10e-0bb3-44db-aa1a-a8f273159476"},{"LineNumber":139,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"ef3b8969-9e9b-41ee-b578-ad3ee51fd311"}],"Statement":[{"LineNumber":35,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0d99ce49-06d8-4832-bea8-aad265eefbdb"},{"LineNumber":37,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"36a64133-abf9-4f0e-9b22-e062a1921cf4"},{"LineNumber":38,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7dac49f6-74ea-45af-93cf-a755bb84961f"},{"LineNumber":39,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"98574a1b-c488-402e-a98d-274910c0d0d0"},{"LineNumber":40,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8b2f138b-01d8-45ba-ab9b-b378ad136cfe"},{"LineNumber":41,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"69096bc8-8bd1-46d2-8e09-371b33c4fa87"},{"LineNumber":42,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5e47fcbd-4c56-49d1-a7e9-c97dba9c9ff2"},{"LineNumber":43,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":70,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2b65cad4-ab03-4782-851b-3702e028439a"},{"LineNumber":44,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2dcf9b42-60a9-4ce1-9495-9da7799703b3"},{"LineNumber":47,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3b5187bc-e825-4003-ad86-13ae4ff773b6"},{"LineNumber":48,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3186dd8a-7820-48ad-abac-6f44d075ae1c"},{"LineNumber":49,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"85569767-5d8a-43d4-b0ae-adc37c556fe6"},{"LineNumber":50,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d1c96f60-ae9c-4605-a837-44373204434a"},{"LineNumber":51,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"85261d2b-09af-4ea3-ad84-5951f0aff5c9"},{"LineNumber":52,"Hits":7,"StartColumnNumbers":8,"EndColumnNumbers":67,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"85261d2b-09af-4ea3-ad84-5951f0aff5c9"},{"LineNumber":53,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2bef6b2f-c0ef-4831-b139-8d6763b04785"},{"LineNumber":58,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5b36b2ff-6af6-4785-ac07-7efd3a31a63d"},{"LineNumber":59,"Hits":7,"StartColumnNumbers":6,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c689a110-5f28-4cbe-8707-4b5c70b926b9"},{"LineNumber":65,"Hits":26,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"eef16231-def6-4cd1-af81-9a6ea29fa626"},{"LineNumber":67,"Hits":26,"StartColumnNumbers":6,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4bc5eb7c-c60d-4e3e-82d9-d0f1a15c94f9"},{"LineNumber":68,"Hits":26,"StartColumnNumbers":6,"EndColumnNumbers":73,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7020b719-d1dd-42f4-9e5b-61c7149cb175"},{"LineNumber":70,"Hits":26,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1ca336b1-a5fa-4222-99f2-2e12aea3ef11"},{"LineNumber":71,"Hits":26,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"12bdf75f-a163-4222-a589-d83aa108da45"},{"LineNumber":72,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b7f407ee-4f5b-4dda-9b72-3f20e214cf72"},{"LineNumber":73,"Hits":26,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"02efd780-46ac-479f-97d2-a4beba6774ad"},{"LineNumber":74,"Hits":26,"StartColumnNumbers":10,"EndColumnNumbers":60,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"34cb1b72-1d3e-4024-87c1-d3835dd166ac"},{"LineNumber":75,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"bf7838fa-1f76-4cd8-9216-d40c6bbae7b2"},{"LineNumber":76,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8863a4f9-5a7a-4eb4-b76f-c615deee08ff"},{"LineNumber":79,"Hits":26,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c82d9474-94f8-44fd-bd59-1e3f2e53901e"},{"LineNumber":80,"Hits":26,"StartColumnNumbers":8,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"32dd9ac0-1c10-42bf-a65e-d4b8b6a66d06"},{"LineNumber":81,"Hits":26,"StartColumnNumbers":10,"EndColumnNumbers":77,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"eea44856-88be-4581-8825-6f0ceec1ef98"},{"LineNumber":82,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cf3d4f3a-8651-4a8b-9537-b26c046bd241"},{"LineNumber":83,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":80,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cdecc751-64a7-44d5-9dce-90565eb59333"},{"LineNumber":84,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"77b96bad-37df-42fd-a77b-c0ed3ac82dd1"},{"LineNumber":85,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":77,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cd559c37-99e4-46b6-bfa1-a8ee76ac2f4a"},{"LineNumber":88,"Hits":26,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"eabff25a-3a19-4fe7-b95e-7c95a9f1bebe"},{"LineNumber":89,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":79,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"532d14b1-88ec-4d3e-ba55-ee750201e1d8"},{"LineNumber":103,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a864ba3e-4a5e-4c33-b52d-ec83bb20bc9a"},{"LineNumber":111,"Hits":13,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e10de9c1-f3f7-4bbc-ac46-0b94acf9cf1a"},{"LineNumber":120,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0765aa80-2bfc-4965-b772-6f08fa731447"},{"LineNumber":128,"Hits":14,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ad881ccc-05a6-4b1a-a2c3-63c5bfae286b"},{"LineNumber":141,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b49fd5cc-3e25-43d2-a1b0-7772c30a2c74"},{"LineNumber":142,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":67,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"b49fd5cc-3e25-43d2-a1b0-7772c30a2c74"},{"LineNumber":143,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3ff5acc0-5cc6-4899-bca5-5afc832a95dc"},{"LineNumber":146,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a81be6fb-f5e2-4639-b45b-69d21bc793f8"}]},"FilterData":[]}