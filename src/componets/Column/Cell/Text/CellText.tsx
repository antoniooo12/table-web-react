import cl from '../Input.module.scss'

import React from 'react';
import {TCell} from "../cellTypes";
import {useTest} from "../cellHooks";

const CellText: React.FC<TCell<string>> & {} = ({setExternalValue, externalValue, additionalParams, cellParam}) => {
    const setter = setExternalValue((v)=>v)
    const [innerValue,setValue, setValueHtml] = useTest<string>(setter, externalValue)

    return (
        <>
            <input
                placeholder={cellParam.placeholder}
                value={externalValue as string}
                onChange={setValueHtml}
                className={cl.wrapper}/>
        </>
    );
};

export {CellText};