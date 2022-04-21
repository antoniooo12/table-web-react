import React, {useEffect, useMemo} from 'react';
import cl from '../Input.module.scss'
import {TCell} from "../cellTypes";
import {useCellState} from "../cellHooks";
import {
    InputAdditionalAttributes,
    InputAdditionalParamsNumber,
    InputAdditionalParamsTel
} from "../../../../types/TableStructure";

const CellTel: React.FC<TCell> = ({setExternalValue, externalValue, additionalParams}) => {
    if (additionalParams && !isInputAdditionalParamsTel(additionalParams)) {
        throw new Error('Error in additional params CellTel')
    }
    const [innerValue, setValueHtml, setValue] = useCellState(setExternalValue, externalValue)

    const validateValue = useMemo((): string=>{
        const countryPart = additionalParams?.format.split(/[\[,\],_]/).filter(str=> Boolean(str))
        console.log(additionalParams)
        console.log(countryPart)
        return 'number'
    },[innerValue])
    return (
        <input
            value={validateValue}
            inputMode={'tel'}
            type={"text"}
            className={cl.wrapper}
        />
    );
};

function isInputAdditionalParamsTel(params: InputAdditionalAttributes): params is InputAdditionalParamsTel {
    return (params as InputAdditionalParamsTel).format !== undefined
}

export {CellTel};