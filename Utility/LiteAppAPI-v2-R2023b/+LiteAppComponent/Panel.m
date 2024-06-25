classdef Panel < LiteAppComponent.LiteAppComponentBase
  %% Panel component
  % This is a large component.
  % - Both width and height must be adjustable.
  % - Scrollbars must appear as needed.

  % Copyright 2023-2024 The MathWorks, Inc.

  properties

    MainPanel (1,1) matlab.ui.container.Panel

    ComponentWidth (1,1) {LiteAppUtility.mustBeStringOrPositiveInteger} = "1x"

    ComponentHeight (1,1) {LiteAppUtility.mustBeStringOrPositiveInteger} = 200

    % "line" and "none" are valid for uifigure. Other options only work with figure.
    BorderType {mustBeMember(BorderType, ["line" "none"])} = "line"

  end  % properties

  methods (Access=protected)

    function setup(component)
      %%
      setup@LiteAppComponent.LiteAppComponentBase(component)

      component.gridObj = uigridlayout(component.baseGridObject, [1 1]);
      component.gridObj.Layout.Row = 1;
      component.gridObj.Layout.Column = 1;
      component.gridObj.Padding = [0 0 0 0];  % left bottom right top
      component.gridObj.ColumnSpacing = 0;
      component.gridObj.RowSpacing = 0;
      component.gridObj.Scrollable = "on";

      % The main element of this component.
      component.MainPanel = uipanel(component.gridObj);
      component.MainPanel.Layout.Row = 1;
      component.MainPanel.Layout.Column = 1;
      component.MainPanel.Title= "";
      component.MainPanel.FontSize = component.CommonFontSize;

    end  % function

    function update(component)
      %%
      update@LiteAppComponent.LiteAppComponentBase(component)

      component.gridObj.RowHeight{1} = component.ComponentHeight;
      component.gridObj.ColumnWidth{1} = component.ComponentWidth;

      component.MainPanel.BorderType = component.BorderType;

      if component.HighlightBackground
        component.MainPanel.BackgroundColor = component.HighlightBackgroundColor;
      end  % if
    end  % function
  end  % methods

  properties (Access=private, Transient, NonCopyable)
    gridObj matlab.ui.container.GridLayout
  end  % properties
end  % classdef
