import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const g=({concept:p,priority:s,notes:b})=>{const a={High:{badge:"bg-gradient-to-r from-red-500 to-rose-500 text-white",border:"border-l-red-500",bg:"bg-gradient-to-r from-red-50 to-rose-50"},Medium:{badge:"bg-gradient-to-r from-amber-500 to-yellow-500 text-white",border:"border-l-amber-500",bg:"bg-gradient-to-r from-amber-50 to-yellow-50"},Low:{badge:"bg-gradient-to-r from-emerald-500 to-green-500 text-white",border:"border-l-emerald-500",bg:"bg-gradient-to-r from-emerald-50 to-green-50"}},o=a[s]||a.Medium;return e.jsxs("div",{className:`my-6 rounded-lg shadow-lg ${o.bg} border-l-4 ${o.border} p-6 transition-all duration-300 hover:shadow-xl`,children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"Idea"}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("span",{className:"text-2xl",children:"💡"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-gray-800",children:p}),e.jsx("span",{className:`inline-block px-3 py-1 mt-2 text-sm font-semibold rounded-full shadow-sm ${o.badge}`,children:s}),e.jsx("p",{className:"text-gray-700 mt-3",children:b})]})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"Idea"};const u={title:"Components/Idea",component:g,argTypes:{concept:{control:"text"},priority:{control:{type:"select",options:["High","Medium","Low"]}},notes:{control:"text"}},tags:["autodocs"]},r={args:{concept:"Dark mode",priority:"High",notes:"Needs design input"}},t={args:{concept:"Performance tweak",priority:"Medium",notes:"Optimize API calls"}};r.parameters={docs:{description:{story:"Use `Idea` for brainstorming with priority tags. Example: `Idea: Dark mode, High, Needs design input`"}}};var i,d,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    concept: 'Dark mode',
    priority: 'High',
    notes: 'Needs design input'
  }
}`,...(n=(d=r.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var m,c,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    concept: 'Performance tweak',
    priority: 'Medium',
    notes: 'Optimize API calls'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const y=["HighPriority","MediumPriority"];export{r as HighPriority,t as MediumPriority,y as __namedExportsOrder,u as default};
