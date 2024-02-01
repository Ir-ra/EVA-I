import{s as t,u as x,j as i,F as n,M as o,r as l}from"./index-133a1fbe.js";import{n as m}from"./index.browser-7e542916.js";import{A as c}from"./index.esm-d5faf238.js";import{S as h}from"./SectionTitle-be404a36.js";import{T as g}from"./TryBot-983d387e.js";t.h4`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;const j=t.li`
  display: flex;
  align-items: center;
  padding: 8px 0px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  color: var(--neutral-grey);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,_=t.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`,a=t.span`
  font-weight: 900;
  color: var(--main-white);
`,f=({benefits:e})=>{const r=x().locale,d=e.benefits.map((s,p)=>p===0&&e.benefits.length>=6?r==="ukr-UA"?i.jsxs("div",{children:[s," ",i.jsx(a,{children:e.span})]}):i.jsxs("div",{children:["All ",i.jsx(a,{children:e.span})," ",s]}):s);return i.jsx(i.Fragment,{children:d.map(s=>i.jsxs(j,{children:[i.jsx(_,{children:i.jsx(c,{style:{width:"32px",height:"32px"}})}),s]},m()))})},w=t.p`
  text-align: center;
  font-size: 28px;
  line-height: 1.42;
  margin-bottom: 40px;
  margin-top: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1920px) {
    margin-bottom: 80px;
  }
`,u=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
`,b=t.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border: 1px solid transparent;
  border-radius: 12px;
  border-image: var(--primary-gradient);
  border-image-slice: 1;

  @media (min-width: 1024px) {
  width: 100%;
  max-width: 406px;
  }
`,y=t.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  width: 100%;

  border-bottom: 1px solid transparent;
  border-image: var(--primary-gradient);
  border-image-slice: 1;
`,P=t.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;

  margin-bottom: 8px;

  @media (min-width: 768px) {
    line-height: 1.25;
  }
`,v=t.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.25;

  background: var(--primary-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) and (max-width: 1024px) {
    line-height: 2;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    line-height: 2;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    line-height: 2;
  }

  @media (min-width: 1920px) {
    line-height: 2;
  }
`,B=t.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,k=t.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`,z=[{id:1,plan:i.jsx(n,{id:"plan_starter"}),price:19,span:"",benefits:[i.jsx(n,{id:"plans_starter_1"}),i.jsx(n,{id:"plans_starter_2"}),i.jsx(n,{id:"plans_starter_3"}),i.jsx(n,{id:"plans_starter_4"}),i.jsx(n,{id:"plans_starter_5"})]},{id:2,plan:i.jsx(n,{id:"plan_pro"}),price:79,span:i.jsx(n,{id:"plan_pro_span"}),benefits:[i.jsx(n,{id:"plans_pro_0"}),i.jsx(n,{id:"plans_pro_1"}),i.jsx(n,{id:"plans_pro_2"}),i.jsx(n,{id:"plans_pro_3"}),i.jsx(n,{id:"plans_pro_4"}),i.jsx(n,{id:"plans_pro_5"})]},{id:3,plan:i.jsx(n,{id:"plan_premium"}),price:199,span:i.jsx(n,{id:"plan_premium_span"}),benefits:[i.jsx(n,{id:"plans_premium_0"}),i.jsx(n,{id:"plans_premium_1"}),i.jsx(n,{id:"plans_premium_2"}),i.jsx(n,{id:"plans_premium_3"}),i.jsx(n,{id:"plans_premium_4"}),i.jsx(n,{id:"plans_premium_5"})]}],I=()=>i.jsx("section",{children:i.jsxs("div",{className:"container",children:[i.jsx(h,{title:i.jsx(n,{id:"pricing_main_title"})}),i.jsx(w,{children:i.jsx(n,{id:"pricing_main_subtitle"})}),i.jsx(u,{children:z.map(e=>i.jsxs(b,{tabIndex:0,children:[i.jsxs(y,{children:[i.jsx(P,{children:e.plan}),i.jsxs(v,{children:["$",e.price,"/",i.jsx(n,{id:"pricing_month"})]})]}),i.jsx(B,{children:i.jsx(f,{benefits:e})}),i.jsx(k,{children:i.jsx(o,{title:i.jsx(n,{id:"pricing_get_button"}),styles:"pay"})})]},e.id))})]})}),S=()=>(l.useEffect(()=>{window.scrollTo(0,0)},[]),i.jsxs("main",{children:[i.jsx(I,{}),i.jsx(g,{})]}));export{S as default};
