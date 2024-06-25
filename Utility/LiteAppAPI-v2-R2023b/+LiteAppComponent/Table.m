classdef Table < LiteAppComponent.LiteAppComponentBase
  %% Table component
  % This is a large component.
  % - Both width and height must be adjustable.
  % - Scrollbars must appear as needed.
  %
  % Table Properties
  % https://www.mathworks.com/help/matlab/ref/matlab.ui.control.table-properties.html

  % Copyright 2024 The MathWorks, Inc.

  properties

    MainTable matlab.ui.control.Table

    ComponentWidth (1,1) {LiteAppUtility.mustBeStringOrPositiveInteger} = "1x"

    ComponentHeight (1,1) {LiteAppUtility.mustBeStringOrPositiveInteger} = "fit"

  end  % properties

  methods (Access=protected)

    function setup(component)
      %%
      setup@LiteAppComponent.LiteAppComponentBase(component)

      component.gridObj = uigridlayout(component.baseGridObject, [1 1]);
      component.gridObj.Layout.Row = 1;
      component.gridObj.Layout.Column = 1;
      component.gridObj.Padding = [1 0 1 0];
      component.gridObj.ColumnSpacing = 1;
      component.gridObj.RowSpacing = 1;
      component.gridObj.Scrollable = "on";

      % The main element of this component.
      component.MainTable = uitable(component.gridObj);
      component.MainTable.Layout.Row = 1;
      component.MainTable.Layout.Column = 1;
      component.MainTable.FontSize = component.CommonFontSize;

      % -----------------------------------------------------------------------
      % Default settings

      component.MainTable.Data = zeros(2, 2);

    end  % function

    function update(component)
      %%
      update@LiteAppComponent.LiteAppComponentBase(component)

      component.gridObj.RowHeight{1} = component.ComponentHeight;
      component.gridObj.ColumnWidth{1} = component.ComponentWidth;

      if component.HighlightBackground
        component.gridObj.BackgroundColor = component.HighlightBackgroundColor;
      end  % if
    end  % function

  end  % methods

  properties (Access=private, Transient, NonCopyable)
    gridObj matlab.ui.container.GridLayout
  end  % properties

end  % classdef
