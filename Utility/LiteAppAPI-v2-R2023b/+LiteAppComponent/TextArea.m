classdef TextArea < LiteAppComponent.LiteAppComponentBase
  %% Text area component
  % This is a large component.
  % - Both width and height must be adjustable.
  % - Scrollbars must appear as needed.

  % This component uses string for text content (Value).
  % uitextarea uses the cell array of char array.

  % [todo] Add context menu for copying and pasting text.
  % uicontextmenu needs to take an object of uifigure, but
  % Classes inheriting from ComponentContainer cannot access uifigure object.

  % Copyright 2023-2024 The MathWorks, Inc.

  properties

    MainTextArea matlab.ui.control.TextArea

    ValueChangedCallback {LiteAppUtility.mustBeFunctionHandleOrEmpty} = []

    UseMonospacedFont (1,1) matlab.lang.OnOffSwitchState = "off"

    ComponentWidth (1,1) {LiteAppUtility.mustBeStringOrPositiveInteger} = "1x"

    ComponentHeight (1,1) {LiteAppUtility.mustBeStringOrPositiveInteger} = "fit"

  end  % properties

  properties (Dependent)

    % Value property of the uitextarea is char or string.
    % ValueString property here provides string-only data.
    ValueString string

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
      component.MainTextArea = uitextarea(component.gridObj);
      component.MainTextArea.Layout.Row = 1;
      component.MainTextArea.Layout.Column = 1;
      component.MainTextArea.FontSize = component.CommonFontSize;
      component.MainTextArea.ValueChangedFcn = ...
        @(sourceObject, eventData) textareaValueChanged(component);
      component.MainTextArea.WordWrap = "on";
      component.MainTextArea.Editable = "on";
      component.MainTextArea.Placeholder = "Enter text.";

      % -----------------------------------------------------------------------
      % Default settings

      component.ValueString = "";

    end  % function

    function update(component)
      %%
      update@LiteAppComponent.LiteAppComponentBase(component)

      component.gridObj.RowHeight{1} = component.ComponentHeight;
      component.gridObj.ColumnWidth{1} = component.ComponentWidth;

      if component.UseMonospacedFont
        component.MainTextArea.FontName = "Monospaced";
      else
        component.MainTextArea.FontName = "Arial";
      end  % if

      if component.HighlightBackground
        component.gridObj.BackgroundColor = component.HighlightBackgroundColor;
      end  % if
    end  % function

  end  % methods

  methods

    % =========================================================================
    % Text Area

    function x = get.ValueString(component)
      arguments (Output)
        x (:,1) string
      end
      x = string(component.MainTextArea.Value);
    end  % function

    function set.ValueString(component, x)
      arguments
        component
        x (:,1) string
      end
      component.MainTextArea.Value = x;

      % Also call this class' value-changed function.
      textareaValueChanged(component)
    end  % function

  end  % methods

  properties (Access=private, Transient, NonCopyable)
    gridObj matlab.ui.container.GridLayout
  end  % properties

  methods (Access=private)

    function textareaValueChanged(component)

      if not(isempty(component.ValueChangedCallback)) ...
          && isa(component.ValueChangedCallback, 'function_handle')
        component.ValueChangedCallback()
      end

      notify(component, "ValueChanged")
      % Make sure to define ValueChanged event.

    end  % function

  end  % methods

  events (HasCallbackProperty, NotifyAccess=protected)

    % ValueChanged event adds ValueChangedFcn property to this class.
    ValueChanged

  end  % events

end  % classdef
