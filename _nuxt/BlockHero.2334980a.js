import f from"./ContentSlot.e8cac800.js";import y from"./ButtonLink.8f9aacf3.js";import h from"./Terminal.cb4b7fad.js";import k from"./VideoPlayer.b08ac718.js";import{d as v,b as s,c as a,e as o,g as c,f as r,w as i,E as d,Y as l,F as $,t as u,$ as B,l as w}from"./entry.3f8c01f4.js";import"./NuxtImg.vue.1cea3161.js";const g={class:"block-hero"},b={class:"layout"},H={class:"content"},S={key:0,class:"announce"},V={class:"title"},q={class:"description"},C={key:1,class:"extra"},N={class:"actions"},x=["href"],A={class:"support"},T=v({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,E)=>{const n=f,_=y,p=h,m=k;return s(),a("section",g,[o("div",b,[o("div",H,[t.$slots.announce?(s(),a("p",S,[c(n,{use:t.$slots.announce,unwrap:"p"},null,8,["use"])])):r("",!0),o("h1",V,[c(n,{use:t.$slots.title,unwrap:"p"},{default:i(()=>[d(" Hero Title ")]),_:1},8,["use"])]),o("p",q,[c(n,{use:t.$slots.description,unwrap:"p"},{default:i(()=>[d(" Hero default description. ")]),_:1},8,["use"])]),t.$slots.extra?(s(),a("div",C,[c(n,{use:t.$slots.extra,unwrap:"p"},null,8,["use"])])):r("",!0),o("div",N,[t.$slots.actions?(s(),l(n,{key:0,use:t.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),a($,{key:1},[e.cta?(s(),l(_,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:i(()=>[d(u(e.cta[0]),1)]),_:1},8,["href"])):r("",!0),e.secondary?(s(),a("a",{key:1,href:e.secondary[1],class:"secondary"},u(e.secondary[0]),9,x)):r("",!0)],64))])]),o("div",A,[B(t.$slots,"support",{},()=>[e.snippet?(s(),l(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(s(),l(m,{key:1,src:e.video},null,8,["src"])):r("",!0)],!0)])])])}}});const Y=w(T,[["__scopeId","data-v-b95c8d5e"]]);export{Y as default};
