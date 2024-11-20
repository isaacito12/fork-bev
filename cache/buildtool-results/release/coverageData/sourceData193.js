var sourceData193 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppComponent\\HorizontalLine.m","RawFileContents":["classdef HorizontalLine < matlab.ui.componentcontainer.ComponentContainer\r","  %% Panel component\r","\r","  % Unlike other components, this component directly inherits from\r","  % the component container because it makes this code much simpler.\r","\r","  % Copyright 2023-2024 The MathWorks, Inc.\r","\r","  methods (Access=protected)\r","\r","    function setup(component)\r","\r","      % component.Layout.Column = 1;\r","\r","      gridlayoutObj = uigridlayout(component, [1 1]);\r","      gridlayoutObj.RowSpacing = 0;\r","      gridlayoutObj.ColumnSpacing = 0;\r","      gridlayoutObj.Padding = [0 2 0 2];  % left bottom right top\r","      gridlayoutObj.ColumnWidth{1} = '1x';\r","\r","      % This is the height/thickness of a horizontal line.\r","      gridlayoutObj.RowHeight{1} = 2;\r","\r","      panelObj = uipanel(gridlayoutObj);\r","      panelObj.Layout.Row = 1;\r","      panelObj.Layout.Column = 1;\r","      panelObj.Title= \"\";\r","      panelObj.BorderType = \"none\";\r","      panelObj.BackgroundColor = \"#aaaaaa\";\r","\r","    end  % function\r","\r","    % The udpate method in ComponentContainer class is an abstract method.\r","    % It must be implemented in the child class.\r","    function update(~)\r","    end  % function\r","\r","  end  % methods\r","end  % classdef\r",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":11,"Hits":12,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"369a0123-6d7c-496b-8f59-a20aab6e117c"},{"LineNumber":35,"Hits":39,"StartColumnNumbers":4,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"5516de98-d7a2-41d8-938f-56b05c46892a"}],"Statement":[{"LineNumber":15,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"dfff22d7-550f-43ff-a422-c8c5df5fc0d4"},{"LineNumber":16,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"edea4a15-dcb7-4707-835d-82afac8ef982"},{"LineNumber":17,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aa5a7c33-48f4-489f-b6b1-58d8439a5656"},{"LineNumber":18,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c80a3702-2ca9-4b37-883e-c7356d351d34"},{"LineNumber":19,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3be362bb-cd88-435b-bcc1-4443afc96d9d"},{"LineNumber":22,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1b52c4e5-d508-4ef8-9029-7c2c59858aae"},{"LineNumber":24,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5e41b0f5-1485-4ddf-a8f6-994d30723f28"},{"LineNumber":25,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5b158d93-b642-4954-be42-3e326babd8bd"},{"LineNumber":26,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"394d5556-c924-46ab-82f6-e161154b551c"},{"LineNumber":27,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4c89687c-8c1f-4355-9d72-71eb8f2115b0"},{"LineNumber":28,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"34f2a205-9d04-4c9a-af35-50b619a8a378"},{"LineNumber":29,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c623b426-d898-4345-baa2-0c5d28b0e0d6"}]},"FilterData":[]}