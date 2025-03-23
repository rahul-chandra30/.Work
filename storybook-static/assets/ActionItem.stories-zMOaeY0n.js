import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const d=({description:l,assignee:m,dueDate:p})=>e.jsxs("div",{className:"bg-gradient-to-r from-amber-50 to-orange-50 p-6 my-6 rounded-lg shadow-md border border-orange-200",children:[e.jsxs("h3",{className:"text-xl font-bold text-orange-800 mb-4 flex items-center",children:[e.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}),"Action Required"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start",children:[e.jsx("span",{className:"font-semibold text-orange-700 w-28",children:"Description:"}),e.jsx("span",{className:"text-orange-600",children:l})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold text-orange-700 w-28",children:"Assignee:"}),e.jsx("span",{className:"text-orange-600",children:m})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"font-semibold text-orange-700 w-28",children:"Due Date:"}),e.jsx("span",{className:"text-orange-600",children:p})]})]})]});d.__docgenInfo={description:"",methods:[],displayName:"ActionItem"};const g={title:"Components/ActionItem",component:d,argTypes:{description:{control:"text"},assignee:{control:"text"},dueDate:{control:"text"}},tags:["autodocs"]},s={args:{description:"Review pull request #123",assignee:"Ani",dueDate:"2025-03-20"}},t={args:{description:"Fix production bug ASAP",assignee:"Rahul",dueDate:"2025-03-18"}};s.parameters={docs:{description:{story:"Use `ActionItem` for urgent tasks. Example: `ActionItem: Review pull request #123, Ani, 2025-03-20`"}}};var r,a,n;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    description: 'Review pull request #123',
    assignee: 'Ani',
    dueDate: '2025-03-20'
  }
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var o,i,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    description: 'Fix production bug ASAP',
    assignee: 'Rahul',
    dueDate: '2025-03-18'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const h=["Default","Urgent"];export{s as Default,t as Urgent,h as __namedExportsOrder,g as default};
