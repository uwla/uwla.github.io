import{s as a}from"./basecomponent.esm.jqIa1oUh.js";import{R as r,t as p,v as i,N as u}from"./entry.bBfat3YL.js";var o={root:function(t){var s=t.instance,l=t.props;return["p-inputtext p-component",{"p-filled":s.filled,"p-inputtext-sm":l.size==="small","p-inputtext-lg":l.size==="large"}]}},d=r.extend({name:"inputtext",classes:o}),m={name:"BaseInputText",extends:a,props:{modelValue:null,size:{type:String,default:null}},style:d,provide:function(){return{$parentInstance:this}}},c={name:"InputText",extends:m,emits:["update:modelValue"],methods:{getPTOptions:function(t){return this.ptm(t,{context:{filled:this.filled,disabled:this.$attrs.disabled||this.$attrs.disabled===""}})},onInput:function(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0}}},f=["value"];function x(e,t,s,l,v,n){return p(),i("input",u({class:e.cx("root"),value:e.modelValue,onInput:t[0]||(t[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.getPTOptions("root"),{"data-pc-name":"inputtext"}),null,16,f)}c.render=x;export{c as default};
