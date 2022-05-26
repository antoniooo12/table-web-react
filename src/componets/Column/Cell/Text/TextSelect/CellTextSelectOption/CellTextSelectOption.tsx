import React, {useContext} from "react";
import {CellTextSelectOptionView} from "./CellTextSelectOptionView";
import {TSelectOptions} from "../../../../../../types/TableStructure";
import {ContextCellTextSelect} from "../hellpers/ContextCellTextSelect";

type CellTextSelectOption = {
    setValue: (str: string) => void
    option: TSelectOptions
}

export const CellTextSelectOption: React.FC<CellTextSelectOption> = ({option, setValue}) => {
    const {listController, selected} = useContext(ContextCellTextSelect)
    const {text, value} = option

    const onMouseDown = () => {
        listController.setClickByOption(true)
    }

    const onMouseUp = () => {
        setValue(text)
        listController.setFocus(false)
        listController.setClickByOption(false)
    }

    return (<CellTextSelectOptionView
        isSelected={selected === value}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        text={text}
    />)
}