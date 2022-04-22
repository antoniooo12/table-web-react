import React, {PropsWithChildren, useContext, useEffect, useMemo, useState} from 'react';
import {Item} from "../../../redux/reduxTypes";
import {CellParam, Column, InputType} from "../../../types/TableStructure";
import {CellText} from "./Text/CellText";
import {TCell} from "./cellTypes";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {LineContext} from "../../Line/LineContext";
import {CellNumber} from "./Number/CellNumber";
import {CellBoolean} from "./Boolean/CellBoolean";
import {CellTel} from "./Tel/CellTel";
import {selectType} from "../../../hellpers/helpers";
import {useEffectSkipMount} from "../../../hooks/utils";

export type TCellAggregator = {
    nameInput: string
    cellData: Item
    columnParam: CellParam
    parentCell?: string
}

const cells: { [key in InputType]: { cell: React.FC<TCell>, initialState: string | number | boolean } } = {
    text: {cell: CellText, initialState: ''},
    number: {cell: CellNumber, initialState: 0},
    checkbox: {cell: CellBoolean, initialState: false},
    tel: {cell: CellTel, initialState: ''},
    textarea: {cell: CellText, initialState: ''},
    select: {cell: CellText, initialState: ''},
}
// function prepareInitialState()
const CellAggregator: React.FC<TCellAggregator> = React.memo(({columnParam, nameInput, cellData}) => {
    const selectedCell = cells[columnParam.type]
    const [value, setValue] = useState<typeof selectedCell.initialState>(columnParam.default || selectedCell.initialState)
    const {tableChangeCell} = useActionsTable()
    const lineData = useContext(LineContext)
    const Component = selectedCell.cell
    const test: PropsWithChildren<TCell> = {
        children: null,
        setExternalValue: setValue,
        externalValue: cellData.value,
        additionalParams: columnParam.additionalParams,
        cellParam: columnParam,
    }

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
            < Component setExternalValue={setValue} externalValue={value} additionalParams={columnParam.additionalParams} cellParam={columnParam}/>
            {/*{selectedCell.cell.call({}, test)}*/}
                </>
                );
            },);


            export {CellAggregator}