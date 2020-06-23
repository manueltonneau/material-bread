var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _Modal=_interopRequireDefault(require("../Modal/Modal"));var _withTheme=_interopRequireDefault(require("../../Theme/withTheme"));var _Dialog=_interopRequireDefault(require("./Dialog.styles"));var _Button=_interopRequireDefault(require("../Button/Button.js"));var _BodyText=_interopRequireDefault(require("../Typography/BodyText/BodyText.js"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Dialog/Dialog.js";var Dialog=function(_Component){(0,_inherits2.default)(Dialog,_Component);function Dialog(){(0,_classCallCheck2.default)(this,Dialog);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Dialog).apply(this,arguments));}(0,_createClass2.default)(Dialog,[{key:"_renderActionItems",value:function _renderActionItems(){var _this$props=this.props,actionItems=_this$props.actionItems,actionItemsContainerStyle=_this$props.actionItemsContainerStyle;return _react.default.createElement(_reactNative.View,{style:[_Dialog.default.actionItems,actionItemsContainerStyle],__source:{fileName:_jsxFileName,lineNumber:39}},actionItems.map(function(item,index){if(_react.default.isValidElement(item))return item;return _react.default.createElement(_Button.default,(0,_extends2.default)({key:index,density:-1},item,{__source:{fileName:_jsxFileName,lineNumber:42}}));}));}},{key:"_renderContent",value:function _renderContent(){var _this$props2=this.props,style=_this$props2.style,title=_this$props2.title,titleStyle=_this$props2.titleStyle,supportingText=_this$props2.supportingText,supportingTextStyle=_this$props2.supportingTextStyle,children=_this$props2.children,actionItems=_this$props2.actionItems,contentStyle=_this$props2.contentStyle;return _react.default.createElement(_reactNative.View,{style:[_Dialog.default.container,style],__source:{fileName:_jsxFileName,lineNumber:60}},_react.default.createElement(_reactNative.View,{style:[_Dialog.default.contentContainer,contentStyle],__source:{fileName:_jsxFileName,lineNumber:61}},title?_react.default.createElement(_BodyText.default,{style:[_Dialog.default.title,titleStyle],__source:{fileName:_jsxFileName,lineNumber:63}},title):null,supportingText?_react.default.createElement(_BodyText.default,{style:[_Dialog.default.supportingText,supportingTextStyle],__source:{fileName:_jsxFileName,lineNumber:66}},supportingText):null,children,actionItems?this._renderActionItems():null));}},{key:"render",value:function render(){var _this$props3=this.props,visible=_this$props3.visible,onRequestClose=_this$props3.onRequestClose,onShow=_this$props3.onShow,onTouchOutside=_this$props3.onTouchOutside,testID=_this$props3.testID;return _react.default.createElement(_Modal.default,{visible:visible,onRequestClose:onRequestClose,onShow:onShow,onTouchOutside:onTouchOutside,testID:testID,__source:{fileName:_jsxFileName,lineNumber:87}},this._renderContent());}}]);return Dialog;}(_react.Component);(0,_defineProperty2.default)(Dialog,"propTypes",{style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),children:_propTypes.default.node,visible:_propTypes.default.bool,onRequestClose:_propTypes.default.func,onShow:_propTypes.default.func,onTouchOutside:_propTypes.default.func,actionItems:_propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.node,_propTypes.default.object])),actionItemsContainerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),title:_propTypes.default.string,titleStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),supportingText:_propTypes.default.string,supportingTextStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),contentStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),testID:_propTypes.default.string});var _default=(0,_withTheme.default)(Dialog);exports.default=_default;