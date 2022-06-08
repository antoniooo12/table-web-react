import cl from '../Input.module.scss'

import React from 'react';
import {TCell} from "../cellTypes";
import {useTest} from "../cellHooks";
import {BaseInput, TBaseInput} from "../BaseInput/BaseInput";

export type Middleware<T, N> = (s: T) => N
type TCellText = TCell<string> & { baseInputProps?: TBaseInput, middleware?: Middleware<any, string> }
const CellText: React.FC<TCellText> = (
    {
        setExternalValue,
        externalValue,
        additionalParams,
        cellParam,
        baseInputProps,
        middleware,
    }) => {
    const [innerValue, setValue, setValueHtml] = useTest<string>(setExternalValue, externalValue, middleware)

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