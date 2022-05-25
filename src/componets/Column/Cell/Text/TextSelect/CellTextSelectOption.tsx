import React from 'react';
import cl from './CellTextSelectOption.module.scss'
import {TSelectOptions} from "../../../../../types/TableStructure";

type CellTextSelectOption = TSelectOptions & {
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