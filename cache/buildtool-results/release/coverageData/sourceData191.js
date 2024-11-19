var sourceData191 = {"FileName":"C:\\local\\mw\\gh-isaacito12-bev\\Utility\\LiteAppAPI-v2-R2023b\\+LiteAppComponent\\DropDown.m","RawFileContents":["classdef DropDown < LiteAppComponent.LiteAppComponentBase","  %% Drop down component","  % Drop down items must be programatically defined for this class.","  % The uidropdown supports editable list which users can interactively edit","  % when the app is running, but this class does not support it.","","  % Copyright 2023-2024 The MathWorks, Inc.","","  properties","","    MainDropDown matlab.ui.control.DropDown","","    ValueChangedCallback {LiteAppUtility.mustBeFunctionHandleOrEmpty} = []","","    ComponentWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = \"1x\"","    DropDownWidth (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = \"1x\"","    HorizontalAlignment (1,1) {mustBeMember( HorizontalAlignment, [\"left\", \"center\", \"right\"])} = \"center\"","","    ComponentHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline++\"}","    DropDownHeight (1,:) {LiteAppUtility.mustBeTextOrPositiveNumber} = LiteAppUtility.Constant.Height{\"oneline+\"}","    % uidropdown has VerticalAlignment property, but it is for the alignment of icon and text within a drop down button.","    % The VerticalAlignment property of this class is for the alignment of the main element within a component.","    VerticalAlignment (1,1) {mustBeMember( VerticalAlignment, [\"top\", \"center\", \"bottom\"])} = \"center\"","","  end  % properties","","  properties (Dependent)","","    % Items and Value of this class are aliases of uidropdown's Items and Value.","    % Difference is that they are a string array and a string respectively in this class","    % while they are a cell array of char array and a char array in uidropdown, respectively.","    Items (1,:) string","    Value (1,1) string","","  end  % properties","","  methods (Access=protected)","","    function setup(component)","      %%","      setup@LiteAppComponent.LiteAppComponentBase(component)","","      component.gridObj = uigridlayout(component.baseGridObject);","      component.gridObj.Layout.Row = 1;","      component.gridObj.Layout.Column = 1;","      component.gridObj.RowHeight = {'1x', 'fit', '1x'};","      component.gridObj.ColumnWidth = {'1x', 'fit', '1x'};","      component.gridObj.Padding = component.CommonPadding;","      component.gridObj.ColumnSpacing = component.CommonColumnSpacing;","      component.gridObj.RowSpacing = component.CommonRowSpacing;","","      % The main element of this component.","      component.MainDropDown = uidropdown(component.gridObj);","      component.MainDropDown.Layout.Row = 2;","      component.MainDropDown.Layout.Column = 2;","      component.MainDropDown.FontSize = component.CommonFontSize;","      component.MainDropDown.ValueChangedFcn = ...","        @(sourceObject, eventData) dropdownValueChanged(component);","      component.MainDropDown.Editable = \"off\";","","      % -----------------------------------------------------------------------","      % Default settings","","      component.Items = [\"Item 1\" \"Item 2\"];","      component.Value = \"Item 1\";","","    end  % function","","    function update(component)","      %%","      update@LiteAppComponent.LiteAppComponentBase(component)","","      component.baseGridObject.RowHeight{1} = component.ComponentHeight;","      component.baseGridObject.ColumnWidth{1} = component.ComponentWidth;","","      switch component.VerticalAlignment","        case \"top\"","          component.gridObj.RowHeight = {   0, component.DropDownHeight, '1x'};","        case \"center\"","          component.gridObj.RowHeight = {'1x', component.DropDownHeight, '1x'};","        case \"bottom\"","          component.gridObj.RowHeight = {'1x', component.DropDownHeight,   0 };","      end  % switch","","      if strcmp(component.DropDownWidth, '1x')","        component.gridObj.ColumnWidth = {'1x'};","        component.MainDropDown.Layout.Column = 1;","      else","        component.MainDropDown.Layout.Column = 2;","        switch component.HorizontalAlignment","          case \"left\"","            component.gridObj.ColumnWidth = {  0,  component.DropDownWidth, '1x'};","          case \"center\"","            component.gridObj.ColumnWidth = {'1x', component.DropDownWidth, '1x'};","          case \"right\"","            component.gridObj.ColumnWidth = {'1x', component.DropDownWidth,   0 };","        end  % switch","      end  % if","","      if component.HighlightBackground","        component.gridObj.BackgroundColor = component.HighlightBackgroundColor;","      end  % if","    end  % function","","  end  % methods","","  methods","","    % -------------------------------------------------------------------------","","    function x = get.Items(component)","      arguments (Output)","        x (:,1) string","      end","      x = string(component.MainDropDown.Items);","    end  % function","","    function set.Items(component, x)","      arguments","        component","        x (:,1) string","      end","      component.MainDropDown.Items = cellstr(x);","    end  % function","","    % -------------------------------------------------------------------------","","    function x = get.Value(component)","      arguments (Output)","        x (1,1) string","      end","      x = string(component.MainDropDown.Value);","    end  % function","","    function set.Value(component, x)","      arguments (Input)","        component","        x (1,1) string","      end","      % This triggers dropdownObj's ValueChangedFcn.","      component.MainDropDown.Value = char(x);","","      % Also call this class' value-changed function.","      dropdownValueChanged(component)","    end  % function","","    % -------------------------------------------------------------------------","","  end  % methods","","  properties (Access=private, Transient, NonCopyable)","    gridObj matlab.ui.container.GridLayout","  end  % properties","","  methods (Access=private)","","    function dropdownValueChanged(component)","      % dispInfo(component)","","      if not(isempty(component.ValueChangedCallback)) ...","          && isa(component.ValueChangedCallback, 'function_handle')","        component.ValueChangedCallback()","      end  % if","","      notify(component, \"ValueChanged\")","      % Make sure to define ValueChanged event.","","    end  % function","","  end  % methods","","  events (HasCallbackProperty, NotifyAccess=protected)","","    % ValueChanged event adds ValueChangedFcn property to this class.","    ValueChanged","","  end  % events","","end  % classdef",""],"CoverageDisplayDataPerLine":{"Function":[{"LineNumber":39,"Hits":6,"StartColumnNumbers":4,"EndColumnNumbers":29,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"fddec5ef-432e-48d4-90f1-a5e236ca1938"},{"LineNumber":69,"Hits":19,"StartColumnNumbers":4,"EndColumnNumbers":30,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"507ce5bd-c2a3-4188-8804-2869034bd391"},{"LineNumber":111,"Hits":60,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"d4687823-70c1-4538-9fc1-b655248ddb6d"},{"LineNumber":118,"Hits":12,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"b051a9cf-a85a-4e32-b37e-f7159a1bc1a0"},{"LineNumber":128,"Hits":120,"StartColumnNumbers":4,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"1774d201-0482-4466-bed3-1d8829702588"},{"LineNumber":135,"Hits":22,"StartColumnNumbers":4,"EndColumnNumbers":36,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"7693cad9-b0ce-49ff-bad9-272ed5297b4a"},{"LineNumber":157,"Hits":22,"StartColumnNumbers":4,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":true,"FilterDataUUID":"be0acef8-1348-45ac-9d46-cacc5e7868be"}],"Statement":[{"LineNumber":41,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":60,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8fcf370a-9a27-4b69-8b4d-5b7308ab7647"},{"LineNumber":43,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7e581e94-caef-4729-bd14-1bbf66931e9b"},{"LineNumber":44,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1961440d-7ba7-4a09-9bb7-0016cdc9f679"},{"LineNumber":45,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":42,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c42b8fe2-6d5f-4e03-a10b-77f0084386ec"},{"LineNumber":46,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":56,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"48872a86-f1d9-4e52-a9a4-15a0c378530c"},{"LineNumber":47,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ee4e0b4e-b49e-4a6b-a1a6-9430e2282ec4"},{"LineNumber":48,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":58,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c0296c27-ea5e-48af-93ed-e7c411e8783a"},{"LineNumber":49,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":70,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"10b201bf-7b12-4996-9bf2-3b31a102d841"},{"LineNumber":50,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":64,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"dac96363-73b7-4451-b49d-af602ed46d22"},{"LineNumber":53,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"43f473af-dfb8-4c6d-901a-a43321d881b6"},{"LineNumber":54,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"7f556ec0-69b4-4bc4-883b-789c6e131a2c"},{"LineNumber":55,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6d4cae02-d1a2-4400-b112-27d5fdbcf692"},{"LineNumber":56,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":65,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"9bf30121-c4a2-4ef7-b31c-9857343cddf0"},{"LineNumber":57,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"aeccc5bb-c815-4490-b130-63e9f79b8ca8"},{"LineNumber":58,"Hits":6,"StartColumnNumbers":8,"EndColumnNumbers":67,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"aeccc5bb-c815-4490-b130-63e9f79b8ca8"},{"LineNumber":59,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"6e481af1-2aa7-4e0b-a039-3ef24074d8e9"},{"LineNumber":64,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"33aa65bc-85a5-43b2-80c2-9e8a0a708272"},{"LineNumber":65,"Hits":6,"StartColumnNumbers":6,"EndColumnNumbers":33,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"08adc6f2-c6c2-4fad-acd2-f6199c851ad1"},{"LineNumber":71,"Hits":19,"StartColumnNumbers":6,"EndColumnNumbers":61,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8b3b7fcb-8254-47e9-b280-2a027119ff5b"},{"LineNumber":73,"Hits":19,"StartColumnNumbers":6,"EndColumnNumbers":72,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"43a8c67b-61a4-460f-a414-de4c91c79d5f"},{"LineNumber":74,"Hits":19,"StartColumnNumbers":6,"EndColumnNumbers":73,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f84db999-0628-48d2-8b88-c20ba8b4f154"},{"LineNumber":76,"Hits":19,"StartColumnNumbers":6,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"59c555d5-2686-47cc-88ad-a0096fcc27d6"},{"LineNumber":77,"Hits":19,"StartColumnNumbers":8,"EndColumnNumbers":18,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"408b8391-7aaa-4df4-9cf6-47431e90add6"},{"LineNumber":78,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":79,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"823e92e2-e7db-4875-9346-e44f40b93f14"},{"LineNumber":79,"Hits":19,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8e0cedf2-54f5-40ec-b6c1-568afba43c00"},{"LineNumber":80,"Hits":19,"StartColumnNumbers":10,"EndColumnNumbers":79,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"56101f7c-0b9f-45c0-a04f-6977b8d9b704"},{"LineNumber":81,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e373c167-d7e2-40c1-89cb-32453ad1f56a"},{"LineNumber":82,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":79,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"0a6099d9-0342-411e-8ffa-b8471f62eca7"},{"LineNumber":85,"Hits":19,"StartColumnNumbers":6,"EndColumnNumbers":46,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"854ab14a-72d2-4a00-8377-7d33c3520313"},{"LineNumber":86,"Hits":19,"StartColumnNumbers":8,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"8abd0dd9-cdea-4ce6-b86e-3013611d1acb"},{"LineNumber":87,"Hits":19,"StartColumnNumbers":8,"EndColumnNumbers":49,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e9d9258f-ac5b-4eb4-bb23-a25d754d530e"},{"LineNumber":89,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":49,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"2fc49ce0-ed93-4dca-87d5-30599ce30afb"},{"LineNumber":90,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":44,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"f2a5b3b9-84b7-44bb-b4cd-866a1e839f06"},{"LineNumber":91,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":21,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c2f9421a-3669-4276-a7af-b99ebf1cce96"},{"LineNumber":92,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"c33e0c66-9019-492e-9a55-1865ded67972"},{"LineNumber":93,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":23,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"b0459969-8705-43ce-8781-241e871ae778"},{"LineNumber":94,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"794f8217-0762-4ba9-b789-962cac4ffc5d"},{"LineNumber":95,"Hits":0,"StartColumnNumbers":10,"EndColumnNumbers":22,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d26ad979-9c8e-4f47-93b2-5504801a0ca9"},{"LineNumber":96,"Hits":0,"StartColumnNumbers":12,"EndColumnNumbers":82,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"ff739938-2c3e-4167-ac63-15ed521809d8"},{"LineNumber":100,"Hits":19,"StartColumnNumbers":6,"EndColumnNumbers":38,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"69e386a7-8931-47bc-947a-496647f9232d"},{"LineNumber":101,"Hits":0,"StartColumnNumbers":8,"EndColumnNumbers":79,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"1702c60b-0e39-4b43-8b16-27e7375f87c7"},{"LineNumber":115,"Hits":60,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"86ce7f2a-90ed-4cf8-93f3-cb31528d7502"},{"LineNumber":123,"Hits":12,"StartColumnNumbers":6,"EndColumnNumbers":48,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"cc4acf74-7584-460c-8208-7fd565ae44e6"},{"LineNumber":132,"Hits":120,"StartColumnNumbers":6,"EndColumnNumbers":47,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"e5c9a011-5552-424e-aee8-488f4fbab39b"},{"LineNumber":141,"Hits":22,"StartColumnNumbers":6,"EndColumnNumbers":45,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"890aae33-015f-404f-a746-a0916620c11a"},{"LineNumber":144,"Hits":22,"StartColumnNumbers":6,"EndColumnNumbers":37,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"312ba5c7-1b33-4d02-9359-4edb514f4ccb"},{"LineNumber":160,"Hits":22,"StartColumnNumbers":6,"EndColumnNumbers":53,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"a6e91887-7764-4a6a-b98b-6728d0b3c8a7"},{"LineNumber":161,"Hits":22,"StartColumnNumbers":10,"EndColumnNumbers":67,"ContinuedLine":true,"Filterable":false,"FilterDataUUID":"a6e91887-7764-4a6a-b98b-6728d0b3c8a7"},{"LineNumber":162,"Hits":10,"StartColumnNumbers":8,"EndColumnNumbers":40,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d0fdbfa4-ab3f-46eb-8d0f-49303adb1531"},{"LineNumber":165,"Hits":22,"StartColumnNumbers":6,"EndColumnNumbers":39,"ContinuedLine":false,"Filterable":false,"FilterDataUUID":"d2d151e5-fa3a-4b67-bd38-2892be5977fd"}]},"FilterData":[]}