import cl from '../Input.module.scss'

import React, {useState} from 'react';
import {TCell} from "../cellTypes";
import {useCellState, useTest} from "../cellHooks";

const CellText: React.FC<TCell> & {} = ({setExternalValue, externalValue, additionalParams, cellParam}) => {
    const [innerValue, setValueHtml] = useTest(setExternalValue, externalValue)

    return (
        <>
            <input
                placeholder={cellParam.placeholder}
                value={innerValue as string}
                onChange={setValueHtml}
                className={cl.wrapper}/>
        </>
    );
};

export {CellText};