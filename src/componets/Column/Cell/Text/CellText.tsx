import cl from '../Input.module.scss'

import React from 'react';
import {TCell} from "../cellTypes";
import {useTest} from "../cellHooks";
import {BaseInput, TBaseInput} from "../BaseInput/BaseInput";

const CellText: React.FC<TCell<string> & { baseInputProps?: TBaseInput }>
    = ({
           setExternalValue,
           externalValue,
           additionalParams,
           cellParam,
           baseInputProps
       }) => {
    const [innerValue, setValue, setValueHtml] = useTest<string>(setExternalValue, externalValue)

    return (
        <>
            <BaseInput
                placeholder={cellParam.placeholder}
                value={externalValue}
                onChange={setValueHtml}
                className={cl.wrapper}
                {...baseInputProps}
            />
        </>
    );
};

export {CellText};