var sourceData252 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteApp23b-v1\\LiteApp23b-v1\\TestElements\\HorizontalLine\\HorizontalLine_testapp_1.m","RawFileContents":["function app = HorizontalLine_testapp_1\r","% This test directly uses uifigure and uigridlayout\r","% instead of LiteAppElements.LiteAppLayout.\r","% This keeps the dependency of this test minimal.\r","\r","% Copyright 2024 The MathWorks, Inc.\r","\r","arguments (Output)\r","  app (1,1) struct\r","end\r","\r","MainFigure = uifigure(Visible=\"off\");\r","app.Window.MainFigure = MainFigure;\r","\r","MainGrid = uigridlayout(MainFigure, [1 1]);\r","MainGrid.RowHeight = {'fit'};\r","MainGrid.ColumnWidth = {'1x'};\r","MainGrid.Padding = [0 0 0 0];\r","MainGrid.ColumnSpacing = 0;\r","MainGrid.RowSpacing = 0;\r","\r","LiteAppElements.HorizontalLine(MainGrid);  % #test-target-all-default\r","\r","MainFigure.Visible = \"on\";\r","\r","end  % function\r",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false},"Statement":[{"LineNumber":12,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false},{"LineNumber":13,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":15,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":16,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":17,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":19,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":20,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false}]}}