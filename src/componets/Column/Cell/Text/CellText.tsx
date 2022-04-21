import cl from '../Input.module.scss'

import React from 'react';
import {TCell} from "../cellTypes";
import {useCellState} from "../cellHooks";

const CellText: React.FC<TCell> & {} = ({setExternalValue, externalValue, additionalParams}) => {
    const [innerValue, setInnerValue] = useCellState(setExternalValue, externalValue)

    return (
        <>
            <input
                value={externalValue as string}
                onChange={setInnerValue}
                className={cl.wrapper}/>
        </>
    );
};

export {CellText};