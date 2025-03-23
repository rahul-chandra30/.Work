import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const b=({type:x,content:y})=>{const a={tip:{bg:"bg-gradient-to-br from-emerald-50 to-teal-50",border:"border-l-emerald-400",text:"text-emerald-800",icon:"💡"},warning:{bg:"bg-gradient-to-br from-amber-50 to-orange-50",border:"border-l-amber-400",text:"text-amber-800",icon:"⚠️"},error:{bg:"bg-gradient-to-br from-red-50 to-rose-50",border:"border-l-red-400",text:"text-red-800",icon:"🚫"}},t=a[x]||a.tip;return e.jsx("div",{className:`my-6 ${t.bg} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`,children:e.jsx("div",{className:`p-6 border-l-4 ${t.border}`,children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("span",{className:"text-2xl",children:t.icon}),e.jsx("div",{className:`flex-1 ${t.text} font-medium`,children:y})]})})})};b.__docgenInfo={description:"",methods:[],displayName:"Callout"};const j={title:"Components/Callout",component:b,argTypes:{type:{control:{type:"select",options:["tip","warning","error"]}},content:{control:"text"}},tags:["autodocs"]},r={args:{type:"tip",content:"Remember to test edge cases!"}},o={args:{type:"warning",content:"API rate limits approaching."}},s={args:{type:"error",content:"Build failed due to missing dependency."}};r.parameters={docs:{description:{story:"Use `Callout` for sticky note-style alerts. Example: `Callout: tip, Remember to test edge cases!`"}}};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'tip',
    content: 'Remember to test edge cases!'
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    content: 'API rate limits approaching.'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'error',
    content: 'Build failed due to missing dependency.'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const C=["Tip","Warning","Error"];export{s as Error,r as Tip,o as Warning,C as __namedExportsOrder,j as default};
