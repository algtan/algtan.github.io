/*! For license information please see commons-40baff09831bb4f63f7b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7GAd":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOEMwIDExLjU0IDIuMjkgMTQuNTMgNS40NyAxNS41OUM1Ljg3IDE1LjY2IDYuMDIgMTUuNDIgNi4wMiAxNS4yMUM2LjAyIDE1LjAyIDYuMDEgMTQuMzkgNi4wMSAxMy43MkM0IDE0LjA5IDMuNDggMTMuMjMgMy4zMiAxMi43OEMzLjIzIDEyLjU1IDIuODQgMTEuODQgMi41IDExLjY1QzIuMjIgMTEuNSAxLjgyIDExLjEzIDIuNDkgMTEuMTJDMy4xMiAxMS4xMSAzLjU3IDExLjcgMy43MiAxMS45NEM0LjQ0IDEzLjE1IDUuNTkgMTIuODEgNi4wNSAxMi42QzYuMTIgMTIuMDggNi4zMyAxMS43MyA2LjU2IDExLjUzQzQuNzggMTEuMzMgMi45MiAxMC42NCAyLjkyIDcuNThDMi45MiA2LjcxIDMuMjMgNS45OSAzLjc0IDUuNDNDMy42NiA1LjIzIDMuMzggNC40MSAzLjgyIDMuMzFDMy44MiAzLjMxIDQuNDkgMy4xIDYuMDIgNC4xM0M2LjY2IDMuOTUgNy4zNCAzLjg2IDguMDIgMy44NkM4LjcgMy44NiA5LjM4IDMuOTUgMTAuMDIgNC4xM0MxMS41NSAzLjA5IDEyLjIyIDMuMzEgMTIuMjIgMy4zMUMxMi42NiA0LjQxIDEyLjM4IDUuMjMgMTIuMyA1LjQzQzEyLjgxIDUuOTkgMTMuMTIgNi43IDEzLjEyIDcuNThDMTMuMTIgMTAuNjUgMTEuMjUgMTEuMzMgOS40NyAxMS41M0M5Ljc2IDExLjc4IDEwLjAxIDEyLjI2IDEwLjAxIDEzLjAxQzEwLjAxIDE0LjA4IDEwIDE0Ljk0IDEwIDE1LjIxQzEwIDE1LjQyIDEwLjE1IDE1LjY3IDEwLjU1IDE1LjU5QzEzLjcxIDE0LjUzIDE2IDExLjUzIDE2IDhDMTYgMy41OCAxMi40MiAwIDggMFoiIHRyYW5zZm9ybT0ic2NhbGUoNjQpIiBmaWxsPSIjMUIxRjIzIi8+Cjwvc3ZnPgo="},"7j6X":function(e,t,n){"use strict";var a=n("dZvc");function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!l.test(e))}(r)?n+=c(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(c(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},"7vrA":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),l=n.n(c),s=n("vUet"),u=l.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.fluid,c=e.as,u=void 0===c?"div":c,d=e.className,f=Object(r.a)(e,["bsPrefix","fluid","as","className"]),p=Object(s.a)(n,"container"),I="string"==typeof i?"-"+i:"-fluid";return l.a.createElement(u,Object(a.a)({ref:t},f,{className:o()(d,i?""+p+I:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},BTi0:function(e,t,n){},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("7vrA"),c=n("wx14"),l=n("zLVn"),s=n("TSYQ"),u=n.n(s),d=n("JCAc"),f=n("YdCC"),p=n("vUet"),I=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.as,o=Object(l.a)(e,["bsPrefix","className","as"]);n=Object(p.a)(n,"navbar-brand");var s=i||(o.href?"a":"span");return r.a.createElement(s,Object(c.a)({},o,{ref:t,className:u()(a,n)}))}));I.displayName="NavbarBrand";var v=I,g=n("dI71"),m=n("7j6X"),b=n("SJxq"),M=n("GEtZ"),y=b.a&&"ontransitionend"in window;function E(e,t,n){void 0===n&&(n=5);var a=!1,r=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(M.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(r),i()}}var j=function(e,t,n){return y?(null==n&&(a=e,r=Object(m.a)(a,"transitionDuration")||"",i=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*i||0),E(e,n),Object(M.a)(e,"transitionend",t)):E(e,0,0);var a,r,i},x=n("i8i4"),C=n.n(x),h=!1,N=r.a.createContext(null),D=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(g.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[C.a.findDOMNode(this),a],i=r[0],o=r[1],c=this.getTimeouts(),l=a?c.appear:c.enter;!e&&!n||h?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:C.a.findDOMNode(this);t&&!h?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:C.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(l.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(N.Provider,{value:null},"function"==typeof n?n(e,a):r.a.cloneElement(r.a.Children.only(n),a))},t}(r.a.Component);function A(){}D.contextType=N,D.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:A,onEntering:A,onEntered:A,onExit:A,onExiting:A,onExited:A},D.UNMOUNTED="unmounted",D.EXITED="exited",D.ENTERING="entering",D.ENTERED="entered",D.EXITING="exiting";var w,O=D,L=n("Qg85");function S(e){e.offsetHeight}var T={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var z=((w={}).exited="collapse",w.exiting="collapsing",w.entering="collapsing",w.entered="collapse show",w),k={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=T[e];return n+parseInt(Object(m.a)(t,a[0]),10)+parseInt(Object(m.a)(t,a[1]),10)}},Z=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",S(e)},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(g.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"==typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,a=t.onEntering,i=t.onEntered,o=t.onExit,s=t.onExiting,d=t.className,f=t.children,p=Object(l.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete p.dimension,delete p.getDimensionValue;var I=Object(L.a)(this.handleEnter,n),v=Object(L.a)(this.handleEntering,a),g=Object(L.a)(this.handleEntered,i),m=Object(L.a)(this.handleExit,o),b=Object(L.a)(this.handleExiting,s);return r.a.createElement(O,Object(c.a)({addEndListener:j},p,{"aria-expanded":p.role?p.in:null,onEnter:I,onEntering:v,onEntered:g,onExit:m,onExiting:b}),(function(t,n){return r.a.cloneElement(f,Object(c.a)({},n,{className:u()(d,f.props.className,z[t],"width"===e.getDimension()&&"width")}))}))},t}(r.a.Component);Z.defaultProps=k;var Y=Z,P=r.a.createContext(null),R=r.a.forwardRef((function(e,t){var n=e.children,a=e.bsPrefix,i=Object(l.a)(e,["children","bsPrefix"]);return a=Object(p.a)(a,"navbar-collapse"),r.a.createElement(P.Consumer,null,(function(e){return r.a.createElement(Y,Object(c.a)({in:!(!e||!e.expanded)},i),r.a.createElement("div",{ref:t,className:a},n))}))}));R.displayName="NavbarCollapse";var G=R,B=n("ZCiN"),W=r.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.children,s=e.label,d=e.as,f=void 0===d?"button":d,I=e.onClick,v=Object(l.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(p.a)(n,"navbar-toggler");var g=Object(a.useContext)(P)||{},m=g.onToggle,b=g.expanded,M=Object(B.a)((function(e){I&&I(e),m&&m()}));return"button"===f&&(v.type="button"),r.a.createElement(f,Object(c.a)({},v,{ref:t,onClick:M,"aria-label":s,className:u()(i,n,!b&&"collapsed")}),o||r.a.createElement("span",{className:n+"-icon"}))}));W.displayName="NavbarToggle",W.defaultProps={label:"Toggle navigation"};var U=W,Q=r.a.createContext(),F=function(e,t){return null!=e?String(e):t||null},K=Q,V=r.a.forwardRef((function(e,t){var n=Object(d.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,o=n.expand,s=n.variant,f=n.bg,I=n.fixed,v=n.sticky,g=n.className,m=n.children,b=n.as,M=void 0===b?"nav":b,y=n.expanded,E=n.onToggle,j=n.onSelect,x=n.collapseOnSelect,C=Object(l.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);i=Object(p.a)(i,"navbar");var h=Object(a.useCallback)((function(){j&&j.apply(void 0,arguments),x&&y&&E(!1)}),[j,x,y,E]);void 0===C.role&&"nav"!==M&&(C.role="navigation");var N=i+"-expand";"string"==typeof o&&(N=N+"-"+o);var D=Object(a.useMemo)((function(){return{onToggle:function(){return E(!y)},bsPrefix:i,expanded:y}}),[i,y,E]);return r.a.createElement(P.Provider,{value:D},r.a.createElement(K.Provider,{value:h},r.a.createElement(M,Object(c.a)({ref:t},C,{className:u()(g,i,o&&N,s&&i+"-"+s,f&&"bg-"+f,v&&"sticky-"+v,I&&"fixed-"+I)}),m)))}));V.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},V.displayName="Navbar",V.Brand=v,V.Toggle=U,V.Collapse=G,V.Text=Object(f.a)("navbar-text",{Component:"span"});var J=V,X=(n("K9S6"),n("Wzyw")),H=n("Zeqi"),q=n("YGJp"),_=n("lcWJ"),$=r.a.createContext(null),ee=r.a.createContext(null),te=function(){},ne=r.a.forwardRef((function(e,t){var n,i,o=e.as,s=void 0===o?"ul":o,u=e.onSelect,d=e.activeKey,f=e.role,p=e.onKeyDown,I=Object(l.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),v=Object(q.a)(),g=Object(a.useRef)(!1),m=Object(a.useContext)(K),b=Object(a.useContext)(ee);b&&(f=f||"tablist",d=b.activeKey,n=b.getControlledId,i=b.getControllerId);var M=Object(a.useRef)(null),y=function(e){if(!M.current)return null;var t=Object(H.a)(M.current,"[data-rb-event-key]:not(.disabled)"),n=M.current.querySelector(".active"),a=t.indexOf(n);if(-1===a)return null;var r=a+e;return r>=t.length&&(r=0),r<0&&(r=t.length-1),t[r]},E=function(e,t){null!=e&&(u&&u(e,t),m&&m(e,t))};Object(a.useEffect)((function(){if(M.current&&g.current){var e=M.current.querySelector("[data-rb-event-key].active");e&&e.focus()}g.current=!1}));var j=Object(_.a)(t,M);return r.a.createElement(K.Provider,{value:E},r.a.createElement($.Provider,{value:{role:f,activeKey:F(d),getControlledId:n||te,getControllerId:i||te}},r.a.createElement(s,Object(c.a)({},I,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),E(t.dataset.rbEventKey,e),g.current=!0,v())},ref:j,role:f}))))})),ae=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.children,o=e.as,s=void 0===o?"div":o,d=Object(l.a)(e,["bsPrefix","className","children","as"]);return n=Object(p.a)(n,"nav-item"),r.a.createElement(s,Object(c.a)({},d,{ref:t,className:u()(a,n)}),i)}));ae.displayName="NavItem";var re=ae,ie=n("dbZe"),oe=r.a.forwardRef((function(e,t){var n=e.active,i=e.className,o=e.tabIndex,s=e.eventKey,d=e.onSelect,f=e.onClick,p=e.as,I=Object(l.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),v=F(s,I.href),g=Object(a.useContext)(K),m=Object(a.useContext)($),b=n;m&&(I.role||"tablist"!==m.role||(I.role="tab"),I["data-rb-event-key"]=v,I.id=m.getControllerId(v),I["aria-controls"]=m.getControlledId(v),b=null==n&&null!=v?m.activeKey===v:n),"tab"===I.role&&(I.tabIndex=b?o:-1,I["aria-selected"]=b);var M=Object(B.a)((function(e){f&&f(e),null!=v&&(d&&d(v,e),g&&g(v,e))}));return r.a.createElement(p,Object(c.a)({},I,{ref:t,onClick:M,className:u()(i,b&&"active")}))}));oe.defaultProps={disabled:!1};var ce=oe,le={disabled:!1,as:ie.a},se=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.disabled,i=e.className,o=e.href,s=e.eventKey,d=e.onSelect,f=e.as,I=Object(l.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.a)(n,"nav-link"),r.a.createElement(ce,Object(c.a)({},I,{href:o,ref:t,eventKey:s,as:f,disabled:a,onSelect:d,className:u()(i,n,a&&"disabled")}))}));se.displayName="NavLink",se.defaultProps=le;var ue=se,de=r.a.forwardRef((function(e,t){var n,i,o,s=Object(d.a)(e,{activeKey:"onSelect"}),f=s.as,I=void 0===f?"div":f,v=s.bsPrefix,g=s.variant,m=s.fill,b=s.justify,M=s.navbar,y=s.className,E=s.children,j=s.activeKey,x=Object(l.a)(s,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);v=Object(p.a)(v,"nav");var C=Object(a.useContext)(P),h=Object(a.useContext)(X.a);return C?(i=C.bsPrefix,M=null==M||M):h&&(o=h.cardHeaderBsPrefix),r.a.createElement(ne,Object(c.a)({as:I,ref:t,activeKey:j,className:u()(y,(n={},n[v]=!M,n[i+"-nav"]=M,n[o+"-"+g]=!!o,n[v+"-"+g]=!!g,n[v+"-fill"]=m,n[v+"-justified"]=b,n))},x),E)}));de.displayName="Nav",de.defaultProps={justify:!1,fill:!1},de.Item=re,de.Link=ue;var fe=de,pe=n("oTYA"),Ie=n.n(pe),ve=n("7GAd"),ge=n.n(ve),me=(n("BTi0"),function(e){var t=e.siteTitle;return r.a.createElement("header",{className:"bg-dark"},r.a.createElement(o.a,null,r.a.createElement(J,{expand:"md",variant:"dark"},r.a.createElement(J.Brand,{href:"/"},r.a.createElement("h2",null,t)),r.a.createElement(J.Toggle,{"aria-controls":"navbarResponsive"}),r.a.createElement(J.Collapse,{id:"navbarResponsive"},r.a.createElement(fe,{as:"ul",className:"ml-auto"},r.a.createElement(fe.Item,{as:"li"},r.a.createElement(i.Link,{to:"/",className:"nav-link",activeClassName:"active"},"About Me")),r.a.createElement(fe.Item,{as:"li"},r.a.createElement(i.Link,{to:"/background",className:"nav-link",activeClassName:"active"},"Background")),r.a.createElement(fe.Item,{as:"li"},r.a.createElement(i.Link,{to:"/projects",className:"nav-link",activeClassName:"active"},"Projects")),r.a.createElement(fe.Item,{as:"li"},r.a.createElement(i.Link,{to:"/contact",className:"nav-link",activeClassName:"active"},"Contact")),r.a.createElement("span",{style:{display:"flex"}},r.a.createElement(fe.Item,{as:"li",className:"social-nav-item"},r.a.createElement("a",{href:"https://github.com/algtan",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:ge.a,className:"social-icon",alt:"Github account"})))),r.a.createElement("span",{style:{display:"flex"}},r.a.createElement(fe.Item,{as:"li",className:"social-nav-item"},r.a.createElement("a",{href:"https://linkedin.com/in/allen-tan",target:"_blank",rel:"noreferrer"},r.a.createElement("img",{src:Ie.a,className:"social-icon",alt:"LinkedIn account"})))))))))});me.defaultProps={siteTitle:""};var be=me,Me=(n("q4sD"),n("FWHX")),ye=n.n(Me);t.a=function(e){var t=e.children,n=Object(i.useStaticQuery)("3649515864");return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,{siteTitle:n.site.siteMetadata.title}),r.a.createElement(ye.a,null,r.a.createElement("main",null,t),r.a.createElement("footer",{className:"text-center",style:{marginTop:"1.5rem"}},"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},GEtZ:function(e,t,n){"use strict";var a=n("SJxq"),r=!1,i=!1;try{var o={get passive(){return r=!0},get once(){return i=r=!0}};a.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(s){}var c=function(e,t,n,a){if(a&&"boolean"!=typeof a&&!i){var o=a.once,c=a.capture,l=n;!i&&o&&(l=n.__once||function e(a){this.removeEventListener(t,e,c),n.call(this,a)},n.__once=l),e.addEventListener(t,l,r?a:c)}e.addEventListener(t,n,a)};var l=function(e,t,n,a){var r=a&&"boolean"!=typeof a?a.capture:a;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};t.a=function(e,t,n,a){return c(e,t,n,a),function(){l(e,t,n,a)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("wx14"),r=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function l(e,t){return Object.keys(t).reduce((function(n,l){var s,u=n,d=u[o(l)],f=u[l],p=Object(r.a)(u,[o(l),l].map(c)),I=t[l],v=function(e,t,n){var a=Object(i.useRef)(void 0!==e),r=Object(i.useState)(t),o=r[0],c=r[1],l=void 0!==e,s=a.current;return a.current=l,!l&&s&&o!==t&&c(t),[l?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(a)),c(e)}),[n])]}(f,d,e[I]),g=v[0],m=v[1];return Object(a.a)({},p,((s={})[l]=g,s[I]=m,s))}),e)}n("dI71"),n("94VI")},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function a(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}return(0,i.default)(a)};var a,r=n("pvIh"),i=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,a=n.propTypes,i=n.defaultProps,o=n.allowFallback,c=void 0!==o&&o,l=n.displayName,s=void 0===l?e.name||e.displayName:l,u=function(t,n){return e(t,n)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:s,propTypes:a,defaultProps:i})};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},Wzyw:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=r.a.createContext(null)},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){return Object(a.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("wx14"),r=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=/-(.)/g;var l=n("q1tI"),s=n.n(l),u=n("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?d(e):i,l=n.Component,f=void 0===l?"div":l,p=n.defaultProps,I=s.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,l=t.as,d=void 0===l?f:l,p=Object(r.a)(t,["className","bsPrefix","as"]),I=Object(u.a)(c,e);return s.a.createElement(d,Object(a.a)({ref:n,className:o()(i,I)},p))}));return I.defaultProps=p,I.displayName=c,I}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI");var r=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=r(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},dZvc:function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},dbZe:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function l(e){return!e||"#"===e.trim()}var s=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,s=e.disabled,u=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,n=d.onClick;(s||l(t))&&e.preventDefault(),s?e.stopPropagation():n&&n(e)};return l(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),s&&(d.tabIndex=-1,d["aria-disabled"]=!0),o.a.createElement(i,Object(a.a)({ref:t},d,{onClick:f,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));s.displayName="SafeAnchor",t.a=s},lcWJ:function(e,t,n){"use strict";var a=n("q1tI"),r=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=r(e),a=r(t);return function(e){n&&n(e),a&&a(e)}}(e,t)}),[e,t])}},oTYA:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KCjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0iTGF5ZXJfMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCAzNi4wOTk5OTkgMzYiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkluLUJsYWNrLTBwNWluLVIuc3ZnIgogICB3aWR0aD0iMzYuMDk5OTk4IgogICBoZWlnaHQ9IjM2IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjAgcjE1Mjk5Ij48bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExMyI+PHJkZjpSREY+PGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgICBpZD0iZGVmczExIiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4MzgiCiAgICAgaWQ9Im5hbWVkdmlldzkiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjYuNTU1NTU1NiIKICAgICBpbmtzY2FwZTpjeD0iMjEuMTUiCiAgICAgaW5rc2NhcGU6Y3k9IjE4IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJMYXllcl8xIiAvPjxnCiAgICAgaWQ9Imc2Ij48ZwogICAgICAgaWQ9Imc0Ij48cGF0aAogICAgICAgICBkPSJNIDMzLjMsMCBIIDIuNyBDIDEuMiwwIDAsMS4yIDAsMi42IFYgMzMuNCBDIDAsMzQuOCAxLjIsMzYgMi43LDM2IGggMzAuNyBjIDEuNSwwIDIuNywtMS4yIDIuNywtMi42IFYgMi42IEMgMzYsMS4yIDM0LjgsMCAzMy4zLDAgWiBNIDEwLjcsMzAuNyBIIDUuMyBWIDEzLjUgaCA1LjMgViAzMC43IFogTSA4LDExLjEgQyA2LjMsMTEuMSA0LjksOS43IDQuOSw4IDQuOSw2LjMgNi4zLDUgOCw1IGMgMS43LDAgMy4xLDEuNCAzLjEsMy4xIDAsMS43IC0xLjQsMyAtMy4xLDMgeiBtIDIyLjcsMTkuNiBoIC01LjMgdiAtOC40IGMgMCwtMiAwLC00LjYgLTIuOCwtNC42IC0yLjgsMCAtMy4yLDIuMiAtMy4yLDQuNCB2IDguNSBIIDE0IFYgMTMuNSBoIDUuMSB2IDIuMyBoIDAuMSBjIDAuNywtMS40IDIuNSwtMi44IDUuMSwtMi44IDUuNCwwIDYuNCwzLjYgNi40LDguMiB6IgogICAgICAgICBpZD0icGF0aDIiCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+PC9nPjwvZz48L3N2Zz4="},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,i,o){var c=r||"<<anonymous>>",l=o||a;if(null==n[a])return t?new Error("Required "+i+" `"+l+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,u=Array(s>6?s-6:0),d=6;d<s;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,a,c,i,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},q4sD:function(e,t,n){},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14"),n("QA0p");var a=n("q1tI"),r=n.n(a),i=r.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(a.useContext)(i);return e||n[t]||t}},vrFN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TJpk"),o=n.n(i),c=n("Wbzz");function l(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,l=Object(c.useStaticQuery)("63159454").site,s=t||l.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(a)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=commons-40baff09831bb4f63f7b.js.map