var sourceData150 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\Vehicle1D\\Utility\\Vehicle1D_PlotForce.m","RawFileContents":["function Vehicle1D_PlotForce(NameValuePairs)","%% Makes plot of longitudinal vehicle driving/resisting force curves","% To see the default plot, run this function without any arguments.","","% Copyright 2023-2024 The MathWorks, Inc.","","arguments (Input)","","  % Either axes, panel, tab, or TiledChartLayout","  NameValuePairs.Parent (1,1)","","  NameValuePairs.VehicleMass (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.VehicleMass, \"kg\")} ...","    = simscape.Value(1800, \"kg\")","","  NameValuePairs.RoadLoad_A (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadLoad_A, \"N\")} ...","    = simscape.Value(240.1, \"N\")","","  NameValuePairs.RoadLoad_B (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadLoad_B, \"N/(km/hr)\")} ...","    = simscape.Value(0, \"N/(km/hr)\")","","  NameValuePairs.RoadLoad_C (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadLoad_C, \"N/(km/hr)^2\")} ...","    = simscape.Value(0.4336, \"N/(km/hr)^2\")","","  NameValuePairs.GravitationalAcceleration (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.GravitationalAcceleration, \"m/s^2\")} ...","    = simscape.Value(9.81, \"m/s^2\")","","  NameValuePairs.RoadGrades_pct (1,:) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.RoadGrades_pct, \"1\")} ...","    = simscape.Value([0 10 20 30])","","  % Force curve with constant power","  NameValuePairs.Powers (1,:) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.Powers, \"kW\")} ...","    = simscape.Value([50 100 200], \"kW\")","","  % Maximum vehicle force (Y axis)","  NameValuePairs.MaximumVehicleAcceleration (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.MaximumVehicleAcceleration, \"1\")} ...","    = simscape.Value(0.4)","","  % Maximum vehicle speed (X axis)","  NameValuePairs.MaximumVehicleSpeed (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.MaximumVehicleSpeed, \"km/hr\")} ...","    = simscape.Value(160, \"km/hr\")","","  % Maximum climb power at top speed","  NameValuePairs.MaximumClimbPower(1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.MaximumClimbPower, \"kW\")} ...","    = simscape.Value(50, \"kW\")","","  % Upper bound of Y axis","  NameValuePairs.Force_PlotUpperBound (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.Force_PlotUpperBound, \"kN\")} ...","    = simscape.Value(15, \"kN\")","","  % Upper bound of X axis","  NameValuePairs.Speed_PlotUpperBound (1,1) simscape.Value ...","    {simscape.mustBeCommensurateUnit(NameValuePairs.Speed_PlotUpperBound, \"km/hr\")} ...","    = simscape.Value(200, \"km/hr\")","","  % Number of points in vehicle speed (x axis) to calculate force values (y axis)","  NameValuePairs.NumSpeedPoints (1,1) {mustBePositive, mustBeInteger} = 100","","end  % arguments","","if isfield(NameValuePairs, \"Parent\")","  if isempty(NameValuePairs.Parent)","    % Parent option is specified, but it is empty: Parent = []","    ax = axes(figure);","  else","    ax = NameValuePairs.Parent;","  end","else","  ax = axes(figure);","end","","M_e = NameValuePairs.VehicleMass;","","A_rl = NameValuePairs.RoadLoad_A;","B_rl = NameValuePairs.RoadLoad_B;","C_rl = NameValuePairs.RoadLoad_C;","","grav = NameValuePairs.GravitationalAcceleration;","","grades_pct = value(NameValuePairs.RoadGrades_pct, \"1\");","angles = simscape.Value(atan(grades_pct/100), \"rad\");","num_grades = numel(grades_pct);","","powers = NameValuePairs.Powers;","num_powers = numel(powers);","","max_vehicle_accel = NameValuePairs.MaximumVehicleAcceleration;","max_vehicle_force = max_vehicle_accel * M_e * grav;","","max_vehicle_speed = NameValuePairs.MaximumVehicleSpeed;","","max_climb_power = NameValuePairs.MaximumClimbPower;","","force_plot_upper = NameValuePairs.Force_PlotUpperBound;","","speed_plot_upper = NameValuePairs.Speed_PlotUpperBound;","","numX = NameValuePairs.NumSpeedPoints;","","%% prepare data","","% X axis data points","VehicleSpeed = linspace(simscape.Value(1, \"km/hr\"), speed_plot_upper, numX)';","","F_roll = A_rl + B_rl*VehicleSpeed;","F_airdrag = C_rl*VehicleSpeed.^2;","","grade_str = strings(1, num_grades);","angle_str = strings(1, num_grades);","% Longitudinal vehicle force at constant grade","F_const_grade = simscape.Value(zeros(numX, num_grades), \"N\");","for idx = 1 : num_grades","  grade_str(idx) = grades_pct(idx) + \" %\";","  angle_str(idx) = round(value(angles(idx), \"deg\"), 1) + \" deg\";","  s = angles(idx);","  F_const_grade(:, idx) = (F_roll*cos(s) + F_airdrag) + M_e*grav*sin(s);","end","","% Longitudinal vehicle force at constant power","F_const_power = simscape.Value(zeros(numX, num_powers), \"N\");","for idx = 1 : num_powers","  F_const_power(:, idx) = powers(idx) ./ VehicleSpeed;","end","","x_climb_inc = linspace(simscape.Value(10, \"km/hr\"), speed_plot_upper, numX)';","F_climb_inc = convert(max_climb_power ./ x_climb_inc, \"N\");","x_climb_flip = flipud(x_climb_inc);","F_climb_flip = force_plot_upper * ones(numel(x_climb_flip), 1);","x_climb = [x_climb_inc; x_climb_flip];","F_climb = [F_climb_inc; F_climb_flip];","","%% plot","cla(ax)","","% Vehicle force curves for constant road grades.","pp(1:num_grades) = matlab.graphics.chart.primitive.Line;","legend_str = strings(1, num_grades);","for idx = 1 : num_grades","  pp(idx) = plot(ax, value(VehicleSpeed, \"km/hr\"), value(F_const_grade(:,idx), \"N\"));","  pp(idx).LineWidth = 2;","  legend_str(idx) = grade_str(idx) + \" (\" + angle_str(idx) + \")\";","  if idx == 1","    hold(ax, \"on\")","  end","end","","% Vehicle force curves for constant power.","xmax = value(speed_plot_upper, \"km/hr\");","for idx = 1 : numel(powers)","  q = plot(ax, value(VehicleSpeed, \"km/hr\"), value(F_const_power(:, idx), \"N\"));","  q.LineWidth = 1;","  q.LineStyle = \"--\";","","  y = value(F_const_power(end, idx), \"N\");","  str = \" \" + value(powers(idx), \"kW\") + \" kW\";","  text(ax, xmax, y, str)","end","","gfx = fill(ax, value(x_climb, \"km/hr\"), value(F_climb, \"N\"), \"cyan\");","gfx.EdgeColor = \"none\";","gfx.FaceColor = \"#888\";","gfx.FaceAlpha = 0.3;","","gfx = yregion(ax, value(max_vehicle_force, \"N\"), inf);","gfx.EdgeColor = \"none\";","gfx.FaceColor = \"#888\";","gfx.FaceAlpha = 0.3;","","gfx = xregion(ax, value(max_vehicle_speed, \"km/hr\"), inf);","gfx.EdgeColor = \"none\";","gfx.FaceColor = \"#888\";","gfx.FaceAlpha = 0.3;","","grid(ax, \"on\")","","leg = legend(ax, pp, legend_str);","leg.Direction = \"reverse\";","% leg.BackgroundAlpha = 0.5;  % R2024a","title(leg, \"Road grade % (angle deg)\")","","xlim(ax, [0, xmax])","xlabel(ax, \"Vehicle speed\")","xsecondarylabel(ax, \"km/hr\")","","ylim(ax, [0, value(force_plot_upper, \"N\")])","ysecondarylabel(ax, \"N\")","","title(ax, \"Longitudinal vehicle force\")","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"65c5181c-9fd9-4ac0-88ed-630e6e8971d0"},"Statement":[{"LineNumber":13,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":70,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"dc41805b-f619-4375-b1ea-dc4f806b1cad"},{"LineNumber":14,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ba664164-6022-456f-a6e1-2f704ef79521"},{"LineNumber":17,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":68,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"13ec66cb-4577-43d6-addf-eddc3661ecfa"},{"LineNumber":18,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"47572450-54b9-44e3-84e3-2283fb8020e9"},{"LineNumber":21,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":76,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9f4b4ef8-e84c-41f2-89b3-b041254c9b3c"},{"LineNumber":22,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b9c29168-b03d-4299-97d3-98bd6b1e56ad"},{"LineNumber":25,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":78,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"82f7f55e-5970-4d61-b539-8c341d9817d9"},{"LineNumber":26,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f225d6d1-caea-4a36-a562-4acb8c1d42bf"},{"LineNumber":29,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":87,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b76d0f4b-10cf-47a8-b7fd-7a977e7487b5"},{"LineNumber":30,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"02a8c877-de0d-4331-a5fd-ce23bd2d1f95"},{"LineNumber":33,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cee3a5b6-9b83-4308-874d-059e34692537"},{"LineNumber":34,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b958e1a0-4ed4-42df-b2bc-816fc055fa74"},{"LineNumber":38,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0b4a1b0f-5f22-47eb-b989-76f7afd7fdac"},{"LineNumber":39,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"af6ccea4-0a1c-4fe1-8415-f8cbef310178"},{"LineNumber":43,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":84,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6ecfe4d4-37a0-4018-8bde-b56b2f75f67f"},{"LineNumber":44,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":25,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b182ee71-b19f-427a-bfe6-e1f15a41ca8e"},{"LineNumber":48,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":81,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3b503514-a98a-4580-93ec-59d09230f4ea"},{"LineNumber":49,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"af43f671-0662-4b0d-aad5-d9e94a04e747"},{"LineNumber":53,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":76,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4d696ac9-05eb-4ada-b164-d97d96a5b109"},{"LineNumber":54,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"29182fdc-d352-42c5-8df0-68897175e1b5"},{"LineNumber":58,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":79,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"99704e68-c3d1-4b89-a3ea-267bd80989c9"},{"LineNumber":59,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"30597dcd-328a-435d-a8f4-ba788663e10c"},{"LineNumber":63,"Hits":30,"StartColumnNumbers":5,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ed85b079-36dd-4a73-b818-948891ff9eb3"},{"LineNumber":64,"Hits":0,"StartColumnNumbers":6,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8382787c-d9c1-47a2-936d-b28b6ebe2231"},{"LineNumber":67,"Hits":[30,30,30],"StartColumnNumbers":[39,55,72],"EndColumnNumbers":[53,68,75],"ContinuedLine":false,"Filterable":[false,false,false],"FilterDataUUID":["cab57773-f8e0-4e4e-9594-865e88272cee","da360933-115a-49dc-9e96-3b53569e3261","9f34ced4-89e2-46fa-b174-183bcb215d62"]},{"LineNumber":71,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5a865ff1-7de9-4255-ad93-e0ab51de0efd"},{"LineNumber":72,"Hits":30,"StartColumnNumbers":2,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6168dcf6-c6ab-4c14-b679-d26f91ba0f6b"},{"LineNumber":74,"Hits":0,"StartColumnNumbers":4,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"19b03ce2-34e0-4ded-a8ec-5025f771f2ea"},{"LineNumber":76,"Hits":30,"StartColumnNumbers":4,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6b8e5d42-d76d-40d7-ac56-14f31a2b0819"},{"LineNumber":79,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aff64ee0-c79a-4eea-9db2-089104e08bda"},{"LineNumber":82,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4eb0c66f-b016-4f81-99af-9c4f79669338"},{"LineNumber":84,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ed1890fc-6c8c-4526-b6d7-fb8a406fe531"},{"LineNumber":85,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e5d495d8-6186-4e94-a877-04420f4fa1b2"},{"LineNumber":86,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"16812059-96b5-4144-9695-a0cb0d9ed46b"},{"LineNumber":88,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b739a532-5cab-4844-9404-c366dcda6e04"},{"LineNumber":90,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0a7f7b98-5402-45a7-83f1-5943796ed8d7"},{"LineNumber":91,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"003bc87c-8009-4b85-9788-073dbe3b6de4"},{"LineNumber":92,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"66486a40-5475-4475-b305-69ca372a12a5"},{"LineNumber":94,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a5144f7b-f147-4829-8603-97ae71d6a8a5"},{"LineNumber":95,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f324a7b4-1e4d-4eb9-9e30-374ae4f0092d"},{"LineNumber":97,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":62,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5a996c94-d580-44f3-8214-37048d3293cc"},{"LineNumber":98,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b338cdb0-1b74-4c43-8ed8-a1b1c5c31bcd"},{"LineNumber":100,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c34b8b78-cf11-4c2f-91ef-c489d7e309a3"},{"LineNumber":102,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":51,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7acc30fa-4197-4fbc-8927-cc0d577cff29"},{"LineNumber":104,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9a289962-8f3e-482d-9076-577ce1a57ca8"},{"LineNumber":106,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":55,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ff8d0286-c790-49d4-94e4-b1169e9bef39"},{"LineNumber":108,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7e5b7309-0aa8-4570-a17e-344e1481daca"},{"LineNumber":113,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":77,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"692a8fbd-4882-49d9-9b81-296e79135bda"},{"LineNumber":115,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":34,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6ab3fa42-19d7-4ace-ade4-e43d77ccca12"},{"LineNumber":116,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"07d01e2e-0c85-430d-8469-8d5ffd3b9333"},{"LineNumber":118,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1dfee833-ac56-42ca-bcc9-8fc42b255b7d"},{"LineNumber":119,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0f994233-01bc-47ce-900c-216b5e553f81"},{"LineNumber":121,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d3eb12f1-5236-46be-abea-ba6ccb9acda5"},{"LineNumber":122,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c1ce2fd0-a60b-4b4d-93dd-b734f51f8870"},{"LineNumber":123,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f7d0380c-580c-4822-9c1d-4793255d4bbf"},{"LineNumber":124,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e7d34612-ec20-4d0b-86cb-d40f92628a9d"},{"LineNumber":125,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"07e3704c-78bb-45c9-a886-f4ad8aac5521"},{"LineNumber":126,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"04bcb15f-bc51-4bdc-a31a-547d4e4a71d6"},{"LineNumber":130,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"24095b26-64ec-4367-b4a9-15b2ff957180"},{"LineNumber":131,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"77723f20-5d33-43aa-8827-58a21cd8485a"},{"LineNumber":132,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"76339300-6998-4580-ae36-b1600fca12df"},{"LineNumber":135,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":77,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f2a34edc-6bd8-4c8e-a928-8e06fdd99e52"},{"LineNumber":136,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":59,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"096ce315-bef2-4847-afd0-00d1e4d0ac33"},{"LineNumber":137,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0b6da99d-b77d-4804-9d65-ba921800f439"},{"LineNumber":138,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":63,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e05399bd-af53-467a-a2ab-44a8d60b32c0"},{"LineNumber":139,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3069b4bc-4eef-4d37-adfc-5b413585075d"},{"LineNumber":140,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"98b9afa4-4bf3-43e7-82d0-a8e1242a5200"},{"LineNumber":143,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":7,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"35f7d069-c637-4d89-a5c3-da22bfda63be"},{"LineNumber":146,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f84f8106-e121-40e4-92ef-f3ba80ad61f0"},{"LineNumber":147,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c422352a-2e7b-4591-897f-fe554f92e968"},{"LineNumber":148,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4f9c3a9d-2056-4f7f-a108-4aea198b3b4f"},{"LineNumber":149,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":85,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4250fd52-19d4-43ad-93e2-ea23e351b804"},{"LineNumber":150,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"63cb0eba-c7c0-4c66-87dc-1dbeb1b31e03"},{"LineNumber":151,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"47e95ffc-0271-48d0-b6bd-3f3e9d6d36d3"},{"LineNumber":152,"Hits":90,"StartColumnNumbers":2,"EndColumnNumbers":13,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ebce6f9a-b4e1-47bd-8ca0-a695e0b374fc"},{"LineNumber":153,"Hits":30,"StartColumnNumbers":4,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"80d62837-f3d9-4f1d-bea8-70e434e7a12c"},{"LineNumber":158,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"528e18e6-a11c-47ab-aeed-1664d090f063"},{"LineNumber":159,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d8be9f4c-18d4-4128-86f0-6c135935be8c"},{"LineNumber":160,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":80,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aa19c99d-db58-4b63-8959-24ac6a977bdb"},{"LineNumber":161,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"83ac8f89-1ec9-447c-a631-ae1c55ea278f"},{"LineNumber":162,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c910db1c-239d-426f-9e35-b122e06bb0bb"},{"LineNumber":164,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"76442feb-a8e2-4ced-b084-b9623ff9d93d"},{"LineNumber":165,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9d55d44a-04d1-4c52-9278-9369f1d8fcbf"},{"LineNumber":166,"Hits":120,"StartColumnNumbers":2,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cd494938-ea0c-49b2-9d0f-96d1b4d929cf"},{"LineNumber":169,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":69,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b05a0770-9ee4-445b-afc2-c6bf6835cf49"},{"LineNumber":170,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0bca89aa-f9c1-43f8-bb81-1cad09f30b41"},{"LineNumber":171,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"84812176-5164-4e60-bb3c-0dbd34024f44"},{"LineNumber":172,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aaa772a3-8072-491e-9b34-9a3d57366d56"},{"LineNumber":174,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":54,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0f5db36c-a921-4218-8541-175bbe515ac4"},{"LineNumber":175,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c9ce1d81-f696-4716-a37d-730f35787d5d"},{"LineNumber":176,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"14598b82-e028-4508-a946-3f7d2c336709"},{"LineNumber":177,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"432378e3-0868-45c6-9d6b-8435a79cd6ba"},{"LineNumber":179,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cfbd1c1e-894e-4c6f-988a-b177225e83de"},{"LineNumber":180,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f1c10c0b-ee4a-4fe8-be2e-edc5a98fde52"},{"LineNumber":181,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"325d04a7-610f-4246-bd38-0a4ba11b59c2"},{"LineNumber":182,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":20,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"515ea482-c188-4b1c-b6ae-787e55251278"},{"LineNumber":184,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":14,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e936155a-e1aa-4b1a-83d1-611c2faf1a9f"},{"LineNumber":186,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fed77e23-400c-43ee-a4ae-f4013cf0d06f"},{"LineNumber":187,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":26,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a9dfaa42-60b2-4eb4-a3e0-98172f1033e4"},{"LineNumber":189,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"4de4ab73-77cc-4de9-9751-0eff040be08e"},{"LineNumber":191,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":19,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f15ac476-20ff-4be7-a8de-2a7fd06e4c93"},{"LineNumber":192,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":27,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2e3c6a19-c6dc-4367-8768-57bda4cd5ee5"},{"LineNumber":193,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":28,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c1fa1467-3823-4b21-87fb-da07b1932335"},{"LineNumber":195,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":43,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7aa44e24-0ea9-4fb1-a642-3c72c077dc00"},{"LineNumber":196,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":24,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"fce6088a-66e3-4d65-baa7-813f70366618"},{"LineNumber":198,"Hits":30,"StartColumnNumbers":0,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c26865b2-bd14-417b-8a0f-36353a201332"}]},"FilterData":[]}