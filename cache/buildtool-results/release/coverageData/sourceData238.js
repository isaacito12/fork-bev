var sourceData238 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\getSimscapeValueFromBlockParameter.m","RawFileContents":["function sscVal = getSimscapeValueFromBlockParameter(fullpathToBlock, parameterName)","%% Returns Simscape value object for a block parameter of Simscape block ","% Parameters of Simscape blocks can have physical units.","% This function collects the value and unit of such a parameter","% and builds a Simscape value object,","% which is the return value of this function.","%","% To get a value in your expected physical unit,","% use value() function for the returned Simscape value object as follows.","%","%   ssc_val = getSimscapeValueFromBlockParameter(\"path/to/block\", \"Mass\");","%   m_kg = value(ssc_va, \"kg\");","%","% If the specified parameter is not associated with units,","% this function returns a Simscape  value object with unit of \"1\".","% This is the case, for example, for percent values. ","","% Copyright 2023 The MathWorks, Inc.","","arguments","  fullpathToBlock {mustBeText} = \"\"","  parameterName {mustBeText} = \"\"","end","","% Collect mask workspace variables.","% They have been evaluated.","% See the documentation for Simulink.VariableUsage.","maskVars = get_param(fullpathToBlock, \"MaskWSVariables\");","","varNames = string({maskVars.Name});","varValues = {maskVars.Value};","","variable = varValues{varNames == parameterName};","","variable_unit = varValues{varNames == parameterName+\"_unit\"};","if variable_unit == \"\"","  variable_unit = \"1\";","end","","sscVal = simscape.Value(variable, variable_unit);","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":84,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"addae27e-0caa-4960-96d1-a6a294641bbf"},"Statement":[{"LineNumber":21,"Hits":[26,0],"StartColumnNumbers":[19,33],"EndColumnNumbers":[29,35],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["c7072c21-1818-4ca1-9a74-ccd5568f68b5","7793d63f-02ad-400e-875c-b63cf42bacfe"]},{"LineNumber":22,"Hits":[26,0],"StartColumnNumbers":[17,31],"EndColumnNumbers":[27,33],"ContinuedLine":false,"Filterable":[false,false],"FilterDataUUID":["a3e77fda-d71a-4eb6-9be5-c447a17cf1fe","e62160e7-df43-4953-8c12-7b79fd6719e6"]},{"LineNumber":28,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"352ac4f2-fb18-45c5-ad6b-0de693b2be0e"},{"LineNumber":30,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"00da872c-c63f-40b1-bf0c-d6ece9ad85f4"},{"LineNumber":31,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"68c6c66b-888f-40e1-8146-d99489544021"},{"LineNumber":33,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"08ef776c-425f-4956-8f81-c9bceedc29c4"},{"LineNumber":35,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d8b496c4-d504-414f-9d05-1cab7f69ccff"},{"LineNumber":36,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a323410d-590c-48c1-b257-f0048545e76e"},{"LineNumber":37,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c179926b-a82b-467e-9ce1-1ad4a28de18c"},{"LineNumber":40,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"edc3869d-cade-4664-b767-79a0bfb88d93"}]},"FilterData":[]}