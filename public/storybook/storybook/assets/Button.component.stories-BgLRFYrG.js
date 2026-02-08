import{j as n}from"./index-BVMsp8Jz.js";import{B as r}from"./Button.component-BdnBxRI7.js";const c={title:"Components/Button",component:r,argTypes:{intent:{control:"select",options:["primary","secondary","destructive","ghost"]},size:{control:"select",options:["sm","md","lg","full"]},radius:{control:"select",options:["sm","md","full"]},density:{control:"select",options:["compact","normal"]},loading:{control:"boolean"},disabled:{control:"boolean"},onPress:{action:"clicked"}}},s={args:{children:"Click Me",intent:"primary",size:"md",radius:"md",density:"normal",loading:!1,disabled:!1}},a=["primary","secondary","destructive","ghost"],i=["sm","md","lg"],t={render:()=>n.jsx("div",{className:"space-y-8 p-4",children:a.map(e=>n.jsxs("div",{className:"space-y-3",children:[n.jsx("div",{className:"text-sm font-medium",children:e}),n.jsxs("div",{className:"flex gap-4 flex-wrap",children:[i.map(o=>n.jsxs(r,{intent:e,size:o,children:[e," ",o]},o)),n.jsx(r,{intent:e,loading:!0,children:"Loading"}),n.jsx(r,{intent:e,disabled:!0,children:"Disabled"})]})]},e))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    intent: 'primary',
    size: 'md',
    radius: 'md',
    density: 'normal',
    loading: false,
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-4">\r
      {intents.map(intent => <div key={intent} className="space-y-3">\r
          <div className="text-sm font-medium">{intent}</div>\r
\r
          <div className="flex gap-4 flex-wrap">\r
            {sizes.map(size => <ButtonComponent key={size} intent={intent} size={size}>\r
                {intent} {size}\r
              </ButtonComponent>)}\r
\r
            <ButtonComponent intent={intent} loading>\r
              Loading\r
            </ButtonComponent>\r
\r
            <ButtonComponent intent={intent} disabled>\r
              Disabled\r
            </ButtonComponent>\r
          </div>\r
        </div>)}\r
    </div>
}`,...t.parameters?.docs?.source}}};const m=["Playground","Variants"];export{s as Playground,t as Variants,m as __namedExportsOrder,c as default};
