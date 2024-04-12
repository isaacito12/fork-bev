var sourceData195 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteApp23b-v1\\LiteApp23b-v1\\Demos\\PlotSimple1\\LiteAppDemo_PlotSimple1.m","RawFileContents":["function app = LiteAppDemo_PlotSimple1","%% App with Lite App API","","% Copyright 2024 The MathWorks, Inc.","","arguments (Output)","  app (1,1) struct","end","","win = LiteAppWindow(mfilename);","app.Window = win;","","win.Width = 500;","win.Height = 360;","","layout = win.MainLayout;","","area = NewArea(layout);","column = NewColumn(layout, area);","","%%","row = NewRow(layout, column);","","panel = LiteAppElements.Panel(row);","panel.ComponentHeight = 300;","panel.BorderType = \"none\";","","% Use MainPanel as the parent of axes. MainPanel is a uipanel object.","ax = axes(panel.MainPanel);","app.Axes_1 = ax;","","  function make_plot(ax)","    % uniform distribution between (0,1)","    random_data = rand;","    x = linspace(0, 4*pi*random_data, 100);","    plot(ax, x, (random_data>0.5)*random_data*sin(x) + (random_data<0.5)*(-random_data)*cos(x))","  end  % function","","%%","button_1 = LiteAppElements.Button(NewRow(layout, column, Height=30));","app.Button = button_1;","","button_1.HorizontalAlignment = \"center\";","button_1.ButtonPushedCallback = @() make_plot(ax);","button_1.Text = \"Update\";","","%%","make_plot(ax)","Show(win)","end  % function",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":1,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":32,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false}],"Statement":[{"LineNumber":10,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":11,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":13,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":14,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":16,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false},{"LineNumber":18,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":19,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":22,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":24,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":25,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":26,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false},{"LineNumber":29,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":30,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":16,"ContinuedLine":false},{"LineNumber":34,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":35,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":43,"ContinuedLine":false},{"LineNumber":36,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":95,"ContinuedLine":false},{"LineNumber":40,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false},{"LineNumber":41,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":43,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":44,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":50,"ContinuedLine":false},{"LineNumber":45,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":48,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":13,"ContinuedLine":false},{"LineNumber":49,"Hits":0,"StartColumnNumbers":0,"EndColumnNumbers":9,"ContinuedLine":false}]}}