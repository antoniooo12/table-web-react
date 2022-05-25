import React, {useContext, useEffect, useState} from 'react';
import {Item} from "../../../redux/reduxTypes";
import {CellParam} from "../../../types/TableStructure";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {LineContext} from "../../Line/LineContext";
import {useEffectSkipMount} from "../../../hooks/utils";
import {customSetExternalCell} from "./Tel/validateNumber";
import {cells, initialCells} from "./cellCompose";
import {TableWebContext} from "../../TableWeb/TableWebContext";

export type TCellAggregator = {
    nameInput: string
    cellData: Item<unknown>
    cellParam: CellParam<unknown>
    parentCell?: string
}


const CellAggregator: React.FC<TCellAggregator> = React.memo(({cellParam, nameInput, cellData}) => {
    const {previous:[previousValues, setPreviousValue]} = useContext(TableWebContext)
    const {getCells} = initialCells(cells)
    const selectedCell = getCells(cellParam.type)
    const [value, setValue] = useState(cellData.value)
    const {tableChangeCell} = useActionsTable()
    const lineData = useContext(LineContext)
    const Component = selectedCell.cell

    useEffectSkipMount(() => {
        tableChangeCell({
            status: lineData.status,
            lineId: lineData.id,
            nameCell: nameInput,
            value: value
        })
        setPreviousValue(nameInput, value)
    }, [value])

    return (
        <>
            < Component
                setExternalValue={customSetExternalCell(setValue)}
                externalValue={value}
                additionalParams={cellParam.additionalParams}
                cellParam={cellParam}
            />
        </>
    );
},);


export {CellAggregator}