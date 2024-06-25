var sourceData187 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppComponent\\EditField.m","RawFileContents":["classdef EditField < LiteAppComponent.LiteAppComponentBase","  %% Edit field component","","  % Copyright 2023-2024 The MathWorks, Inc.","","  properties","","    MainEditField matlab.ui.control.EditField","","    ValueChangedCallback {LiteAppUtility.mustBeFunctionHandleOrEmpty} = []","","    ReadOnly (1,1) matlab.lang.OnOffSwitchState = \"off\"","","    ComponentWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = \"1x\"","","    ComponentHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline++\"}","    EditFieldHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline+\"}","    VerticalAlignment (1,1) {mustBeMember( VerticalAlignment, [\"top\", \"center\", \"bottom\"])} = \"center\"","","  end  % properties","","  properties (Dependent)","","    Value (1,1) string","","  end  % properties","","  methods (Access=protected)","","    function setup(component)","      %%","      setup@LiteAppComponent.LiteAppComponentBase(component)","","      component.gridObj = uigridlayout(component.baseGridObject);","      component.gridObj.Layout.Row = 1;","      component.gridObj.Layout.Column = 1;","      component.gridObj.RowHeight = {'1x', 'fit', '1x'};","      component.gridObj.ColumnWidth = {'1x'};","      component.gridObj.Padding = [1 0 1 0];  % left bottom right top","      component.gridObj.ColumnSpacing = 1;","      component.gridObj.RowSpacing = 0;","","      % The main element of this component.","      component.MainEditField = uieditfield(component.gridObj);","      component.MainEditField.Layout.Row = 2;","      component.MainEditField.Layout.Column = 1;","      component.MainEditField.FontSize = component.CommonFontSize;","      component.MainEditField.ValueChangedFcn = ...","        @(sourceObject, eventData) editfieldValueChanged(component);","      component.MainEditField.CharacterLimits = component.CommonCharacterLimits;","","      % -----------------------------------------------------------------------","      % Default settings","","      component.Value = \"\";","","    end  % function","","    function update(component)","      %%","      update@LiteAppComponent.LiteAppComponentBase(component)","","      component.MainEditField.Editable = not(component.ReadOnly);","","      component.baseGridObject.RowHeight{1} = component.ComponentHeight;","      component.baseGridObject.ColumnWidth{1} = component.ComponentWidth;","","      switch component.VerticalAlignment","        case \"top\"","          component.gridObj.RowHeight = {   0, component.EditFieldHeight, '1x'};","        case \"center\"","          component.gridObj.RowHeight = {'1x', component.EditFieldHeight, '1x'};","        case \"bottom\"","          component.gridObj.RowHeight = {'1x', component.EditFieldHeight,   0 };","      end  % switch","","      if component.HighlightBackground","        component.gridObj.BackgroundColor = component.HighlightBackgroundColor;","      end  % if","    end  % function","","  end  % methods","","  methods","","    % -------------------------------------------------------------------------","","    function x = get.Value(component)","      arguments (Output)","        x (1,1) string","      end","      x = string(component.MainEditField.Value);","    end  % function","","    function set.Value(component, x)","      arguments (Input)","        component","        x (1,1) string","      end","      component.MainEditField.Value = x;","    end  % function","","    % -------------------------------------------------------------------------","","  end  % methods","","  properties (Access=private, Transient, NonCopyable)","    gridObj matlab.ui.container.GridLayout","  end  % properties","","  methods (Access=private)","","    function editfieldValueChanged(component)","      if not(isempty(component.ValueChangedCallback)) ...","          && isa(component.ValueChangedCallback, 'function_handle')","        component.ValueChangedCallback()","      end  % if","","      notify(component, \"ValueChanged\")","      % Make sure to define ValueChanged event.","","    end  % function","","  end  % methods","","  events (HasCallbackProperty, NotifyAccess=protected)","","    % ValueChanged event adds ValueChangedFcn property to this class.","    ValueChanged","","  end  % events","","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":30,"Hits":84,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":59,"Hits":224,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":88,"Hits":720,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":95,"Hits":268,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":113,"Hits":2,"StartColumnNumbers":4,"EndColumnNumbers":45,"ContinuedLine":false}],"Statement":[{"LineNumber":32,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":34,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false},{"LineNumber":35,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":36,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":37,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false},{"LineNumber":38,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":39,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":40,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false},{"LineNumber":41,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":44,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":63,"ContinuedLine":false},{"LineNumber":45,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false},{"LineNumber":46,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":47,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":48,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":49,"Hits":84,"StartColumnNumbers":8,"EndColumnNumbers":68,"ContinuedLine":true},{"LineNumber":50,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":80,"ContinuedLine":false},{"LineNumber":55,"Hits":84,"StartColumnNumbers":6,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":61,"Hits":224,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":63,"Hits":224,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false},{"LineNumber":65,"Hits":224,"StartColumnNumbers":6,"EndColumnNumbers":72,"ContinuedLine":false},{"LineNumber":66,"Hits":224,"StartColumnNumbers":6,"EndColumnNumbers":73,"ContinuedLine":false},{"LineNumber":68,"Hits":224,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":69,"Hits":224,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":70,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":80,"ContinuedLine":false},{"LineNumber":71,"Hits":224,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":72,"Hits":224,"StartColumnNumbers":10,"EndColumnNumbers":80,"ContinuedLine":false},{"LineNumber":73,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":74,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":80,"ContinuedLine":false},{"LineNumber":77,"Hits":224,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":78,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":92,"Hits":720,"StartColumnNumbers":6,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":100,"Hits":268,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":114,"Hits":2,"StartColumnNumbers":6,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":115,"Hits":2,"StartColumnNumbers":10,"EndColumnNumbers":67,"ContinuedLine":true},{"LineNumber":116,"Hits":2,"StartColumnNumbers":8,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":119,"Hits":2,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false}]}}