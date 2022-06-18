import {useContext, useEffect, useState} from "react";
import {TableWebContext} from "../../TableWeb/TableWebContext";
import {cells, initialCells} from "./cellCompose";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {LineContext} from "../../Line/LineContext";
import {useEffectSkipMount} from "../../../hooks/utils";
import {TCellAggregator} from "./CellAggregator";
import {useInnerTable} from "../../TableWeb/InnerTableConnector/InnerTableConnector";

// const useUpdateCustomFunction = (cellName: string, setter: React.Dispatch<unknown>) => {
//     const tableWebContext = useContext(TableWebContext)
//     const {customFunctionMap} = tableWebContext
//     const {innerTableMap} = useInnerTable()
//     useEffect(() => {
//         const func = customFunctionMap?.get(cellName)?.onUpdate
//         if (func) {
//             const result = func({innerTableMap, tableWebContext})
//             console.log(result)
//         }
//         console.log('lllll')
//         console.log(innerTableMap)
//     }, [innerTableMap])
// }

export const useCellAggregatorService = ({cellParam, cellData, parentCell, nameInput}: TCellAggregator) => {
    const {previous: [previousValues, setPreviousValue]} = useContext(TableWebContext)
    const {getCells} = initialCells(cells)
    const selectedCell = getCells(cellParam.type)
    const [value, setValue] = useState(cellData.value)
    const {tableChangeCell} = useActionsTable()
    const lineData = useContext(LineContext)
    const Component = selectedCell.cell
    useEffectSkipMount(() => {
        if (cellData.value !== value) {
            setValue(cellData.value)
        }
    }, [cellData])
    // useUpdateCustomFunction(nameInput, setValue)
    useEffectSkipMount(() => {
        tableChangeCell({
            status: lineData.status,
            lineId: lineData.id,
            nameCell: nameInput,
            value: value
        })
        setPreviousValue(nameInput, value)
    }, [value])
    return {Component, setValue, value, cellParam}
}