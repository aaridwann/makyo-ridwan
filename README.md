# 🧩 MAKYO UI Components + Blueprint JSON Hydration Binding State

This project is a small component system built with:

- React + TypeScript
- TailwindCSS
- class-variance-authority (CVA)
- Storybook
- JSON Blueprint Hydration + Binding State

The goal is to create reusable UI components that can also be rendered dynamically from JSON payloads.

---

## ✨ Features

- Polymorphic components (Text, Stack, Button, Input, Dropdown)
- Variant system powered by CVA
- Dynamic UI rendering from JSON (`hydrate`)
- Full Storybook playground
- Snapshot unit tests
- Tailwind styling
- Deployed together with Storybook on Vercel

---

## 📦 Components

#### Dropdown Component

##### Props

| Props         | Type                                                     |
| ------------- | -------------------------------------------------------- |
| options       | DropdownOption[]                                         |
| value         | string[]                                                 |
| onChange      | (value: string[]) => void                                |
| multiple      | boolean                                                  |
| searchable    | boolean                                                  |
| portal        | boolean                                                  |
| renderOptions | (option: DropdownOption, selected: boolean) => ReactNode |
| placeholder   | string                                                   |
| outlined      | boolean                                                  |
| filtering     | boolean                                                  |

## 📦 JSON Example Full Component

### JSON Example

```
{
    "roots": [
        {
            "id": "stack-root",
            "type": "stack",
            "props": {
                "direction": "column",
                "gap": "xl"
            },
            "children": [
                {
                    "id": "text-title",
                    "type": "text",
                    "props": {
                        "variant": "heading",
                        "as": "h3",
                        "className": "mb-2"
                    },
                    "children": "Region"
                },
                {
                    "id": "2",
                    "type": "dropdown",
                    "props": {
                        "value": "Hello",
                        "size": "xs",
                        "placeholder": "Choose your country",
                        "label": "State",
                        "multiple": true,
                        "searchable": true,
                        "outlined": true,
                        "options": [
                            {
                                "value": "indonesia",
                                "label": "Indonesia"
                            },
                            {
                                "value": "singapore",
                                "label": "Singapore"
                            },
                            {
                                "value": "australia",
                                "label": "Australia"
                            },
                            {
                                "value": "arab",
                                "label": "arab"
                            },
                            {
                                "value": "china",
                                "label": "china"
                            }
                        ]
                    },
                    "bind": "country"
                },
                {
                    "id": "3",
                    "type": "button",
                    "children": "Submit",
                    "props": {
                        "intent": "primary"
                    }
                }
            ]
        }
    ]
}
```
