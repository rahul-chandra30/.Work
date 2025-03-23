import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const p=({date:x,team:u,summary:a})=>{const n=a.includes(","),g=n?a.split(",").map(r=>r.trim()):[a];return e.jsx("div",{className:"my-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300",children:e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h3",{className:"text-xl font-bold text-purple-800 flex items-center",children:[e.jsx("span",{className:"text-2xl mr-2",children:"🎯"}),"Daily Standup"]}),e.jsx("div",{className:"text-sm text-indigo-600 font-medium",children:x})]}),e.jsxs("div",{className:"bg-white/50 rounded-lg p-4",children:[e.jsxs("div",{className:"text-purple-700 font-medium mb-2",children:["Team: ",u]}),n?e.jsx("ul",{className:"space-y-2",children:g.map((r,y)=>e.jsxs("li",{className:"flex items-start space-x-2",children:[e.jsx("span",{className:"text-indigo-500 mt-1",children:"▹"}),e.jsx("span",{className:"text-gray-700",children:r})]},y))}):e.jsx("p",{className:"text-gray-700",children:a})]})]})})};p.__docgenInfo={description:"",methods:[],displayName:"StandUpSummary"};const j={title:"Components/StandUpSummary",component:p,argTypes:{date:{control:"text"},team:{control:"text"},summary:{control:"text"}},tags:["autodocs"]},s={args:{date:"2025-03-14",team:"Backend Team",summary:"All tasks on track"}},t={args:{date:"2025-03-15",team:"Frontend Team",summary:"Fixed UI bugs, Updated designs"}};s.parameters={docs:{description:{story:"Use `StandUpSummary` for daily recaps. Example: `StandUpSummary: 2025-03-14, Backend Team, All tasks on track` or with commas for lists."}}};var m,d,o;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    date: '2025-03-14',
    team: 'Backend Team',
    summary: 'All tasks on track'
  }
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    date: '2025-03-15',
    team: 'Frontend Team',
    summary: 'Fixed UI bugs, Updated designs'
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["SingleText","ListSummary"];export{t as ListSummary,s as SingleText,f as __namedExportsOrder,j as default};
