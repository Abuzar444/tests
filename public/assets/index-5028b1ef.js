import{j as e,r as u,R as Q}from"./react-c08bfecb.js";import{c as J}from"./react-dom-743a8572.js";import{F as L,L as w,N as H,u as Z,c as ee}from"./react-router-dom-082b0185.js";import{O as G,f as j,a as C,g as E,h as te,b as re,i as ae}from"./react-router-868cdf8a.js";import{s as h}from"./styled-components-06cc7b92.js";import{P}from"./prop-types-c780010c.js";import{C as se,M as ne,B as ie,G as oe,F as Y,a as ce,b as le,c as de,d as me,e as pe,I as ge,H as he,f as ue}from"./react-icons-b174635a.js";import{a as xe}from"./axios-760d4776.js";import{Q as c,k as be}from"./react-toastify-f072b180.js";import{e as y}from"./@remix-run-5ed22f57.js";import{R as fe,L as je,X as ye,Y as ve,T as we,a as ke}from"./recharts-2d7cd039.js";import"./@babel-725317a4.js";import"./scheduler-765c72db.js";import"./react-is-e8e5dbb3.js";import"./@emotion-3c1bd611.js";import"./hoist-non-react-statics-f7cca6c6.js";import"./clsx-1229b3e0.js";import"./classnames-fb58cd26.js";import"./react-resize-detector-0648b32e.js";import"./lodash-4d8e88e2.js";import"./react-smooth-d2c4d642.js";import"./fast-equals-a0711cdd.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./reduce-css-calc-6ec3e407.js";import"./css-unit-converter-9e08bb2c.js";import"./eventemitter3-0c08df3f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const Ne=()=>e.jsx(e.Fragment,{children:e.jsx(G,{})}),I=h.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    cursor: pointer;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`,R="/assets/favicon-ea413f75.ico",m=u.forwardRef(({type:r,name:t,labelText:s,defaultValue:n="",readOnly:a=!1,required:i=!0,onChange:o=()=>{}},l)=>e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:t,className:"form-label",children:s||t}),e.jsx("input",{type:r,name:t,id:t,className:"form-input",defaultValue:n,required:i,readOnly:a,ref:l,onChange:o})]}));m.displayName="FormRow";m.propTypes={type:P.string.isRequired,name:P.string.isRequired,labelText:P.string,defaultValue:P.any,readOnly:P.bool,required:P.bool};const K=[{name:"Profile",path:".",icon:e.jsx(se,{})},{name:"Admin",path:"admin",icon:e.jsx(ne,{})},{name:"Weight Tracker",path:"weight-track",icon:e.jsx(ie,{})},{name:"All Exercises",path:"all-exercises",icon:e.jsx(oe,{})},{name:"Add Exercise",path:"add-exercise",icon:e.jsx(Y,{})}],p=xe.create({baseURL:"/api/v1"}),Se=async({request:r})=>{var s,n;const t=Object.fromEntries(await r.formData());try{return await p.post("/auth/register",t),c.success("Registration successful. Please login to continue."),y("/login")}catch(a){const i=(n=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:n.msg;return i?(i.split(",").forEach(l=>c.error(l)),a):(c.error("Something went wrong. Please try again."),a)}},Pe=()=>{const r=j(),t=C(),s=r.state==="submitting";return e.jsx(I,{children:e.jsxs(L,{className:"form",method:"post",children:[e.jsx("img",{src:R,alt:"FitTrack ",className:"logo",onClick:()=>t("/")}),e.jsx(m,{type:"text",name:"name"}),e.jsx(m,{type:"email",name:"email"}),e.jsx(m,{type:"password",name:"password"}),e.jsx(m,{type:"text",name:"height",labelText:"height (cm)"}),e.jsx(m,{type:"text",name:"weight",labelText:"weight (lbs)"}),e.jsx("button",{type:"submit",className:"btn btn-block",children:s?"Registering...":"Register"}),e.jsxs("p",{children:["Already have an account?",e.jsx(w,{to:"/login",className:"member-btn",children:"Login"})]})]})})},Le=async({request:r})=>{var s,n;const t=Object.fromEntries(await r.formData());try{return await p.post("/auth/login",t),y("/dashboard")}catch(a){const i=(n=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:n.msg;return i?(i.split(",").forEach(l=>c.error(l)),a):(c.error("Something went wrong. Please try again."),a)}},Ce=()=>{const r=j(),t=C(),s=r.state==="submitting";return e.jsx(I,{children:e.jsxs(L,{className:"form",method:"post",children:[e.jsx("img",{src:R,alt:"FitTrack ",className:"logo",onClick:()=>t("/")}),e.jsx(m,{type:"email",name:"email"}),e.jsx(m,{type:"password",name:"password"}),e.jsx("button",{type:"submit",className:"btn btn-block",disabled:s,children:s?"Logging in...":"Login"}),e.jsxs("p",{children:["Forgot Password?",e.jsx(w,{to:"/forgot-password",className:"member-btn",children:"Click here"})]}),e.jsxs("p",{children:["Don't have an account?",e.jsx(w,{to:"/register",className:"member-btn",children:"Register"})]})]})})},Ee=h.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`,Re=h.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--dark-mode-background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--primary-300);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--dark-mode-text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`,Te=()=>{const{showSidebar:r,toggleSidebar:t,user:s}=z();return e.jsx(Re,{children:e.jsx("div",{className:r?"sidebar-container show-sidebar":"sidebar-container",children:e.jsxs("div",{className:"content",children:[e.jsx("button",{className:"close-btn",onClick:t,children:e.jsx(ce,{})}),e.jsx("header",{children:e.jsx("img",{src:R,alt:"logo",className:"logo"})}),e.jsx("div",{className:"nav-links",children:K.map(n=>{const{name:a,path:i,icon:o}=n;return s&&s.role==="user"&&a==="Admin"?null:e.jsxs(H,{to:i,className:"nav-link",onClick:t,end:!0,children:[e.jsx("span",{className:"icon",children:o}),a]},a)})})]})})})},De=h.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--dark-mode-background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--dark-mode-text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      color: var(--primary-500);
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--dark-mode-background-color);
    }
  }
`,$e=()=>{const{showSidebar:r,user:t}=z();return e.jsx(De,{children:e.jsx("div",{className:r?"sidebar-container":"sidebar-container show-sidebar",children:e.jsxs("div",{className:"content",children:[e.jsx("header",{children:e.jsx("img",{src:R,alt:"logo",className:"logo"})}),e.jsx("div",{className:"nav-links",children:K.map(s=>{if(s.name==="Admin"&&t.role!=="admin")return null;const{name:n,path:a,icon:i}=s;return e.jsxs(H,{to:a,className:"nav-link",end:!0,children:[e.jsx("span",{className:"icon",children:i}),n]},n)})})]})})})},We=h.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  background: var(--dark-mode-background-secondary-color);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: block;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
  }
`,ze=h.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`,Fe=()=>{const{logout:r}=z();return e.jsx(ze,{children:e.jsx("button",{className:"btn logout-btn",onClick:r,children:"Logout"})})},Oe=()=>{const{toggleSidebar:r,user:t}=z(),s=t.name.split(" ")[0];return e.jsx(We,{children:e.jsxs("div",{className:"nav-center",children:[e.jsx("button",{className:"toggle-btn",type:"button",onClick:r,children:e.jsx(le,{})}),e.jsx("div",{children:e.jsx("h4",{className:"logo-text",children:s})}),e.jsx("div",{className:"btn-container",children:e.jsx(Fe,{})})]})})},T=()=>e.jsx("div",{className:"loading"}),X=u.createContext(),Ae=async()=>{try{const{data:r}=await p.get("/user");return r}catch{return y("/")}},z=()=>u.useContext(X),Me=()=>{const r=C(),s=j().state==="loading",[n,a]=u.useState(!1),{user:i}=E(),o=()=>{a(g=>!g)},l=async()=>{try{await p.get("/auth/logout"),r("/")}catch(g){console.log(g)}};return e.jsx(X.Provider,{value:{user:i,showSidebar:n,toggleSidebar:o,logout:l},children:e.jsx(Ee,{children:e.jsxs("main",{className:"dashboard",children:[e.jsx(Te,{}),e.jsx($e,{}),e.jsxs("div",{children:[e.jsx(Oe,{}),e.jsx("div",{className:"dashboard-page",children:s?e.jsx(T,{}):e.jsx(G,{})})]})]})})})},qe="/assets/not-found-771281c7.svg",Ie=h.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`,Ue=()=>te().status===404?e.jsx(Ie,{children:e.jsxs("div",{children:[e.jsx("img",{src:qe,alt:"Not Found"}),e.jsx("h3",{children:"Oops!"}),e.jsx("p",{children:"Looks like the page you're looking for doesn't exist."}),e.jsx(w,{to:"/dashboard",children:"Go Home"})]})}):e.jsx("div",{children:e.jsx("h3",{children:"Oops!"})}),Ve=h.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
   h3 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    line-height: 2;
    color: var(--dark-mode-text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`,Be="/assets/main-13175c3c.svg",He=()=>e.jsxs(Ve,{children:[e.jsxs("nav",{children:[e.jsx("img",{src:R,alt:"FitTrack",className:"logo"}),e.jsxs("h3",{children:["Fit",e.jsx("span",{children:"Track"})]})]}),e.jsxs("div",{className:"container page",children:[e.jsxs("div",{className:"info",children:[e.jsxs("h1",{children:["Fit",e.jsx("span",{children:"Track"})]}),e.jsx("p",{children:"FitTrack is a fitness tracking app that allows you to track your fitness goals and progress. With FitTrack, you can track your workouts, and your weight."}),e.jsx(w,{to:"/register",className:"btn register-link",children:"Register"}),e.jsx(w,{to:"/login",className:"btn",children:"Login"})]}),e.jsx("img",{src:Be,alt:"Indoor Bike",className:"img main-img"})]})]}),D=h.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--dark-mode-bg-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
    font-size: xx-large;
    font-weight: 700;
  }
  .info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .quote-container {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    flex-direction: column;
    row-gap: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr 1fr; 
    column-gap: 1rem;
  }
  .profile-form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    width: 50%;
    place-items: center;
  } 
  .delete-btn {
  cursor: pointer;
  color: var(--white);
  background: var(--red-dark);
  border: transparent;
  border-radius: var(--border-radius);
  letter-spacing: var(--letter-spacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
  width: fit-content;
}
.delete-btn:hover {
  background: var(--red-light);
  color: var(--red-dark);
  box-shadow: var(--shadow-3);
}
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .grid-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .weight-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;

  }
   .range-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

  }

  .btn-weight {
    align-self: end;
    height: 35px;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .form-btn {
      width: 25%;
    }
    .delete-btn {
      width: fit-content;
    }
    .profile-form-center {
      grid-template-columns: 4fr 6fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
    .profile-form-center {
      grid-template-columns: 4fr 6fr;
    }
  }
`,Ge=h.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .modal {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--dark-mode-bg-secondary-color);
    width: fit-content;
    height: fit-content;
    padding: 3rem 1.5rem;
    border-radius: 0.5rem;
    gap: 2rem;
  }

  .main-text {
    font-size: 1rem;
    font-weight: 500;
  }

  .info-text {
    font-size: 0.8rem;
    color: var(--dark-mode-text-color);
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  .cancel-btn {
    background: var(--dark-mode-bg-secondary-color);
    color: var(--primary-500);
    border: 1px solid var(--primary-500);
    transition: var(--transition);
  }

  .cancel-btn:hover {
    background: var(--primary-500);
    color: var(--dark-mode-text-color);
  }
`,U=({onClose:r,onDelete:t,title:s,info:n})=>e.jsx(Ge,{children:e.jsxs("div",{className:"modal",children:[e.jsx("span",{className:"main-text",children:s}),e.jsx("span",{className:"info-text",children:n}),e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{type:"button",className:"btn cancel-btn",onClick:r,children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn",onClick:t,children:"Confirm"})]})]})}),Ye=async()=>{try{const{data:{user:r,quote:t,author:s}}=await p.get("/user");return console.log(r),{user:r,quote:t,author:s}}catch(r){return c.error("Something went wrong. Please try again."),r}},Ke=async({request:r})=>{var s,n;const t=Object.fromEntries(await r.formData());try{return delete t.oldPassword,delete t.newPassword,await p.patch("/user",t),c.success("Profile updated successfully."),y("/dashboard")}catch(a){const i=(n=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:n.msg;return i?(i.split(",").forEach(l=>c.error(l)),a):(c.error("Something went wrong. Please try again."),a)}},Xe=()=>{const{user:r,quote:t,author:s}=E(),n=j(),a=C(),i=u.useRef(null),o=u.useRef(null),l=n.state==="submitting",g=n.state==="loading",[d,x]=u.useState(!1),k=async()=>{try{await p.delete("/user"),c.success("Account deleted successfully."),a("/")}catch{c.error("Something went wrong. Please try again.")}},b=async()=>{var N,$;try{await p.patch("/user/reset-password",{oldPassword:i.current.value,newPassword:o.current.value}),c.success("Password reset successfully."),i.current.value="",o.current.value=""}catch(S){const W=($=(N=S==null?void 0:S.response)==null?void 0:N.data)==null?void 0:$.msg;return W?(W.split(",").forEach(O=>c.error(O)),S):(c.error("Something went wrong. Please try again."),S)}};return g?e.jsx(T,{}):e.jsxs(D,{children:[e.jsxs(L,{method:"post",className:"form",encType:"multipart/form-data",children:[e.jsx("h4",{className:"form-title",children:"Welcome!"}),e.jsxs("div",{className:"profile-form-center",children:[e.jsxs("div",{className:"quote-container",children:[e.jsx("p",{className:"quote",children:t}),e.jsx("p",{className:"author",children:"- "+s})]}),e.jsxs("div",{className:"info-container",children:[e.jsxs("div",{className:"info",children:[e.jsx(m,{type:"text",name:"name",labelText:"Name",defaultValue:r.name,readOnly:!0}),e.jsx(m,{type:"text",name:"email",labelText:"Email",defaultValue:r.email,readOnly:!0}),e.jsx(m,{type:"text",name:"height",labelText:"Height (cm)",defaultValue:r.height}),e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{className:"btn btn-block",type:"submit",disabled:l,children:l?"Updating...":"Update"}),e.jsx("button",{className:"btn-block delete-btn",type:"button",onClick:()=>x(!0),children:"Delete"})]})]}),e.jsxs("div",{className:"info",children:[e.jsx(m,{type:"password",name:"oldPassword",labelText:"Old Password",required:!1,ref:i}),e.jsx(m,{type:"password",name:"newPassword",labelText:"New Password",required:!1,ref:o}),e.jsx("div",{className:"btn-container",children:e.jsx("button",{className:"btn btn-block",type:"button",onClick:b,children:"Reset Password"})})]})]})]})]}),d&&e.jsx(U,{onClose:()=>x(!1),onDelete:k,title:"Are you sure you want to delete your account?",info:"This will delete your account permanently. You cannot undo this action."})]})},_e=h.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,Qe=h.article`
  padding: 2rem;
  background: var(--dark-mode-bg-secondary-color);
  border-bottom: 5px solid var(--primary-500);
  border-radius: var(--border-radius);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    /* color: ${r=>r.color}; */
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${r=>r.color};
    }
  }
`,V=({count:r,title:t,icon:s})=>(console.log("count",r),e.jsxs(Qe,{children:[e.jsxs("header",{children:[e.jsx("span",{className:"count",children:r}),e.jsx("span",{className:"icon",children:s})]}),e.jsx("h5",{className:"title",children:t})]})),Je=async()=>{try{const{data:r}=await p.get("/user/admin");return r}catch{return c.error("You are not authorized to view this page"),y("/dashboard")}},Ze=()=>{const{totalUsers:r,totalExercises:t}=E();return console.log("totalUsers",r),console.log("totalExercises",t),e.jsxs(_e,{children:[e.jsx(V,{count:r,title:"Total Users",icon:e.jsx(de,{})}),e.jsx(V,{count:t,title:"Total Exercises",icon:e.jsx(me,{})})]})},et=async()=>{try{const{data:{user:{weights:r}}}=await p.get("/user"),t=Object.keys(r),s=t.map(n=>({date:n,value:r[n]}));return s.sort((n,a)=>new Date(n.date)-new Date(a.date)),{data:s,dates:t}}catch(r){return c.error("Something went wrong. Please try again."),r}},tt=()=>{const r=new Date,s=j().state==="loading",{data:n,dates:a}=E(),i=u.useRef(),o=u.useRef(),l=u.useRef(),g=u.useRef(),[d,x]=u.useState(!1),[k,b]=u.useState(n),N=n,$=Math.max(Math.min(...k.map(f=>f.value))-5,0),S=Math.max(...k.map(f=>f.value))+5,W=()=>{const f=i.current.value,v=o.current.value;if(f===""||v===""){c.error("Please fill out all fields.");return}if(v<0){c.error("Weight cannot be negative.");return}a.includes(f)?x(!0):F()},F=async()=>{const f=i.current.value,v=o.current.value,A={date:f,weight:v};try{await p.patch("/user/update-weights",A),location.reload()}catch{c.error("Something went wrong. Please try again.")}},O=()=>{const f=l.current.value,v=g.current.value;if(f===""||v===""){c.error("Please fill out all fields.");return}if(f>v){c.error("Start date cannot be after end date.");return}const A=N.filter(M=>M.date>=f&&M.date<=v);b(A)};return s?e.jsx(T,{}):e.jsxs(D,{children:[e.jsxs("div",{className:"grid-container",children:[e.jsx(fe,{width:"100%",height:450,children:e.jsxs(je,{data:k,margin:{top:5,right:30,left:20,bottom:5},children:[e.jsx(ye,{dataKey:"date"}),e.jsx(ve,{domain:[$,S]}),e.jsx(we,{}),e.jsx(ke,{type:"monotone",dataKey:"value",stroke:"#daa520",strokeWidth:2})]})}),e.jsxs("div",{className:"weight-container",children:[e.jsx(m,{type:"date",name:"date",defaultValue:r.toISOString().slice(0,10),ref:i}),e.jsx(m,{type:"number",name:"weight",labelText:"Weight (lbs)",ref:o}),e.jsx("button",{type:"button",className:"btn btn-primary btn-weight",onClick:W,children:"Submit"})]}),e.jsxs("div",{className:"range-container",children:[e.jsx(m,{type:"date",name:"startDate",ref:l,labelText:"Start Range"}),e.jsx(m,{type:"date",name:"endDate",ref:g,labelText:"End Range"}),e.jsx("button",{type:"button",className:"btn btn-primary btn-weight",onClick:O,children:"Select"}),e.jsx("button",{type:"button",className:"btn btn-primary btn-weight",onClick:()=>b(N),children:"Reset"})]})]}),d&&e.jsx(U,{onClose:()=>x(!1),onDelete:()=>{x(!1),F()},title:"You already have a weight for this date.",info:"Are you sure you want to update your weight? This cannot be undone."})]})},rt={NEWEST:"newest",OLDEST:"oldest",ASCENDING:"a-z",DESCENDING:"z-a"},at=({data:r,params:t})=>{const{search:s,sort:n}=t,a=Z(),i=o=>{let l;return g=>{const d=g.currentTarget.form;clearTimeout(l),l=setTimeout(()=>{o(d)},1e3)}};return e.jsx(D,{children:e.jsxs(L,{className:"form",children:[e.jsx("h5",{className:"form-title",children:"Search"}),e.jsxs("div",{className:"form-center",children:[e.jsx(m,{type:"search",name:"search",required:!1,defaultValue:s,onChange:i(o=>{a(o)})}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{htmlFor:"sort",className:"form-label",children:"Sort"}),e.jsx("select",{name:"sort",id:"sort",className:"form-select",defaultValue:n,onChange:o=>{a(o.currentTarget.form)},children:Object.values(rt).map(o=>e.jsx("option",{value:o,children:o},o))})]}),e.jsx(w,{to:"/dashboard/all-exercises",className:"btn form-btn delete-btn",children:"Reset"})]})]})})},B=h.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-200);
    
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`,st=h.article`
  background: var(--dark-mode-bg-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--primary-500);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--dark-mode-text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
`,nt=h.div`
  display: flex;
  align-items: center;
  .job-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--dark-mode-text-secondary-color);
    }
  }
  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`,q=({icon:r,text:t})=>e.jsxs(nt,{children:[e.jsx("span",{className:"job-icon",children:r}),e.jsx("span",{className:"job-text",children:t})]}),it=({_id:r,exerciseName:t,set:s,reps:n,weight:a,onDeleteClick:i})=>e.jsxs(st,{children:[e.jsx("header",{children:e.jsx("h5",{children:t})}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"content-center",children:[e.jsx(q,{icon:e.jsx(pe,{}),text:a+" lbs"}),e.jsx(q,{icon:e.jsx(ge,{}),text:n+" reps"}),e.jsx(q,{icon:e.jsx(Y,{}),text:s+" sets"})]}),e.jsxs("footer",{className:"actions",children:[e.jsx(w,{className:"btn edit-btn",to:`../edit-exercise/${r}`,children:"Edit"}),e.jsx("button",{className:"btn delete-btn",type:"button",onClick:i,children:"Delete"})]})]})]}),ot=h.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--dark-mode-bg-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor:pointer:
  }
  .active{
    background:var(--primary-500);
        color: var(--white);

  }
  .prev-btn,.next-btn{
    background: var(--dark-mode-bg-secondary-color);
    border-color: transparent;
        border-radius: var(--border-radius);

    width: 100px;
    height: 40px;
        color: var(--primary-500);
text-transform:capitalize;
letter-spacing:var(--letter-spacing);
display:flex;
align-items:center;
justify-content:center;
gap:0.5rem;
cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--primary-500);
        color: var(--white);
        transition:var(--transition);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`,ct=({data:r})=>{const{currentPage:t,numOfPages:s}=r,n=C(),{search:a,pathname:i}=re(),o=d=>{const x=new URLSearchParams(a);x.set("page",d),n(`${i}?${x.toString()}`)},l=({page:d,active:x})=>e.jsx("button",{className:`btn page-btn ${x&&"active"}`,onClick:()=>o(d),children:d},d),g=()=>{const d=[];return d.push(l({page:1,active:t===1})),t>3&&d.push(e.jsx("span",{className:"dots page-btn",children:"..."},"dots-1")),t!==1&&t!==2&&d.push(l({page:t-1,active:!1})),t!==1&&t!==s&&d.push(l({page:t,active:!0})),t!==s&&t!==s-1&&d.push(l({page:t+1,active:!1})),t<s-2&&d.push(e.jsx("span",{className:"dots page-btn",children:"..."},"dots-2")),d.push(l({page:s,active:t===s})),d};return e.jsxs(ot,{children:[e.jsxs("button",{className:"prev-btn",onClick:()=>{let d=t-1;d<1&&(d=1),o(d)},children:[e.jsx(he,{})," prev"]}),e.jsx("div",{className:"btn-container",children:g()}),e.jsxs("button",{className:"next-btn",onClick:()=>{let d=t+1;d>s&&(d=s),o(d)},children:["next ",e.jsx(ue,{})]})]})},_=({data:r})=>{const{exercises:t,total:s,numOfPages:n}=r,[a,i]=u.useState(!1),[o,l]=u.useState(""),g=C(),d=b=>{l(b),i(!0)},x=()=>{l(""),i(!1)},k=async b=>{try{await p.delete(`/exercise/${b}`),c.success("Exercise deleted successfully.")}catch{c.error("Something went wrong. Please try again.")}i(!1),l(""),g("/dashboard/all-exercises")};return t.length===0?e.jsx(B,{children:e.jsx("h2",{children:"No Exercises"})}):e.jsxs(B,{children:[e.jsxs("h5",{children:[s," exercise",t.length>1&&"s"," found"]}),e.jsx("div",{className:"jobs",children:t.map(b=>e.jsx(it,{...b,onDeleteClick:()=>d(b._id)},b._id))}),n>1&&e.jsx(ct,{data:r}),a&&e.jsx(U,{exerciseId:o,onClose:x,onDelete:()=>k(o),title:"Are you sure you want to delete this exercise?",info:`This will delete this exercise permanently. You cannot undo this\r
          action.`})]})};_.propTypes={data:P.object.isRequired};const lt=async({request:r})=>{var t,s;try{const n=Object.fromEntries([...new URL(r.url).searchParams.entries()]);console.log(n);const{data:a}=await p.get("/exercise",{params:n});return{data:a,params:n}}catch(n){return c.error(((s=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:s.msg)||"Something went wrong."),n}},dt=()=>{const{data:r,params:t}=E();return j().state==="loading"?e.jsx(T,{}):e.jsxs(e.Fragment,{children:[e.jsx(at,{data:r,params:t}),e.jsx(_,{data:r})]})},mt=async({request:r})=>{var s,n;const t=Object.fromEntries(await r.formData());try{return await p.post("/exercise",t),c.success("Exercise added successfully."),y("/dashboard/all-exercises")}catch(a){const i=(n=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:n.msg;return i?(i.split(",").forEach(l=>c.error(l)),a):(c.error("Something went wrong. Please try again."),a)}},pt=()=>{const t=j().state==="submitting";return e.jsx(D,{children:e.jsxs(L,{method:"post",className:"form",children:[e.jsx("h4",{className:"form-title",children:"Exercise"}),e.jsxs("div",{className:"form-center",children:[e.jsx(m,{type:"text",name:"exerciseName",labelText:"Excercise Name"}),e.jsx(m,{type:"text",name:"set",labelText:"Sets"}),e.jsx(m,{type:"text",name:"reps",labelText:"Reps"}),e.jsx(m,{type:"text",name:"weight",labelText:"Weight (lbs)"}),e.jsx("button",{type:"submit",className:"btn btn-block form-btn",disabled:t,children:t?"Adding...":"Add"})]})]})})},gt=async({params:r})=>{try{const{data:t}=await p.get(`/exercise/${r.id}`);return t}catch{return c.error("Something went wrong."),y("/dashboard/all-exercises")}},ht=async({request:r,params:t})=>{var n,a;const s=Object.fromEntries(await r.formData());try{return await p.patch(`/exercise/${t.id}`,s),c.success("Exercise updated successfully."),y("/dashboard/all-exercises")}catch(i){const o=(a=(n=i==null?void 0:i.response)==null?void 0:n.data)==null?void 0:a.msg;return o?(o.split(",").forEach(g=>c.error(g)),i):(c.error("Something went wrong. Please try again."),i)}},ut=()=>{const{exercise:r}=E(),t=j(),s=t.state==="submitting";return t.state==="loading"?e.jsx(T,{}):e.jsx(D,{children:e.jsxs(L,{method:"post",className:"form",children:[e.jsx("h4",{className:"form-title",children:r.exerciseName}),e.jsxs("div",{className:"form-center",children:[e.jsx(m,{type:"text",name:"set",labelText:"Set",defaultValue:r.set}),e.jsx(m,{type:"text",name:"reps",labelText:"Reps",defaultValue:r.reps}),e.jsx(m,{type:"text",name:"weight",labelText:"Weight (lbs)",defaultValue:r.weight}),e.jsx("button",{type:"submit",className:"btn btn-block form-btn",disabled:s,children:s?"Updating...":"Update"})]})]})})},xt=async({request:r})=>{var s,n;const t=Object.fromEntries(await r.formData());try{return await p.post("/auth/forgot-password",t),c.success("Password Reset. Please check your email for your new password."),y("/login")}catch(a){const i=(n=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:n.msg;return i?(i.split(",").forEach(l=>c.error(l)),a):(c.error("Something went wrong. Please try again."),a)}},bt=()=>{const r=j(),t=C(),s=r.state==="submitting";return e.jsx(I,{children:e.jsxs(L,{className:"form",method:"post",children:[e.jsx("img",{src:R,alt:"FitTrack ",className:"logo",onClick:()=>t("/")}),e.jsx(m,{type:"email",name:"email"}),e.jsx("button",{type:"submit",className:"btn btn-block",disabled:s,children:s?"Resetting...":"Reset"})]})})},ft=ee([{path:"/",element:e.jsx(Ne,{}),errorElement:e.jsx(Ue,{}),children:[{index:!0,element:e.jsx(He,{})},{path:"register",element:e.jsx(Pe,{}),action:Se},{path:"login",element:e.jsx(Ce,{}),action:Le},{path:"forgot-password",element:e.jsx(bt,{}),action:xt},{path:"dashboard",element:e.jsx(Me,{}),loader:Ae,children:[{index:!0,element:e.jsx(Xe,{}),loader:Ye,action:Ke},{path:"admin",element:e.jsx(Ze,{}),loader:Je},{path:"weight-track",element:e.jsx(tt,{}),loader:et},{path:"all-exercises",element:e.jsx(dt,{}),loader:lt},{path:"add-exercise",element:e.jsx(pt,{}),action:mt},{path:"edit-exercise/:id",element:e.jsx(ut,{}),action:ht,loader:gt}]}]}]),jt=()=>e.jsx(ae,{router:ft});J.createRoot(document.getElementById("root")).render(e.jsxs(Q.StrictMode,{children:[e.jsx(jt,{}),e.jsx(be,{position:"top-right",autoClose:3e3,theme:"dark"})]}));
