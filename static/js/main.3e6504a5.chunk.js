(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(9),i=n.n(o),s=(n(19),n(12)),r=n(3),l=n.p+"static/media/logo.03b78ada.svg",u=n(5),p=n(0);var d=function(e){return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"}),Object(p.jsxs)("nav",{className:"header__nav",children:[Object(p.jsx)("p",{className:"header__text",children:e.mail}),Object(p.jsx)(u.b,{to:e.route,type:"button",className:"header__button",onClick:e.onClick,children:e.title})]})]})},j=c.a.createContext();var b=function(e){var t=c.a.useContext(j),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),o="element__like ".concat(a?"element__like_active":""),i="element__delete ".concat(n?"element__delete_visible":"element__delete_hidden");return Object(p.jsxs)("article",{className:"element",children:[Object(p.jsx)("img",{src:e.link,alt:e.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(p.jsx)("button",{className:i,onClick:function(){e.onDeleteCard(e.card)}}),Object(p.jsxs)("div",{className:"element__content",children:[Object(p.jsx)("h2",{className:"element__title",children:e.name}),Object(p.jsxs)("div",{className:"element__like-container",children:[Object(p.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("p",{className:"element__like-count",children:e.likes})]})]})]})};var h=function(e){var t=c.a.useContext(j);return Object(p.jsxs)("main",{children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsxs)("div",{className:"profile__container",children:[Object(p.jsx)("button",{type:"button",className:"profile__edit-avatar",onClick:e.onEditAvatar,children:Object(p.jsx)("img",{src:t.avatar,alt:t.name,className:"profile__avatar"})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__title-container",children:[Object(p.jsx)("h1",{className:"profile__title",children:t.name}),Object(p.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__subtitle",children:t.about})]})]}),Object(p.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"elements",children:e.cards.map((function(t,n){return Object(p.jsx)(b,{card:t,link:t.link,name:t.name,likes:t.likes.length,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onDeleteCard:e.onDeleteCard},n)}))})]})};var m=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",lang:"en",children:"\xa9 2021 Mesto Russia"})})};var _=function(e){return Object(p.jsx)("div",{className:"popup popup_theme_dark popup_form_fullscreen ".concat(e.isOpen?"popup_opened":""),onClick:e.onOverlayClick,children:Object(p.jsxs)("div",{className:"popup__container popup__container_size_l",children:[Object(p.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(p.jsx)("img",{src:e.card?e.card.link:"",alt:e.card?e.card.name:"",className:"popup__image"}),Object(p.jsx)("p",{className:"popup__description",children:e.card?e.card.name:""})]})})},f=n(10),O=n(11),x=new(function(){function e(t){Object(f.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(O.a)(e,[{key:"_handleRes",value:function(e){return e.ok?e.json():Promise.reject(console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.profile_name,about:e.profile_job})}).then((function(e){return t._handleRes(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleRes(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"deleteCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleRes(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar_link})}).then((function(e){return t._handleRes(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"49cf51ee-b559-465c-b78a-86fb26662a6f","Content-Type":"application/json"}});var v=function(e){return Object(p.jsx)("div",{className:"popup popup_form_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:e.onOverlayClick,children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(p.jsxs)("form",{name:e.form,className:"popup__form",onSubmit:e.onSubmit,children:[Object(p.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(p.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var g=function(e){var t=c.a.useContext(j),n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],i=a[1],s=c.a.useState(""),l=Object(r.a)(s,2),u=l[0],d=l[1];return c.a.useEffect((function(){e.isOpen&&(i(t.name),d(t.about))}),[e.isOpen,t]),Object(p.jsxs)(v,{onSubmit:function(t){t.preventDefault(),e.onSubmit({profile_name:o,profile_job:u})},isOpen:e.isOpen,onClose:e.onClose,form:"edit_profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",onOverlayClick:e.onOverlayClick,children:[Object(p.jsx)("input",{type:"text",name:"profile_name",className:"popup__text",id:"profile_name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",onChange:function(e){i(e.target.value)},required:!0,value:o}),Object(p.jsx)("span",{className:"popup__text-error",id:"profile_name-error"}),Object(p.jsx)("input",{type:"text",name:"profile_job",className:"popup__text",id:"profile_job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",minLength:"2",maxLength:"200",onChange:function(e){d(e.target.value)},required:!0,value:u}),Object(p.jsx)("span",{className:"popup__text-error",id:"profile_job-error"})]})};var C=function(e){var t=c.a.useRef();return c.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(p.jsxs)(v,{isOpen:e.isOpen,onClose:e.onClose,form:"edit_avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",onSubmit:function(n){n.preventDefault(),e.onSubmit({avatar_link:t.current.value})},onOverlayClick:e.onOverlayClick,children:[Object(p.jsx)("input",{ref:t,type:"url",name:"avatar_link",className:"popup__text",id:"avatar_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(p.jsx)("span",{className:"popup__text-error",id:"avatar_link-error"})]})};var k=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(r.a)(i,2),l=s[0],u=s[1];return c.a.useEffect((function(){e.isOpen&&(o(""),u(""))}),[e.isOpen]),Object(p.jsxs)(v,{isOpen:e.isOpen,onClose:e.onClose,form:"add_mesto",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",onSubmit:function(t){t.preventDefault(),e.onSubmit({name:a,link:l})},onOverlayClick:e.onOverlayClick,children:[Object(p.jsx)("input",{type:"text",name:"name",id:"mesto_title",className:"popup__text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:a,required:!0,onChange:function(e){o(e.target.value)}}),Object(p.jsx)("span",{className:"popup__text-error",id:"mesto_title-error"}),Object(p.jsx)("input",{type:"url",name:"link",className:"popup__text",id:"mesto_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){u(e.target.value)},value:l}),Object(p.jsx)("span",{className:"popup__text-error",id:"mesto_link-error"})]})},N=n(2);var y=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),l=s[0],u=s[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onLogin(c,l)},children:[Object(p.jsx)("input",{type:"email",className:"login__input",placeholder:"Email",onChange:function(e){o(e.target.value)},required:!0}),Object(p.jsx)("input",{type:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"on",onChange:function(e){u(e.target.value)},required:!0}),Object(p.jsx)("button",{type:"submit",className:"login__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var S=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),l=s[0],d=s[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("section",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onRegister(c,l)},children:[Object(p.jsx)("input",{type:"email",className:"login__input",placeholder:"Email",onChange:function(e){o(e.target.value)}}),Object(p.jsx)("input",{type:"password",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"on",onChange:function(e){d(e.target.value)}}),Object(p.jsx)("button",{type:"submit",className:"login__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("p",{className:"login__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(p.jsx)(u.b,{to:"/sign-in",className:"login__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},L="https://auth.nomoreparties.co";function E(e){return e.ok?e.json():Promise.reject(e.status)}var P=n(13),U=n(14),w=["component"];var T=function(e){var t=e.component,n=Object(U.a)(e,w);return n.isLogged?Object(p.jsx)(t,Object(P.a)({},n)):Object(p.jsx)(N.a,{to:"/sign-in"})},R=n.p+"static/media/fail.df8eddf6.svg",A=n.p+"static/media/success.1b6082f8.svg";var D=function(e){return Object(p.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),onClick:e.onOverlayClick,children:Object(p.jsxs)("div",{className:"popup__container popup__container_size_m",children:[Object(p.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(p.jsx)("img",{src:e.image,alt:"",className:"popup__picture"}),Object(p.jsx)("h2",{className:"popup__title popup__title_theme_auth",children:e.title})]})})};var I=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(r.a)(o,2),l=i[0],u=i[1],b=Object(a.useState)(!1),f=Object(r.a)(b,2),O=f[0],v=f[1],P=Object(a.useState)(!1),U=Object(r.a)(P,2),w=U[0],I=U[1],F=Object(a.useState)(null),q=Object(r.a)(F,2),J=q[0],z=q[1],B=Object(a.useState)({}),H=Object(r.a)(B,2),M=H[0],G=H[1],K=Object(a.useState)([]),Q=Object(r.a)(K,2),V=Q[0],W=Q[1],X=Object(a.useState)(!1),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(""),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(""),oe=Object(r.a)(ce,2),ie=oe[0],se=oe[1],re=Object(a.useState)(""),le=Object(r.a)(re,2),ue=le[0],pe=le[1],de=Object(a.useState)(!1),je=Object(r.a)(de,2),be=je[0],he=je[1],me=Object(N.g)();function _e(){he(!0)}function fe(e){e.target.classList.contains("popup_opened")&&Oe()}function Oe(){v(!1),c(!1),u(!1),I(!1),he(!1)}return Object(a.useEffect)((function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(L,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(E)}(e).then((function(e){e&&($(!0),ae(e.data.email))})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d: ".concat(e))}))}),[]),Object(a.useEffect)((function(){!0===Z&&me("/")}),[Z,me]),Object(a.useEffect)((function(){Promise.all([x.getUserInfo(),x.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];G(n),W(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ".concat(e))}))}),[]),Object(a.useEffect)((function(){if(l||n||O||J||be){function e(e){"Escape"===e.key&&Oe()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[l,n,O,J,be]),Object(p.jsx)(j.Provider,{value:M,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)(N.d,{children:[Object(p.jsx)(N.b,{path:"/sign-in",element:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",route:"/sign-up"}),Object(p.jsx)(y,{onLogin:function(e,t){(function(e,t){return fetch("".concat(L,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(E)})(e,t).then((function(e){localStorage.setItem("jwt",e.token),$(!0),me("/")})).catch((function(){se(R),pe("\u041d\u0435 \u0432\u0435\u0440\u043d\u044b\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c."),_e()}))}})]})}),Object(p.jsx)(N.b,{path:"/sign-up",element:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d,{title:"\u0412\u043e\u0439\u0442\u0438",route:"/sign-in"}),Object(p.jsx)(S,{onRegister:function(e,t){(function(e,t){return fetch("".concat(L,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(E)})(e,t).then((function(){se(A),pe("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),me("/sign-in")})).catch((function(){se(R),pe("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})).finally(_e)}})]})}),Object(p.jsx)(N.b,{path:"/",element:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d,{title:"\u0412\u044b\u0439\u0442\u0438",mail:ne,onClick:function(){$(!1),me("/sign-in"),localStorage.removeItem("jwt")},route:""}),Object(p.jsx)(T,{component:h,isLogged:Z,onEditAvatar:function(){v(!0)},onEditProfile:function(){c(!0)},onAddPlace:function(){u(!0)},onCardClick:function(e){z(e),I(!0)},cards:V,onCardLike:function(e){e.likes.some((function(e){return e._id===M._id}))?x.deleteCardLike(e._id).then((function(t){W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u0434\u0438\u0437\u043b\u0430\u0439\u043a\u043d\u0443\u0442\u044c: ".concat(e))})):x.addCardLike(e._id).then((function(t){W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a: ".concat(e))}))},onDeleteCard:function(e){x.deleteCard(e).then((function(){W((function(t){return t.filter((function(t){return t._id!==e._id&&t}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e))}))}}),Object(p.jsx)(m,{})]})}),Object(p.jsx)(N.b,{path:"*",element:Object(p.jsx)(N.a,{to:Z?"/":"/sign-in"})})]}),Object(p.jsx)(_,{isOpen:w,card:J,onClose:Oe,onOverlayClick:fe}),Object(p.jsx)(g,{isOpen:n,onClose:Oe,onSubmit:function(e){x.patchUserInfo(e).then((function(e){G(e),Oe()})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c: ".concat(e))}))},onOverlayClick:fe}),Object(p.jsx)(C,{isOpen:O,onClose:Oe,onSubmit:function(e){x.updateAvatar(e).then((function(e){G(e),Oe()})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440: ".concat(e))}))},onOverlayClick:fe}),Object(p.jsx)(k,{isOpen:l,onClose:Oe,onSubmit:function(e){x.postNewCard(e).then((function(e){W([e].concat(Object(s.a)(V))),Oe()})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443: ".concat(e))}))},onOverlayClick:fe}),Object(p.jsx)(D,{isOpen:be,onClose:Oe,onOverlayClick:fe,image:ie,title:ue})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{basename:"/react-mesto-auth",children:Object(p.jsx)(I,{})})}),document.getElementById("root")),F()}},[[21,1,2]]]);
//# sourceMappingURL=main.3e6504a5.chunk.js.map