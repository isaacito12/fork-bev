function mustBeFunctionHandle(x)

% Copyright 2024 The MathWorks, Inc.

if not(isa(x, 'function_handle'))
  error_id = "Type:notCorrectType";
  error_message = "Input must be a function handle.";
  throwAsCaller(MException(error_id, error_message))
end  % if

end  % function
