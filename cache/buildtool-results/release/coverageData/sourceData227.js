var sourceData227 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\getSimscapeValueFromBlockParameter.m","RawFileContents":["function sscVal = getSimscapeValueFromBlockParameter(fullpathToBlock, parameterName)","%% Returns Simscape value object for a block parameter of Simscape block ","% Parameters of Simscape blocks can have physical units.","% This function collects the value and unit of such a parameter","% and builds a Simscape value object,","% which is the return value of this function.","%","% To get a value in your expected physical unit,","% use value() function for the returned Simscape value object as follows.","%","%   ssc_val = getSimscapeValueFromBlockParameter(\"path/to/block\", \"Mass\");","%   m_kg = value(ssc_va, \"kg\");","%","% If the specified parameter is not associated with units,","% this function returns a Simscape  value object with unit of \"1\".","% This is the case, for example, for percent values. ","","% Copyright 2023 The MathWorks, Inc.","","arguments","  fullpathToBlock {mustBeText} = \"\"","  parameterName {mustBeText} = \"\"","end","","% Collect mask workspace variables.","% They have been evaluated.","% See the documentation for Simulink.VariableUsage.","maskVars = get_param(fullpathToBlock, \"MaskWSVariables\");","","varNames = string({maskVars.Name});","varValues = {maskVars.Value};","","variable = varValues{varNames == parameterName};","","variable_unit = varValues{varNames == parameterName+\"_unit\"};","if variable_unit == \"\"","  variable_unit = \"1\";","end","","sscVal = simscape.Value(variable, variable_unit);","","end  % function",""],"CoverageDisplayDataPerLine":{"Function":{"LineNumber":1,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":84,"ContinuedLine":false},"Statement":[{"LineNumber":21,"Hits":[26,0],"StartColumnNumbers":[19,33],"EndColumnNumbers":[29,35],"ContinuedLine":false},{"LineNumber":22,"Hits":[26,0],"StartColumnNumbers":[17,31],"EndColumnNumbers":[27,33],"ContinuedLine":false},{"LineNumber":28,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":57,"ContinuedLine":false},{"LineNumber":30,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":35,"ContinuedLine":false},{"LineNumber":31,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":29,"ContinuedLine":false},{"LineNumber":33,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":48,"ContinuedLine":false},{"LineNumber":35,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":61,"ContinuedLine":false},{"LineNumber":36,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":37,"Hits":0,"StartColumnNumbers":2,"EndColumnNumbers":22,"ContinuedLine":false},{"LineNumber":40,"Hits":26,"StartColumnNumbers":0,"EndColumnNumbers":49,"ContinuedLine":false}]}}