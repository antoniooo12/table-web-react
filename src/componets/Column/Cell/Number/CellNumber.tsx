// @ts-ignore
import cl from '../Input.module.scss'

import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';

import {TCell} from "../cellTypes";
import {InputAdditionalAttributes, InputAdditionalParamsNumber} from "../../../../types/TableStructure";
import {useCellState} from "../cellHooks";
import {useEffectSkipMount} from "../../../../hooks/utils";

const CellNumber: React.FC<TCell> = ({setExternalValue, externalValue, additionalParams}) => {
    if (additionalParams && !isInputAdditionalParamsNumber(additionalParams)) {
        throw new Error('Error in additional params CellNumber')
    }
    const [innerValue, setValueHtml, setValue] = useCellState(setExternalValue, externalValue)

    useEffect(() => {
        setValue(additionalParams?.min || 0)
    }, [])

    useEffectSkipMount(() => {
        if (additionalParams) {
            if (externalValue > additionalParams.max) {
                setValue(additionalParams.max)
            } else if (externalValue < additionalParams.min) {
                setValue(additionalParams.min)
            }
        }
    }, [additionalParams && (externalValue > additionalParams?.max || externalValue < additionalParams?.min)])

    return (
        <input

            onChange={setValueHtml}
            value={innerValue as number}
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