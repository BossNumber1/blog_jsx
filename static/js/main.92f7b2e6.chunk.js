(this.webpackJsonpblog_jsx=this.webpackJsonpblog_jsx||[]).push([[0],{37:function(e,t,a){e.exports=a(50)},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=(a(18),a(6));var s=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"It`s Album"))},o=a(13),i=a.n(o),u=a(23),m=a(14),p=a(5),E=a(24),d=a(25),f=a(27),b=a(26),h=a(10);function v(e){return function(t){t({type:"APP/SHOW_ALERT",payload:e}),setTimeout((function(){t({type:"APP/HIDE_ALERT"})}),3e3)}}var g=function(e){var t=e.text;return r.a.createElement("div",{className:"alert alert-warning",role:"alert"},t)};function O(){var e=new Date,t=e.getMonth()+1;return e.getDate()+".0"+t+" "+e.getHours()+":"+e.getMinutes()}var P=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",value:t,name:"title",onChange:a})))},j=function(e){var t=e.value,a=e.onChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"messagePost"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"),r.a.createElement("input",{type:"text",className:"form-control",id:"messagePost",value:t,name:"messagePost",onChange:a})))},N=(a(47),function(e){var t=e.onChange,a=e.successSelectFile;return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"messagePost"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:t}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},a||"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b")))))}),y=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){e.preventDefault();var t=n.state,a=t.title,r=t.messagePost,l=t.successSelectFile,c=t.fileImg;if(!a.trim()||!r.trim()||!l.trim())return n.props.showAlert("\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b");var s={title:a,messagePost:r,time:O(),successSelectFile:l,fileImg:c,id:Date.now().toString()};n.props.createPost(s),n.setState({title:"",messagePost:"",successSelectFile:""})},n.changeInputHandler=function(e){e.persist(),n.setState((function(t){return Object(p.a)(Object(p.a)({},t),Object(m.a)({},e.target.name,e.target.value))}))},n.changeMessagePostHandler=function(e){e.persist(),n.setState((function(t){return Object(p.a)(Object(p.a)({},t),Object(m.a)({},e.target.name,e.target.value))}))},n.successDownloadImgHandler=function(e){e.persist();var t=function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))};function a(){return(a=Object(u.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.target.files[0],a.next=3,t(n);case 3:return a.abrupt("return",a.sent);case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}(function(){return a.apply(this,arguments)})().then((function(t){n.setState((function(a){return Object(p.a)(Object(p.a)({},a),{successSelectFile:e.target.files[0].name,fileImg:t})}))})).catch(console.log)},n.state={title:"",messagePost:"",successSelectFile:"",fileImg:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitHandler},this.props.alert&&r.a.createElement(g,{text:this.props.alert}),r.a.createElement(P,{value:this.state.title,onChange:this.changeInputHandler}),r.a.createElement(j,{value:this.state.messagePost,onChange:this.changeMessagePostHandler}),r.a.createElement(N,{onChange:this.successDownloadImgHandler,successSelectFile:this.state.successSelectFile}),r.a.createElement("button",{className:"btn btn-success",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))}}]),a}(r.a.Component),w={createPost:function(e){return{type:"POST/CREATE_POST",payload:e}},showAlert:v},S=Object(h.b)((function(e){return{alert:e.app.alert}}),w)(y),x=function(e){var t=e.post;return r.a.createElement("div",Object(m.a)({className:"card",style:{maxWidth:"18rem"}},"className","pt-3"),r.a.createElement("img",{src:t.fileImg,className:"card-img-top",alt:t.fileImg}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("p",{className:"card-text"},t.messagePost,r.a.createElement("footer",{className:"footer pt-2"},r.a.createElement("cite",{title:"Source Title"},t.time))),t.messagePost.length>500&&r.a.createElement("a",{href:"/#",className:"btn btn-primary"},"\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435")))},_=Object(h.b)((function(e){return{syncPosts:e.posts.posts}}),null)((function(e){var t=e.syncPosts;return t.length?t.map((function(e){return r.a.createElement(x,{post:e,key:e.id})})):r.a.createElement("p",{className:"text-center"},"\u041f\u043e\u0441\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")})),T=function(){return r.a.createElement("div",{className:"spinner-border text-danger",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},A=function(){var e=Object(h.c)(),t=Object(h.d)((function(e){return e.posts.fetchedPosts}));return Object(h.d)((function(e){return e.app.loading}))?r.a.createElement(T,null):t.length?t.map((function(e){return r.a.createElement(x,{post:e,key:e.id})})):r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e({type:"POST/REQUEST_POSTS"})}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")},I=function(){return r.a.createElement("div",{className:"container pt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(S,null))),r.a.createElement("div",{className:"row pt-3"},r.a.createElement("div",{className:"col"},r.a.createElement(_,null)),r.a.createElement("div",{className:"col"},r.a.createElement("h2",null,"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"),r.a.createElement(A,null))))};var F=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 offset-s3"},r.a.createElement("h1",null,"PostMen"),r.a.createElement("div",{className:"card blue darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",id:"email",type:"text",name:"email",className:"yellow-input"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",id:"password",type:"password",name:"password",className:"yellow-input"}),r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10}},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("button",{className:"btn grey lighten-1 black-text"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")))))};var R=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"It`s Menu"))},D=function(e){return r.a.createElement("div",{className:"form-group pb-1"},r.a.createElement("label",{htmlFor:"title"},"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",value:e.value,name:"name",onChange:e.onChange}))},H=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){e.preventDefault();var t=n.state.name;if(!t.trim())return n.props.showAlert("\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b");var a={name:t};n.props.upgradeProfile(a),n.setState({name:""})},n.changeInputHandler=function(e){e.persist(),n.setState((function(t){return Object(p.a)(Object(p.a)({},t),Object(m.a)({},e.target.name,e.target.value))}))},n.state={name:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e;return console.log("prop =",this.props),0!==this.props.firstname.length&&(e=this.props.firstname[0].name),r.a.createElement("div",{className:"container pt-4"},r.a.createElement("form",{onSubmit:this.submitHandler},this.props.alert&&r.a.createElement(g,{text:this.props.alert}),r.a.createElement(D,{value:this.state.name,onChange:this.changeInputHandler}),r.a.createElement("button",{className:"btn btn-warning",type:"submit"},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")),e&&r.a.createElement("div",{className:"jumbotron jumbotron-fluid pt-3"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"\u0422\u0432\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"),r.a.createElement("p",{className:"lead"},"\u0418\u043c\u044f - ",e))))}}]),a}(r.a.Component),C={upgradeProfile:function(e){return{type:"PROFILE/UPGRADE_PROFILE",payload:e}},showAlert:v},k=Object(h.b)((function(e){return{alert:e.app.alert,firstname:e.profile.profile}}),C)(H),L=a(15),M=function(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue darken-1",style:{padding:"0 2rem"}},r.a.createElement("span",{className:"brand-logo"},"PostMen"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(L.b,{to:"/settings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/postmen"},"\u041f\u043e\u0441\u0442\u044b")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/album"},"\u0410\u043b\u044c\u0431\u043e\u043c")),r.a.createElement("li",null,r.a.createElement(L.b,{to:"/menu"},"\u041c\u0435\u043d\u044e")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"\u0412\u044b\u0439\u0442\u0438")))))},U=function(){var e=function(e){return e?r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/album",exact:!0},r.a.createElement(s,null)),r.a.createElement(c.b,{path:"/postmen",exact:!0},r.a.createElement(I,null)),r.a.createElement(c.b,{path:"/menu",exact:!0},r.a.createElement(R,null)),r.a.createElement(c.b,{path:"/settings",exact:!0},r.a.createElement(k,null)),r.a.createElement(c.a,{to:"/menu"})):r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/",exact:!0},r.a.createElement(F,null)),r.a.createElement(c.a,{to:"/"}))}(!0);return r.a.createElement(L.a,null,r.a.createElement(M,null),r.a.createElement("div",{className:"container"},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(12),G={posts:[],fetchedPosts:[]},X={loading:!1,alert:null},B={profile:[]},J=Object(W.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST/CREATE_POST":return Object(p.a)(Object(p.a)({},e),{},{posts:e.posts.concat([t.payload])});case"POST/FETCH_POSTS":return Object(p.a)(Object(p.a)({},e),{},{fetchedPosts:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SHOW_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"APP/HIDE_LOADER":return Object(p.a)(Object(p.a)({},e),{},{loading:!1});case"APP/SHOW_ALERT":return Object(p.a)(Object(p.a)({},e),{},{alert:t.payload});case"APP/HIDE_ALERT":return Object(p.a)(Object(p.a)({},e),{},{alert:null});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/UPGRADE_PROFILE":return Object(p.a)(Object(p.a)({},e),{},{profile:[t.payload]});default:return e}}}),Q=a(35),V=a(36),$=["fuck","php","lol"];var q=a(16),z=i.a.mark(Y),K=i.a.mark(Z);function Y(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.c)("POST/REQUEST_POSTS",Z);case 2:case"end":return e.stop()}}),z)}function Z(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.b)({type:"APP/SHOW_LOADER"});case 3:return t.next=5,Object(q.a)(ee);case 5:return e=t.sent,t.next=8,Object(q.b)({type:"POST/FETCH_POSTS",payload:e});case 8:return t.next=10,Object(q.b)({type:"APP/HIDE_LOADER"});case 10:t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(q.b)(v("\u041e\u0448\u0438\u0431\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437..."));case 16:return t.next=18,Object(q.b)({type:"APP/HIDE_LOADER"});case 18:case"end":return t.stop()}}),K,null,[[0,12]])}function ee(){return te.apply(this,arguments)}function te(){return(te=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(49);var ae=Object(V.a)(),ne=Object(W.e)(J,Object(W.d)(Object(W.a)(Q.a,(function(e){var t=e.dispatch;return function(e){return function(a){if("POST/CREATE_POST"===a.type&&$.filter((function(e){return a.payload.title.includes(e)})).length)return t(v("you is spamer"));return e(a)}}}),ae),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));ae.run(Y);var re=r.a.createElement(h.a,{store:ne},r.a.createElement(U,null));Object(l.render)(re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.92f7b2e6.chunk.js.map