import{s as t,j as i,F as a,r as n}from"./index-133a1fbe.js";import{S as s}from"./SectionTitle-be404a36.js";import{T as d}from"./TryBot-983d387e.js";const x=t.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 80px;
    margin-bottom: 60px;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    margin-top: 80px;
    margin-bottom: 60px;
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: 1920px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 80px;
    margin-bottom: 60px;
    align-items: flex-start;
  }
`,r=t.li`
  max-width: 515px;
  width: 100%;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 2 * 32px) / 2);
  }
`;t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 352px;
  padding: 10px;
  margin-bottom: 24px;

  border-radius: 12px;
  background-color: var(--light-grey);
`;const o=t.div`
  display: flex;
  flex-direction: column;
`,p=t.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`,m=t.div`
  width: 56px;
  height: 56px;
  padding: 10px;
  background-image: url(${e=>e.bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1920px) {
    width: 80px;
    height: 80px;
  }
`,l=t.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    font-size: 24px;
    line-height: 1.66;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
    line-height: 1.66;
  }
`,c=t.p`
  font-size: 16px;
  line-height: 1.5;
`,g="/EVA-I/assets/layers-52c5bff9.svg",h="/EVA-I/assets/layout-491ba207.svg",w="/EVA-I/assets/users-60162eca.svg",f="/EVA-I/assets/message-circle-edd728d0.svg",u=[{id:"Step 1",img:"/",alt:"PHOTO/VIDEO 1",icon:`${g}`,key1:"usage_card1_title",key2:"usage_card1_text"},{id:"Step 2",img:"/",alt:"PHOTO/VIDEO 2",icon:`${h}`,key1:"usage_card2_title",key2:"usage_card2_text"},{id:"Step 3",img:"/",alt:"PHOTO/VIDEO 3",icon:`${w}`,key1:"usage_card3_title",key2:"usage_card3_text"},{id:"Step 4",img:"/",alt:"PHOTO/VIDEO 4",icon:`${f}`,key1:"usage_card4_title",key2:"usage_card4_text"}],y=()=>i.jsx("section",{children:i.jsxs("div",{className:"container",children:[i.jsx(s,{title:i.jsx(a,{id:"usage_main_title"})}),i.jsx(x,{children:u.map(e=>i.jsx(r,{children:i.jsxs(o,{children:[i.jsxs(p,{children:[i.jsx(m,{bg:e.icon}),i.jsx(l,{children:i.jsx(a,{id:e.key1})})]}),i.jsx(c,{children:i.jsx(a,{id:e.key2})})]})},e.id))})]})}),k=()=>(n.useEffect(()=>{window.scrollTo(0,0)},[]),i.jsxs("main",{children:[i.jsx(y,{}),i.jsx(d,{})]}));export{k as default};
