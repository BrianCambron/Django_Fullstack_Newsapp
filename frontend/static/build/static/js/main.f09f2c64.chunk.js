(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),s=a.n(o),r=(a(16),a(17),a(8)),i=a(2),c=a(3),u=a(1),m=a(5),d=a(4);function h(e){return l.a.createElement("div",{onClick:function(){return e.pickBlog(e.blog.id)},className:"col"},l.a.createElement("div",{className:"list-group mb-2"},l.a.createElement("div",{className:"list-group-item list-group-item-action"},l.a.createElement("div",{className:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{className:"mb-3 left-side-blogtitle"},e.blog.title)),l.a.createElement("p",{className:"author"},e.blog.author),l.a.createElement("p",{className:"mb-1 left-side-blogbody"},e.truncate(e.blog.body)))))}var g=function(e){var t=e.blogs.filter((function(e){return!0===e.isTopStory})).map((function(t){return l.a.createElement(h,{key:t.id,blog:t,truncate:e.truncate,pickBlog:e.pickBlog})}));return l.a.createElement("div",{className:"mt-3"},t)},b=a(7),p=(a(18),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"",body:"",author:"",isTopStory:!1,created_at:new Date,category:"TVL",status:"DFT"},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"col-12 col-md-6 mb-5 form",onSubmit:function(t){e.props.addBlog(t,e.state),e.setState({title:"",body:"",author:""})}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",value:this.state.title,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"body"},"Body"),l.a.createElement("textarea",{className:"form-control",id:"body",name:"body",rows:"8",value:this.state.body,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"author"},"Author"),l.a.createElement("input",{type:"text",className:"form-control",id:"author",name:"author",value:this.state.author,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"category"},"Category"),l.a.createElement("select",{id:"category",className:"form-control",name:"category",value:this.state.category,onChange:this.handleChange},l.a.createElement("option",null,"TVL"),l.a.createElement("option",null,"SPRT"),l.a.createElement("option",null,"ENT"),l.a.createElement("option",null,"FD"))),l.a.createElement("div",{className:"form-bottom"},l.a.createElement("label",{htmlFor:"status"},"Post Status"),l.a.createElement("select",{id:"status",className:"form-control",name:"status",value:this.state.status,onChange:this.handleChange},l.a.createElement("option",null,"DFT"),l.a.createElement("option",null,"SMTD"),l.a.createElement("option",null,"PBSHD"))),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Post"))}}]),a}(n.Component)),f=(a(19),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:n.props.blog.title,body:n.props.blog.body,category:"TVL",created_at:new Date,status:"DFT",isEditing:!1},n.handleInput=n.handleInput.bind(Object(u.a)(n)),n.toggleEdit=n.toggleEdit.bind(Object(u.a)(n)),n.handleSave=n.handleSave.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"toggleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleSave",value:function(e){var t={title:this.state.title,body:this.state.body,category:this.state.category,created_at:this.state.created_at,status:this.state.status};this.props.editBlog(t,this.props.blog.id),this.toggleEdit()}},{key:"render",value:function(){var e=this;return l.a.createElement("li",{className:"list-group-item list-group-item-action col",key:this.props.blog.id},this.state.isEditing?l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",className:"form-control",id:"title",name:"title",value:this.state.title,onChange:this.handleInput})):l.a.createElement("h3",null,this.props.blog.title),l.a.createElement("p",null,this.props.blog.author),this.state.isEditing?l.a.createElement(l.a.Fragment,null,l.a.createElement("textarea",{rows:"20",cols:"100",name:"body",value:this.state.body,onChange:this.handleInput}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"category"},"Category"),l.a.createElement("select",{id:"category",className:"form-control",name:"category",value:this.state.category,onChange:this.handleInput},l.a.createElement("option",null,"TVL"),l.a.createElement("option",null,"SPRT"),l.a.createElement("option",null,"ENT"),l.a.createElement("option",null,"FD"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"status"},"Post Status"),l.a.createElement("select",{id:"status",className:"form-control",name:"status",value:this.state.status,onChange:this.handleInput},l.a.createElement("option",null,"DFT"),l.a.createElement("option",null,"SMTD"),l.a.createElement("option",null,"PBSHD")))):l.a.createElement("p",null,this.props.blog.body),this.state.isEditing?l.a.createElement("button",{className:"btn btn-link",onClick:this.handleSave,type:"button"},"Save"):l.a.createElement("button",{className:"btn btn-link",onClick:function(){return e.toggleEdit()}},"Edit"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.deleteBlog(e.props.blog.id)}},"\u2718"))}}]),a}(n.Component)),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={status:null},n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(e){"all"===e.target.dataset.filter?this.setState({status:null}):this.setState({status:e.target.dataset.filter})}},{key:"render",value:function(){var e=this,t=this.props.blogs;this.state.status&&(t=this.props.blogs.filter((function(t){return t.status===e.state.status})));var a=t.map((function(t){return l.a.createElement(f,{blog:t,key:t.id,deleteBlog:e.props.deleteBlog,editBlog:e.props.editBlog})}));return l.a.createElement("div",{className:"col-8 status-list"},l.a.createElement("button",{className:"btn btn-link",type:"button",onClick:this.handleClick,"data-filter":"all"},"All Status's"),l.a.createElement("button",{className:"btn btn-link",type:"button",onClick:this.handleClick,"data-filter":"DFT"},"Draft"),l.a.createElement("button",{className:"btn btn-link",type:"button",onClick:this.handleClick,"data-filter":"PBSHD"},"Published"),l.a.createElement("button",{className:"btn btn-link",type:"button",onClick:this.handleClick,"data-filter":"SMTD"},"Submitted"),a)}}]),a}(n.Component),v=(a(20),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{className:"col-12 col-md-6 register",onSubmit:function(t){return e.props.registerUser(t,e.state)}},l.a.createElement("h5",{className:"Register"},"Create Account"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"text",className:"form-control",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),l.a.createElement("small",{className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password1",name:"password1",value:this.state.password1,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password2",name:"password2",value:this.state.password2,onChange:this.handleChange})),l.a.createElement("div",{className:"create-Account-Btn"},l.a.createElement("button",{className:"btn btn-primary"},"Register")))}}]),a}(n.Component)),k=(a(21),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"col-12 col-md-6 log-in",onSubmit:function(t){return e.props.logIn(t,e.state)}},l.a.createElement("h5",{className:"Register"},"Log in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.username,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",value:this.state.password,onChange:this.handleChange})),l.a.createElement("div",{className:"create-Account-Btn"},l.a.createElement("button",{className:"btn btn-primary"},"Log in"))))}}]),a}(n.Component)),y=a(6),C=a.n(y),N=(a(22),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={blogs:[],selection:null,pickedBlog:{},display:"home",isLoggedIn:!!C.a.get("Authorization")},n.handleClick=n.handleClick.bind(Object(u.a)(n)),n.truncate=n.truncate.bind(Object(u.a)(n)),n.pickBlog=n.pickBlog.bind(Object(u.a)(n)),n.addBlog=n.addBlog.bind(Object(u.a)(n)),n.deleteBlog=n.deleteBlog.bind(Object(u.a)(n)),n.editBlog=n.editBlog.bind(Object(u.a)(n)),n.registerUser=n.registerUser.bind(Object(u.a)(n)),n.logIn=n.logIn.bind(Object(u.a)(n)),n.logOut=n.logOut.bind(Object(u.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/blogs").then((function(e){return e.json()})).then((function(t){return e.setState({blogs:t})})).catch((function(e){return console.log("Error:",e)}))}},{key:"addBlog",value:function(e,t){var a=this;e.preventDefault();var n=C.a.get("csrftoken");fetch("api/v1/blogs/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){var t=[].concat(Object(r.a)(a.state.blogs),[e]);a.setState({blogs:t})}))}},{key:"deleteBlog",value:function(e){var t=this,a=C.a.get("csrftoken");fetch("api/v1/blogs/".concat(e,"/"),{method:"DELETE",headers:{"X-CSRFToken":a,"Content-Type":"application/json"}}).then((function(e){return e})).then((function(a){var n=Object(r.a)(t.state.blogs);console.log("blogs",n);var l=n.findIndex((function(t){return t.id===e}));n.splice(l,1),t.setState({blogs:n})})).catch((function(e){return console.log("Error:",e)}))}},{key:"editBlog",value:function(e,t){var a=this,n=C.a.get("csrftoken");fetch("api/v1/blogs/".concat(t,"/"),{method:"PUT",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e);var n=Object(r.a)(a.state.blogs),l=n.findIndex((function(e){return e.id===t}));n[l]=e,a.setState({blogs:n})})).catch((function(e){return console.log("Error:",e)}))}},{key:"handleClick",value:function(e){"all"===e.target.dataset.filter?this.setState({selection:null}):this.setState({selection:e.target.dataset.filter})}},{key:"pickBlog",value:function(e){var t=this.state.blogs.find((function(t){return t.id===e}));this.setState({pickedBlog:t,display:"pickedBlog"}),console.log(this.state.pickedBlog)}},{key:"truncate",value:function(e){return e.length>10?e.substring(0,30)+"...":e}},{key:"registerUser",value:function(e,t){var a=this;e.preventDefault();var n=C.a.get("csrftoken");fetch("/api/v1/rest-auth/registration/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key&&(C.a.set("Authorization","Token ".concat(e.key)),a.setState({isLoggedIn:!0,display:"home"}))})).catch((function(e){return console.log("Error:",e)}))}},{key:"logIn",value:function(e,t){var a=this;e.preventDefault();var n=C.a.get("csrftoken");fetch("/api/v1/rest-auth/login/",{method:"POST",headers:{"X-CSRFToken":n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.key&&(C.a.set("Authorization","Token ".concat(e.key)),a.setState({isLoggedIn:!0,display:"home"}))})).catch((function(e){return console.log("Error:",e)}))}},{key:"logOut",value:function(){var e=this,t=C.a.get("csrftoken");fetch("/api/v1/rest-auth/logout/",{method:"POST",headers:{"X-CSRFToken":t,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){"Successfully logged out."===t.detail&&(C.a.remove("Authorization"),e.setState({isLoggedIn:!1,display:"home"}))})).catch((function(e){return console.log("Error:",e)}))}},{key:"render",value:function(){var e=this,t=this.state.blogs,a=this.state.display;this.state.selection&&(t=this.state.blogs.filter((function(t){return t.category===e.state.selection})));var n,o,s=t.filter((function(e){return!e.isTopStory&&"PBSHD"===e.status})).map((function(t){return l.a.createElement("div",{onClick:function(){return e.pickBlog(t.id)},key:t.id},l.a.createElement("ul",{className:"list-group mb-1"},l.a.createElement("div",{className:"list-group-item list-group-item-action"},l.a.createElement("h5",{className:"mb-3 right-side-blogtitle"},t.title),l.a.createElement("p",{className:"author"},t.author))))}));"home"===a?n=l.a.createElement("div",{className:"row"}," ",l.a.createElement("div",{className:"col-8"},l.a.createElement("h5",{className:"top-stories-heading"},"Top Stories"),l.a.createElement(g,{blogs:t,truncate:this.truncate,pickBlog:this.pickBlog})),l.a.createElement("div",{className:"col-4"},l.a.createElement("h5",{className:"last-week-stories"},"Last Week"),s)):"register"===a?n=l.a.createElement(v,{registerUser:this.registerUser}):"login"===a?n=l.a.createElement(k,{logIn:this.logIn}):"pickedBlog"===a&&(n=l.a.createElement(S,{pickedBlog:this.state.pickedBlog})),"form"===a?o=l.a.createElement(p,{addBlog:this.addBlog}):"StatusList"===a?o=l.a.createElement(E,{blogs:this.state.blogs,deleteBlog:this.deleteBlog,editBlog:this.editBlog}):"home"===a?o=l.a.createElement("div",{className:"row"}," ",l.a.createElement("div",{className:"col-8"},l.a.createElement("h5",{className:"top-stories-heading"},"Top Stories"),l.a.createElement(g,{blogs:t,truncate:this.truncate,pickBlog:this.pickBlog})),l.a.createElement("div",{className:"col-4"},l.a.createElement("h5",{className:"last-week-stories"},"Last Week"),s)):"pickedBlog"===a&&(o=l.a.createElement(S,{pickedBlog:this.state.pickedBlog}));var r=this.state.isLoggedIn;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-dark bg-dark container-fluid"},l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:function(){e.setState({display:"home"}),e.setState({selection:null})},"data-filter":"all"},"HomePage"),l.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:this.handleClick,"data-filter":"ENT"},"Entertainment"),l.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:this.handleClick,"data-filter":"SPRT"},"Sports"),l.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:this.handleClick,"data-filter":"TVL"},"Travel"),l.a.createElement("button",{className:"btn btn-dark",type:"button",onClick:this.handleClick,"data-filter":"FD"},"Food")),l.a.createElement("div",null,!1===r?l.a.createElement("button",{className:"btn btn-dark",onClick:function(){return e.setState({display:"register"})}},"Register"):l.a.createElement("button",{className:"btn btn-dark",onClick:function(){return e.setState({display:"form"})}},"Form"),!1===r?"":l.a.createElement("button",{className:"btn btn-dark",onClick:function(){return e.setState({display:"StatusList"})}},"Status List"),!1===r?l.a.createElement("button",{className:"btn btn-dark",onClick:function(){return e.setState({display:"login"})},type:"button"},"Log in"):l.a.createElement("button",{className:"btn btn-dark",onClick:this.logOut},"Logout"))),l.a.createElement("div",{className:"row no-gutters mt-4"},!0===r?o:n)))}}]),a}(n.Component)),S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(e){return l.a.createElement("div",{className:"col list-group mb-1"},l.a.createElement("div",{className:"list-group-item"},l.a.createElement("h5",null,this.props.pickedBlog.title),l.a.createElement("p",null,this.props.pickedBlog.author),l.a.createElement("p",null,this.props.pickedBlog.body)))}}]),a}(n.Component),j=N;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.f09f2c64.chunk.js.map