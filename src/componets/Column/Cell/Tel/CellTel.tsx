import React, {ChangeEvent, useMemo} from 'react';
import cl from '../Input.module.scss'
import {TCell} from "../cellTypes";
import {setInnerValueHtmlR, useTest} from "../cellHooks";
import {InputAdditionalAttributes, InputAdditionalParamsTel} from "../../../../types/TableStructure";

const CellTel: React.FC<TCell> = ({setExternalValue, externalValue, additionalParams}) => {
    if (additionalParams && !isInputAdditionalParamsTel(additionalParams)) {
        throw new Error('Error in additional params CellTel')
    }
    if (typeof externalValue !== "string") {
        throw new Error('Error in CellText: externalValue is not a string')
    }

    const [innerValue, setValueHtml, setValue] = useTest<string>(setExternalValue, externalValue)

    const validateValue = useMemo((): string => {
        if (additionalParams) {
            const template = innerValue.split('').filter(str => Number(str) || str === '+' || str === ' ' || str === '0').join('')
            console.log(template)
            let cleaned = ('' + template).replace(/\D/g, '');
            const regex = new RegExp(/^(2|)?(\d{3})(\d{3})(\d{4})$/,)
            let match = cleaned.match(regex);
            if (match) {
                console.log(match)
                return [match[2], ' ', match[3], ' ', match[4]].join('');
            }
            return template
        }
        return ''
    }, [innerValue])
    const validateSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value.split('').filter(str => Number(str) || str === '+' || str === ' ' || str === '0').join(''))
    }
    return (
        <input
            onChange={validateSetValue}
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