var sourceData194 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppComponent\\LiteAppWindowHeader.m","RawFileContents":["classdef LiteAppWindowHeader < LiteAppComponent.LiteAppComponentBase","  %% Lite App Window Header component","","  % Copyright 2024 The MathWorks, Inc.","","  properties","","    AppName (1,1) string = \"\"","","    SourceName (1,1) string","","    ShowCheckBox (1,1) matlab.lang.OnOffSwitchState = \"on\"","    CheckBox LiteAppComponent.CheckBox","","  end  % properties","","  methods (Access=protected)","","    function setup(component)","      %%","      setup@LiteAppComponent.LiteAppComponentBase(component)","","      common_height = LiteAppUtility.Constant.Height{\"oneline++\"};","","      % Create two rows.","      component.baseGridObject.RowHeight = {common_height, 'fit'};","","      % Create three columns.","      component.baseGridObject.ColumnWidth = {'1x', 'fit', 'fit'};","","      component.label_liteappobj = LiteAppComponent.Label(component.baseGridObject);","      component.label_liteappobj.Layout.Row = 1;","      component.label_liteappobj.Layout.Column = 1;","      component.label_liteappobj.Interpreter = \"latex\";","      component.label_liteappobj.WordWrap = \"off\";","","      component.link_liteappobj = LiteAppComponent.Hyperlink(component.baseGridObject);","      component.link_liteappobj.Layout.Row = 1;","      component.link_liteappobj.Layout.Column = 2;","      component.link_liteappobj.ComponentHeight = common_height;","      component.link_liteappobj.VerticalAlignment = \"center\";","      component.link_liteappobj.HyperlinkText = \"Source\";","      component.link_liteappobj.Tooltip = \"Open app source code.\";","","      component.CheckBox = LiteAppComponent.CheckBox(component.baseGridObject);","      component.CheckBox.Layout.Row = 1;","      component.CheckBox.Layout.Column = 3;","      component.CheckBox.ComponentHeight = common_height;","      component.CheckBox.VerticalAlignment = \"center\";","","      % -----------------------------------------------------------------------","      % Horizontal line","","      component.baseGridObject.RowHeight{2} = 1;  % thicknesss of the line","      hline = uipanel(component.baseGridObject);","      hline.Layout.Row = 2;","      hline.Layout.Column = [1 3];","      hline.BorderType = \"none\";","      hline.BorderWidth = 0;","      hline.BackgroundColor = 0.5*ones(1,3);  % line color","","    end  % function","","    function update(component)","      %%","      update@LiteAppComponent.LiteAppComponentBase(component)","","      if component.AppName == \"\"","        component.AppName = \"Lite App\";","      end","","      component.label_liteappobj.Text = \"\\textbf{\" + component.AppName + \"}\";","","      link_width = 0;","      if component.SourceName ~= \"\"","        link_width = 'fit';","        component.link_liteappobj.HyperlinkClickedCallback = @() open(component.SourceName);","      end","","      checkbox_width = 0;","      if component.ShowCheckBox","        checkbox_width = 'fit';","      end","","      component.baseGridObject.ColumnWidth = {'1x', link_width, checkbox_width};","    end  % function","","  end  % methods","","  % To test gestures programmatically, ui-objects must be public.","  % However, they should not be publicly accessed for other purposes.","  properties (Access=public, Transient, NonCopyable)","    label_liteappobj LiteAppComponent.Label","    link_liteappobj LiteAppComponent.Hyperlink","  end  % properties","","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":19,"Hits":6,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":64,"Hits":18,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":false}],"Statement":[{"LineNumber":21,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false},{"LineNumber":23,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":26,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":29,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":31,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":84,"ContinuedLine":false},{"LineNumber":32,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":33,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":51,"ContinuedLine":false},{"LineNumber":34,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":55,"ContinuedLine":false},{"LineNumber":35,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":37,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":87,"ContinuedLine":false},{"LineNumber":38,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":39,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":40,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":64,"ContinuedLine":false},{"LineNumber":41,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":42,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":43,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":66,"ContinuedLine":false},{"LineNumber":45,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":79,"ContinuedLine":false},{"LineNumber":46,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":47,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":48,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":49,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":54,"ContinuedLine":false},{"LineNumber":54,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":55,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":56,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":57,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":34,"ContinuedLine":false},{"LineNumber":58,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":59,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":60,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":66,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":68,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":69,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":39,"ContinuedLine":false},{"LineNumber":72,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":77,"ContinuedLine":false},{"LineNumber":74,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":75,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":76,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":77,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":92,"ContinuedLine":false},{"LineNumber":80,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":81,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":82,"Hits":18,"StartColumnNumbers":8,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":85,"Hits":18,"StartColumnNumbers":6,"EndColumnNumbers":80,"ContinuedLine":false}]}}