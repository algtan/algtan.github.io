(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[39],{587:function(e,t,n){"use strict";var i=n(5318),l=n(862);t.Z=void 0;var r=l(n(7294)),a=(0,i(n(8786)).default)(r.createElement("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");t.Z=a},5841:function(e,t,n){"use strict";var i=n(5318),l=n(862);t.Z=void 0;var r=l(n(7294)),a=(0,i(n(8786)).default)(r.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.Z=a},8838:function(e,t,n){"use strict";var i=n(5318),l=n(862);t.Z=void 0;var r=l(n(7294)),a=(0,i(n(8786)).default)(r.createElement("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.Z=a},660:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return m},useInView:function(){return d}});var i=n(7294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r=new Map,a=new Map,o=0;function c(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(o+=1,a.set(n,o.toString())),a.get(n)):"0":e[t]);var n})).toString()}function s(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var i=function(e){var t=c(e),n=r.get(t);if(!n){var i,l=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var n,r=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(n=l.get(t.target))||n.forEach((function(e){e(r,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:l},r.set(t,n)}return n}(n),l=i.id,a=i.observer,o=i.elements,s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),r.delete(l))}}function u(e){return"function"!=typeof e.children}var m=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,l=e.trackVisibility,r=e.delay;this._unobserveCb=s(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:l,delay:r})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var r=this.props,a=r.children,o=r.as,c=r.tag,s=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return(0,i.createElement)(o||c||"div",l({ref:this.handleNode},s),a)},r}(i.Component);function d(e){var t=void 0===e?{}:e,n=t.threshold,l=t.delay,r=t.trackVisibility,a=t.rootMargin,o=t.root,c=t.triggerOnce,u=t.skip,m=t.initialInView,d=(0,i.useRef)(),f=(0,i.useState)({inView:!!m}),h=f[0],g=f[1],p=(0,i.useCallback)((function(e){void 0!==d.current&&(d.current(),d.current=void 0),u||e&&(d.current=s(e,(function(e,t){g({inView:e,entry:t}),t.isIntersecting&&c&&d.current&&(d.current(),d.current=void 0)}),{root:o,rootMargin:a,threshold:n,trackVisibility:r,delay:l}))}),[Array.isArray(n)?n.toString():n,o,a,c,u,r,l]);(0,i.useEffect)((function(){d.current||!h.entry||c||u||g({inView:!!m})}));var v=[p,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}m.displayName="InView",m.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1},t.default=m},5238:function(e,t,n){"use strict";t.Z=void 0;var i=a(n(7294)),l=a(n(5697)),r=a(n(5900));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=e.animate,n=e.className,l=e.layout,a=e.children;return i.default.createElement("div",{className:(0,r.default)(n,"vertical-timeline",{"vertical-timeline--animate":t,"vertical-timeline--two-columns":"2-columns"===l,"vertical-timeline--one-column-left":"1-column"===l||"1-column-left"===l,"vertical-timeline--one-column-right":"1-column-right"===l})},a)};o.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]).isRequired,className:l.default.string,animate:l.default.bool,layout:l.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"])},o.defaultProps={animate:!0,className:"",layout:"2-columns"};var c=o;t.Z=c},7038:function(e,t,n){"use strict";t.Z=void 0;var i=o(n(7294)),l=o(n(5697)),r=o(n(5900)),a=n(660);function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var t=e.children,n=e.className,l=e.contentArrowStyle,o=e.contentStyle,c=e.date,s=e.dateClassName,u=e.icon,m=e.iconClassName,d=e.iconOnClick,f=e.onTimelineElementClick,h=e.iconStyle,g=e.id,p=e.position,v=e.style,y=e.textClassName,b=e.intersectionObserverProps,E=e.visible;return i.default.createElement(a.InView,b,(function(e){var a=e.inView,b=e.ref;return i.default.createElement("div",{ref:b,id:g,className:(0,r.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===p,"vertical-timeline-element--right":"right"===p,"vertical-timeline-element--no-children":""===t}),style:v},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:h,onClick:d,className:(0,r.default)(m,"vertical-timeline-element-icon",{"bounce-in":a||E,"is-hidden":!(a||E)})},u),i.default.createElement("div",{style:o,onClick:f,className:(0,r.default)(y,"vertical-timeline-element-content",{"bounce-in":a||E,"is-hidden":!(a||E)})},i.default.createElement("div",{style:l,className:"vertical-timeline-element-content-arrow"}),t,i.default.createElement("span",{className:(0,r.default)(s,"vertical-timeline-element-date")},c))))}))};c.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,contentArrowStyle:l.default.shape({}),contentStyle:l.default.shape({}),date:l.default.node,dateClassName:l.default.string,icon:l.default.element,iconClassName:l.default.string,iconStyle:l.default.shape({}),iconOnClick:l.default.func,onTimelineElementClick:l.default.func,id:l.default.string,position:l.default.string,style:l.default.shape({}),textClassName:l.default.string,visible:l.default.bool,intersectionObserverProps:l.default.shape({root:l.default.object,rootMargin:l.default.string,threshold:l.default.number,triggerOnce:l.default.bool})},c.defaultProps={children:"",className:"",contentArrowStyle:null,contentStyle:null,icon:null,iconClassName:"",iconOnClick:null,onTimelineElementClick:null,iconStyle:null,id:"",style:null,date:"",dateClassName:"",position:"",textClassName:"",visible:!1,intersectionObserverProps:{rootMargin:"0px 0px -40px 0px"}};var s=c;t.Z=s},7772:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(5238).Z,VerticalTimelineElement:n(7038).Z}},8984:function(e,t,n){"use strict";n.r(t);var i=n(7294),l=n(6187),r=n(7772),a=n(7865),o=n(3751),c=n(587),s=n(8838),u=n(5841);t.default=function(){return i.createElement(a.Z,null,i.createElement(o.Z,{title:"Work History and Education"}),i.createElement("div",{className:"background-body"},i.createElement(l.Z,null,i.createElement("h1",{className:"text-center",style:{marginBottom:"1.5rem",paddingTop:"1.5rem"}},"Background"),i.createElement(r.VerticalTimeline,{className:"vertical-timeline vertical-timeline-custom-line"},i.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"Feb 2021 - Present",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.createElement(c.Z,null)},i.createElement("h3",{className:"vertical-timeline-element-title"},"LEARN Academy"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Full-Stack Developer Bootcamp"),i.createElement("p",null,"Languages and Technologies: ",i.createElement("br",null),"JavaScript, Ruby, React, Rails, Git"),i.createElement("div",null,i.createElement("img",{src:"/javascript_logo.png",style:{maxWidth:"25%",margin:"auto",padding:"5px"},alt:"JavaScript logo"}),i.createElement("img",{src:"/react_logo.svg",style:{maxWidth:"25%",margin:"auto"},alt:"React logo"}),i.createElement("img",{src:"/rails_logo.svg",style:{maxWidth:"25%",margin:"auto"},alt:"Rails logo"}),i.createElement("img",{src:"/git.png",style:{maxWidth:"25%",margin:"auto",padding:"15px"},alt:"Git logo"}))),i.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2017 - 2020",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.createElement(s.Z,null)},i.createElement("h3",{className:"vertical-timeline-element-title"},"Senior Engineer"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Solar Turbines (via Volt)"),i.createElement("p",null,"Group: NPI Combustion Mechanical Design"),i.createElement("img",{src:"/solar_engine.jpeg",style:{maxWidth:"100%",margin:"auto"},alt:"gas turbine engine"})),i.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2015 - 2017",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.createElement(s.Z,null)},i.createElement("h3",{className:"vertical-timeline-element-title"},"Mechanical Design Engineer"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Mikroscan Technologies, Inc."),i.createElement("p",null,"Technology: Digital Pathology and Live Telemicroscopy"),i.createElement("img",{src:"/mikroscan_sl5.jpeg",style:{maxWidth:"100%",margin:"auto"},alt:"Mikroscan SL5"})),i.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2012 - 2015",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.createElement(c.Z,null)},i.createElement("h3",{className:"vertical-timeline-element-title"},"San Diego State University"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"MS Mechanical Engineering"),i.createElement("p",null,"Thesis Project: 3DOF Robotic Arm Exoskeleton"),i.createElement("img",{src:"/sdsu.jpeg",style:{maxWidth:"100%",margin:"auto"},alt:"San Diego State"})),i.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2012 - 2015",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:i.createElement(s.Z,null)},i.createElement("h3",{className:"vertical-timeline-element-title"},"Manufacturing Engineer Intern"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"UTC Aerospace Systems"),i.createElement("p",null,"Product: Ventilation Fans"),i.createElement("div",{className:"utas-img"},i.createElement("img",{src:"/utas_fan.jpeg",alt:"ventilation fan"}))),i.createElement(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2007 - 2012",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:i.createElement(c.Z,null)},i.createElement("h3",{className:"vertical-timeline-element-title"},"UC San Diego"),i.createElement("h4",{className:"vertical-timeline-element-subtitle"},"BS Mechanical Engineering"),i.createElement("p",null,"Minor: Sociology"),i.createElement("img",{src:"/ucsd.jpg",style:{maxWidth:"100%",margin:"auto"},alt:"Geisel Library"})),i.createElement(r.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:i.createElement(u.Z,null)}))),i.createElement("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-background-js-04ee9a726544f509d63f.js.map