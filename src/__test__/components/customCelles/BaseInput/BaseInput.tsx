import React from 'react';
import {useBaseInputService} from "./useBaseInputService";

type TBaseInputText ={
    setExternalValue: (s:string)=>void
    externalValue: string
    baseInputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

const BaseInputText:React.FC<TBaseInputText> = ({baseInputProps,setExternalValue,externalValue}) => {
    const {innerValue,setInnerValueHtml}  = useBaseInputService(setExternalValue,externalValue)
    return (
        <input
            onChange={setInnerValueHtml} value={innerValue} {...baseInputProps}/>
    );
};


export {BaseInputText};