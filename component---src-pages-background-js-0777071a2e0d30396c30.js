(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8ncr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n("q1tI")),i=r(n("17x9")),a=r(n("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.animate,n=e.className,i=e.layout,r=e.children;return l.default.createElement("div",{className:(0,a.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===i,"vertical-timeline--one-column-left":"1-column"===i||"1-column-left"===i,"vertical-timeline--one-column-right":"1-column-right"===i})},r)};o.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]).isRequired,className:i.default.string,animate:i.default.bool,layout:i.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},o.defaultProps={animate:!0,className:"",layout:"2-columns"};var c=o;t.default=c},GWl7:function(e,t,n){"use strict";var l=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("q1tI")),r=(0,l(n("8/g6")).default)(a.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.default=r},H2TS:function(e,t,n){},HnPO:function(e,t,n){"use strict";var l=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("q1tI")),r=(0,l(n("8/g6")).default)(a.createElement("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.default=r},IdOR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("q1tI")),i=o(n("17x9")),a=o(n("TSYQ")),r=n("PGlZ");function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.children,n=e.className,i=e.contentArrowStyle,o=e.contentStyle,c=e.date,s=e.dateClassName,u=e.icon,m=e.iconClassName,d=e.iconOnClick,f=e.onTimelineElementClick,h=e.iconStyle,v=e.id,p=e.position,g=e.style,b=e.textClassName,y=e.intersectionObserverProps,E=e.visible;return l.default.createElement(r.InView,y,(function(e){var r=e.inView,y=e.ref;return l.default.createElement("div",{ref:y,id:v,className:(0,a.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===p,"vertical-timeline-element--right":"right"===p,"vertical-timeline-element--no-children":""===t}),style:g},l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:h,onClick:d,className:(0,a.default)(m,"vertical-timeline-element-icon",{"bounce-in":r||E,"is-hidden":!(r||E)})},u),l.default.createElement("div",{style:o,onClick:f,className:(0,a.default)(b,"vertical-timeline-element-content",{"bounce-in":r||E,"is-hidden":!(r||E)})},l.default.createElement("div",{style:i,className:"vertical-timeline-element-content-arrow"}),t,l.default.createElement("span",{className:(0,a.default)(s,"vertical-timeline-element-date")},c))))}))};c.propTypes={children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),className:i.default.string,contentArrowStyle:i.default.shape({}),contentStyle:i.default.shape({}),date:i.default.node,dateClassName:i.default.string,icon:i.default.element,iconClassName:i.default.string,iconStyle:i.default.shape({}),iconOnClick:i.default.func,onTimelineElementClick:i.default.func,id:i.default.string,position:i.default.string,style:i.default.shape({}),textClassName:i.default.string,visible:i.default.bool,intersectionObserverProps:i.default.shape({root:i.default.object,rootMargin:i.default.string,threshold:i.default.number,triggerOnce:i.default.bool})},c.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var s=c;t.default=s},PGlZ:function(e,t,n){"use strict";n.r(t),n.d(t,"InView",(function(){return m})),n.d(t,"useInView",(function(){return d}));var l=n("q1tI");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var a=new Map,r=new Map,o=0;function c(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(r.has(n)||(o+=1,r.set(n,o.toString())),r.get(n)):"0":e[t]);var n})).toString()}function s(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var l=function(e){var t=c(e),n=a.get(t);if(!n){var l,i=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var n,a=t.isIntersecting&&l.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach((function(e){e(a,t)}))}))}),e);l=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:r,elements:i},a.set(t,n)}return n}(n),i=l.id,r=l.observer,o=l.elements,s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),r.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),r.unobserve(e)),0===o.size&&(r.disconnect(),a.delete(i))}}function u(e){return"function"!=typeof e.children}var m=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,l=e.rootMargin,i=e.trackVisibility,a=e.delay;this._unobserveCb=s(this.node,this.handleChange,{threshold:t,root:n,rootMargin:l,trackVisibility:i,delay:a})}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var a=this.props,r=a.children,o=a.as,c=a.tag,s=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(l.createElement)(o||c||"div",i({ref:this.handleNode},s),r)},a}(l.Component);function d(e){var t=void 0===e?{}:e,n=t.threshold,i=t.delay,a=t.trackVisibility,r=t.rootMargin,o=t.root,c=t.triggerOnce,u=t.skip,m=t.initialInView,d=Object(l.useRef)(),f=Object(l.useState)({inView:!!m}),h=f[0],v=f[1],p=Object(l.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),u||e&&(d.current=s(e,(function(e,t){v({inView:e,entry:t}),t.isIntersecting&&c&&d.current&&(d.current(),d.current=void 0)}),{root:o,rootMargin:r,threshold:n,trackVisibility:a,delay:i}))}),[Array.isArray(n)?n.toString():n,o,r,c,u,a,i]);Object(l.useEffect)((function(){d.current||!h.entry||c||u||v({inView:!!m})}));var g=[p,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}m.displayName="InView",m.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1},t.default=m},UQjd:function(e,t,n){"use strict";e.exports={VerticalTimeline:n("8ncr").default,VerticalTimelineElement:n("IdOR").default}},aUVD:function(e,t,n){"use strict";var l=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("q1tI")),r=(0,l(n("8/g6")).default)(a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.default=r},aw3t:function(e,t,n){},"uw1/":function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),i=n.n(l),a=n("7vrA"),r=n("UQjd"),o=(n("aw3t"),n("H2TS"),n("Bl7J")),c=n("vrFN"),s=n("HnPO"),u=n.n(s),m=n("GWl7"),d=n.n(m),f=n("aUVD"),h=n.n(f);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Work History and Education"}),i.a.createElement("div",{className:"background-body"},i.a.createElement(a.a,null,i.a.createElement("h1",{className:"text-center",style:{marginBottom:"1.5rem",paddingTop:"1.5rem"}},"Background"),i.a.createElement(r.VerticalTimeline,{className:"vertical-timeline vertical-timeline-custom-line"},i.a.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"Feb 2021 - Present",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.a.createElement(u.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"LEARN Academy"),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Full-Stack Developer Bootcamp"),i.a.createElement("p",null,"Languages and Technologies: ",i.a.createElement("br",null),"JavaScript, HTML, CSS, React, Ruby, Ruby on Rails, PostgreSQL, Git, Jest, RSpec")),i.a.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2017 - 2020",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.a.createElement(d.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Senior Engineer"),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Solar Turbines (via Volt)"),i.a.createElement("p",null,"Group: NPI Combustion Mechanical Design")),i.a.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2015 - 2017",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.a.createElement(d.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Mechanical Design Engineer"),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Mikroscan Technologies, Inc."),i.a.createElement("p",null,"Technology: Digital Pathology and Live Telemicroscopy")),i.a.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2012 - 2015",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.a.createElement(u.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"San Diego State University"),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"MS Mechanical Engineering"),i.a.createElement("p",null,"Thesis Project: 3DOF Robotic Arm Exoskeleton")),i.a.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2012 - 2015",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.a.createElement(d.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"Manufacturing Engineer Intern"),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"UTC Aerospace Systems"),i.a.createElement("p",null,"Product: Ventilation Fans")),i.a.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2007 - 2012",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.a.createElement(u.a,null)},i.a.createElement("h3",{className:"vertical-timeline-element-title"},"UC San Diego"),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"BS Mechanical Engineering"),i.a.createElement("p",null,"Minor: Sociology")),i.a.createElement(r.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:i.a.createElement(h.a,null)}))),i.a.createElement("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-background-js-0777071a2e0d30396c30.js.map