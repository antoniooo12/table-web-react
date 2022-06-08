import React from 'react';
import {useTest} from "../cellHooks";

export type TBaseInput= React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    // & { setExternalValue: (value: T) => void ,externalValue: T}
const BaseInput: React.FC<TBaseInput> = ({...props}) => {

    // const [innerValue, setValue, setValueHtml] = useTest(setExternalValue, externalValue)

    return (
        <input
            // onChange={setValueHtml}
            {...props}/>
    );
};

export {BaseInput};