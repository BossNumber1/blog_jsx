(this.webpackJsonpblog_jsx=this.webpackJsonpblog_jsx||[]).push([[0],{19:function(e,t,a){e.exports={ava:"profile_ava__1LRfQ",info:"profile_info__iaadv",infoIcon:"profile_infoIcon__RasSh",posts:"profile_posts__37ntr"}},20:function(e,t,a){e.exports={activeLink:"navbar_activeLink__2FfmY"}},39:function(e,t,a){e.exports=a(52)},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=(a(35),a(6));var s=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"It`s Album"))};var i=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 offset-s3"},r.a.createElement("h1",null,"PostMen"),r.a.createElement("div",{className:"card blue darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"yellow-input"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",className:"yellow-input"}),r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10}},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("button",{className:"btn grey lighten-1 black-text"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))};var o=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"It`s Menu"))},m=a(14),u=a(5),p=a(24),f=a(25),E=a(28),d=a(27),h=a(11);function v(e){return function(t){t({type:"APP/SHOW_ALERT",payload:e}),setTimeout((function(){t({type:"APP/HIDE_ALERT"})}),3e3)}}var b=function(e){var t=e.text;return r.a.createElement("div",{className:"alert alert-warning",role:"alert"},t)},g=function(e){return r.a.createElement("div",{className:"form-group pb-1"},r.a.createElement("label",{htmlFor:"title"},"\u0418\u043c\u044f"),r.a.createElement("input",{type:"text",className:"form-control",id:"firstName",value:e.value,name:"firstName",onChange:e.onChange}))},N=function(e){return r.a.createElement("div",{className:"form-group pb-1"},r.a.createElement("label",{htmlFor:"title"},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"),r.a.createElement("input",{type:"text",className:"form-control",id:"secondName",value:e.value,name:"secondName",onChange:e.onChange}))},O=(a(48),function(e){var t=e.title,a=e.onChange,n=e.successSelectFile;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"messagePost"},t),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:a}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},n||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b")))))}),j=a(13),P=a.n(j),y=a(26),w=function(e,t){e.persist();var a=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))};function n(){return(n=Object(y.a)(P.a.mark((function t(){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.target.files[0],t.next=3,a(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return n.apply(this,arguments)})().then((function(a){t({successSelectFile:e.target.files[0].name,fileImg:a})})).catch(console.log)},S=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){e.preventDefault();var t=n.state,a=t.firstName,r=t.secondName,l=t.successSelectFile,c=t.fileImg;if(!a.trim()||!r.trim()||!l.trim())return n.props.showAlert("\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b");var s={firstName:a,secondName:r,successSelectFile:l,fileImg:c};n.props.upgradeProfile(s),n.setState({firstName:"",secondName:"",successSelectFile:""})},n.changeInputHandler=function(e){e.persist(),n.setState((function(t){return Object(u.a)(Object(u.a)({},t),Object(m.a)({},e.target.name,e.target.value))}))},n.functionDownloadImg=function(e){w(e,(function(e){return n.setState((function(t){return Object(u.a)(Object(u.a)({},t),e)}))}))},n.state={firstName:"",secondName:"",successSelectFile:"",fileImg:""},n}return Object(f.a)(a,[{key:"render",value:function(){var e,t,a,n=this.props.profileData;return n.length>0&&(e=n[0].firstName,t=n[0].secondName,a=n[0].fileImg),r.a.createElement("div",{className:"container pt-4"},r.a.createElement("h4",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),r.a.createElement("form",{onSubmit:this.submitHandler,className:"pb-5"},this.props.alert&&r.a.createElement(b,{text:this.props.alert}),r.a.createElement(g,{value:this.state.firstName,onChange:this.changeInputHandler}),r.a.createElement(N,{value:this.state.secondName,onChange:this.changeInputHandler}),r.a.createElement(O,{title:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430",onChange:this.functionDownloadImg,successSelectFile:this.state.successSelectFile}),r.a.createElement("button",{className:"btn btn-warning",type:"submit"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")),e&&t&&a&&r.a.createElement("div",{className:"jumbotron jumbotron-fluid pt-3"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"\u0422\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"),r.a.createElement("p",{className:"lead"},e," ",t),r.a.createElement("img",{src:a,className:"card-img-top",alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}))))}}]),a}(r.a.Component),_={upgradeProfile:function(e){return{type:"PROFILE/UPGRADE_PROFILE",payload:e}},showAlert:v},x=Object(h.b)((function(e){return{alert:e.app.alert,profileData:e.profile.profile}}),_)(S),I=a(19),F=a.n(I);function A(){var e=new Date,t=e.getMonth()+1;return e.getDate()+".0"+t+" "+e.getHours()+":"+e.getMinutes()}var D=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:t,name:"title",onChange:a})))},T=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"messagePost"},"\u0422\u0435\u043a\u0441\u0442"),r.a.createElement("input",{type:"text",className:"form-control",id:"messagePost",value:t,name:"messagePost",onChange:a})))},C=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.messagePost,l=t.successSelectFile,c=t.fileImg;if(!a.trim()||!r.trim()||!l.trim())return n.props.showAlert("\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b");var s={title:a,messagePost:r,time:A(),successSelectFile:l,fileImg:c,id:Date.now().toString()};n.props.createPost(s),n.setState({title:"",messagePost:"",successSelectFile:""})},n.changeInputHandler=function(e){e.persist(),n.setState((function(t){return Object(u.a)(Object(u.a)({},t),Object(m.a)({},e.target.name,e.target.value))}))},n.functionDownloadImg=function(e){w(e,(function(e){return n.setState((function(t){return Object(u.a)(Object(u.a)({},t),e)}))}))},n.state={title:"",messagePost:"",successSelectFile:"",fileImg:""},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitHandler},this.props.alert&&r.a.createElement(b,{text:this.props.alert}),r.a.createElement(D,{value:this.state.title,onChange:this.changeInputHandler}),r.a.createElement(T,{value:this.state.messagePost,onChange:this.changeInputHandler}),r.a.createElement(O,{title:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",onChange:this.functionDownloadImg,successSelectFile:this.state.successSelectFile}),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))}}]),a}(r.a.Component),R={createPost:function(e){return{type:"POST/CREATE_POST",payload:e}},showAlert:v},k=Object(h.b)((function(e){return{alert:e.app.alert}}),R)(C),L=function(e){var t=e.post;return r.a.createElement("div",Object(m.a)({className:"card",style:{maxWidth:"18rem"}},"className","pt-3"),t.fileImg&&r.a.createElement("img",{src:t.fileImg,className:"card-img-top",alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u0430"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},t.messagePost,r.a.createElement("footer",{className:"footer pt-2"},r.a.createElement("cite",{title:"Source Title"},t.time))),t.messagePost&&t.messagePost.length>500&&r.a.createElement("a",{href:"/#",className:"btn btn-primary"},"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435")))},H=Object(h.b)((function(e){return{syncPosts:e.posts.posts}}),null)((function(e){var t=e.syncPosts;return t.length?t.map((function(e){return r.a.createElement(L,{post:e,key:e.id})})):r.a.createElement("p",{className:"text-center"},"\u041f\u043e\u0441\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")})),W=function(){return r.a.createElement("div",{className:"container pt-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(k,null))),r.a.createElement("div",{className:"row pt-3"},r.a.createElement("div",{className:"col"},r.a.createElement(H,null))))},U=Object(h.b)((function(e){return{profileData:e.profile.profile}}),null)((function(e){var t,a,n,l=e.profileData;return l.length>0?(t=l[0].firstName,a=l[0].secondName,n=l[0].fileImg,r.a.createElement("div",{className:"container pt-4"},r.a.createElement("h4",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),t&&a&&n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:n,className:F.a.ava,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430"}),r.a.createElement("div",{className:F.a.infoIcon},r.a.createElement("ul",{className:"left hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"/#"},r.a.createElement("i",{className:"material-icons"},"face"))))),r.a.createElement("div",{className:F.a.info},t," ",a),r.a.createElement("div",{className:F.a.posts},r.a.createElement(W,null))))):r.a.createElement("div",{className:"container pt-4"},r.a.createElement("h4",null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),"\u041d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0439\u0442\u0438 ",r.a.createElement("a",{href:"/settings"},"\u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," \u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0435\u0433\u043e")})),G=a(15),M=a(20),X=a.n(M),B=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"}},r.a.createElement("span",{className:"brand-logo"},"\u0412\u0421\u0435\u0442\u0438"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(G.b,{to:"/settings",activeClassName:X.a.activeLink},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),r.a.createElement("li",null,r.a.createElement(G.b,{to:"/profile",activeClassName:X.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("li",null,r.a.createElement(G.b,{to:"/album",activeClassName:X.a.activeLink},"\u0410\u043b\u044c\u0431\u043e\u043c")),r.a.createElement("li",null,r.a.createElement(G.b,{to:"/menu",activeClassName:X.a.activeLink},"\u041c\u0435\u043d\u044e")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"\u0412\u044b\u0439\u0442\u0438")))))},J=function(){var e=function(e){return e?r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/settings",exact:!0},r.a.createElement(x,null)),r.a.createElement(c.b,{path:"/profile",exact:!0},r.a.createElement(U,null)),r.a.createElement(c.b,{path:"/album",exact:!0},r.a.createElement(s,null)),r.a.createElement(c.b,{path:"/menu",exact:!0},r.a.createElement(o,null)),r.a.createElement(c.a,{to:"/profile"})):r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0},r.a.createElement(i,null)),r.a.createElement(c.a,{to:"/"}))}(!0);return r.a.createElement(G.a,null,r.a.createElement(B,null),r.a.createElement("div",{className:"container"},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(12),V={posts:[],fetchedPosts:[]},Y={loading:!1,alert:null},$={profile:[]},q=Object(Q.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/CREATE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.concat([t.payload])});case"POST/FETCH_POSTS":return Object(u.a)(Object(u.a)({},e),{},{fetchedPosts:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case"APP/HIDE_LOADER":return Object(u.a)(Object(u.a)({},e),{},{loading:!1});case"APP/SHOW_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alert:t.payload});case"APP/HIDE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alert:null});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/UPGRADE_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:[t.payload]});default:return e}}}),z=a(37),K=a(38),Z=["fuck","php","lol"];var ee=a(16),te=P.a.mark(ne),ae=P.a.mark(re);function ne(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("POST/REQUEST_POSTS",re);case 2:case"end":return e.stop()}}),te)}function re(){var e;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ee.b)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(ee.a)(le);case 5:return e=t.sent,t.next=8,Object(ee.b)({type:"POST/FETCH_POSTS",payload:e});case 8:return t.next=10,Object(ee.b)({type:"APP/HIDE_LOADER"});case 10:t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(ee.b)(v("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437..."));case 16:return t.next=18,Object(ee.b)({type:"APP/HIDE_LOADER"});case 18:case"end":return t.stop()}}),ae,null,[[0,12]])}function le(){return ce.apply(this,arguments)}function ce(){return(ce=Object(y.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(51);var se=Object(K.a)(),ie=Object(Q.e)(q,Object(Q.d)(Object(Q.a)(z.a,(function(e){var t=e.dispatch;return function(e){return function(a){if("POST/CREATE_POST"===a.type&&Z.filter((function(e){return a.payload.title.includes(e)})).length)return t(v("you is spamer"));return e(a)}}}),se),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));se.run(ne);var oe=r.a.createElement(h.a,{store:ie},r.a.createElement(J,null));Object(l.render)(oe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.be148f65.chunk.js.map