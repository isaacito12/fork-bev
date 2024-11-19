var sourceData29 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Components\\BatteryHighVoltage\\BatteryHV_refsub_Basic_params.m","RawFileContents":["%% Model parameters for high voltage battery component","% This script contains parameters required by the following model only.","% - Basic battery model","%","% If you edit this file, make sure to run this to update variables","% in the base workspace before running simulation.","","% Copyright 2022-2023 The MathWorks, Inc.","","%% Bus definitions","","defineBus_HighVoltage","","%% Battery parameters","","batteryHV.nominalVoltage_V = 340;","","batteryHV.nominalCapacity_kWh = 60;","","batteryHV.nominalCharge_Ahr = ...","  BatteryHV_getAmpereHourRating( ...","    Voltage_V = batteryHV.nominalVoltage_V, ...","    Capacity_kWh = batteryHV.nominalCapacity_kWh, ...","    StateOfCharge_pct = 100 );","","batteryHV.internalResistance_Ohm = 0.01;","","% This is required by the Battery Status block but","% does not affect any simulation behavior in the basic battery model.","batteryHV.ambientTemp_K = 273.15 + 20;","","%% Initial conditions","","initial.hvBattery_SOC_pct = 70;","","initial.hvBattery_Charge_Ahr = ...","  BatteryHV_getAmpereHourRating( ...","    Voltage_V = batteryHV.nominalVoltage_V, ...","    Capacity_kWh = batteryHV.nominalCapacity_kWh, ...","    StateOfCharge_pct = initial.hvBattery_SOC_pct );",""],"CoverageDisplayDataPerLine":{"Function":[],"Statement":[{"LineNumber":12,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2ef7d19d-0b06-4cb8-a948-16adfbbdaed7"},{"LineNumber":16,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"41023470-b83b-4e57-aa72-6935854f4bc1"},{"LineNumber":18,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"62dfaf2e-2f45-45d9-a339-4f94546b44bd"},{"LineNumber":20,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7e4fd049-3f62-487f-b11f-cc9b2029c2e9"},{"LineNumber":21,"Hits":17,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7e4fd049-3f62-487f-b11f-cc9b2029c2e9"},{"LineNumber":22,"Hits":17,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7e4fd049-3f62-487f-b11f-cc9b2029c2e9"},{"LineNumber":23,"Hits":17,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7e4fd049-3f62-487f-b11f-cc9b2029c2e9"},{"LineNumber":24,"Hits":17,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"7e4fd049-3f62-487f-b11f-cc9b2029c2e9"},{"LineNumber":26,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0443afd8-d469-4d14-ae88-27ff65d4bf7a"},{"LineNumber":30,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f63c83c9-9162-4827-99ec-9d1522bdf10d"},{"LineNumber":34,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":31,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d49fc382-100a-49bc-8a35-bd34fcade199"},{"LineNumber":36,"Hits":17,"StartColumnNumbers":0,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"5756c6c2-3a6d-471c-8e44-a6167dc516b8"},{"LineNumber":37,"Hits":17,"StartColumnNumbers":2,"EndColumnNumbers":32,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"5756c6c2-3a6d-471c-8e44-a6167dc516b8"},{"LineNumber":38,"Hits":17,"StartColumnNumbers":4,"EndColumnNumbers":42,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"5756c6c2-3a6d-471c-8e44-a6167dc516b8"},{"LineNumber":39,"Hits":17,"StartColumnNumbers":4,"EndColumnNumbers":48,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"5756c6c2-3a6d-471c-8e44-a6167dc516b8"},{"LineNumber":40,"Hits":17,"StartColumnNumbers":4,"EndColumnNumbers":52,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"5756c6c2-3a6d-471c-8e44-a6167dc516b8"}]},"FilterData":[]}