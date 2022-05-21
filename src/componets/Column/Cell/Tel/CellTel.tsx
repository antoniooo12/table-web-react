import React from 'react';
import cl from '../Input.module.scss'
import {TCell} from "../cellTypes";
import {useTest} from "../cellHooks";
import {InputAdditionalAttributes, InputAdditionalParamsTel} from "../../../../types/TableStructure";
import {validateNumber} from "./validateNumber";
import {telMiddleware} from "./telMiddleware";
import {} from 'fp-ts'
const CellTel: React.FC<TCell<string>> = ({setExternalValue, externalValue, additionalParams}) => {
    if (additionalParams && !isInputAdditionalParamsTel(additionalParams)) {
        throw new Error('Error in additional params CellTel')
    }
    const setter = setExternalValue(telMiddleware)
    const [innerValue, setValue, setValueHtml] = useTest<string>(setter, externalValue)
    const innerTelModify = validateNumber(externalValue)
    return (
        <input
            onChange={setValueHtml}
            value={innerTelModify}
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