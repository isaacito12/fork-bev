# Lite App API

Version 2 for MATLAB R2023b or newer

June 2024

![Lite App Logo](LiteApp-icon-150x150.png)

This is **Lite App API**, MATLAB application programming interface (API)
to build apps programatically using [`uifigure`][url-uifig] and
[`uigridlayout`][url-uigrid].
Lite App API provides a thin layer between MATLAB UI functions and
your app window so that the code of your app can focus on
app features while implementation details, such as spacing
between UI components, are handled separately behind the scene
by Lite App API.

To use Lite App API, your MATLAB paths must include
`LiteAppWindow.m`, `LiteApp-icon-150x150.png`,
`+LiteAppComponent`, and `+LiteAppUtility`.

The main window in Lite App is `uifigure`.
Components in Lite App are placed in `uigridlayout` using
Lite App's component placement logic
which makes it quick and easy to build
apps with consistent look and feel.

Lite App's highlights

- Programmatic app building approach to create `uifigure`-based apps
- Simple logic to add UI components for `uigridlayout`
- UI components that are pre-adjusted for use with `uigridlayout`
- Consistent sizes and spacings defined in all Lite App components to
  quickly build apps with a consistent look and feel
  and to reduce the amount of code you write
- Easy to configure the way the size of UI components change against window size change

_Copyright 2023-2024 The MathWorks, Inc._

[url-uifig]: https://www.mathworks.com/help/matlab/ref/uifigure.html
[url-uigrid]: https://www.mathworks.com/help/matlab/ref/uigridlayout.html
