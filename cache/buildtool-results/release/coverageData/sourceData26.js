var sourceData26 = {"FileName":"C:\\local\\github-issacito12\\fork-bev\\Components\\BatteryHighVoltage\\BatteryHV_refsub_SystemSimple_params.m","RawFileContents":["%% Model parameters for high voltage battery component\r","% This script contains parameters required by the following model only.\r","% - System-level battery model, simple\r","%\r","% If you edit this file, make sure to run this to update variables\r","% in the base workspace before running simulation.\r","\r","% Copyright 2022-2023 The MathWorks, Inc.\r","\r","%% Bus definitions\r","\r","defineBus_HighVoltage\r","\r","%% Battery parameters\r","\r","batteryHV.nominalVoltage_V = 340;\r","\r","batteryHV.nominalCapacity_kWh = 60;\r","\r","batteryHV.nominalCharge_Ahr = ...\r","  BatteryHV_getAmpereHourRating( ...\r","    Voltage_V = batteryHV.nominalVoltage_V, ...\r","    Capacity_kWh = batteryHV.nominalCapacity_kWh, ...\r","    StateOfCharge_pct = 100 );\r","\r","batteryHV.internalResistance_Ohm = 0.01;\r","\r","% Voltage is 90 % of the nominal when SOC is 50 %.\r","batteryHV.measuredVoltage_V = batteryHV.nominalVoltage_V * 0.9;\r","batteryHV.measuredCharge_Ahr = batteryHV.nominalCharge_Ahr * 0.5;\r","\r","batteryHV.ThermalMass_J_per_K = 300;\r","\r","%% Ambient parameters\r","% Included in the battery component for thermal simulation\r","\r","batteryHV.ambientTemp_K = 273.15 + 20;\r","\r","batteryHV.ambientMass_t = 10000;\r","batteryHV.ambientSpecificHeat_J_per_Kkg = 1000;\r","\r","batteryHV.RadiationArea_m2 = 1;\r","batteryHV.RadiationCoeff_W_per_K4m2 = 5e-10;\r","\r","%% Initial conditions\r","\r","initial.hvBattery_SOC_pct = 70;\r","\r","initial.hvBattery_Charge_Ahr = ...\r","  BatteryHV_getAmpereHourRating( ...\r","    Voltage_V = batteryHV.nominalVoltage_V, ...\r","    Capacity_kWh = batteryHV.nominalCapacity_kWh, ...\r","    StateOfCharge_pct = initial.hvBattery_SOC_pct );\r","\r","initial.hvBattery_Temperature_K = batteryHV.ambientTemp_K;\r","\r","initial.ambientTemp_K = batteryHV.ambientTemp_K;\r",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":12,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false},{"LineNumber":16,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false},{"LineNumber":18,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":20,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":21,"Hits":10,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":22,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":true},{"LineNumber":23,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":true},{"LineNumber":24,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":true},{"LineNumber":26,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false},{"LineNumber":29,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":63,"ContinuedLine":false},{"LineNumber":30,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":65,"ContinuedLine":false},{"LineNumber":32,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false},{"LineNumber":37,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false},{"LineNumber":39,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false},{"LineNumber":40,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false},{"LineNumber":42,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":43,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false},{"LineNumber":47,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false},{"LineNumber":49,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false},{"LineNumber":50,"Hits":10,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true},{"LineNumber":51,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":true},{"LineNumber":52,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":true},{"LineNumber":53,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":52,"ContinuedLine":true},{"LineNumber":55,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false},{"LineNumber":57,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false}]}}