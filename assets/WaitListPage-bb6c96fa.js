import{s as n,j as i,r as a,u as z,i as y,F as e,D as B,C as A}from"./index-133a1fbe.js";import{S as C}from"./SectionTitle-be404a36.js";import{F as T,a as V,u as q,b as M,L as c,E as d,A as _}from"./AuthBtn-3c1089ed.js";const b=n.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 32px 20px 16px;

  @media (min-width: 768px) {
    padding: 32px 80px 16px;
  }
`,$=n.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
`,G=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  justify-content: center;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
    align-items: center;
  justify-content: center;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`,I=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`,J=n.span`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 36px;
    line-height: 1.55;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 36px;
    line-height: 1.55;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 40px;
    line-height: 2;
  }

  @media (min-width: 1920px) {
    font-size: 40px;
  }
`,P=n(T)`
  max-width: 624px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,x=n.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: var(--white);
`,m=n.label`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: var(--semibold-font-weight);
  line-height: 1.5;
  color: var(--white);
`,p=n(V)`
  cursor: pointer;
  background-color: transparent;
  line-height: 1.5;
  padding: 16px 24px;
  border: ${l=>l.error?"1px solid var(--neutral-red)":"1px solid var(--white)"};
  border-radius: 32px;
  color: var(--white);
  transition: border-color 0.3s;

  &::placeholder {
    color: var(--light-grey);
  }

  &:focus,
  &:hover {
    border-color: var(--primary-pink);
  }
`,s=n.div`
  display: flex;
  gap: 4px;
  padding-top: 8px;
  color: ${l=>l.type==="error"?"var(--neutral-red)":"var(--primary-pink)"};
  font-size: 14px;
  line-height: 1.7;
`,W=n.p`
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
  margin-bottom: 40px;
  color: var(--white);

  > a {
    cursor: pointer;
    text-decoration-line: underline;
    color: var(--primary-pink);
    transition: all var(--anim);

    &:hover {
      color: var(--primary-purple);
    }
  }
`,Z=n.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 148px;
  height: 100vh;
`,D=n.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  color: var(--white);
  margin-bottom: 32px;
`,R=n.div`
  margin-left: 15px;
  font-family: inherit;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  background: transparent;

  background-image: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`,U=()=>i.jsx(R,{type:"button",className:"goBack",onClick:()=>window.history.back(),children:i.jsx("span",{className:"arrow",children:"Go back"})}),H=()=>{const[l,j]=a.useState(!1),[L,g]=a.useState(!1),[k,f]=a.useState(!1),[F,w]=a.useState(!1),[h,v]=a.useState(""),[N,S]=a.useState(!1),E=q(),u=z();return a.useEffect(()=>{window.scrollTo(0,0)},[]),i.jsx("div",{children:N?i.jsxs(i.Fragment,{children:[i.jsx(b,{children:i.jsx(y,{})}),i.jsxs(Z,{children:[i.jsx(C,{title:i.jsx(e,{id:"waitList_congrats"})}),i.jsx(D,{children:i.jsx(e,{id:"waitList_success_added"})}),i.jsx(A,{to:"/",children:i.jsx(_,{title:i.jsx(e,{id:"waitList_back_btn"})})})]})]}):i.jsxs(i.Fragment,{children:[i.jsx(b,{children:i.jsx(y,{})}),i.jsxs($,{className:"container",children:[i.jsx(G,{children:i.jsx(J,{children:i.jsx(e,{id:"waitList_list"})})}),i.jsx("p",{children:i.jsx(e,{id:"waitList_subtext"})}),i.jsx(M,{initialValues:{name:"",email:"",phoneNumber:"",socialLink:""},validate:t=>{const r={};return t.name||(r.name=i.jsx(e,{id:"waitList_name_required"})),t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(r.email=i.jsx(e,{id:"auth_mail_err"})):r.email=i.jsx(e,{id:"auth_mail_required"}),t.phoneNumber?/^[0-9+]*$/i.test(t.phoneNumber)||(r.phoneNumber=i.jsx(e,{id:"waitList_phone_invalid"})):r.phoneNumber=i.jsx(e,{id:"waitList_phone_required"}),t.socialLink||(r.socialLink=i.jsx(e,{id:"waitList_social_link_required"})),r},onSubmit:async(t,{resetForm:r})=>{try{const o=await E(B(t));console.log(o),o.type==="auth/waitlist/add/fulfilled"?(S(!0),r()):o.type==="auth/waitlist/add/rejected"&&v(o.payload)}catch(o){console.error(o.message)}},children:({errors:t,handleSubmit:r})=>i.jsxs(P,{onSubmit:r,children:[i.jsxs(x,{children:[i.jsx(m,{htmlFor:"name",children:i.jsx(e,{id:"waitList_name_surname"})}),i.jsx(p,{type:"text",id:"name",name:"name",placeholder:u.formatMessage({id:"waitList_name_surname"}),onFocus:()=>j(!0),onBlur:()=>j(!1),error:t.name}),l?i.jsx(s,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.name?i.jsx(s,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.name]})}):null]}),i.jsxs(x,{children:[i.jsx(m,{htmlFor:"email",children:i.jsx(e,{id:"auth_email"})}),i.jsx(p,{type:"email",id:"email",name:"email",autoComplete:"username",placeholder:u.formatMessage({id:"auth_email"}),onFocus:()=>g(!0),onBlur:()=>g(!1),error:t.email||h}),L?i.jsx(s,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.email||h?i.jsx(s,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.email||h]})}):null]}),i.jsxs(x,{children:[i.jsxs(m,{htmlFor:"phoneNumber",children:[i.jsx(e,{id:"waitList_phone_number"}),"(",i.jsx(e,{id:"waitList_optional"}),")"]}),i.jsx(p,{id:"phoneNumber",name:"phoneNumber",placeholder:"+12 3456 7890",onFocus:()=>f(!0),onBlur:()=>f(!1),error:t.phoneNumber}),k?i.jsx(s,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.phoneNumber?i.jsx(s,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.phoneNumber]})}):null]}),i.jsxs(x,{children:[i.jsxs(m,{htmlFor:"socialLink",children:[i.jsx(e,{id:"waitList_social_link"}),"(",i.jsx(e,{id:"waitList_optional"}),")"]}),i.jsx(p,{id:"socialLink",name:"socialLink",placeholder:u.formatMessage({id:"waitList_social_link_URL"}),onFocus:()=>w(!0),onBlur:()=>w(!1),error:t.socialLink}),F?i.jsx(s,{type:"Verification",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:"Loader"}),i.jsx(e,{id:"auth_verification"})]})}):t.socialLink?i.jsx(s,{type:"error",children:i.jsxs(i.Fragment,{children:[i.jsx("img",{src:d,alt:"Error"}),t.socialLink]})}):null]}),i.jsxs(I,{children:[i.jsx(_,{title:i.jsx(e,{id:"waitList_join"}),handleSubmit:r}),i.jsx(U,{}),i.jsxs(W,{children:[i.jsxs("span",{children:[i.jsx(e,{id:"register_by_clicking"})," "," "]}),i.jsx("a",{href:"https://reply.io/terms-of-service/",target:"_blank",children:i.jsx(e,{id:"register_terms_of_service"})}),i.jsxs("span",{children:["  ",i.jsx(e,{id:"register_and"}),"  "]}),i.jsx("a",{href:"https://reply.io/privacy-policy/",target:"_blank",children:i.jsx(e,{id:"register_privacy_policy"})})]})]})]})})]})]})})},X=()=>i.jsx("main",{children:i.jsx(H,{})});export{X as default};
