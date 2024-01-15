import{R as y,a7 as u,t as r,v as d,a1 as p,N as i,B as P,y as m,V as k,i as c,W as w,O as z,$ as b,Y as g,X as f,x as C}from"./entry.bBfat3YL.js";import{s as v}from"./basecomponent.esm.jqIa1oUh.js";import{s as N}from"./index.esm.Y_nC8j25.js";import"./baseicon.esm.I5adZ-Mw.js";var O=`
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,T={root:function(n){var t=n.props,a=n.instance;return["p-badge p-component",{"p-badge-no-gutter":u.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":u.isEmpty(t.value)&&!a.$slots.default,"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warning":t.severity==="warning","p-badge-danger":t.severity==="danger"}]}},E=y.extend({name:"badge",css:O,classes:T}),L={name:"BaseBadge",extends:v,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:E,provide:function(){return{$parentInstance:this}}},h={name:"Badge",extends:L};function V(e,n,t,a,S,s){return r(),d("span",i({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"badge"}),[p(e.$slots,"default",{},function(){return[P(m(e.value),1)]})],16)}h.render=V;function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(e)}function o(e,n,t){return n=A(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){var n=D(e,"string");return l(n)=="symbol"?n:String(n)}function D(e,n){if(l(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(l(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var R={root:function(n){var t=n.instance,a=n.props;return["p-button p-component",o(o(o(o(o(o(o(o({"p-button-icon-only":t.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-disabled":t.$attrs.disabled||t.$attrs.disabled===""||a.loading,"p-button-loading":a.loading,"p-button-loading-label-only":a.loading&&!t.hasIcon&&a.label,"p-button-link":a.link},"p-button-".concat(a.severity),a.severity),"p-button-raised",a.raised),"p-button-rounded",a.rounded),"p-button-text",a.text),"p-button-outlined",a.outlined),"p-button-sm",a.size==="small"),"p-button-lg",a.size==="large"),"p-button-plain",a.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(n){var t=n.props;return["p-button-icon",{"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label,"p-button-icon-top":t.iconPos==="top"&&t.label,"p-button-icon-bottom":t.iconPos==="bottom"&&t.label}]},label:"p-button-label"},j=y.extend({name:"button",classes:R}),K={name:"BaseButton",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},badgeSeverity:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:j,provide:function(){return{$parentInstance:this}}},U={name:"Button",extends:K,methods:{getPTOptions:function(n){return this.ptm(n,{context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs.ariaLabel},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:N,Badge:h},directives:{ripple:k}},W=["aria-label","disabled","data-pc-severity"];function X(e,n,t,a,S,s){var $=c("SpinnerIcon"),B=c("Badge"),I=w("ripple");return z((r(),d("button",i({class:e.cx("root"),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},s.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[p(e.$slots,"default",{},function(){return[e.loading?p(e.$slots,"loadingicon",{key:0,class:b([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(r(),d("span",i({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(r(),g($,i({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):p(e.$slots,"icon",{key:1,class:b([e.cx("icon")])},function(){return[e.icon?(r(),d("span",i({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):f("",!0)]}),C("span",i({class:e.cx("label")},e.ptm("label")),m(e.label||" "),17),e.badge?(r(),g(B,i({key:2,value:e.badge,class:e.badgeClass,severity:e.badgeSeverity,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","severity","unstyled"])):f("",!0)]})],16,W)),[[I]])}U.render=X;export{U as default};
