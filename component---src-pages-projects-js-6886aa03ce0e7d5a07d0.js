(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[853],{7502:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(2122),o=n(9756),a=n(5900),i=n.n(a),c=n(7294),l=n(9541),s=n(8870),u=n(6132),d=n(9503),f=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,f=(0,o.Z)(e,["bsPrefix","className","variant","as"]),m=(0,l.vE)(n,"card-img");return c.createElement(d,(0,r.Z)({ref:t,className:i()(s?m+"-"+s:m,a)},f))}));f.displayName="CardImg",f.defaultProps={variant:null};var m=f,p=(0,u.Z)("h5"),v=(0,u.Z)("h6"),g=(0,s.Z)("card-body"),h=(0,s.Z)("card-title",{Component:p}),b=(0,s.Z)("card-subtitle",{Component:v}),E=(0,s.Z)("card-link",{Component:"a"}),y=(0,s.Z)("card-text",{Component:"p"}),k=(0,s.Z)("card-header"),x=(0,s.Z)("card-footer"),N=(0,s.Z)("card-img-overlay"),Z=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,s=e.bg,u=e.text,f=e.border,m=e.body,p=e.children,v=e.as,h=void 0===v?"div":v,b=(0,o.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=(0,l.vE)(n,"card"),y=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return c.createElement(d.Z.Provider,{value:y},c.createElement(h,(0,r.Z)({ref:t},b,{className:i()(a,E,s&&"bg-"+s,u&&"text-"+u,f&&"border-"+f)}),m?c.createElement(g,null,p):p))}));Z.displayName="Card",Z.defaultProps={body:!1},Z.Img=m,Z.Title=h,Z.Subtitle=b,Z.Body=g,Z.Link=E,Z.Text=y,Z.Header=k,Z.Footer=x,Z.ImgOverlay=N;var w=Z},6132:function(e,t,n){"use strict";var r=n(2122),o=n(7294),a=n(5900),i=n.n(a);t.Z=function(e){return o.forwardRef((function(t,n){return o.createElement("div",(0,r.Z)({},t,{ref:n,className:i()(t.className,e)}))}))}},7691:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ze}});var r,o=n(7294),a=n(8870),i=(0,a.Z)("card-columns"),c=n(6187),l=n(7865),s=n(3751),u=n(7502),d=n(2122),f=n(9756),m=n(5900),p=n.n(m),v=n(9351),g=n(3004),h=n(7216),b=n(99);function E(e){if((!r&&0!==r||e)&&g.Z){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}var y=n(5655);function k(e){var t,n,r=(t=e,(n=(0,o.useRef)(t)).current=t,n);(0,o.useEffect)((function(){return function(){return r.current()}}),[])}var x=n(9471);function N(e){void 0===e&&(e=(0,h.Z)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}function Z(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var w=n(2950),C=n(3935);function I(){var e=(0,o.useRef)(!0),t=(0,o.useRef)((function(){return e.current}));return(0,o.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}function T(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function R(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function S(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=R(e.className,t):e.setAttribute("class",R(e.className&&e.className.baseVal||"",t))}var _=n(3164);function P(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function O(e){var t;return P(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=P(e)?(0,h.Z)():(0,h.Z)(e),n=P(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var F=["template","script","style"],A=function(e,t,n){[].forEach.call(e.children,(function(e){var r,o,a;-1===t.indexOf(e)&&(o=(r=e).nodeType,a=r.tagName,1===o&&-1===F.indexOf(a.toLowerCase()))&&n(e)}))};function M(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var D,L=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,r=void 0===n||n,o=t.handleContainerOverflow,a=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=r,this.handleContainerOverflow=a,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=E()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return t=this.data,n=function(t){return-1!==t.modals.indexOf(e)},r=-1,t.some((function(e,t){return!!n(e,t)&&(r=t,!0)})),r;var t,n,r},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt((0,_.Z)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),(0,_.Z)(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var r=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==r)return r;if(r=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,r=t.backdrop;A(e,[n,r],(function(e){return M(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),r;var a={modals:[e],classes:n?n.split(/\s+/):[],overflowing:O(t)};return this.handleContainerOverflow&&this.setContainerStyle(a,t),a.classes.forEach(T.bind(null,t)),this.containers.push(t),this.data.push(a),r},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),r=this.data[n],o=this.containers[n];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.classes.forEach(S.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(r,o),this.hideSiblingNodes&&function(e,t){var n=t.dialog,r=t.backdrop;A(e,[n,r],(function(e){return M(!1,e)}))}(o,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var a=r.modals[r.modals.length-1],i=a.backdrop;M(!1,a.dialog),M(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),B=function(e){var t;return"undefined"==typeof document?null:null==e?(0,h.Z)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function H(e){var t=e||(D||(D=new L),D),n=(0,o.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,r){return t.add(n.current,e,r)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:(0,o.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:(0,o.useCallback)((function(e){n.current.backdrop=e}),[])})}var j=(0,o.forwardRef)((function(e,t){var n=e.show,r=void 0!==n&&n,a=e.role,i=void 0===a?"dialog":a,c=e.className,l=e.style,s=e.children,u=e.backdrop,m=void 0===u||u,p=e.keyboard,v=void 0===p||p,h=e.onBackdropClick,b=e.onEscapeKeyDown,E=e.transition,x=e.backdropTransition,T=e.autoFocus,R=void 0===T||T,S=e.enforceFocus,_=void 0===S||S,P=e.restoreFocus,O=void 0===P||P,F=e.restoreFocusOptions,A=e.renderDialog,M=e.renderBackdrop,D=void 0===M?function(e){return o.createElement("div",e)}:M,L=e.manager,j=e.container,z=e.containerClassName,K=e.onShow,V=e.onHide,W=void 0===V?function(){}:V,U=e.onExit,$=e.onExited,q=e.onExiting,G=e.onEnter,J=e.onEntering,X=e.onEntered,Q=(0,f.Z)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),Y=function(e,t){var n=(0,o.useState)((function(){return B(e)})),r=n[0],a=n[1];if(!r){var i=B(e);i&&a(i)}return(0,o.useEffect)((function(){t&&r&&t(r)}),[t,r]),(0,o.useEffect)((function(){var t=B(e);t!==r&&a(t)}),[e,r]),r}(j),ee=H(L),te=I(),ne=function(e){var t=(0,o.useRef)(null);return(0,o.useEffect)((function(){t.current=e})),t.current}(r),re=(0,o.useState)(!r),oe=re[0],ae=re[1],ie=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,(function(){return ee}),[ee]),g.Z&&!ne&&r&&(ie.current=N()),E||r||oe?r&&oe&&ae(!1):ae(!0);var ce=(0,y.Z)((function(){if(ee.add(Y,z),me.current=(0,w.Z)(document,"keydown",de),fe.current=(0,w.Z)(document,"focus",(function(){return setTimeout(se)}),!0),K&&K(),R){var e=N(document);ee.dialog&&e&&!Z(ee.dialog,e)&&(ie.current=e,ee.dialog.focus())}})),le=(0,y.Z)((function(){var e;(ee.remove(),null==me.current||me.current(),null==fe.current||fe.current(),O)&&(null==(e=ie.current)||null==e.focus||e.focus(F),ie.current=null)}));(0,o.useEffect)((function(){r&&Y&&ce()}),[r,Y,ce]),(0,o.useEffect)((function(){oe&&le()}),[oe,le]),k((function(){le()}));var se=(0,y.Z)((function(){if(_&&te()&&ee.isTopModal()){var e=N();ee.dialog&&e&&!Z(ee.dialog,e)&&ee.dialog.focus()}})),ue=(0,y.Z)((function(e){e.target===e.currentTarget&&(null==h||h(e),!0===m&&W())})),de=(0,y.Z)((function(e){v&&27===e.keyCode&&ee.isTopModal()&&(null==b||b(e),e.defaultPrevented||W())})),fe=(0,o.useRef)(),me=(0,o.useRef)(),pe=E;if(!Y||!(r||pe&&!oe))return null;var ve=(0,d.Z)({role:i,ref:ee.setDialogRef,"aria-modal":"dialog"===i||void 0},Q,{style:l,className:c,tabIndex:-1}),ge=A?A(ve):o.createElement("div",ve,o.cloneElement(s,{role:"document"}));pe&&(ge=o.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!r,onExit:U,onExiting:q,onExited:function(){ae(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==$||$.apply(void 0,t)},onEnter:G,onEntering:J,onEntered:X},ge));var he=null;if(m){var be=x;he=D({ref:ee.setBackdropRef,onClick:ue}),be&&(he=o.createElement(be,{appear:!0,in:!!r},he))}return o.createElement(o.Fragment,null,C.createPortal(o.createElement(o.Fragment,null,he,ge),Y))}));j.displayName="Modal";var z,K=Object.assign(j,{Manager:L}),V=(n(2473),n(3552)),W=n(930),U=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",$=".sticky-top",q=".navbar-toggler",G=function(e){function t(){return e.apply(this,arguments)||this}(0,V.Z)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var r,o=t.style[e];t.dataset[e]=o,(0,_.Z)(t,((r={})[e]=parseFloat((0,_.Z)(t,e))+n+"px",r))},n.restore=function(e,t){var n,r=t.dataset[e];void 0!==r&&(delete t.dataset[e],(0,_.Z)(t,((n={})[e]=r,n)))},n.setContainerStyle=function(t,n){var r=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var o=E();(0,W.Z)(n,U).forEach((function(e){return r.adjustAndStore("paddingRight",e,o)})),(0,W.Z)(n,$).forEach((function(e){return r.adjustAndStore("marginRight",e,-o)})),(0,W.Z)(n,q).forEach((function(e){return r.adjustAndStore("marginRight",e,o)}))}},n.removeContainerStyle=function(t,n){var r=this;e.prototype.removeContainerStyle.call(this,t,n),(0,W.Z)(n,U).forEach((function(e){return r.restore("paddingRight",e)})),(0,W.Z)(n,$).forEach((function(e){return r.restore("marginRight",e)})),(0,W.Z)(n,q).forEach((function(e){return r.restore("marginRight",e)}))},t}(L),J=n(5160),X=n(949),Q=n(9059),Y=((z={})[J.d0]="show",z[J.cn]="show",z),ee=o.forwardRef((function(e,t){var n=e.className,r=e.children,a=(0,f.Z)(e,["className","children"]),i=(0,o.useCallback)((function(e){(0,Q.Z)(e),a.onEnter&&a.onEnter(e)}),[a]);return o.createElement(J.ZP,(0,d.Z)({ref:t,addEndListener:X.Z},a,{onEnter:i}),(function(e,t){return o.cloneElement(r,(0,d.Z)({},t,{className:p()("fade",n,r.props.className,Y[e])}))}))}));ee.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ee.displayName="Fade";var te=ee,ne=(0,a.Z)("modal-body"),re=o.createContext({onHide:function(){}}),oe=n(9541),ae=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.contentClassName,i=e.centered,c=e.size,l=e.children,s=e.scrollable,u=(0,f.Z)(e,["bsPrefix","className","contentClassName","centered","size","children","scrollable"]),m=(n=(0,oe.vE)(n,"modal"))+"-dialog";return o.createElement("div",(0,d.Z)({},u,{ref:t,className:p()(m,r,c&&n+"-"+c,i&&m+"-centered",s&&m+"-scrollable")}),o.createElement("div",{className:p()(n+"-content",a)},l))}));ae.displayName="ModalDialog";var ie=ae,ce=(0,a.Z)("modal-footer"),le=o.forwardRef((function(e,t){var n=e.label,r=e.onClick,a=e.className,i=(0,f.Z)(e,["label","onClick","className"]);return o.createElement("button",(0,d.Z)({ref:t,type:"button",className:p()("close",a),onClick:r},i),o.createElement("span",{"aria-hidden":"true"},"×"),o.createElement("span",{className:"sr-only"},n))}));le.displayName="CloseButton",le.defaultProps={label:"Close"};var se=le,ue=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.closeLabel,a=e.closeButton,i=e.onHide,c=e.className,l=e.children,s=(0,f.Z)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=(0,oe.vE)(n,"modal-header");var u=(0,o.useContext)(re),m=(0,y.Z)((function(){u&&u.onHide(),i&&i()}));return o.createElement("div",(0,d.Z)({ref:t},s,{className:p()(c,n)}),l,a&&o.createElement(se,{label:r,onClick:m}))}));ue.displayName="ModalHeader",ue.defaultProps={closeLabel:"Close",closeButton:!1};var de,fe=ue,me=(0,n(6132).Z)("h4"),pe=(0,a.Z)("modal-title",{Component:me}),ve={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ie};function ge(e){return o.createElement(te,e)}function he(e){return o.createElement(te,e)}var be=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.style,i=e.dialogClassName,c=e.contentClassName,l=e.children,s=e.dialogAs,u=e["aria-labelledby"],m=e.show,N=e.animation,Z=e.backdrop,w=e.keyboard,C=e.onEscapeKeyDown,I=e.onShow,T=e.onHide,R=e.container,S=e.autoFocus,_=e.enforceFocus,P=e.restoreFocus,O=e.restoreFocusOptions,F=e.onEntered,A=e.onExit,M=e.onExiting,D=e.onEnter,L=e.onEntering,B=e.onExited,H=e.backdropClassName,j=e.manager,z=(0,f.Z)(e,["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),V=(0,o.useState)({}),W=V[0],U=V[1],$=(0,o.useState)(!1),q=$[0],J=$[1],X=(0,o.useRef)(!1),Q=(0,o.useRef)(!1),Y=(0,o.useRef)(null),ee=(0,o.useState)(null),te=ee[0],ne=ee[1],ae=(0,y.Z)(T);n=(0,oe.vE)(n,"modal"),(0,o.useImperativeHandle)(t,(function(){return{get _modal(){return te}}}),[te]);var ie=(0,o.useMemo)((function(){return{onHide:ae}}),[ae]);function ce(){return j||(de||(de=new G),de)}function le(e){if(g.Z){var t=ce().isContainerOverflowing(te),n=e.scrollHeight>(0,h.Z)(e).documentElement.clientHeight;U({paddingRight:t&&!n?E():void 0,paddingLeft:!t&&n?E():void 0})}}var se=(0,y.Z)((function(){te&&le(te.dialog)}));k((function(){(0,b.Z)(window,"resize",se),Y.current&&Y.current()}));var ue=function(){X.current=!0},fe=function(e){X.current&&te&&e.target===te.dialog&&(Q.current=!0),X.current=!1},me=function(){J(!0),Y.current=(0,x.Z)(te.dialog,(function(){J(!1)}))},pe=function(e){"static"!==Z?Q.current||e.target!==e.currentTarget?Q.current=!1:T():function(e){e.target===e.currentTarget&&me()}(e)},ve=(0,o.useCallback)((function(e){return o.createElement("div",(0,d.Z)({},e,{className:p()(n+"-backdrop",H,!N&&"show")}))}),[N,H,n]),be=(0,d.Z)({},a,W);N||(be.display="block");return o.createElement(re.Provider,{value:ie},o.createElement(K,{show:m,ref:ne,backdrop:Z,container:R,keyboard:!0,autoFocus:S,enforceFocus:_,restoreFocus:P,restoreFocusOptions:O,onEscapeKeyDown:function(e){w||"static"!==Z?w&&C&&C(e):(e.preventDefault(),me())},onShow:I,onHide:T,onEnter:function(e){e&&(e.style.display="block",le(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];D&&D.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];L&&L.apply(void 0,[e].concat(n)),(0,v.ZP)(window,"resize",se)},onEntered:F,onExit:function(e){Y.current&&Y.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];A&&A.apply(void 0,[e].concat(n))},onExiting:M,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];B&&B.apply(void 0,n),(0,b.Z)(window,"resize",se)},manager:ce(),containerClassName:n+"-open",transition:N?ge:void 0,backdropTransition:N?he:void 0,renderBackdrop:ve,renderDialog:function(e){return o.createElement("div",(0,d.Z)({role:"dialog"},e,{style:be,className:p()(r,n,q&&n+"-static"),onClick:Z?pe:void 0,onMouseUp:fe,"aria-labelledby":u}),o.createElement(s,(0,d.Z)({},z,{onMouseDown:ue,className:i,contentClassName:c}),l))}}))}));be.displayName="Modal",be.defaultProps=ve,be.Body=ne,be.Header=fe,be.Title=pe,be.Footer=ce,be.Dialog=ie,be.TRANSITION_DURATION=300,be.BACKDROP_TRANSITION_DURATION=150;var Ee=be;var ye=function(e,t){var n=(0,o.useRef)(!0);(0,o.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},ke=n(9424),xe=Math.pow(2,31)-1;function Ne(e,t,n){var r=n-Date.now();e.current=r<=xe?setTimeout(t,r):setTimeout((function(){return Ne(e,t,n)}),xe)}function Ze(){var e=I(),t=(0,o.useRef)();return k((function(){return clearTimeout(t.current)})),(0,o.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=xe?t.current=setTimeout(r,o):Ne(t,r,Date.now()+o))},clear:n}}),[])}var we=n(5697),Ce=n.n(we),Ie=n(5513),Te=(0,a.Z)("carousel-caption"),Re=o.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,a=e.bsPrefix,i=e.children,c=e.className,l=(0,f.Z)(e,["as","bsPrefix","children","className"]),s=p()(c,(0,oe.vE)(a,"carousel-item"));return o.createElement(r,(0,d.Z)({ref:t},l,{className:s}),i)}));Re.displayName="CarouselItem";var Se=Re;function _e(e,t){var n=0;return o.Children.map(e,(function(e){return o.isValidElement(e)?t(e,n++):e}))}var Pe=n(6306),Oe={bsPrefix:Ce().string,as:Ce().elementType,slide:Ce().bool,fade:Ce().bool,controls:Ce().bool,indicators:Ce().bool,activeIndex:Ce().number,onSelect:Ce().func,onSlide:Ce().func,onSlid:Ce().func,interval:Ce().number,keyboard:Ce().bool,pause:Ce().oneOf(["hover",!1]),wrap:Ce().bool,touch:Ce().bool,prevIcon:Ce().node,prevLabel:Ce().string,nextIcon:Ce().node,nextLabel:Ce().string},Fe={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:o.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:o.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function Ae(e,t){var n=(0,Ie.Ch)(e,{activeIndex:"onSelect"}),r=n.as,a=void 0===r?"div":r,i=n.bsPrefix,c=n.slide,l=n.fade,s=n.controls,u=n.indicators,m=n.activeIndex,v=n.onSelect,g=n.onSlide,h=n.onSlid,b=n.interval,E=n.keyboard,k=n.onKeyDown,x=n.pause,N=n.onMouseOver,Z=n.onMouseOut,w=n.wrap,C=n.touch,I=n.onTouchStart,T=n.onTouchMove,R=n.onTouchEnd,S=n.prevIcon,_=n.prevLabel,P=n.nextIcon,O=n.nextLabel,F=n.className,A=n.children,M=(0,f.Z)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),D=(0,oe.vE)(i,"carousel"),L=(0,o.useRef)(null),B=(0,o.useState)("next"),H=B[0],j=B[1],z=(0,o.useState)(!1),K=z[0],V=z[1],W=(0,o.useState)(!1),U=W[0],$=W[1],q=(0,o.useState)(m||0),G=q[0],Y=q[1];U||m===G||(L.current?j(L.current):j((m||0)>G?"next":"prev"),c&&$(!0),Y(m||0)),(0,o.useEffect)((function(){L.current&&(L.current=null)}));var ee,te=0;!function(e,t){var n=0;o.Children.forEach(e,(function(e){o.isValidElement(e)&&t(e,n++)}))}(A,(function(e,t){++te,t===m&&(ee=e.props.interval)}));var ne=(0,ke.Z)(ee),re=(0,o.useCallback)((function(e){if(!U){var t=G-1;if(t<0){if(!w)return;t=te-1}L.current="prev",v&&v(t,e)}}),[U,G,v,w,te]),ae=(0,y.Z)((function(e){if(!U){var t=G+1;if(t>=te){if(!w)return;t=0}L.current="next",v&&v(t,e)}})),ie=(0,o.useRef)();(0,o.useImperativeHandle)(t,(function(){return{element:ie.current,prev:re,next:ae}}));var ce=(0,y.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&ae()})),le="next"===H?"left":"right";ye((function(){c||(g&&g(G,le),h&&h(G,le))}),[G]);var se=D+"-item-"+H,ue=D+"-item-"+le,de=(0,o.useCallback)((function(e){(0,Q.Z)(e),g&&g(G,le)}),[g,G,le]),fe=(0,o.useCallback)((function(){$(!1),h&&h(G,le)}),[h,G,le]),me=(0,o.useCallback)((function(e){if(E&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void re(e);case"ArrowRight":return e.preventDefault(),void ae(e)}k&&k(e)}),[E,k,re,ae]),pe=(0,o.useCallback)((function(e){"hover"===x&&V(!0),N&&N(e)}),[x,N]),ve=(0,o.useCallback)((function(e){V(!1),Z&&Z(e)}),[Z]),ge=(0,o.useRef)(0),he=(0,o.useRef)(0),be=Ze(),Ee=(0,o.useCallback)((function(e){ge.current=e.touches[0].clientX,he.current=0,"hover"===x&&V(!0),I&&I(e)}),[x,I]),xe=(0,o.useCallback)((function(e){e.touches&&e.touches.length>1?he.current=0:he.current=e.touches[0].clientX-ge.current,T&&T(e)}),[T]),Ne=(0,o.useCallback)((function(e){if(C){var t=he.current;Math.abs(t)>40&&(t>0?re(e):ae(e))}"hover"===x&&be.set((function(){V(!1)}),b||void 0),R&&R(e)}),[C,x,re,ae,be,b,R]),we=null!=b&&!K&&!U,Ce=(0,o.useRef)();(0,o.useEffect)((function(){var e,t;if(we)return Ce.current=window.setInterval(document.visibilityState?ce:ae,null!=(e=null!=(t=ne.current)?t:b)?e:void 0),function(){null!==Ce.current&&clearInterval(Ce.current)}}),[we,ae,ne,b,ce]);var Te=(0,o.useMemo)((function(){return u&&Array.from({length:te},(function(e,t){return function(e){v&&v(t,e)}}))}),[u,te,v]);return o.createElement(a,(0,d.Z)({ref:ie},M,{onKeyDown:me,onMouseOver:pe,onMouseOut:ve,onTouchStart:Ee,onTouchMove:xe,onTouchEnd:Ne,className:p()(F,D,c&&"slide",l&&D+"-fade")}),u&&o.createElement("ol",{className:D+"-indicators"},_e(A,(function(e,t){return o.createElement("li",{key:t,className:t===G?"active":void 0,onClick:Te?Te[t]:void 0})}))),o.createElement("div",{className:D+"-inner"},_e(A,(function(e,t){var n=t===G;return c?o.createElement(J.ZP,{in:n,onEnter:n?de:void 0,onEntered:n?fe:void 0,addEndListener:X.Z},(function(t){return o.cloneElement(e,{className:p()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ue)})})):o.cloneElement(e,{className:p()(e.props.className,n&&"active")})}))),s&&o.createElement(o.Fragment,null,(w||0!==m)&&o.createElement(Pe.Z,{className:D+"-control-prev",onClick:re},S,_&&o.createElement("span",{className:"sr-only"},_)),(w||m!==te-1)&&o.createElement(Pe.Z,{className:D+"-control-next",onClick:ae},P,O&&o.createElement("span",{className:"sr-only"},O))))}var Me=o.forwardRef(Ae);Me.displayName="Carousel",Me.propTypes=Oe,Me.defaultProps=Fe,Me.Caption=Te,Me.Item=Se;var De=Me,Le=o.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,a=e.size,i=e.active,c=e.className,l=e.block,s=e.type,u=e.as,m=(0,f.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=(0,oe.vE)(n,"btn"),g=p()(c,v,i&&"active",r&&v+"-"+r,l&&v+"-block",a&&v+"-"+a);if(m.href)return o.createElement(Pe.Z,(0,d.Z)({},m,{as:u,ref:t,className:p()(g,m.disabled&&"disabled")}));t&&(m.ref=t),s?m.type=s:u||(m.type="button");var h=u||"button";return o.createElement(h,(0,d.Z)({},m,{className:g}))}));Le.displayName="Button",Le.defaultProps={variant:"primary",active:!1,disabled:!1};var Be=Le,He=n(9150),je=function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],a=function(){return r(!1)};return o.createElement(o.Fragment,null,o.createElement(u.Z,{className:"card-margins"},o.createElement(u.Z.Img,{className:"card-img",onClick:function(){return r(!0)},variant:"top",src:e.cardImg,style:{height:"30vh",objectFit:"cover",objectPosition:"top",cursor:"pointer"}}),o.createElement(u.Z.Body,null,o.createElement("h5",null,e.projectTitle),o.createElement("div",{style:{paddingBottom:"6px"}},e.tools&&e.tools.map((function(e,t){return o.createElement("div",{className:"tag",key:t},e)}))),o.createElement(u.Z.Text,null,e.cardText),e.buttonInfo&&e.buttonInfo.map((function(e,t){return o.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"btn btn-dark",key:t,style:{margin:"2px"}},e.ghIcon&&o.createElement("img",{src:He.Z,style:{filter:"invert(1)",verticalAlign:"-.25em"},height:"20px",alt:"Github icon"}),e.text)})))),o.createElement(Ee,{show:n,onHide:a,centered:!0},o.createElement(Ee.Header,{closeButton:!0},o.createElement(Ee.Title,null,e.projectTitle)),o.createElement(Ee.Body,null,o.createElement(De,null,e.carouselImgs&&e.carouselImgs.map((function(e,t){return o.createElement(De.Item,{key:t},o.createElement("img",{className:"d-block w-100",src:e,alt:"project screenshot {index + 1}"}))})))),o.createElement(Ee.Footer,null,o.createElement(Be,{variant:"secondary",onClick:a},"Close"))))},ze=function(){return o.createElement(o.Fragment,null,o.createElement(l.Z,null,o.createElement(s.Z,{title:"Projects"}),o.createElement("h1",{className:"text-center",style:{marginTop:"1.5rem"}},"Projects"),o.createElement(c.Z,{style:{marginBottom:"2rem"}},o.createElement(i,null,o.createElement(je,{cardImg:"/edge_snack_bar_01.png",projectTitle:"Edge Snack Bar",cardText:"Web application that generates a QR code for multiple cryptocurrency options for those in the Edge office that would like to purchase a snack.",tools:["TypeScript","React"],buttonInfo:[{link:"https://github.com/EdgeApp/edge-snack-bar-app",ghIcon:!0,text:" Repo"},{link:"https://edgeapp.github.io/edge-snack-bar-app/",ghIcon:!1,text:"Live Site"}],carouselImgs:["/edge_snack_bar_01.png","/edge_snack_bar_02.png","/edge_snack_bar_03.png"]}),o.createElement(je,{cardImg:"/pokedeck_01.png",projectTitle:"Pokedeck",cardText:"Pokemon Trading Card Game where users compete to have the most valuable collection.",tools:["Ruby on Rails","React"],buttonInfo:[{link:"https://github.com/squirtlesquad2021a/pokedeck_capstone_app",ghIcon:!0,text:" Repo"},{link:"https://pokedeck-game.herokuapp.com/",ghIcon:!1,text:"Live Site"}],carouselImgs:["/pokedeck_01.png","/pokedeck_02.png","/pokedeck_03.png","/pokedeck_04.png"]}),o.createElement(je,{cardImg:"/pokedex_01.png",projectTitle:"Pokedex",cardText:"Android application that parses JSON data from a RESTful API to provide information on the original 151 Pokemon.",tools:["Java","Android"],buttonInfo:[{link:"https://github.com/algtan/CS50x-pokedex",ghIcon:!0,text:" Repo"}],carouselImgs:["/pokedex_01.png","/pokedex_02.png","/pokedex_03.png","/pokedex_04.png"]}),o.createElement(je,{cardImg:"/mortgage_calc_01.png",projectTitle:"Mortgage Calculator",cardText:"Web application that helps users make informed decisions on purchasing a home.",tools:["Python","Flask"],buttonInfo:[{link:"https://github.com/algtan/CS50x-final",ghIcon:!0,text:" Repo"}],carouselImgs:["/mortgage_calc_01.png","/mortgage_calc_02.png","/mortgage_calc_03.png","/mortgage_calc_04.png"]}),o.createElement(je,{cardImg:"/robotic_arm_01.png",projectTitle:"3DOF Robotic Arm",cardText:"Master's thesis project on a robotic arm exoskeleton, whose purpose is to amplify upper-limb movements of wheelchair users who have lost functionality in their right arm.",tools:["MATLAB"],buttonInfo:[{link:"/allen_tan-thesis_presentation.pdf",ghIcon:!1,text:"Thesis Presentation"},{link:"https://digitallibrary.sdsu.edu/islandora/object/sdsu%3A2333",ghIcon:!1,text:"Thesis Paper"}],carouselImgs:["/robotic_arm_01.png","/robotic_arm_02.png","/robotic_arm_03.png","/robotic_arm_04.png","/robotic_arm_05.png"]})))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-6886aa03ce0e7d5a07d0.js.map