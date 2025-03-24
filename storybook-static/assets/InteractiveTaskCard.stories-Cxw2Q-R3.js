import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-DmM0KDA7.js";const v=({title:o,details:y,emoji:b="✅"})=>e.jsxs("div",{className:"my-6",children:[e.jsx("div",{className:"w-full max-w-xs mx-auto h-48 relative hover-flip-card",style:{perspective:"1000px"},children:e.jsxs("div",{className:"relative w-full h-full transition-all duration-500 ease-in-out hover-flip-inner",style:{transformStyle:"preserve-3d"},children:[e.jsxs("div",{className:`absolute inset-0 bg-gradient-to-br from-white to-gray-50 
                      border border-gray-200 rounded-xl shadow-md p-6 flex flex-col 
                      items-center justify-center hover-flip-front`,style:{backfaceVisibility:"hidden"},children:[e.jsx("div",{className:"flex items-center justify-center mb-4",children:e.jsx("span",{className:"text-3xl pt-5",children:b})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-800 text-center",children:o}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 text-center",children:"Hover to see details"})]}),e.jsx("div",{className:`absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
                      border border-blue-100 rounded-xl shadow-md p-6 flex flex-col
                      items-center justify-center hover-flip-back`,style:{backfaceVisibility:"hidden",transform:"rotateY(180deg)"},children:e.jsx("div",{className:"overflow-auto max-h-full",children:e.jsx("p",{className:"text-gray-700 text-center font-semibold",children:y})})})]})}),e.jsx("style",{jsx:!0,children:`
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
      `})]});v.__docgenInfo={description:"",methods:[],displayName:"InteractiveTaskCard",props:{emoji:{defaultValue:{value:"'✅'",computed:!1},required:!1}}};const w={title:"Components/InteractiveTaskCard",component:v,argTypes:{title:{control:"text",description:"The title of the task",defaultValue:"Complete user authentication"},details:{control:"text",description:"The detailed description shown on the back of the card",defaultValue:"Implement login, registration, and password reset functionality."},emoji:{control:"select",options:["✅","🔄","📝","🚀","⚠️","🔍","💡","🎯","🛠️"],description:"Emoji representing the task type",defaultValue:"✅"}},parameters:{docs:{description:{component:"An interactive flip card that reveals task details when hovered. Great for important tasks or items that need additional context."}},layout:"centered"},decorators:[o=>e.jsx("div",{style:{padding:"20px",maxWidth:"500px"},children:e.jsx(o,{})})],tags:["autodocs"]},t={args:{title:"Write API Documentation",details:"Add examples for all endpoints and error responses. Include authentication flow diagrams.",emoji:"📝"}},s={args:{title:"Deploy to Production",details:"Run final tests, merge PR #182, deploy to staging first, then promote to production after QA approval.",emoji:"🚀"}},a={args:{title:"Fix Authentication Bug",details:"Users are being logged out randomly. Check session timeout settings and investigate token refresh mechanism.",emoji:"⚠️"}},r={args:{title:"Code Review",details:"Review PR #234 from Sarah - New dashboard components. Check for accessibility issues and test coverage.",emoji:"🔍"}};t.parameters={docs:{description:{story:"Basic example of a documentation task. Hover over the card to see the detailed instructions."}}};s.parameters={docs:{description:{story:"Example of a deployment task with the rocket emoji. Good for highlighting important release steps."}}};a.parameters={docs:{description:{story:"Example of a bug fix task with warning emoji. Use this for critical issues that need attention."}}};r.parameters={docs:{description:{story:"Example of a review task. The card makes it easy to provide context about what needs reviewing."}}};var i,n,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Write API Documentation',
    details: 'Add examples for all endpoints and error responses. Include authentication flow diagrams.',
    emoji: '📝'
  }
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Deploy to Production',
    details: 'Run final tests, merge PR #182, deploy to staging first, then promote to production after QA approval.',
    emoji: '🚀'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Fix Authentication Bug',
    details: 'Users are being logged out randomly. Check session timeout settings and investigate token refresh mechanism.',
    emoji: '⚠️'
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,g,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Code Review',
    details: 'Review PR #234 from Sarah - New dashboard components. Check for accessibility issues and test coverage.',
    emoji: '🔍'
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const T=["BasicTask","DeploymentTask","BugFixTask","ReviewTask"];export{t as BasicTask,a as BugFixTask,s as DeploymentTask,r as ReviewTask,T as __namedExportsOrder,w as default};
