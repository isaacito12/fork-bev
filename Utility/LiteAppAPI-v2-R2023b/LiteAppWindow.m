classdef LiteAppWindow < handle
  %% Lite App Window

  % Copyright 2023-2024 The MathWorks, Inc.

  properties

    MainFigure matlab.ui.Figure {mustBeScalarOrEmpty}

    Name (1,1) string
    Width (1,1) {mustBeInteger, mustBePositive} = 500
    Height (1,1) {mustBeInteger, mustBePositive} = 140

    MainLayout LiteAppComponent.LiteAppLayout
    Header LiteAppComponent.LiteAppWindowHeader

    Show_AlwaysOnTop_CheckBox matlab.lang.OnOffSwitchState = "on"
    AlwaysOnTop matlab.lang.OnOffSwitchState = "off"

  end  % properties

  properties (Dependent)
    % PNG file
    Icon (1,1) string
  end  % properties

  methods

    function AppWindow = LiteAppWindow(NameValuePairs)
      %%
      arguments (Input)
        % The "Source" hyperlink is created to this string at the top right of the app window.
        % Typically, you want to use mfilename for this argument.
        % If this is empty, the Source hyperlink is not added to the app window.
        NameValuePairs.SourceFilename (1,1) string = ""

        NameValuePairs.ShowWindowHeader (1,1) matlab.lang.OnOffSwitchState = "on"
      end

      arguments (Output)
        AppWindow (1,1)
      end

      AppWindow.showWindowHeader = NameValuePairs.ShowWindowHeader;

      AppWindow.MainFigure = uifigure(Visible = "off");

      AppWindow.MainLayout = LiteAppComponent.LiteAppLayout(AppWindow.MainFigure);

      AppWindow.Icon = "LiteApp-icon-150x150.png";

      if AppWindow.showWindowHeader
        AppWindow.Header = LiteAppComponent.LiteAppWindowHeader(NewArea(AppWindow.MainLayout));
        AppWindow.Header.SourceName = NameValuePairs.SourceFilename;
        AppWindow.Header.CheckBox.Text = "Always on top";
        AppWindow.Header.CheckBox.ValueChangedCallback = @() set_always_on_top(AppWindow);
      end

    end  % function

    function Show(AppWindow)
      %%
      if AppWindow.showWindowHeader
        AppWindow.Header.AppName = AppWindow.Name;
        AppWindow.Header.ShowCheckBox = AppWindow.Show_AlwaysOnTop_CheckBox;

        if AppWindow.Show_AlwaysOnTop_CheckBox
          AppWindow.Header.CheckBox.Value = AppWindow.AlwaysOnTop;
        else
          % If the always-on-top check box is hidden, alwas-on-top must be off.
          AppWindow.Header.CheckBox.Value = "off";
        end
        set_always_on_top(AppWindow)
      end  % if

      if AppWindow.Name == ""
        AppWindow.MainFigure.Name = "Lite App";
      else
        AppWindow.MainFigure.Name = AppWindow.Name;
      end  % if

      AppWindow.MainFigure.Position(3) = AppWindow.Width;
      AppWindow.MainFigure.Position(4) = AppWindow.Height;
      movegui(AppWindow.MainFigure, "center")
      AppWindow.MainFigure.Visible = "on";
    end  % function

    function Icon = get.Icon(AppWindow)
      Icon = AppWindow.MainFigure.Icon;
    end  % function

    function set.Icon(AppWindow, PNGFilename)
      arguments (Input)
        AppWindow
        PNGFilename (1,1) string
      end
      [result, error_message] = LiteAppUtility.GetFileFolderPath(PNGFilename);
      if error_message ~= ""
        disp("LiteApp icon error: " + error_message)
      else
        AppWindow.MainFigure.Icon = result.Fullpath;
      end  % if
    end  % function

    % The delete method must be implemented so that the uifigure window can be
    % programatically closed.
    function delete(AppWindow)
      delete(AppWindow.MainFigure)
    end  % function

    function set_always_on_top(AppWindow)
      %%
      if AppWindow.showWindowHeader
        if AppWindow.Header.CheckBox.Value
          AppWindow.MainFigure.WindowStyle = "alwaysontop";
        else
          AppWindow.MainFigure.WindowStyle = "normal";
        end  % if
      end  % if
    end  % function

  end  % methods

  properties (Access = private)
    showWindowHeader matlab.lang.OnOffSwitchState = "on"
  end  % properties

end  % classdef
