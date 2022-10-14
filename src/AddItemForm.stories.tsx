import {AddItemForm} from "./AddItemForm";
import React from "react";
import {actions} from "@storybook/addon-actions";





export default {
    title: "AddItemForm Component",
    component: AddItemForm,
    parameters: {actions: { argTypesRegex: " " }}

}
 let callback = actions('fvfvffvf.bg')


export const AddItemFormBAseExample = (props: any) => {
    return <AddItemForm  addItem={callback}  />
}
