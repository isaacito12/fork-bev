
# <span style="color:rgb(213,80,0)">BEV System Model \- Simulation Case</span>
```matlab
modelName = "BEV_system_model";
load_system(modelName)
BEV_useComponents_Basic
```

```matlabTextOutput
Use Basic models for all components.
```

```matlab
VehSpdRef_loadCase_WLTP( ...
  ModelName = modelName, ...
  TargetSubsystemPath = ...
    "/Controller & Environment" + ...
    "/Vehicle speed reference" )
```

```matlabTextOutput
Setting up simulation...
Simulation case: WLTP Class 3 drive cycle using Drive Cycle Source block
Setting simulation stop time to 1800 sec.
Selecting simulation case 4.
```

```matlab
simOut = sim(modelName);
simData = extractTimetable(simOut.logsout);
fig = BEV_plotResultsCompact( SimData = simData, PlotTemperature = false );
```

<center><img src="media/BEV_Case_WLTP_Basic_media/figure_0.png" width="702" alt="figure_0.png"></center>


*Copyright 2023 The MathWorks, Inc.*

