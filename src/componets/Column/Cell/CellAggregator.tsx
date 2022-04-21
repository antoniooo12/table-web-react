import React, {PropsWithChildren, useContext, useEffect, useState} from 'react';
import {Item} from "../../../redux/reduxTypes";
import {Column, InputType} from "../../../types/TableStructure";
import {CellText} from "./Text/CellText";
import {TCell} from "./cellTypes";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {LineContext} from "../../Line/LineContext";
import {CellNumber} from "./Number/CellNumber";
import {CellBoolean} from "./Boolean/CellBoolean";
import {SNB} from "../../../types/HelperTypes";

export type TCellAggregator = {
    nameInput: string
    cellData: Item
    columnParam: Column
    parentCell?: string
}

const cells: { [key in InputType]: { cell: React.FC<TCell>, initialState: string | number | boolean } } = {
    text: {cell: CellText, initialState: ''},
    number: {cell: CellNumber, initialState: 0},
    checkbox: {cell: CellBoolean, initialState: false},
    tel: {cell: CellText, initialState: ''},
    textarea: {cell: CellText, initialState: ''},
    select: {cell: CellText, initialState: ''},
}
const CellAggregator: React.FC<TCellAggregator> = React.memo(({columnParam, nameInput, cellData}) => {
    const selectedCell = cells[columnParam.type]
    const [value, setValue] = useState<typeof selectedCell.initialState>(selectedCell.initialState)
    const {tableChangeCell} = useActionsTable()
    const lineData = useContext(LineContext)

    const test: PropsWithChildren<TCell> = {
        children: null,
        setExternalValue: setValue,
        externalValue: cellData.value,
        additionalParams: columnParam.additionalParams,
    }
    const selectType = (initialValue: SNB, value: SNB) => {
        if (initialValue === 0) {
            return Number(value)
        } else if (initialValue === false || initialValue === true) {
            return Boolean(value)
        }
        return value
    }
    useEffect(() => {
        tableChangeCell({
            status: lineData.status,
            lineId: lineData.id,
            nameCell: nameInput,
            value: selectType(selectedCell.initialState, value)
        })
    }, [value])

    return (
        <>
            {selectedCell.cell.call({}, test)}
        </>
    );
},);

export {CellAggregator}