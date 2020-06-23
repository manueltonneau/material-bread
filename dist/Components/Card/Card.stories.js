var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _reactNative=require("react-native");var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Card/Card.stories.js";var _default=(0,_storiesOf.storiesOf)('Components|Card',module).addParameters({jest:['Card']}).add('simple',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:24}},_react.default.createElement(_Header.default,{title:'Simple Card',__source:{fileName:_jsxFileName,lineNumber:25}}),_react.default.createElement(_.Card,{style:{flex:1,marginBottom:20,padding:16,maxWidth:400},__source:{fileName:_jsxFileName,lineNumber:27}},_react.default.createElement(_reactNative.Text,{style:{fontSize:14,textAlign:'center',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:28}},"This is a simple card with a button"),_react.default.createElement(_.Button,{type:'flat',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:31}})),_react.default.createElement(_.Card,{style:{flex:1,marginBottom:20,padding:16,maxWidth:400},shadow:5,__source:{fileName:_jsxFileName,lineNumber:34}},_react.default.createElement(_reactNative.Text,{style:{fontSize:14,textAlign:'center',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:37}},"This one has more shadow"),_react.default.createElement(_.Button,{type:'flat',text:"Card button",style:{marginBottom:20},__source:{fileName:_jsxFileName,lineNumber:40}}),_react.default.createElement(_.Button,{type:'flat',color:'#E91E63',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:41}})),_react.default.createElement(_.Card,{style:{flex:1,marginBottom:20,padding:16,maxWidth:400},shadow:8,__source:{fileName:_jsxFileName,lineNumber:44}},_react.default.createElement(_reactNative.Text,{style:{fontSize:14,textAlign:'center',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:47}},"This one has more shadow"),_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',justifyContent:'space-between',marginTop:20},__source:{fileName:_jsxFileName,lineNumber:50}},_react.default.createElement(_.Button,{type:'flat',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:56}}),_react.default.createElement(_.Button,{type:'flat',color:'#E91E63',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:57}}))),_react.default.createElement(_.Card,{style:{flex:1,marginBottom:20,padding:16,maxWidth:400},radius:20,shadow:5,__source:{fileName:_jsxFileName,lineNumber:60}},_react.default.createElement(_reactNative.Text,{style:{fontSize:14,textAlign:'center',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:64}},"This one has more radius"),_react.default.createElement(_.Button,{type:'flat',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:67}})),_react.default.createElement(_.Card,{style:{flex:1,marginBottom:20,padding:16,maxWidth:400,maxHeight:400},radius:200,shadow:5,__source:{fileName:_jsxFileName,lineNumber:69}},_react.default.createElement(_reactNative.Text,{style:{fontSize:14,textAlign:'center',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:79}},"This one has more radius"),_react.default.createElement(_.Button,{type:'flat',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:82}})),_react.default.createElement(_.Card,{style:{flex:1,marginBottom:20,padding:16},__source:{fileName:_jsxFileName,lineNumber:84}},_react.default.createElement(_reactNative.Text,{style:{fontSize:14,textAlign:'center',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:85}},"This is one takes up the full width"),_react.default.createElement(_.Button,{type:'flat',text:"Card button",__source:{fileName:_jsxFileName,lineNumber:88}})));}).add('full card',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:93}},_react.default.createElement(_Header.default,{title:'Full Card',__source:{fileName:_jsxFileName,lineNumber:94}}),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%',marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:96}},_react.default.createElement(_.CardHeader,{thumbnail:_react.default.createElement(_.Avatar,{type:"image",image:_react.default.createElement(_reactNative.Image,{source:{uri:'https://images.pexels.com/photos/2906664/pexels-photo-2906664.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},__source:{fileName:_jsxFileName,lineNumber:102}}),size:48,__source:{fileName:_jsxFileName,lineNumber:99}}),title:'Title',subtitle:'Metadata',action:_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:115}},_react.default.createElement(_.IconButton,{name:"favorite-border",size:24,color:'rgba(0,0,0,.47)',__source:{fileName:_jsxFileName,lineNumber:120}}),_react.default.createElement(_.IconButton,{style:{marginLeft:12},name:"share",size:24,color:'rgba(0,0,0,.47)',__source:{fileName:_jsxFileName,lineNumber:125}}),_react.default.createElement(_.IconButton,{style:{marginLeft:12},name:"more-vert",size:24,color:'rgba(0,0,0,.47)',__source:{fileName:_jsxFileName,lineNumber:131}})),__source:{fileName:_jsxFileName,lineNumber:97}}),_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:142}}),__source:{fileName:_jsxFileName,lineNumber:140}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:152}},_react.default.createElement(_reactNative.Text,{style:{fontSize:18,fontWeight:'500',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:153}},"Title"),_react.default.createElement(_reactNative.Text,{style:{fontSize:14,marginBottom:16},__source:{fileName:_jsxFileName,lineNumber:161}},"Metadata"),_react.default.createElement(_reactNative.Text,{style:{fontSize:16},__source:{fileName:_jsxFileName,lineNumber:162}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque felis, eleifend in dolor eu, pellentesque finibus erat. Vestibulum eleifend sapien et felis pulvinar cursus.")),_react.default.createElement(_.CardActions,{rightActionItems:[{name:'favorite-border'},{name:'share'},{name:'more-vert'}],__source:{fileName:_jsxFileName,lineNumber:168}})),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%',marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:177}},_react.default.createElement(_.CardHeader,{thumbnail:_react.default.createElement(_.Avatar,{type:"image",image:_react.default.createElement(_reactNative.Image,{source:{uri:'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/john-snow-1920.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg'},__source:{fileName:_jsxFileName,lineNumber:183}}),size:40,__source:{fileName:_jsxFileName,lineNumber:180}}),title:'Jon Snow',subtitle:'Knows Nothing, KingofDaNorth',action:_react.default.createElement(_.IconButton,{name:"more-vert",size:24,__source:{fileName:_jsxFileName,lineNumber:195}}),__source:{fileName:_jsxFileName,lineNumber:178}}),_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://i.redd.it/zj9vfr7uuljz.png'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:199}}),__source:{fileName:_jsxFileName,lineNumber:197}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:206}},_react.default.createElement(_reactNative.Text,{style:{fontSize:18,fontWeight:'500',marginBottom:8},__source:{fileName:_jsxFileName,lineNumber:207}},"Prince of Dragonstone"),_react.default.createElement(_reactNative.Text,{style:{fontSize:14,marginBottom:16},__source:{fileName:_jsxFileName,lineNumber:215}},"You've got the North in you"),_react.default.createElement(_reactNative.Text,{style:{fontSize:16},__source:{fileName:_jsxFileName,lineNumber:218}},"Ran out of bleach for beard, but Daenerys says it looks cool.")),_react.default.createElement(_.CardActions,{rightActionItems:[{name:'thumb-up'},{name:'share'}],__source:{fileName:_jsxFileName,lineNumber:222}})),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%',marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:227}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/1451360/pexels-photo-1451360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:230}}),__source:{fileName:_jsxFileName,lineNumber:228}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:240}},_react.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:241}},_react.default.createElement(_.Avatar,{type:"image",image:_react.default.createElement(_reactNative.Image,{source:{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg'},__source:{fileName:_jsxFileName,lineNumber:245}}),size:40,__source:{fileName:_jsxFileName,lineNumber:242}}),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14,marginLeft:16},__source:{fileName:_jsxFileName,lineNumber:254}},"I don't like sand. It's coarse and rough and irritating and it gets everywhere.")))));}).add('clickable',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:265}},_react.default.createElement(_Header.default,{title:'Clickable Card',__source:{fileName:_jsxFileName,lineNumber:266}}),_react.default.createElement(_reactNative.ScrollView,{horizontal:true,scrollEnabled:true,__source:{fileName:_jsxFileName,lineNumber:267}},_react.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:268}},_react.default.createElement(_.Card,{style:{maxWidth:150,width:'100%',marginBottom:50,marginRight:4},shadow:4,onPress:function onPress(){return console.log('clicked dog');},__source:{fileName:_jsxFileName,lineNumber:269}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:280}}),__source:{fileName:_jsxFileName,lineNumber:278}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:290}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600',marginBottom:6},__source:{fileName:_jsxFileName,lineNumber:291}},"Penguin"))),_react.default.createElement(_.Card,{style:{maxWidth:150,width:'100%',marginBottom:50,marginRight:4},shadow:4,onPress:function onPress(){return console.log('clicked dog');},__source:{fileName:_jsxFileName,lineNumber:302}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:313}}),__source:{fileName:_jsxFileName,lineNumber:311}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:323}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600',marginBottom:6},__source:{fileName:_jsxFileName,lineNumber:324}},"Pup"))),_react.default.createElement(_.Card,{style:{maxWidth:150,width:'100%',marginBottom:50},shadow:4,onPress:function onPress(){return console.log('clicked dog');},__source:{fileName:_jsxFileName,lineNumber:335}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:341}}),__source:{fileName:_jsxFileName,lineNumber:339}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:351}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600',marginBottom:6},__source:{fileName:_jsxFileName,lineNumber:352}},"Panda"))))),_react.default.createElement(_.Card,{style:{maxWidth:300,width:'100%',marginBottom:50},shadow:4,onPress:function onPress(){return console.log('clicked dog');},__source:{fileName:_jsxFileName,lineNumber:366}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:372}}),__source:{fileName:_jsxFileName,lineNumber:370}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:382}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600',marginBottom:6},__source:{fileName:_jsxFileName,lineNumber:383}},"Dog"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:392}},"The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."))),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%',marginBottom:50},__source:{fileName:_jsxFileName,lineNumber:400}},_react.default.createElement(_.Ripple,{onPress:function onPress(){return console.log('pressed action');},__source:{fileName:_jsxFileName,lineNumber:401}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:404}}),__source:{fileName:_jsxFileName,lineNumber:402}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:414}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600',marginBottom:6},__source:{fileName:_jsxFileName,lineNumber:415}},"Gorilla"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:424}},"Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit the forests of central Sub-Saharan Africa."))),_react.default.createElement(_.CardActions,{leftActionItems:[{name:'share'},{name:'learn more'}],__source:{fileName:_jsxFileName,lineNumber:430}})));}).add('CardActions',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:437}},_react.default.createElement(_Header.default,{title:'Card Actions',__source:{fileName:_jsxFileName,lineNumber:438}}),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%'},__source:{fileName:_jsxFileName,lineNumber:440}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:443}}),__source:{fileName:_jsxFileName,lineNumber:441}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:453}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:454}},"Fact: dogs make everything better")),_react.default.createElement(_.CardActions,{leftActionItems:[{name:'share'},{name:'learn more'}],rightActionItems:[{name:'favorite'},{name:'share'}],__source:{fileName:_jsxFileName,lineNumber:458}})));}).add('CardContent',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:466}},_react.default.createElement(_Header.default,{title:'Card Content',__source:{fileName:_jsxFileName,lineNumber:467}}),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%'},__source:{fileName:_jsxFileName,lineNumber:468}},_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:471}}),__source:{fileName:_jsxFileName,lineNumber:469}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:481}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600',marginBottom:10},__source:{fileName:_jsxFileName,lineNumber:482}},"Reasons dogs are the best:"),_react.default.createElement(_reactNative.View,{style:{marginLeft:8},__source:{fileName:_jsxFileName,lineNumber:491}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:492}},"- Man's best friend"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:495}},"- Some have jobs"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:498}},"- See image"))),_react.default.createElement(_.CardActions,{rightActionItems:[_react.default.createElement(_.Badge,{key:2,content:99,__source:{fileName:_jsxFileName,lineNumber:505}},_react.default.createElement(_.IconButton,{name:"favorite",color:'#F44336',size:24,__source:{fileName:_jsxFileName,lineNumber:506}})),{name:'share'}],__source:{fileName:_jsxFileName,lineNumber:503}})),_react.default.createElement(_.Card,{style:{maxWidth:500,width:500,boxSizing:'borderbox',marginTop:40},__source:{fileName:_jsxFileName,lineNumber:513}},_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:520}},_react.default.createElement(_reactNative.View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:521}},_react.default.createElement(_reactNative.View,{style:{flex:1,padding:8},__source:{fileName:_jsxFileName,lineNumber:522}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:16,fontWeight:'600'},__source:{fileName:_jsxFileName,lineNumber:523}},"Jon"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,1)',fontSize:20,fontWeight:'600',marginBottom:10},__source:{fileName:_jsxFileName,lineNumber:531}},"Stewart"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14,flexWrap:'wrap'},__source:{fileName:_jsxFileName,lineNumber:540}},"American comedian, writer, producer, director, activist, political commentator, actor, and television host.")),_react.default.createElement(_reactNative.View,{style:{flex:1,overflow:'hidden'},__source:{fileName:_jsxFileName,lineNumber:550}},_react.default.createElement(_reactNative.Image,{style:{width:250,height:200},source:{uri:'https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDkyNjI5NTE1/jon-stewart-16242282-1-402.jpg'},__source:{fileName:_jsxFileName,lineNumber:551}}))))));}).add('CardHeader',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:566}},_react.default.createElement(_Header.default,{title:'Card Media',__source:{fileName:_jsxFileName,lineNumber:567}}),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%'},__source:{fileName:_jsxFileName,lineNumber:568}},_react.default.createElement(_.CardHeader,{thumbnail:_react.default.createElement(_.Avatar,{type:"image",image:_react.default.createElement(_reactNative.Image,{source:{uri:'http://assets1.ignimgs.com/2014/04/07/marioignpng-e324a5_1280w.png'},__source:{fileName:_jsxFileName,lineNumber:574}}),size:40,__source:{fileName:_jsxFileName,lineNumber:571}}),title:'Mario',subtitle:'Hero. Plumber. Brother.',action:_react.default.createElement(_.IconButton,{name:"more-vert",size:24,color:'rgba(0,0,0,.54)',__source:{fileName:_jsxFileName,lineNumber:587}}),__source:{fileName:_jsxFileName,lineNumber:569}}),_react.default.createElement(_.CardMedia,{image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://i.redd.it/tr8wgp1ysulz.png'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:592}}),__source:{fileName:_jsxFileName,lineNumber:590}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:599}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:600}},"Movember is over.")),_react.default.createElement(_.CardActions,{rightActionItems:[{name:'reply'},{name:'thumb-up'},{name:'share'}],__source:{fileName:_jsxFileName,lineNumber:602}})),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%',marginTop:60},radius:1,shadow:4,__source:{fileName:_jsxFileName,lineNumber:610}},_react.default.createElement(_.CardHeader,{subtitle:'Mario - 25 mins ago',style:{alignItems:'center',borderBottom:'none',paddingBottom:0},action:_react.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:622}},_react.default.createElement(_.IconButton,{name:"star",size:24,color:'rgba(0,0,0,.47)',__source:{fileName:_jsxFileName,lineNumber:627}}),_react.default.createElement(_.IconButton,{name:"delete",size:24,color:'rgba(0,0,0,.47)',__source:{fileName:_jsxFileName,lineNumber:628}}),_react.default.createElement(_.IconButton,{name:"more-vert",size:24,color:'rgba(0,0,0,.47)',__source:{fileName:_jsxFileName,lineNumber:629}}),_react.default.createElement(_.Avatar,{type:"image",image:_react.default.createElement(_reactNative.Image,{source:{uri:'http://assets1.ignimgs.com/2014/04/07/marioignpng-e324a5_1280w.png'},__source:{fileName:_jsxFileName,lineNumber:637}}),size:40,__source:{fileName:_jsxFileName,lineNumber:634}})),__source:{fileName:_jsxFileName,lineNumber:614}},_react.default.createElement(_reactNative.Text,{__source:{fileName:_jsxFileName,lineNumber:648}},"Mario - 25 mins ago")),_react.default.createElement(_.CardContent,{style:{paddingTop:4,paddingBottom:16},__source:{fileName:_jsxFileName,lineNumber:651}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,1)',fontSize:16,marginBottom:4},__source:{fileName:_jsxFileName,lineNumber:652}},"Where is the Princess?"),_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:656}},"I've defeated Bowser in 6 castles and still no Prin..."))));}).add('CardMedia',function(){return _react.default.createElement(_Container.default,{scroll:true,__source:{fileName:_jsxFileName,lineNumber:664}},_react.default.createElement(_Header.default,{title:'Card Media',__source:{fileName:_jsxFileName,lineNumber:665}}),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%'},__source:{fileName:_jsxFileName,lineNumber:667}},_react.default.createElement(_.CardMedia,{title:'Top ten books',subtitle:'by Cody',image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/34620/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:672}}),__source:{fileName:_jsxFileName,lineNumber:668}}),_react.default.createElement(_.CardContent,{__source:{fileName:_jsxFileName,lineNumber:682}},_react.default.createElement(_reactNative.Text,{style:{color:'rgba(0,0,0,.6)',fontSize:14},__source:{fileName:_jsxFileName,lineNumber:683}},"Books ranked with arbitrary bias, inconsistent logic, and strong opinions.")),_react.default.createElement(_.CardActions,{leftActionItems:[{name:'Read'}],rightActionItems:[{name:'favorite'},{name:'share'}],__source:{fileName:_jsxFileName,lineNumber:688}})),_react.default.createElement(_.Card,{style:{maxWidth:400,width:'100%',marginTop:40},__source:{fileName:_jsxFileName,lineNumber:694}},_react.default.createElement(_.CardMedia,{title:'Flights now 30% off',image:_react.default.createElement(_reactNative.Image,{style:{flex:1,width:'100%'},source:{uri:'https://images.pexels.com/photos/59519/pexels-photo-59519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},resizeMode:"cover",__source:{fileName:_jsxFileName,lineNumber:698}}),__source:{fileName:_jsxFileName,lineNumber:695}}),_react.default.createElement(_.CardActions,{rightActionItems:[_react.default.createElement(_.Button,{key:1,text:'Learn More',__source:{fileName:_jsxFileName,lineNumber:711}}),_react.default.createElement(_.Button,{key:2,text:'Buy Now',type:"contained",__source:{fileName:_jsxFileName,lineNumber:712}})],__source:{fileName:_jsxFileName,lineNumber:709}})));});exports.default=_default;