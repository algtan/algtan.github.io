(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"16l3":function(e,t,n){"use strict";n.r(t);var a,r=n("q1tI"),o=n.n(r),c=n("7vrA"),i=n("YdCC"),l=Object(i.a)("card-columns"),s=n("Bl7J"),u=n("vrFN"),d=n("6xyR"),f=n("wx14"),m=n("zLVn"),b=n("TSYQ"),v=n.n(b),p=n("2fXS"),h=n("SJxq"),g=n("dZvc"),O=n("Q7zl");function j(e){if((!a&&0!==a||e)&&h.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var E=n("ZCiN");function y(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}var x=n("YECM");function N(e){void 0===e&&(e=Object(g.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}function w(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var k=n("GEtZ"),C=n("i8i4"),S=n.n(C),I=n("XcHJ");function T(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function R(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function P(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=R(e.className,t):e.setAttribute("class",R(e.className&&e.className.baseVal||"",t))}var F=n("7j6X");function M(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function A(e){var t;return M(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=M(e)?Object(g.a)():Object(g.a)(e),n=M(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var _=["template","script","style"],D=function(e,t,n){[].forEach.call(e.children,(function(e){var a,r,o;-1===t.indexOf(e)&&(r=(a=e).nodeType,o=a.tagName,1===r&&-1===_.indexOf(o.toLowerCase()))&&n(e)}))};function L(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var H,B=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,a=void 0===n||n,r=t.handleContainerOverflow,o=void 0===r||r;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=o,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=j()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return t=this.data,n=function(t){return-1!==t.modals.indexOf(e)},a=-1,t.some((function(e,t){return!!n(e,t)&&(a=t,!0)})),a;var t,n,a},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(Object(F.a)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(F.a)(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var a=this.modals.indexOf(e),r=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;D(e,[n,a],(function(e){return L(!0,e)}))}(t,e),-1!==r)return this.data[r].modals.push(e),a;var o={modals:[e],classes:n?n.split(/\s+/):[],overflowing:A(t)};return this.handleContainerOverflow&&this.setContainerStyle(o,t),o.classes.forEach(T.bind(null,t)),this.containers.push(t),this.data.push(o),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],r=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(P.bind(null,r)),this.handleContainerOverflow&&this.removeContainerStyle(a,r),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;D(e,[n,a],(function(e){return L(!1,e)}))}(r,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var o=a.modals[a.modals.length-1],c=o.backdrop;L(!1,o.dialog),L(!1,c)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),z=function(e){var t;return"undefined"==typeof document?null:null==e?Object(g.a)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function U(e){var t=e||(H||(H=new B),H),n=Object(r.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,a){return t.add(n.current,e,a)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(r.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(r.useCallback)((function(e){n.current.backdrop=e}),[])})}var K=Object(r.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,c=e.role,i=void 0===c?"dialog":c,l=e.className,s=e.style,u=e.children,d=e.backdrop,b=void 0===d||d,v=e.keyboard,p=void 0===v||v,g=e.onBackdropClick,O=e.onEscapeKeyDown,j=e.transition,x=e.backdropTransition,C=e.autoFocus,T=void 0===C||C,R=e.enforceFocus,P=void 0===R||R,F=e.restoreFocus,M=void 0===F||F,A=e.restoreFocusOptions,_=e.renderDialog,D=e.renderBackdrop,L=void 0===D?function(e){return o.a.createElement("div",e)}:D,H=e.manager,B=e.container,K=e.containerClassName,V=e.onShow,J=e.onHide,q=void 0===J?function(){}:J,W=e.onExit,X=e.onExited,Y=e.onExiting,Z=e.onEnter,Q=e.onEntering,G=e.onEntered,$=Object(m.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ee=function(e,t){var n=Object(r.useState)((function(){return z(e)})),a=n[0],o=n[1];if(!a){var c=z(e);c&&o(c)}return Object(r.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(r.useEffect)((function(){var t=z(e);t!==a&&o(t)}),[e,a]),a}(B),te=U(H),ne=Object(I.a)(),ae=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}(a),re=Object(r.useState)(!a),oe=re[0],ce=re[1],ie=Object(r.useRef)(null);Object(r.useImperativeHandle)(t,(function(){return te}),[te]),h.a&&!ae&&a&&(ie.current=N()),j||a||oe?a&&oe&&ce(!1):ce(!0);var le=Object(E.a)((function(){if(te.add(ee,K),be.current=Object(k.a)(document,"keydown",fe),me.current=Object(k.a)(document,"focus",(function(){return setTimeout(ue)}),!0),V&&V(),T){var e=N(document);te.dialog&&e&&!w(te.dialog,e)&&(ie.current=e,te.dialog.focus())}})),se=Object(E.a)((function(){var e;(te.remove(),null==be.current||be.current(),null==me.current||me.current(),M)&&(null==(e=ie.current)||null==e.focus||e.focus(A),ie.current=null)}));Object(r.useEffect)((function(){a&&ee&&le()}),[a,ee,le]),Object(r.useEffect)((function(){oe&&se()}),[oe,se]),y((function(){se()}));var ue=Object(E.a)((function(){if(P&&ne()&&te.isTopModal()){var e=N();te.dialog&&e&&!w(te.dialog,e)&&te.dialog.focus()}})),de=Object(E.a)((function(e){e.target===e.currentTarget&&(null==g||g(e),!0===b&&q())})),fe=Object(E.a)((function(e){p&&27===e.keyCode&&te.isTopModal()&&(null==O||O(e),e.defaultPrevented||q())})),me=Object(r.useRef)(),be=Object(r.useRef)(),ve=j;if(!ee||!(a||ve&&!oe))return null;var pe=Object(f.a)({role:i,ref:te.setDialogRef,"aria-modal":"dialog"===i||void 0},$,{style:s,className:l,tabIndex:-1}),he=_?_(pe):o.a.createElement("div",pe,o.a.cloneElement(u,{role:"document"}));ve&&(he=o.a.createElement(ve,{appear:!0,unmountOnExit:!0,in:!!a,onExit:W,onExiting:Y,onExited:function(){ce(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==X||X.apply(void 0,t)},onEnter:Z,onEntering:Q,onEntered:G},he));var ge=null;if(b){var Oe=x;ge=L({ref:te.setBackdropRef,onClick:de}),Oe&&(ge=o.a.createElement(Oe,{appear:!0,in:!!a},ge))}return o.a.createElement(o.a.Fragment,null,S.a.createPortal(o.a.createElement(o.a.Fragment,null,ge,he),ee))}));K.displayName="Modal";var V,J=Object.assign(K,{Manager:B}),q=(n("2W6z"),n("dI71")),W=n("Zeqi"),X=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Y=".sticky-top",Z=".navbar-toggler",Q=function(e){function t(){return e.apply(this,arguments)||this}Object(q.a)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var a,r=t.style[e];t.dataset[e]=r,Object(F.a)(t,((a={})[e]=parseFloat(Object(F.a)(t,e))+n+"px",a))},n.restore=function(e,t){var n,a=t.dataset[e];void 0!==a&&(delete t.dataset[e],Object(F.a)(t,((n={})[e]=a,n)))},n.setContainerStyle=function(t,n){var a=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var r=j();Object(W.a)(n,X).forEach((function(e){return a.adjustAndStore("paddingRight",e,r)})),Object(W.a)(n,Y).forEach((function(e){return a.adjustAndStore("marginRight",e,-r)})),Object(W.a)(n,Z).forEach((function(e){return a.adjustAndStore("marginRight",e,r)}))}},n.removeContainerStyle=function(t,n){var a=this;e.prototype.removeContainerStyle.call(this,t,n),Object(W.a)(n,X).forEach((function(e){return a.restore("paddingRight",e)})),Object(W.a)(n,Y).forEach((function(e){return a.restore("marginRight",e)})),Object(W.a)(n,Z).forEach((function(e){return a.restore("marginRight",e)}))},t}(B),G=n("dRu9"),$=n("wsUu"),ee=n("z+q/"),te=((V={})[G.b]="show",V[G.a]="show",V),ne=o.a.forwardRef((function(e,t){var n=e.className,a=e.children,c=Object(m.a)(e,["className","children"]),i=Object(r.useCallback)((function(e){Object(ee.a)(e),c.onEnter&&c.onEnter(e)}),[c]);return o.a.createElement(G.e,Object(f.a)({ref:t,addEndListener:$.a},c,{onEnter:i}),(function(e,t){return o.a.cloneElement(a,Object(f.a)({},t,{className:v()("fade",n,a.props.className,te[e])}))}))}));ne.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ne.displayName="Fade";var ae=ne,re=Object(i.a)("modal-body"),oe=o.a.createContext({onHide:function(){}}),ce=n("vUet"),ie=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.contentClassName,c=e.centered,i=e.size,l=e.children,s=e.scrollable,u=Object(m.a)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),d=(n=Object(ce.a)(n,"modal"))+"-dialog";return o.a.createElement("div",Object(f.a)({},u,{ref:t,className:v()(d,a,i&&n+"-"+i,c&&d+"-centered",s&&d+"-scrollable")}),o.a.createElement("div",{className:v()(n+"-content",r)},l))}));ie.displayName="ModalDialog";var le=ie,se=Object(i.a)("modal-footer"),ue=o.a.forwardRef((function(e,t){var n=e.label,a=e.onClick,r=e.className,c=Object(m.a)(e,["label","onClick","className"]);return o.a.createElement("button",Object(f.a)({ref:t,type:"button",className:v()("close",r),onClick:a},c),o.a.createElement("span",{"aria-hidden":"true"},"×"),o.a.createElement("span",{className:"sr-only"},n))}));ue.displayName="CloseButton",ue.defaultProps={label:"Close"};var de=ue,fe=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,c=e.closeButton,i=e.onHide,l=e.className,s=e.children,u=Object(m.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Object(ce.a)(n,"modal-header");var d=Object(r.useContext)(oe),b=Object(E.a)((function(){d&&d.onHide(),i&&i()}));return o.a.createElement("div",Object(f.a)({ref:t},u,{className:v()(l,n)}),s,c&&o.a.createElement(de,{label:a,onClick:b}))}));fe.displayName="ModalHeader",fe.defaultProps={closeLabel:"Close",closeButton:!1};var me,be=fe,ve=n("U1MP"),pe=Object(ve.a)("h4"),he=Object(i.a)("modal-title",{Component:pe}),ge={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:le};function Oe(e){return o.a.createElement(ae,e)}function je(e){return o.a.createElement(ae,e)}var Ee=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.style,i=e.dialogClassName,l=e.contentClassName,s=e.children,u=e.dialogAs,d=e["aria-labelledby"],b=e.show,N=e.animation,w=e.backdrop,k=e.keyboard,C=e.onEscapeKeyDown,S=e.onShow,I=e.onHide,T=e.container,R=e.autoFocus,P=e.enforceFocus,F=e.restoreFocus,M=e.restoreFocusOptions,A=e.onEntered,_=e.onExit,D=e.onExiting,L=e.onEnter,H=e.onEntering,B=e.onExited,z=e.backdropClassName,U=e.manager,K=Object(m.a)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),V=Object(r.useState)({}),q=V[0],W=V[1],X=Object(r.useState)(!1),Y=X[0],Z=X[1],G=Object(r.useRef)(!1),$=Object(r.useRef)(!1),ee=Object(r.useRef)(null),te=Object(r.useState)(null),ne=te[0],ae=te[1],re=Object(E.a)(I);n=Object(ce.a)(n,"modal"),Object(r.useImperativeHandle)(t,(function(){return{get _modal(){return ne}}}),[ne]);var ie=Object(r.useMemo)((function(){return{onHide:re}}),[re]);function le(){return U||(me||(me=new Q),me)}function se(e){if(h.a){var t=le().isContainerOverflowing(ne),n=e.scrollHeight>Object(g.a)(e).documentElement.clientHeight;W({paddingRight:t&&!n?j():void 0,paddingLeft:!t&&n?j():void 0})}}var ue=Object(E.a)((function(){ne&&se(ne.dialog)}));y((function(){Object(O.a)(window,"resize",ue),ee.current&&ee.current()}));var de=function(){G.current=!0},fe=function(e){G.current&&ne&&e.target===ne.dialog&&($.current=!0),G.current=!1},be=function(){Z(!0),ee.current=Object(x.a)(ne.dialog,(function(){Z(!1)}))},ve=function(e){"static"!==w?$.current||e.target!==e.currentTarget?$.current=!1:I():function(e){e.target===e.currentTarget&&be()}(e)},pe=Object(r.useCallback)((function(e){return o.a.createElement("div",Object(f.a)({},e,{className:v()(n+"-backdrop",z,!N&&"show")}))}),[N,z,n]),he=Object(f.a)({},c,q);N||(he.display="block");return o.a.createElement(oe.Provider,{value:ie},o.a.createElement(J,{show:b,ref:ae,backdrop:w,container:T,keyboard:!0,autoFocus:R,enforceFocus:P,restoreFocus:F,restoreFocusOptions:M,onEscapeKeyDown:function(e){k||"static"!==w?k&&C&&C(e):(e.preventDefault(),be())},onShow:S,onHide:I,onEnter:function(e){e&&(e.style.display="block",se(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];L&&L.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];H&&H.apply(void 0,[e].concat(n)),Object(p.a)(window,"resize",ue)},onEntered:A,onExit:function(e){ee.current&&ee.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];_&&_.apply(void 0,[e].concat(n))},onExiting:D,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];B&&B.apply(void 0,n),Object(O.a)(window,"resize",ue)},manager:le(),containerClassName:n+"-open",transition:N?Oe:void 0,backdropTransition:N?je:void 0,renderBackdrop:pe,renderDialog:function(e){return o.a.createElement("div",Object(f.a)({role:"dialog"},e,{style:he,className:v()(a,n,Y&&n+"-static"),onClick:w?ve:void 0,onMouseUp:fe,"aria-labelledby":d}),o.a.createElement(u,Object(f.a)({},K,{onMouseDown:de,className:i,contentClassName:l}),s))}}))}));Ee.displayName="Modal",Ee.defaultProps=ge,Ee.Body=re,Ee.Header=be,Ee.Title=he,Ee.Footer=se,Ee.Dialog=le,Ee.TRANSITION_DURATION=300,Ee.BACKDROP_TRANSITION_DURATION=150;var ye=Ee;var xe=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},Ne=n("Xyuu"),we=Math.pow(2,31)-1;function ke(){var e=Object(I.a)(),t=Object(r.useRef)();return y((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(a,r){void 0===r&&(r=0),e()&&(n(),r<=we?t.current=setTimeout(a,r):function e(t,n,a){var r=a-Date.now();t.current=r<=we?setTimeout(n,r):setTimeout((function(){return e(t,n,a)}),we)}(t,a,Date.now()+r))},clear:n}}),[])}var Ce=n("17x9"),Se=n.n(Ce),Ie=n("y8DL"),Te=Object(i.a)("carousel-caption"),Re=o.a.forwardRef((function(e,t){var n=e.as,a=void 0===n?"div":n,r=e.bsPrefix,c=e.children,i=e.className,l=Object(m.a)(e,["as","bsPrefix","children","className"]),s=v()(i,Object(ce.a)(r,"carousel-item"));return o.a.createElement(a,Object(f.a)({ref:t},l,{className:s}),c)}));Re.displayName="CarouselItem";var Pe=Re;function Fe(e,t){var n=0;return o.a.Children.map(e,(function(e){return o.a.isValidElement(e)?t(e,n++):e}))}var Me=n("dbZe"),Ae={bsPrefix:Se.a.string,as:Se.a.elementType,slide:Se.a.bool,fade:Se.a.bool,controls:Se.a.bool,indicators:Se.a.bool,activeIndex:Se.a.number,onSelect:Se.a.func,onSlide:Se.a.func,onSlid:Se.a.func,interval:Se.a.number,keyboard:Se.a.bool,pause:Se.a.oneOf(["hover",!1]),wrap:Se.a.bool,touch:Se.a.bool,prevIcon:Se.a.node,prevLabel:Se.a.string,nextIcon:Se.a.node,nextLabel:Se.a.string},_e={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:o.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function De(e,t){var n=Object(Ie.a)(e,{activeIndex:"onSelect"}),a=n.as,c=void 0===a?"div":a,i=n.bsPrefix,l=n.slide,s=n.fade,u=n.controls,d=n.indicators,b=n.activeIndex,p=n.onSelect,h=n.onSlide,g=n.onSlid,O=n.interval,j=n.keyboard,y=n.onKeyDown,x=n.pause,N=n.onMouseOver,w=n.onMouseOut,k=n.wrap,C=n.touch,S=n.onTouchStart,I=n.onTouchMove,T=n.onTouchEnd,R=n.prevIcon,P=n.prevLabel,F=n.nextIcon,M=n.nextLabel,A=n.className,_=n.children,D=Object(m.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),L=Object(ce.a)(i,"carousel"),H=Object(r.useRef)(null),B=Object(r.useState)("next"),z=B[0],U=B[1],K=Object(r.useState)(!1),V=K[0],J=K[1],q=Object(r.useState)(!1),W=q[0],X=q[1],Y=Object(r.useState)(b||0),Z=Y[0],Q=Y[1];W||b===Z||(H.current?U(H.current):U((b||0)>Z?"next":"prev"),l&&X(!0),Q(b||0)),Object(r.useEffect)((function(){H.current&&(H.current=null)}));var te,ne=0;!function(e,t){var n=0;o.a.Children.forEach(e,(function(e){o.a.isValidElement(e)&&t(e,n++)}))}(_,(function(e,t){++ne,t===b&&(te=e.props.interval)}));var ae=Object(Ne.a)(te),re=Object(r.useCallback)((function(e){if(!W){var t=Z-1;if(t<0){if(!k)return;t=ne-1}H.current="prev",p&&p(t,e)}}),[W,Z,p,k,ne]),oe=Object(E.a)((function(e){if(!W){var t=Z+1;if(t>=ne){if(!k)return;t=0}H.current="next",p&&p(t,e)}})),ie=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:ie.current,prev:re,next:oe}}));var le=Object(E.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&oe()})),se="next"===z?"left":"right";xe((function(){l||(h&&h(Z,se),g&&g(Z,se))}),[Z]);var ue=L+"-item-"+z,de=L+"-item-"+se,fe=Object(r.useCallback)((function(e){Object(ee.a)(e),h&&h(Z,se)}),[h,Z,se]),me=Object(r.useCallback)((function(){X(!1),g&&g(Z,se)}),[g,Z,se]),be=Object(r.useCallback)((function(e){if(j&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void re(e);case"ArrowRight":return e.preventDefault(),void oe(e)}y&&y(e)}),[j,y,re,oe]),ve=Object(r.useCallback)((function(e){"hover"===x&&J(!0),N&&N(e)}),[x,N]),pe=Object(r.useCallback)((function(e){J(!1),w&&w(e)}),[w]),he=Object(r.useRef)(0),ge=Object(r.useRef)(0),Oe=ke(),je=Object(r.useCallback)((function(e){he.current=e.touches[0].clientX,ge.current=0,"hover"===x&&J(!0),S&&S(e)}),[x,S]),Ee=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-he.current,I&&I(e)}),[I]),ye=Object(r.useCallback)((function(e){if(C){var t=ge.current;Math.abs(t)>40&&(t>0?re(e):oe(e))}"hover"===x&&Oe.set((function(){J(!1)}),O||void 0),T&&T(e)}),[C,x,re,oe,Oe,O,T]),we=null!=O&&!V&&!W,Ce=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(we)return Ce.current=window.setInterval(document.visibilityState?le:oe,null!=(e=null!=(t=ae.current)?t:O)?e:void 0),function(){null!==Ce.current&&clearInterval(Ce.current)}}),[we,oe,ae,O,le]);var Se=Object(r.useMemo)((function(){return d&&Array.from({length:ne},(function(e,t){return function(e){p&&p(t,e)}}))}),[d,ne,p]);return o.a.createElement(c,Object(f.a)({ref:ie},D,{onKeyDown:be,onMouseOver:ve,onMouseOut:pe,onTouchStart:je,onTouchMove:Ee,onTouchEnd:ye,className:v()(A,L,l&&"slide",s&&L+"-fade")}),d&&o.a.createElement("ol",{className:L+"-indicators"},Fe(_,(function(e,t){return o.a.createElement("li",{key:t,className:t===Z?"active":void 0,onClick:Se?Se[t]:void 0})}))),o.a.createElement("div",{className:L+"-inner"},Fe(_,(function(e,t){var n=t===Z;return l?o.a.createElement(G.e,{in:n,onEnter:n?fe:void 0,onEntered:n?me:void 0,addEndListener:$.a},(function(t){return o.a.cloneElement(e,{className:v()(e.props.className,n&&"entered"!==t&&ue,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&de)})})):o.a.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))),u&&o.a.createElement(o.a.Fragment,null,(k||0!==b)&&o.a.createElement(Me.a,{className:L+"-control-prev",onClick:re},R,P&&o.a.createElement("span",{className:"sr-only"},P)),(k||b!==ne-1)&&o.a.createElement(Me.a,{className:L+"-control-next",onClick:oe},F,M&&o.a.createElement("span",{className:"sr-only"},M))))}var Le=o.a.forwardRef(De);Le.displayName="Carousel",Le.propTypes=Ae,Le.defaultProps=_e,Le.Caption=Te,Le.Item=Pe;var He=Le,Be=o.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,r=e.size,c=e.active,i=e.className,l=e.block,s=e.type,u=e.as,d=Object(m.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=Object(ce.a)(n,"btn"),p=v()(i,b,c&&"active",a&&b+"-"+a,l&&b+"-block",r&&b+"-"+r);if(d.href)return o.a.createElement(Me.a,Object(f.a)({},d,{as:u,ref:t,className:v()(p,d.disabled&&"disabled")}));t&&(d.ref=t),s?d.type=s:u||(d.type="button");var h=u||"button";return o.a.createElement(h,Object(f.a)({},d,{className:p}))}));Be.displayName="Button",Be.defaultProps={variant:"primary",active:!1,disabled:!1};var ze=Be,Ue=(n("FtoD"),n("7GAd")),Ke=n.n(Ue),Ve=function(e){var t=Object(r.useState)(!1),n=t[0],a=t[1],c=function(){return a(!1)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{className:"card-margins"},o.a.createElement(d.a.Img,{className:"card-img",onClick:function(){return a(!0)},variant:"top",src:e.cardImg,style:{height:"30vh",objectFit:"cover",objectPosition:"top",cursor:"pointer"}}),o.a.createElement(d.a.Body,null,o.a.createElement("h5",null,e.projectTitle),o.a.createElement("div",{style:{paddingBottom:"6px"}},e.tools&&e.tools.map((function(e,t){return o.a.createElement("div",{className:"tag",key:t},e)}))),o.a.createElement(d.a.Text,null,e.cardText),e.buttonInfo&&e.buttonInfo.map((function(e,t){return o.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"btn btn-dark",key:t,style:{margin:"2px"}},e.ghIcon&&o.a.createElement("img",{src:Ke.a,style:{filter:"invert(1)",verticalAlign:"-.25em"},height:"20px",alt:"Github icon"}),e.text)})))),o.a.createElement(ye,{show:n,onHide:c,centered:!0},o.a.createElement(ye.Header,{closeButton:!0},o.a.createElement(ye.Title,null,e.projectTitle)),o.a.createElement(ye.Body,null,o.a.createElement(He,null,e.carouselImgs&&e.carouselImgs.map((function(e,t){return o.a.createElement(He.Item,{key:t},o.a.createElement("img",{className:"d-block w-100",src:e,alt:"project screenshot {index + 1}"}))})))),o.a.createElement(ye.Footer,null,o.a.createElement(ze,{variant:"secondary",onClick:c},"Close"))))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(u.a,{title:"Projects"}),o.a.createElement("h1",{className:"text-center",style:{marginTop:"1.5rem"}},"Projects"),o.a.createElement(c.a,null,o.a.createElement(l,null,o.a.createElement(Ve,{cardImg:"/pokedex_01.png",projectTitle:"Pokedex",cardText:"Android application that parses JSON data from a RESTful API to provide information on the original 151 Pokemon.",tools:["Java","Android"],buttonInfo:[{link:"https://github.com/algtan/CS50x-pokedex",ghIcon:!0,text:" Repo"}],carouselImgs:["/pokedex_01.png","/pokedex_02.png","/pokedex_03.png","/pokedex_04.png"]}),o.a.createElement(Ve,{cardImg:"/mortgage_calc_01.png",projectTitle:"Mortgage Calculator",cardText:"Web application that helps users make informed decisions on purchasing a home.",tools:["Python","Flask"],buttonInfo:[{link:"https://github.com/algtan/CS50x-final",ghIcon:!0,text:" Repo"}],carouselImgs:["/mortgage_calc_01.png","/mortgage_calc_02.png","/mortgage_calc_03.png","/mortgage_calc_04.png"]}),o.a.createElement(Ve,{cardImg:"/robotic_arm_01.png",projectTitle:"3DOF Robotic Arm",cardText:"Master's thesis project on a robotic arm exoskeleton, whose purpose is to amplify upper-limb movements of wheelchair users who have lost functionality in their right arm.",tools:["MATLAB"],buttonInfo:[{link:"/allen_tan-thesis_presentation.pdf",ghIcon:!1,text:"Thesis Presentation"},{link:"https://digitallibrary.sdsu.edu/islandora/object/sdsu%3A2333",ghIcon:!1,text:"Thesis Paper"}],carouselImgs:["/robotic_arm_01.png","/robotic_arm_02.png","/robotic_arm_03.png","/robotic_arm_04.png","/robotic_arm_05.png"]})))))}},"6xyR":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("TSYQ"),c=n.n(o),i=n("q1tI"),l=n.n(i),s=n("vUet"),u=n("YdCC"),d=n("U1MP"),f=n("Wzyw"),m=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(s.a)(n,"card-img");return l.a.createElement(d,Object(a.a)({ref:t,className:c()(i?m+"-"+i:m,o)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,v=Object(d.a)("h5"),p=Object(d.a)("h6"),h=Object(u.a)("card-body"),g=Object(u.a)("card-title",{Component:v}),O=Object(u.a)("card-subtitle",{Component:p}),j=Object(u.a)("card-link",{Component:"a"}),E=Object(u.a)("card-text",{Component:"p"}),y=Object(u.a)("card-header"),x=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),w=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.bg,d=e.text,m=e.border,b=e.body,v=e.children,p=e.as,g=void 0===p?"div":p,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(s.a)(n,"card"),E=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return l.a.createElement(f.a.Provider,{value:E},l.a.createElement(g,Object(a.a)({ref:t},O,{className:c()(o,j,u&&"bg-"+u,d&&"text-"+d,m&&"border-"+m)}),b?l.a.createElement(h,null,v):v))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=b,w.Title=g,w.Subtitle=O,w.Body=h,w.Link=j,w.Text=E,w.Header=y,w.Footer=x,w.ImgOverlay=N;t.a=w},FtoD:function(e,t,n){},U1MP:function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),o=n.n(r),c=n("TSYQ"),i=n.n(c);t.a=function(e){return o.a.forwardRef((function(t,n){return o.a.createElement("div",Object(a.a)({},t,{ref:n,className:i()(t.className,e)}))}))}},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI");function r(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}}}]);
//# sourceMappingURL=component---src-pages-projects-js-ca1ee039d39fa97cac38.js.map