import cl from '../Input.module.scss'

import React from 'react';

import {TCell} from "../cellTypes";
import {InputAdditionalAttributes, InputAdditionalParamsNumber} from "../../../../types/TableStructure";
import {useTest} from "../cellHooks";
import {numberMiddleware} from "./numberMiddleware";


const CellNumber: React.FC<TCell<number>> = ({setExternalValue, externalValue, additionalParams, cellParam}) => {
    if (additionalParams && !isInputAdditionalParamsNumber(additionalParams)) {
        throw new Error('Error in additional params CellNumber')
    }
    const setter = setExternalValue(additionalParams? numberMiddleware(additionalParams) : (v)=>v)
    const [innerValue, setValue, setValueHtml] = useTest<number>(setter, externalValue)

    return (
        <input
            value={externalValue as number}
            onChange={setValueHtml}
            max={additionalParams?.max}
            step={additionalParams?.step}
            min={additionalParams?.min}
            type={'number'}
            className={cl.wrapper}
        />
    );
};

function isInputAdditionalParamsNumber(params: InputAdditionalAttributes): params is InputAdditionalParamsNumber {
    return (params as InputAdditionalParamsNumber).min !== undefined
}

export {CellNumber}