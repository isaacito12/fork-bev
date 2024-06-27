function Vehicle1D_TakeScreenshotApp()

% Copyright 2024 The MathWorks, Inc.

image_folder = fullfile( currentProject().RootFolder, "Components", "Vehicle1D", "Utility", "Images" );

app = Vehicle1DPerformanceDesignApp;

exportapp( ...
  app.Window.MainFigure, ...
  fullfile(image_folder, "screenshot_Vehicle1DPerformanceDesignApp.png"))

delete(app)

end  % function
