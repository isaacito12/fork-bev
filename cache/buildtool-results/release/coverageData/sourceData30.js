var sourceData30 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\BatteryHV_refsub_SystemSimple_params.m","RawFileContents":["%% Model parameters for high voltage battery component","% This script contains parameters required by the following model only.","% - System-level battery model, simple","%","% If you edit this file, make sure to run this to update variables","% in the base workspace before running simulation.","","% Copyright 2022-2023 The MathWorks, Inc.","","%% Bus definitions","","defineBus_HighVoltage","","%% Battery parameters","","batteryHV.nominalVoltage_V = 340;","","batteryHV.nominalCapacity_kWh = 60;","","batteryHV.nominalCharge_Ahr = ...","  BatteryHV_getAmpereHourRating( ...","    Voltage_V = batteryHV.nominalVoltage_V, ...","    Capacity_kWh = batteryHV.nominalCapacity_kWh, ...","    StateOfCharge_pct = 100 );","","batteryHV.internalResistance_Ohm = 0.01;","","% Voltage is 90 % of the nominal when SOC is 50 %.","batteryHV.measuredVoltage_V = batteryHV.nominalVoltage_V * 0.9;","batteryHV.measuredCharge_Ahr = batteryHV.nominalCharge_Ahr * 0.5;","","batteryHV.ThermalMass_J_per_K = 300;","","%% Ambient parameters","% Included in the battery component for thermal simulation","","batteryHV.ambientTemp_K = 273.15 + 20;","","batteryHV.ambientMass_t = 10000;","batteryHV.ambientSpecificHeat_J_per_Kkg = 1000;","","batteryHV.RadiationArea_m2 = 1;","batteryHV.RadiationCoeff_W_per_K4m2 = 5e-10;","","%% Initial conditions","","initial.hvBattery_SOC_pct = 70;","","initial.hvBattery_Charge_Ahr = ...","  BatteryHV_getAmpereHourRating( ...","    Voltage_V = batteryHV.nominalVoltage_V, ...","    Capacity_kWh = batteryHV.nominalCapacity_kWh, ...","    StateOfCharge_pct = initial.hvBattery_SOC_pct );","","initial.hvBattery_Temperature_K = batteryHV.ambientTemp_K;","","initial.ambientTemp_K = batteryHV.ambientTemp_K;",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":12,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"19f1cf2b-d45b-49fc-ab4d-7dbc98ec68f8"},{"LineNumber":16,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"314ec9c4-d3a0-4619-ba15-6c74628d615d"},{"LineNumber":18,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9b4723eb-9cb0-48f6-a581-c789181bc370"},{"LineNumber":20,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7c41d1ec-ec41-4c47-bebb-e04528c8ae84"},{"LineNumber":21,"Hits":10,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7c41d1ec-ec41-4c47-bebb-e04528c8ae84"},{"LineNumber":22,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7c41d1ec-ec41-4c47-bebb-e04528c8ae84"},{"LineNumber":23,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7c41d1ec-ec41-4c47-bebb-e04528c8ae84"},{"LineNumber":24,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7c41d1ec-ec41-4c47-bebb-e04528c8ae84"},{"LineNumber":26,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"de5232de-5c07-4d7e-b668-afe8ac7666b0"},{"LineNumber":29,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":63,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0faaa8a7-702c-43c9-93e5-e52b3e3c6169"},{"LineNumber":30,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"13ce02f1-3d12-4008-8dda-9f75d831e197"},{"LineNumber":32,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"04c3f723-a967-4073-85b0-1df0d07aba96"},{"LineNumber":37,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0dc35a1d-386c-4f7b-9090-35b24e711544"},{"LineNumber":39,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":32,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"739e55ec-68ad-4996-beaa-39bee2cb1296"},{"LineNumber":40,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3e33f6e8-74c7-4958-8d0b-0915b9181b60"},{"LineNumber":42,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"eed9dc5b-d51d-4da1-9860-2597acd7f8f8"},{"LineNumber":43,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"92f6916e-f64e-4c41-89ad-1051ac845eac"},{"LineNumber":47,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cecd7437-02ff-484a-8232-fb56c3eef069"},{"LineNumber":49,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"3d6222f3-a60b-497a-883e-6bfc45eb7f88"},{"LineNumber":50,"Hits":10,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"3d6222f3-a60b-497a-883e-6bfc45eb7f88"},{"LineNumber":51,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"3d6222f3-a60b-497a-883e-6bfc45eb7f88"},{"LineNumber":52,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"3d6222f3-a60b-497a-883e-6bfc45eb7f88"},{"LineNumber":53,"Hits":10,"StartColumnNumbers":4,"EndColumnNumbers":52,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"3d6222f3-a60b-497a-883e-6bfc45eb7f88"},{"LineNumber":55,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c599df57-18ac-4d0b-bbe0-f90a85e78bd1"},{"LineNumber":57,"Hits":10,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a4e11503-fa3f-412e-8566-44eac42086c6"}]},"FilterData":[]}