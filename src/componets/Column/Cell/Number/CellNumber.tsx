// @ts-ignore
import cl from '../Input.module.scss'

import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from 'react';

import {TCell} from "../cellTypes";
import {InputAdditionalAttributes, InputAdditionalParamsNumber} from "../../../../types/TableStructure";
import {useCellState, useTest} from "../cellHooks";
import {useEffectSkipMount} from "../../../../hooks/utils";


const CellNumber: React.FC<TCell> = ({setExternalValue, externalValue, additionalParams, cellParam}) => {
    if (additionalParams && !isInputAdditionalParamsNumber(additionalParams)) {
        throw new Error('Error in additional params CellNumber')
    }

    const [innerValue, setValueHtml] = useTest(setExternalValue, externalValue)


    useEffectSkipMount(() => {
        if (additionalParams) {
            if (externalValue > additionalParams.max) {
                setExternalValue(additionalParams.max)
            } else if (externalValue < additionalParams.min) {
                setExternalValue(additionalParams.min)
            }
        }
    }, [additionalParams && (externalValue > additionalParams?.max || externalValue < additionalParams?.min)])

    return (
        <input
            value={innerValue as number}
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