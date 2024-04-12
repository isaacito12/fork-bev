
# <span style="color:rgb(213,80,0)">BEV System Model - Simulation Case</span>
```matlab
modelName = "BEV_system_model";
load_system(modelName)
BEV_useComponents_Basic
```

```TextOutput
Use Basic models for all components.
```

```matlab
VehSpdRef_loadCase_SimpleDrivePattern( ...
  ModelName = modelName, ...
  TargetSubsystemPath = ...
    "/Controller & Environment" + ...
    "/Vehicle speed reference" )
```

```TextOutput
Setting up simulation...
Simulation case: Simple drive pattern
Setting simulation stop time to 100 sec.
Selecting simulation case 1.
```

```matlab
simOut = sim(modelName);
simData = extractTimetable(simOut.logsout);
fig = BEV_plotResultsCompact( SimData = simData, PlotTemperature = false );
```

<center><img src="Media/BEV_Case_SimpleDrivePattern_Basic_media/figure_0.png" width="702" alt="figure_0.png"></center>


*Copyright 2023 The MathWorks, Inc.*

