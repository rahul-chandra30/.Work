import"./index-DmM0KDA7.js";import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as f,f as x,a as k,b as v,c as w,d as j,e as S,g as F,h as N,i as T,j as M,k as q,m as D,n as A,o as E,p as B,q as P,r as R,s as I,t as z,u as J,v as O,w as _,x as K,y as L,z as U,A as W,B as H,C as $,D as Q,E as G,G as V,H as X,J as Y,K as Z,L as aa,M as ea,N as sa,O as na,P as ia,Q as ra,R as oa,S as ta,T as la,U as fa,V as ca,W as da,X as ma,Y as pa,Z as ga,_ as ua,$ as ha,a0 as ba,a1 as ya,a2 as Ca,a3 as xa,a4 as ka,a5 as va,a6 as wa,a7 as ja,a8 as Sa,a9 as Fa,aa as Na,ab as Ta,ac as Ma,ad as qa}from"./index-DDv-buoc.js";const Da={"fa-bell":qa,"fa-bookmark":Ma,"fa-calendar":Ta,"fa-calendar-alt":Na,"fa-calendar-check":Fa,"fa-calendar-minus":Sa,"fa-calendar-plus":ja,"fa-check-circle":wa,"fa-check-square":va,"fa-circle":ka,"fa-clock":xa,"fa-comment":Ca,"fa-comments":ya,"fa-copy":ba,"fa-edit":ha,"fa-envelope":ua,"fa-envelope-open":ga,"fa-file":pa,"fa-file-alt":ma,"fa-flag":da,"fa-folder":ca,"fa-folder-open":fa,"fa-frown":la,"fa-heart":ta,"fa-hourglass":oa,"fa-image":ra,"fa-keyboard":ia,"fa-lightbulb-o":void 0,"fa-list-alt":na,"fa-map":sa,"fa-meh":ea,"fa-minus-square":aa,"fa-money-bill-alt":Z,"fa-moon":Y,"fa-paper-plane":X,"fa-play-circle":V,"fa-plus-square":G,"fa-question-circle":Q,"fa-save":$,"fa-share-square":H,"fa-smile":W,"fa-square":U,"fa-star":L,"fa-sun":K,"fa-thumbs-down":_,"fa-thumbs-up":O,"fa-times-circle":J,"fa-trash-alt":z,"fa-user":I,"fa-user-circle":R,"fa-window-close":P,"fa-window-maximize":B,"fa-window-minimize":E,"fa-window-restore":A,"fa-address-book":D,"fa-address-card":q,"fa-building":M,"fa-chart-bar":T,"fa-chart-pie":void 0,"fa-clipboard":N,"fa-closed-captioning":F,"fa-compass":S,"fa-credit-card":j,"fa-dot-circle":w,"fa-file-archive-o":void 0,"fa-file-audio-o":void 0,"fa-file-excel-o":void 0,"fa-file-image-o":void 0,"fa-file-pdf-o":void 0,"fa-file-powerpoint-o":void 0,"fa-file-video-o":void 0,"fa-file-word-o":void 0,"fa-handshake":v,"fa-id-badge":k,"fa-id-card":x},c=["bg-blue-600","bg-blue-700","bg-sky-600","bg-cyan-600","bg-purple-600","bg-violet-600","bg-indigo-600","bg-fuchsia-600","bg-red-600","bg-rose-600","bg-pink-600","bg-crimson-600","bg-green-600","bg-emerald-600","bg-teal-600","bg-lime-600","bg-amber-600","bg-orange-600","bg-yellow-600","bg-slate-600","bg-zinc-600","bg-stone-600","bg-cyan-700","bg-teal-700","bg-emerald-700","bg-violet-700","bg-indigo-700","bg-purple-700","bg-fuchsia-700","bg-rose-700"],b=({title:o,events:s})=>{console.log("Timeline Props Received:",{title:o,events:s,type:typeof s});let e=s;if(typeof s=="string")try{e=JSON.parse(s),console.log("Parsed Events:",e)}catch(n){console.error("Error parsing events:",n),e=[]}else Array.isArray(s)||(console.warn("Events is not an array or string:",s),e=[]);return console.log("Final Event List:",e),a.jsxs("div",{className:"section my-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx(f,{icon:void 0,className:"h-6 w-6 text-gray-700"}),a.jsx("h2",{className:"section-title text-2xl font-bold text-gray-800",children:o})]}),a.jsx("div",{className:"timeline relative",children:e.length>0?e.map((n,t)=>{const y=c[Math.floor(Math.random()*c.length)],l=t===e.length-1,C=Da[n.icon]||void 0;return a.jsxs("div",{className:"timeline-item flex flex-col md:flex-row mb-8",children:[a.jsxs("div",{className:`timeline-marker relative ${l?"timeline-marker-last":""}`,children:[a.jsx("div",{className:`w-10 h-10 rounded-full ${y} flex items-center justify-center text-white shadow-md`,children:a.jsx(f,{icon:C,className:"h-5 w-5"})}),!l&&a.jsx("div",{className:"absolute top-10 left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"})]}),a.jsxs("div",{className:"timeline-content md:ml-6 mt-4 md:mt-0",children:[a.jsx("h3",{className:"font-bold text-lg text-gray-800",children:n.heading}),a.jsx("p",{className:"text-gray-600",children:n.description})]})]},t)}):a.jsx("p",{className:"text-gray-600",children:"No events provided."})})]})};b.__docgenInfo={description:"",methods:[],displayName:"Timeline"};const Pa={title:"Components/Timeline",component:b,argTypes:{title:{control:"text"},events:{control:"object"}},tags:["autodocs"]},i={args:{title:"Sprint 1 Timeline",events:[{icon:"fa-calendar",heading:"Kickoff Meeting",description:"Defined sprint goals and assigned tasks"},{icon:"fa-check-square",heading:"Feature Complete",description:"Core functionality implemented"}]}},r={args:{title:"Development Journey",events:[{icon:"fa-times-circle",heading:"Jan 25: Bug Detected",description:"Critical API issue found"},{icon:"fa-handshake",heading:"Feb 1: Team Sync",description:"Resolved blockers in meeting"},{icon:"fa-clipboard",heading:"Feb 10: Review",description:"Checked progress"},{icon:"fa-play-circle",heading:"Feb 15: Deployment",description:"Released to production"}]}};i.parameters={docs:{description:{story:"Use `Timeline` for project event sequences. Example: `Timeline: Sprint 1 Timeline, fa-calendar Kickoff Meeting | Defined sprint goals and assigned tasks, fa-check-square Feature Complete | Core functionality implemented`"}}};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Sprint 1 Timeline',
    events: [{
      icon: 'fa-calendar',
      heading: 'Kickoff Meeting',
      description: 'Defined sprint goals and assigned tasks'
    }, {
      icon: 'fa-check-square',
      heading: 'Feature Complete',
      description: 'Core functionality implemented'
    }]
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Development Journey',
    events: [{
      icon: 'fa-times-circle',
      heading: 'Jan 25: Bug Detected',
      description: 'Critical API issue found'
    }, {
      icon: 'fa-handshake',
      heading: 'Feb 1: Team Sync',
      description: 'Resolved blockers in meeting'
    }, {
      icon: 'fa-clipboard',
      heading: 'Feb 10: Review',
      description: 'Checked progress'
    }, {
      icon: 'fa-play-circle',
      heading: 'Feb 15: Deployment',
      description: 'Released to production'
    }]
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const Ra=["Default","MultiEvent"];export{i as Default,r as MultiEvent,Ra as __namedExportsOrder,Pa as default};
