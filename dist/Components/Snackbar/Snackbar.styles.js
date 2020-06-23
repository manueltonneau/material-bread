var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _reactNative=require("react-native");var _shadow=_interopRequireDefault(require("../../Utils/Shadow/shadow.js"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var styles=_reactNative.StyleSheet.create({container:{bottom:0,flex:1,width:'100%',justifyContent:'center',alignItems:'center',position:'absolute'},card:_objectSpread({},(0,_shadow.default)(6),{borderRadius:3,width:342,backgroundColor:'#212121',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:8}),text:{flex:1,fontWeight:'400',flexWrap:'wrap',color:'white',marginLeft:8,marginVertical:8,fontSize:14,lineHeight:16,letterSpacing:0.25}});var _default=styles;exports.default=_default;