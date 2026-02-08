import{c as m,j as e}from"./index-BVMsp8Jz.js";import{R as r}from"./iframe-ow2fVf9u.js";import{B as a}from"./Button.component-BdnBxRI7.js";import{D as s}from"./Dropdown.component-Do1rH9mt.js";import{I as i}from"./Input.component-DEROe7j9.js";import{T as l}from"./Text.component-DuI2DlGE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BLWvO2Fc.js";const u=m("flex w-full box-border",{variants:{direction:{row:"flex-row",column:"flex-col"},align:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},justify:{start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},wrap:{true:"flex-wrap",false:"flex-nowrap"},gap:{none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"}},defaultVariants:{direction:"column",align:"start",justify:"start",wrap:!1,gap:"md"}}),d={stackContainer:u},c=n=>e.jsx("div",{className:d.stackContainer(n),children:n.children});c.__docgenInfo={description:`Stack Component\r
@param {StackProps} props - Props\r
@returns {React.ReactNode} - Stack Component`,methods:[],displayName:"StackComponent",props:{direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:""},gap:{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const p=[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],v={title:"Components/Stack",component:c,argTypes:{direction:{control:"select",options:["row","column"]},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},gap:{control:"select",options:["none","xs","sm","md","lg","xl"]},wrap:{control:"boolean"}}},t={args:{direction:"column",gap:"md",align:"start",justify:"start",wrap:!1,children:e.jsxs(r.Fragment,{children:[e.jsx(l,{variant:"heading",children:"Form Example"}),e.jsx(i,{value:"This is a value",onChange:()=>{}}),e.jsx(s,{placeholder:"Choose your favorite fruits",options:p,searchable:!0,multiple:!0}),e.jsx(a,{intent:"primary",children:"Submit"})]})}},o={args:{direction:"row",align:"center",gap:"sm",wrap:!1,children:e.jsxs(r.Fragment,{children:[e.jsx(l,{children:"Search"}),e.jsx(i,{value:"",onChange:()=>{}}),e.jsx(a,{intent:"secondary",children:"Go"}),e.jsx(s,{placeholder:"Choose your favorite fruits",options:p,searchable:!0,multiple:!0})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 'md',
    align: 'start',
    justify: 'start',
    wrap: false,
    children: <React.Fragment>\r
        <TextComponent variant="heading">Form Example</TextComponent>\r
        <InputComponent value="This is a value" onChange={() => {}} />\r
        <DropdownComponent placeholder="Choose your favorite fruits" options={options} searchable multiple />\r
        <ButtonComponent intent="primary">Submit</ButtonComponent>\r
      </React.Fragment>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    align: 'center',
    gap: 'sm',
    wrap: false,
    children: <React.Fragment>\r
        <TextComponent>Search</TextComponent>\r
        <InputComponent value="" onChange={() => {}} />\r
        <ButtonComponent intent="secondary">Go</ButtonComponent>\r
        <DropdownComponent placeholder="Choose your favorite fruits" options={options} searchable multiple />\r
      </React.Fragment>
  }
}`,...o.parameters?.docs?.source}}};const b=["ColumnLayout","RowLayout"];export{t as ColumnLayout,o as RowLayout,b as __namedExportsOrder,v as default};
