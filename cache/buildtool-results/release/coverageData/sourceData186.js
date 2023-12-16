var sourceData186 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Utility\\SignalDesigner\\SignalDesigner_example.mlx","RawFileContents":["smoothSignal = SignalDesigner(\"ContinuousMultiStep\");","smoothSignal.XYData = [","  0    1  0 ;   ... a flat segment from 0 to 1 in X, of value 0 in Y","  3  nan  9 ;   ... a point at 3 in X, of value 9 in Y","  6    8  7 ];    % a flat segment from 6 to 8 in X, of value 7 in Y","smoothSignal.DeltaX = 0.05;","update(smoothSignal)","disp(smoothSignal.Data(1:5, :))","plotDataPoints(smoothSignal);","smoothSignal.XName = \"Time\";","smoothSignal.XUnit = \"s\";","","smoothSignal.YName = \"Speed\";","smoothSignal.YUnit = \"km/hr\";","","smoothSignal.Title = \"Vehicle speed reference\";","","% Make sure to call update to reflect new property values.","update(smoothSignal)","","% Figure object is returned.","fig = plotDataPoints(smoothSignal);","fig.Position(3:4) = [500 300];  % width height","smoothSignal = SignalDesigner(\"Continuous\");","smoothSignal.XYData = [","  0 0 ;  ... (0, 0)","  1 0 ;  ... (1, 0)","  2 5 ;  ... (2, 5)","  4 2 ;  ... (4, 2)","  5 2 ];  %  (5, 2)","smoothSignal.DeltaX = 0.05;","update(smoothSignal)","plotDataPoints(smoothSignal);","smoothSignal.XYData = [","  0   0 ;","  0.5 0 ;  % Added","  1   0 ;","  2   5 ;","  4   2 ;","  4.5 2 ;  % Added","  5   2 ];","update(smoothSignal)","plotDataPoints(smoothSignal);","stepSignal = SignalDesigner(\"PieceWiseConstant\");","stepSignal.XYData = [","  0  1 ;  ... a constant segment from 0 in X, of value 1 in Y","  2  3 ;  ... a constant segment from 2 in X, of value 3 in Y","  4  2 ;  ... a constnat segment from 4 in X, of value 2 in Y","  5  2 ];   % a constnat segment from 5 in X, of value 2 in Y","update(stepSignal)","fig = plotDataPoints(stepSignal);","fig.Position(3:4) = [500 300];  % width height","xydata = SignalDesignUtility.buildXYData( ...","  RandomSeed = 5, ... Random seed","  XInitialFlatLength = 3, ... Initial constant duration","  YInitialValue = 0, ...Initial data value","  NumTransitions  = 2, ... Number of transitions","  TransitionRange = [ 2 5 ], ... Range of transition duration","  FlatRange = [ 5 10 ], ... Range of constant duration","  YRange = [ -5 10 ], ... Range of data value","  XFinalTransitionLength = 3, ... Final transition duration","  XFinalFlatLength = 4, ... Final constant duration","  YFinalValue = 0, ... Final data value","  XScale = 1, ... Data value scaler","  YScale = 1 );  % Time scaler","","sig = SignalDesigner(\"ContinuousMultiStep\");","sig.XYData = xydata;","sig.DeltaX = 0.1;  % Interpolation step","","update(sig)","","plotDataPoints(sig);"],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":1,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false},{"LineNumber":2,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":3,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":11,"ContinuedLine":true},{"LineNumber":4,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":11,"ContinuedLine":true},{"LineNumber":5,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":14,"ContinuedLine":true},{"LineNumber":6,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":7,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":8,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":9,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":10,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false},{"LineNumber":11,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":25,"ContinuedLine":false},{"LineNumber":13,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":14,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":16,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":19,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":22,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":23,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":24,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":25,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":26,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":5,"ContinuedLine":true},{"LineNumber":27,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":5,"ContinuedLine":true},{"LineNumber":28,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":5,"ContinuedLine":true},{"LineNumber":29,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":5,"ContinuedLine":true},{"LineNumber":30,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":8,"ContinuedLine":true},{"LineNumber":31,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false},{"LineNumber":32,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":33,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":34,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false},{"LineNumber":35,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":7,"ContinuedLine":true},{"LineNumber":36,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":7,"ContinuedLine":true},{"LineNumber":37,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":7,"ContinuedLine":true},{"LineNumber":38,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":7,"ContinuedLine":true},{"LineNumber":39,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":7,"ContinuedLine":true},{"LineNumber":40,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":7,"ContinuedLine":true},{"LineNumber":41,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":10,"ContinuedLine":true},{"LineNumber":42,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":43,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":44,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false},{"LineNumber":45,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":46,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":6,"ContinuedLine":true},{"LineNumber":47,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":6,"ContinuedLine":true},{"LineNumber":48,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":6,"ContinuedLine":true},{"LineNumber":49,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":9,"ContinuedLine":true},{"LineNumber":50,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":18,"ContinuedLine":false},{"LineNumber":51,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":52,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":53,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":41,"ContinuedLine":false},{"LineNumber":54,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":16,"ContinuedLine":true},{"LineNumber":55,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":true},{"LineNumber":56,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":19,"ContinuedLine":true},{"LineNumber":57,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":true},{"LineNumber":58,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":27,"ContinuedLine":true},{"LineNumber":59,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true},{"LineNumber":60,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":true},{"LineNumber":61,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":28,"ContinuedLine":true},{"LineNumber":62,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":true},{"LineNumber":63,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":17,"ContinuedLine":true},{"LineNumber":64,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":12,"ContinuedLine":true},{"LineNumber":65,"Hits":1,"StartColumnNumbers":2,"EndColumnNumbers":15,"ContinuedLine":true},{"LineNumber":67,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":68,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false},{"LineNumber":69,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":17,"ContinuedLine":false},{"LineNumber":71,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":11,"ContinuedLine":false},{"LineNumber":73,"Hits":1,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false}]}}