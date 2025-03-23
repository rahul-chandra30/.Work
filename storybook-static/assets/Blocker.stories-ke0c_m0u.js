import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const i=({description:l,reportedBy:m})=>e.jsx("div",{className:"my-6 bg-gradient-to-r from-red-50 to-white rounded-lg shadow-lg overflow-hidden",children:e.jsxs("div",{className:"p-6 relative",children:[e.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-rose-600"}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("span",{className:"text-3xl animate-pulse",children:"🚨"})}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("h3",{className:"text-xl font-bold text-red-800",children:l}),e.jsxs("p",{className:"text-sm text-red-600 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"👤"}),"Reported by: ",m||"Unknown"]})]})]})]})});i.__docgenInfo={description:"",methods:[],displayName:"Blocker"};const h={title:"Components/Blocker",component:i,argTypes:{description:{control:"text"},reportedBy:{control:"text"}},tags:["autodocs"]},s={args:{description:"API downtime",reportedBy:"Prathamesh"}},r={args:{description:"Database connection failed",reportedBy:"Unknown"}};s.parameters={docs:{description:{story:"Use `Blocker` to highlight issues. Example: `Blocker: API downtime, Prathamesh`"}}};var t,o,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    description: 'API downtime',
    reportedBy: 'Prathamesh'
  }
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    description: 'Database connection failed',
    reportedBy: 'Unknown'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["Default","NoReporter"];export{s as Default,r as NoReporter,f as __namedExportsOrder,h as default};
