import React from 'react';
import cl from '../Input.module.scss'
import {TCell} from "../cellTypes";
import {InputAdditionalAttributes, InputAdditionalParamsSelect} from "../../../../types/TableStructure";
import {useTest} from "../cellHooks";
import {useOnChangeSelect} from "./utilsCellSelect";

const CellSelect: React.FC<TCell<string>> = ({cellParam, additionalParams, setExternalValue, externalValue}) => {
    if (additionalParams && !isInputAdditionalParamsSelect(additionalParams)) {
        throw new Error('Error in additional params CellTel')
    }
    const setter = setExternalValue((v)=>v)

    const [innerValue, setValue, setInnerValueHtml] = useTest(setter, externalValue)
    const setHtml = useOnChangeSelect(setValue)
    return (
        <select
            value={innerValue}
            onChange={setHtml}
            className={cl.wrapper}>
            {additionalParams?.variants.map((obj) => {
                return <option value={obj.value}>{obj.text}</option>
            })
            }
        </select>
    );
};

function isInputAdditionalParamsSelect(params: InputAdditionalAttributes): params is InputAdditionalParamsSelect {
    return (params as InputAdditionalParamsSelect).variants !== undefined
}

export {CellSelect};