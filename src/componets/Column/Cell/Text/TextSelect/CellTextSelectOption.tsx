import React, {useContext} from 'react';
import cl from './CellTextSelectOption.module.scss'
import {TSelectOptions} from "../../../../../types/TableStructure";
import {ContextCellTextSelect} from "./hellpers/ContextCellTextSelect";

type CellTextSelectOption = {
    setValue: (str: string) => void
    option: TSelectOptions
}
const CellTextSelectOption: React.FC<CellTextSelectOption>
    = ({option, setValue}) => {
    const {listController} = useContext(ContextCellTextSelect)
    const {text} = option
    const onMouseDown = () => {
        listController.setClickByOption(true)
    }
    const onMouseUp = ()=>{
        setValue(text)
        listController.setFocus(false)
        listController.setClickByOption(false)
    }
    return (
        <div
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            className={cl.wrapper}
        >
            {text}
        </div>
    );
};

export {CellTextSelectOption};