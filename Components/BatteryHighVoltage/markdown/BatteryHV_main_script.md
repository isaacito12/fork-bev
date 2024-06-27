
<a name="T_1FFD3858"></a>

# <span style="color:rgb(213,80,0)">High Voltage Battery \- Main Script</span>

This is a component to simulate the abstract dynamics of a high voltage battery pack.

# Models

This component provides four models of a high voltage battery:

-   **Basic** model ... is the simplest model and computes the voltage and current of the battery with no temperature dependence. 
-   **Simple system** model ... is the second simplest model, built with [Battery (System\-Level) block](https://www.mathworks.com/help/sdl/ref/batterysystemlevel.html) from Simscape Driveline. This model has a simple equation\-based terminal voltage model computed from the state of charge (SOC). This model also computes the battery temperature from dissipated energy. 
-   **System** model ... is a model built with [Battery block](https://www.mathworks.com/help/sps/ref/battery.html) from Simscape Battery and Simscape Electrical. This model can simulate the terminal voltage more accurately than the simple system model above, but it requires more parameters. Optionally, this model can also simulate charging dynamics, fade, and aging. 
-   **Table\-based system** model ... is a model built with [Battery (Table\-Based) block](https://www.mathworks.com/help/sps/ref/batterytablebased.html) from Simscape Battery and Simscape Electrical. This model takes tabulated data for open\-circuit voltage and terminal resistance as a function of temperature and SOC. This model also needs the number of cells and their series\-parallel circuit configuration information. Similar to the system model above, this model can optionally simulate charging dynamics, fade, and aging. 
# Simulation cases

To validate the component, a harness model is used to run some simulation cases. Click the links below to see the simulation results.

-  [Charging](matlab:openFile('BatteryHV_simulationCase_Charge')) 
-  [Discharging](matlab:openFile('BatteryHV_simulationCase_Discharge')) 
-  [Random load current](matlab:openFile('BatteryHV_simulationCase_Random')) 
-  [Constant load current](matlab:openFile('BatteryHV_simulationCase_Constant')) 

*Copyright 2020\-2023 The Mathworks, Inc.*

