import"./index-DmM0KDA7.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";const f=({title:u,details:h,emoji:x="✅"})=>e.jsxs("div",{className:"my-6",children:[e.jsx("div",{className:"w-full max-w-xs mx-auto h-48 relative hover-flip-card",style:{perspective:"1000px"},children:e.jsxs("div",{className:"relative w-full h-full transition-all duration-500 ease-in-out hover-flip-inner",style:{transformStyle:"preserve-3d"},children:[e.jsxs("div",{className:`absolute inset-0 bg-gradient-to-br from-white to-gray-50 
                      border border-gray-200 rounded-xl shadow-md p-6 flex flex-col 
                      items-center justify-center hover-flip-front`,style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"flex items-center justify-center mb-4",children:e.jsx("span",{className:"text-3xl pt-5",children:x})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 text-center",children:u}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 text-center",children:"Hover to see details"})]}),e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
                      border border-blue-100 rounded-xl shadow-md p-6 flex flex-col
                      items-center justify-center hover-flip-back`,style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:e.jsx("div",{className:"overflow-auto max-h-full",children:e.jsx("p",{className:"text-gray-700 text-center font-semibold",children:h})})})]})}),e.jsx("style",{jsx:!0,children:`
        .hover-flip-card {
          perspective: 1000px;
        }
        
        .hover-flip-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
        }
        
        .hover-flip-card:hover .hover-flip-inner {
          transform: rotateY(180deg);
        }
        
        .hover-flip-front, .hover-flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .hover-flip-back {
          transform: rotateY(180deg);
        }
      `})]});f.__docgenInfo={description:"",methods:[],displayName:"InteractiveTaskCard",props:{emoji:{defaultValue:{value:"'✅'",computed:!1},required:!1}}};const y={title:"Components/InteractiveTaskCard",component:f,argTypes:{title:{control:"text"},details:{control:"text"},emoji:{control:"select",options:["✅","🔄","📝","🚀","⚠️","🔍","💡"],defaultValue:"✅"}},parameters:{layout:"centered",docs:{description:{component:"A flippable card that shows task details on hover. Use it for important tasks that need additional context."}}},tags:["autodocs"]},t={args:{title:"Complete API Documentation",details:"Add examples for all endpoints and error responses. Include authentication flow diagrams.",emoji:"📝"}},a={args:{title:"Deploy to Production",details:"Run final tests, merge PR #182, deploy to staging first, then promote to production after QA approval.",emoji:"🚀"}},r={args:{title:"Review Pull Request",details:"Check code quality, test coverage, and performance implications for the new authentication module.",emoji:"🔍"}};t.parameters={docs:{description:{story:"Use `InteractiveTaskCard` for tasks with additional details that should be displayed on demand. Example: `InteractiveTaskCard: Complete API Documentation, Add examples for all endpoints and error responses. Include authentication flow diagrams.`"}}};a.parameters={docs:{description:{story:"Great for highlighting important deployment or release tasks."}}};r.parameters={docs:{description:{story:"Helpful for review tasks where you want to show acceptance criteria on the back of the card."}}};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Complete API Documentation',
    details: 'Add examples for all endpoints and error responses. Include authentication flow diagrams.',
    emoji: '📝'
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,l,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Deploy to Production',
    details: 'Run final tests, merge PR #182, deploy to staging first, then promote to production after QA approval.',
    emoji: '🚀'
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Review Pull Request',
    details: 'Check code quality, test coverage, and performance implications for the new authentication module.',
    emoji: '🔍'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const b=["BasicTask","UpcomingTask","PendingReview"];export{t as BasicTask,r as PendingReview,a as UpcomingTask,b as __namedExportsOrder,y as default};
