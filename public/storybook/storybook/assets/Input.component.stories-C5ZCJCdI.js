import{j as s}from"./index-BVMsp8Jz.js";import{I as o}from"./Input.component-DEROe7j9.js";import"./iframe-ow2fVf9u.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Input",component:o},a=[{desc:"Empty",props:{value:"",onChange:()=>{}}},{desc:"With value",props:{value:"Hello",onChange:()=>{}}},{desc:"With reset",props:{value:"Search",onChange:()=>{},onReset:()=>{}}}],e={render:()=>s.jsx("div",{className:"space-y-4 w-64",children:a.map(({desc:n,props:r})=>s.jsx(o,{...r},n))})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">\r
      {configs.map(({
      desc,
      props
    }) => <InputComponent key={desc} {...props} />)}\r
    </div>
}`,...e.parameters?.docs?.source}}};const d=["Variants"];export{e as Variants,d as __namedExportsOrder,i as default};
