import{h as D,af as T,ag as _,ah as R,r as c,ai as E,j as e,aj as F,Z as p,T as L,ak as M,al as B,am as W,an as z,ao as K}from"./sanity-a94bfb5d.js";const N=(t,n)=>({title:e.jsxs("em",{children:["No schema found for type ",e.jsx("code",{children:n})]}),subtitle:e.jsxs("em",{children:["Document: ",e.jsx("code",{children:t})]}),media:()=>e.jsx(K,{})});function O(t){const{layout:n,value:s}=t;return e.jsx(p,{...N(s._id,s._type),layout:n})}function j(t,n,s){return t===!1?!1:t||n&&n.icon||s||!1}function Z(t){const{icon:n,id:s,layout:i="default",pressed:g,schemaType:a,selected:u,title:l,value:o,margin:k,marginBottom:P,marginTop:y}=t,I=D(),d=T(),{ChildLink:m}=_(),f=R(s),h=!!(a&&a.name&&I.get(a.name)),[v,r]=c.useState(!1),C=c.useMemo(()=>o&&E(o)?!a||!h?e.jsx(O,{value:o}):e.jsx(F,{documentPreviewStore:d,icon:j(n,a,W),layout:i,schemaType:a,value:o,presence:f}):e.jsx(p,{status:e.jsx(L,{muted:!0,children:e.jsx(M,{})}),icon:j(n,a,z),layout:i,title:l}),[d,h,n,i,a,l,o,f]),S=c.useMemo(()=>function(w){return e.jsx(m,{...w,childId:s})},[m,s]),b=c.useCallback(x=>{if(x.metaKey){r(!1);return}r(!0)},[]);return c.useEffect(()=>r(!1),[u]),e.jsx(B,{__unstable_focusRing:!0,as:S,"data-as":"a","data-ui":"PaneItem",margin:k,marginBottom:P,marginTop:y,onClick:b,padding:2,pressed:g,radius:2,selected:u||v,sizing:"border",tabIndex:-1,tone:"inherit",children:C})}export{Z as P};
