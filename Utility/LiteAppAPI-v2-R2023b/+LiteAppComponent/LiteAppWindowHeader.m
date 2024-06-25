classdef LiteAppWindowHeader < LiteAppComponent.LiteAppComponentBase
  %% Lite App Window Header component

  % Copyright 2024 The MathWorks, Inc.

  properties

    AppName (1,1) string = ""

    SourceName (1,1) string

    ShowCheckBox (1,1) matlab.lang.OnOffSwitchState = "on"
    CheckBox LiteAppComponent.CheckBox

  end  % properties

  methods (Access=protected)

    function setup(component)
      %%
      setup@LiteAppComponent.LiteAppComponentBase(component)

      common_height = LiteAppUtility.Constant.Height{"oneline++"};

      % Create two rows.
      component.baseGridObject.RowHeight = {common_height, 'fit'};

      % Create three columns.
      component.baseGridObject.ColumnWidth = {'1x', 'fit', 'fit'};

      component.label_liteappobj = LiteAppComponent.Label(component.baseGridObject);
      component.label_liteappobj.Layout.Row = 1;
      component.label_liteappobj.Layout.Column = 1;
      component.label_liteappobj.Interpreter = "latex";
      component.label_liteappobj.WordWrap = "off";

      component.link_liteappobj = LiteAppComponent.Hyperlink(component.baseGridObject);
      component.link_liteappobj.Layout.Row = 1;
      component.link_liteappobj.Layout.Column = 2;
      component.link_liteappobj.ComponentHeight = common_height;
      component.link_liteappobj.VerticalAlignment = "center";
      component.link_liteappobj.HyperlinkText = "Source";
      component.link_liteappobj.Tooltip = "Open app source code.";

      component.CheckBox = LiteAppComponent.CheckBox(component.baseGridObject);
      component.CheckBox.Layout.Row = 1;
      component.CheckBox.Layout.Column = 3;
      component.CheckBox.ComponentHeight = common_height;
      component.CheckBox.VerticalAlignment = "center";

      % -----------------------------------------------------------------------
      % Horizontal line

      component.baseGridObject.RowHeight{2} = 1;  % thicknesss of the line
      hline = uipanel(component.baseGridObject);
      hline.Layout.Row = 2;
      hline.Layout.Column = [1 3];
      hline.BorderType = "none";
      hline.BorderWidth = 0;
      hline.BackgroundColor = 0.5*ones(1,3);  % line color

    end  % function

    function update(component)
      %%
      update@LiteAppComponent.LiteAppComponentBase(component)

      if component.AppName == ""
        component.AppName = "Lite App";
      end

      component.label_liteappobj.Text = "\textbf{" + component.AppName + "}";

      link_width = 0;
      if component.SourceName ~= ""
        link_width = 'fit';
        component.link_liteappobj.HyperlinkClickedCallback = @() open(component.SourceName);
      end

      checkbox_width = 0;
      if component.ShowCheckBox
        checkbox_width = 'fit';
      end

      component.baseGridObject.ColumnWidth = {'1x', link_width, checkbox_width};
    end  % function

  end  % methods

  % To test gestures programmatically, ui-objects must be public.
  % However, they should not be publicly accessed for other purposes.
  properties (Access=public, Transient, NonCopyable)
    label_liteappobj LiteAppComponent.Label
    link_liteappobj LiteAppComponent.Hyperlink
  end  % properties

end  % classdef
