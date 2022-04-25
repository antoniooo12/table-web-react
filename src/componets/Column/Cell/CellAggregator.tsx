import React, {useContext, useState} from 'react';
import {Item} from "../../../redux/reduxTypes";
import {CellParam, InputType} from "../../../types/TableStructure";
import {CellText} from "./Text/CellText";
import {TCell} from "./cellTypes";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {LineContext} from "../../Line/LineContext";
import {CellNumber} from "./Number/CellNumber";
import {CellBoolean} from "./Boolean/CellBoolean";
import {CellTel} from "./Tel/CellTel";
import {selectType} from "../../../hellpers/helpers";
import {useEffectSkipMount} from "../../../hooks/utils";
import {customSetExternalCell} from "./Tel/validateNumber";

export type TCellAggregator = {
    nameInput: string
    cellData: Item
    columnParam: CellParam
    parentCell?: string
}

const cells = {
    text: {cell: CellText, initialState: ''},
    number: {cell: CellNumber, initialState: 0},
    checkbox: {cell: CellBoolean, initialState: false},
    tel: {cell: CellTel, initialState: ''},
    textarea: {cell: CellText, initialState: ''},
    select: {cell: CellText, initialState: ''},

}
type initialCells= { [key in InputType]: { cell: React.FC<TCell<any>>, initialState: unknown } }
export const initialCells = (outerCells: initialCells) => {
    const cells = outerCells
    const getCells = (key: InputType) => {
        return cells[key]
    }
    return {
        getCells: getCells
    }
}


const CellAggregator: React.FC<TCellAggregator> = React.memo(({columnParam, nameInput, cellData}) => {
    const {getCells} = initialCells(cells)
    const selectedCell = getCells(columnParam.type)
    type initialType = typeof selectedCell.initialState
    const [value, setValue] = useState<initialType>(columnParam.default || selectedCell.initialState)
    const {tableChangeCell} = useActionsTable()
    const lineData = useContext(LineContext)
    const Component = selectedCell.cell

    const test = getCells(columnParam.type)


    useEffectSkipMount(() => {
        tableChangeCell({
            status: lineData.status,
            lineId: lineData.id,
            nameCell: nameInput,
            value: selectType(selectedCell.initialState, value)
        })
    }, [value])

    return (
        <>
            < Component setExternalValue={customSetExternalCell<typeof selectedCell.initialState>(setValue)}
                        externalValue={value}
                        additionalParams={columnParam.additionalParams}
                        cellParam={columnParam}/>
        </>
    );
},);


export {CellAggregator}