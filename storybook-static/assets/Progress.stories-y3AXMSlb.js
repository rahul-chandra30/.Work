import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const x=({task:b,percentage:n,notes:o})=>{const t=typeof n=="string"?parseInt(n.replace("%",""),10):parseInt(n,10)||0,h=`${t}%`,i=o.startsWith("Milestone:"),u=i?o.slice(10).trim():null,a=t<=25?{bar:"bg-gradient-to-r from-cyan-500 to-blue-500",text:"text-blue-600",bg:"bg-gradient-to-r from-blue-50 to-white"}:t<=75?{bar:"bg-gradient-to-r from-amber-500 to-yellow-500",text:"text-amber-600",bg:"bg-gradient-to-r from-amber-50 to-white"}:{bar:"bg-gradient-to-r from-emerald-500 to-teal-500",text:"text-emerald-600",bg:"bg-gradient-to-r from-emerald-50 to-white"};return e.jsxs("div",{className:`progress my-6 p-6 rounded-lg shadow-md ${a.bg}`,children:[e.jsxs("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:["📊 ",b]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"relative h-6 bg-gray-200 rounded-full overflow-hidden",children:e.jsxs("div",{className:`h-full ${a.bar} flex items-center justify-between px-2 text-white text-sm transition-all duration-300`,style:{width:h},children:[e.jsx("span",{children:"🎯"}),e.jsxs("span",{children:[t,"%"]})," ",e.jsx("span",{children:"🏁"})]})}),i?e.jsxs("div",{className:"flex items-center space-x-2 text-gray-700",children:[e.jsx("span",{className:"text-2xl",children:"🌟"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Milestone:"})," ",u]})]}):e.jsx("p",{className:`${a.text} text-sm`,children:o})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"Progress"};const y={title:"Components/Progress",component:x,argTypes:{task:{control:"text"},percentage:{control:{type:"range",min:0,max:100,step:1},defaultValue:75},notes:{control:"text"}},tags:["autodocs"]},s={args:{task:"Frontend redesign",percentage:75,notes:"Waiting on feedback"}},r={args:{task:"API upgrade",percentage:50,notes:"Milestone: Endpoints added"}};s.parameters={docs:{description:{story:"Use `Progress` to track tasks. Example: `Progress: Frontend redesign, 75%, Waiting on feedback` or with `Milestone:` prefix."}}};var d,l,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: 'Frontend redesign',
    percentage: 75,
    // Number
    notes: 'Waiting on feedback'
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,m,p;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: 'API upgrade',
    percentage: 50,
    // Number
    notes: 'Milestone: Endpoints added'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["BasicProgress","MilestoneProgress"];export{s as BasicProgress,r as MilestoneProgress,N as __namedExportsOrder,y as default};
