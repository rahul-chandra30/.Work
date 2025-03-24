import"./index-DmM0KDA7.js";import{j as s}from"./jsx-runtime-D_zvdyIk.js";const f=({title:j,url:y,emoji:b="🔖"})=>s.jsxs("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"my-4 p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center",children:[s.jsx("span",{className:"text-2xl mr-3",children:b}),s.jsx("span",{className:"text-lg font-semibold text-gray-800",children:j})]});f.__docgenInfo={description:"",methods:[],displayName:"ResourceCard",props:{emoji:{defaultValue:{value:"'🔖'",computed:!1},required:!1}}};const k={title:"Components/ResourceCard",component:f,argTypes:{title:{control:"text",description:"The title of the resource to display",defaultValue:"Documentation"},url:{control:"text",description:"The URL the card links to",defaultValue:"https://docs.example.com"},emoji:{control:"text",description:"Emoji to display next to the title",defaultValue:"🔖"}},parameters:{docs:{description:{component:"A card component for linking to external resources like documentation, guides, or reference materials."}}},tags:["autodocs"]},e={args:{title:"API Documentation",url:"https://api.example.com/docs",emoji:"📚"}},t={args:{title:"Source Code Repository",url:"https://github.com/example/repo",emoji:"💻"}},o={args:{title:"Getting Started Tutorial",url:"https://youtube.com/watch?v=example",emoji:"📺"}},r={args:{title:"UI Design System",url:"https://figma.com/file/example",emoji:"🎨"}};e.parameters={docs:{description:{story:"Basic example linking to documentation. Use the emoji parameter to customize the icon."}}};t.parameters={docs:{description:{story:"Example linking to a GitHub repository. The card opens the link in a new tab."}}};o.parameters={docs:{description:{story:"Example linking to a video tutorial with a video emoji."}}};r.parameters={docs:{description:{story:"Example linking to design assets with a palette emoji."}}};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'API Documentation',
    url: 'https://api.example.com/docs',
    emoji: '📚'
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Source Code Repository',
    url: 'https://github.com/example/repo',
    emoji: '💻'
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Getting Started Tutorial',
    url: 'https://youtube.com/watch?v=example',
    emoji: '📺'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'UI Design System',
    url: 'https://figma.com/file/example',
    emoji: '🎨'
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const w=["BasicResource","GitHubRepository","VideoTutorial","DesignAssets"];export{e as BasicResource,r as DesignAssets,t as GitHubRepository,o as VideoTutorial,w as __namedExportsOrder,k as default};
