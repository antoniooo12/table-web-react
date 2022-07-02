import {useContext, useEffect, useState} from "react";
import {TableWebContext} from "../../TableWeb/TableWebContext";
import {cells, initialCells} from "./cellCompose";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {LineContext} from "../../Line/LineContext";
import {useEffectSkipMount} from "../../../hooks/utils";
import {TCellAggregator} from "./CellAggregator";
import {useInnerTable} from "../../TableWeb/InnerTableConnector/InnerTableConnector";
import {CellCustom} from "./Custom/CellCustom";
import {TCell} from "./cellTypes";


export const useCellAggregatorService = ({cellParam, cellData, nameInput}: TCellAggregator)=> {
    const {previous: [previousValues, setPreviousValue]} = useContext(TableWebContext)
    const [value, setValue] = useState(cellData.value)
    const {tableChangeCell} = useActionsTable()
    const {lineInformation:{status,id}} = useContext(LineContext)
    useEffectSkipMount(() => {
        if (cellData.value !== value) {
            setValue(cellData.value)
        }
    }, [cellData])
    // useUpdateCustomFunction(nameInput, setValue)
    useEffectSkipMount(() => {
        tableChangeCell({
            status: status,
            lineId: id,
            nameCell: nameInput,
            value: value
        })
        setPreviousValue(nameInput, value)
    }, [value])
    return { setValue, value, cellParam}
}
