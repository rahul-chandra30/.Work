import"./index-DmM0KDA7.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";const u=({title:g,url:f,emoji:x="🔖"})=>s.jsxs("a",{href:f,target:"_blank",rel:"noopener noreferrer",className:"my-4 p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center",children:[s.jsx("span",{className:"text-2xl mr-3",children:x}),s.jsx("span",{className:"text-lg font-semibold text-gray-800",children:g})]});u.__docgenInfo={description:"",methods:[],displayName:"ResourceCard",props:{emoji:{defaultValue:{value:"'🔖'",computed:!1},required:!1}}};const R={title:"Components/ResourceCard",component:u,argTypes:{title:{control:"text"},url:{control:"text"},emoji:{control:"select",options:["🔖","📚","🔗","💻","📄","📊","🔬","📱","🌐"],defaultValue:"🔖"}},parameters:{layout:"centered",docs:{description:{component:"A card component for linking to external resources like documentation, GitHub repositories, or reference materials."}}},tags:["autodocs"]},e={args:{title:"API Reference",url:"https://docs.example.com/api",emoji:"📚"}},r={args:{title:"Frontend Repository",url:"https://github.com/example/frontend",emoji:"💻"}},o={args:{title:"Design System",url:"https://figma.com/file/example",emoji:"🎨"}};e.parameters={docs:{description:{story:"Use `ResourceCard` to link to important documentation or external resources. Example: `ResourceCard: API Reference, https://docs.example.com/api, 📚`"}}};r.parameters={docs:{description:{story:"Perfect for linking to code repositories or development resources."}}};o.parameters={docs:{description:{story:"Use for design assets, mockups, or UI reference materials."}}};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: 'API Reference',
    url: 'https://docs.example.com/api',
    emoji: '📚'
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Frontend Repository',
    url: 'https://github.com/example/frontend',
    emoji: '💻'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Design System',
    url: 'https://figma.com/file/example',
    emoji: '🎨'
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const j=["Documentation","CodeRepository","DesignAssets"];export{r as CodeRepository,o as DesignAssets,e as Documentation,j as __namedExportsOrder,R as default};
