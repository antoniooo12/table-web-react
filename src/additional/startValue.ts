import {HTMLInputTypeAttribute} from "react";

type StartValue = {
    [name in HTMLInputTypeAttribute]?: any
}
export const startValue: StartValue = {
    number: 0,
    text: '',
}