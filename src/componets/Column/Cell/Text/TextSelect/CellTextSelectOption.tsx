import React from 'react';
import cl from './CellTextSelectOption.module.scss'
import {InputAdditionalParamsSelectVariantV2} from "../../../../../types/TableStructure";
import {MReactDispSetter} from "../../../../../types/HelperTypes";

type CellTextSelectOption = InputAdditionalParamsSelectVariantV2 & {
    setValue: (str: string) => void
}
const CellTextSelectOption: React.FC<CellTextSelectOption>
    = ({text, value, disabled, setValue}) => {
    const onCLick = () => {
        setValue(text)
    }
    return (
        <div
            onClick={onCLick}
            className={cl.wrapper}
        >
            {text}
        </div>
    );
};

export {CellTextSelectOption};