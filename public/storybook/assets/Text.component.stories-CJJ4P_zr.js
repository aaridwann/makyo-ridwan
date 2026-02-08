import{j as n}from"./index-BVMsp8Jz.js";import{T as t}from"./Text.component-DuI2DlGE.js";const d={title:"Components/Text",component:t,argTypes:{variant:{control:"select",options:["body","caption","label","heading","subheading","title","display"]},color:{control:"select",options:["default","muted","subtle","primary","secondary","success","warning","danger","info","white"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},align:{control:"select",options:["left","center","right","justify"]},italic:{control:"boolean"},underline:{control:"boolean"},tracking:{control:"select",options:["tight","normal","wide"]},truncate:{control:"boolean"},multiline:{control:"boolean"},clamp:{control:"select",options:[1,2,3,4]}}},o={args:{children:"Edit me from controls",variant:"body",color:"default",weight:"normal",align:"left",italic:!1,underline:!1,tracking:"normal",truncate:!1,multiline:!0}},l=["body","caption","label","heading","subheading","title","display"],s=["default","muted","subtle","primary","secondary","success","warning","danger","info"],r={render:()=>n.jsx("div",{className:"space-y-6 p-4",children:l.map(e=>n.jsxs("div",{className:"space-y-2",children:[n.jsx(t,{variant:"label",color:"muted",children:e.toUpperCase()}),s.map(a=>n.jsxs(t,{variant:e,color:a,children:[e," / ",a]},a))]},e))})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Edit me from controls',
    variant: 'body',
    color: 'default',
    weight: 'normal',
    align: 'left',
    italic: false,
    underline: false,
    tracking: 'normal',
    truncate: false,
    multiline: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">\r
      {variants.map(variant => <div key={variant} className="space-y-2">\r
          <TextComponent variant="label" color="muted">\r
            {variant.toUpperCase()}\r
          </TextComponent>\r
\r
          {colors.map(color => <TextComponent key={color} variant={variant} color={color}>\r
              {variant} / {color}\r
            </TextComponent>)}\r
        </div>)}\r
    </div>
}`,...r.parameters?.docs?.source}}};const m=["Playground","Variants"];export{o as Playground,r as Variants,m as __namedExportsOrder,d as default};
