import {createContext, useContext, useEffect, useState} from "react";
import {TCell2} from "../cellTypes";
import {TTableLine} from "../../../../redux/reduxTypes";
import {CustomCellProps} from "../../../../API/TableWebAPITypes";
import {useLineContext} from "../../../Line/LineContext";
import {recursiveMapSearch} from "../../../../hellpers/helpers";
import {setCellValue} from "../../../Line/Views/utils";
import {useActionsTable} from "../../../../hooks/useActionsTable";
import {useEffectSkipMount} from "../../../../hooks/utils";

type TCellCustomContext<T> = { cellInformationMap: Map<string, TCell2<T>>, lineInformation: TTableLine }

export const CellCustomContext = createContext<TCellCustomContext<any>>({} as TCellCustomContext<any>)

export const useCellCustomContext = <T>(cellName: string): CustomCellProps<T> => {

    const context = useContext(CellCustomContext)
    if (!context) {
        throw new Error('useCellCustomContext')
    }
    const {tableChangeCell} = useActionsTable()
    const {columns} = useLineContext()
    const cellValue = recursiveMapSearch(columns, cellName, 'subColumns').value as T
    const [val, setVal] = useState<T>(cellValue)
    const setterToRedux = setCellValue(tableChangeCell)(context.lineInformation.lineInformation.id, cellName)
    useEffectSkipMount(() => {
        // setterToRedux(val)
        tableChangeCell({
            nameCell: cellName,
            value: val,
            status: 'isAll',
            lineId: context.lineInformation.lineInformation.id
        })
    }, [val])
    const cellProps = context.cellInformationMap.get(cellName) as TCell2<any>
    const props: CustomCellProps<T> = {
        ...context,
        cellInformation: {
            ...cellProps,
            setExternalValue: setVal,
            externalValue: cellValue,
        },
    }
    return props
}
