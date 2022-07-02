import {createContext, useContext} from "react";
import {TCell2} from "../cellTypes";
import {TTableLine} from "../../../../redux/reduxTypes";
import {CustomCellProps} from "../../../../API/TableWebAPITypes";
import {useLineContext} from "../../../Line/LineContext";
import {recursiveMapSearch} from "../../../../hellpers/helpers";

type TCellCustomContext<T> = { cellInformationMap: Map<string, TCell2<T>>, lineInformation: TTableLine }

export const CellCustomContext = createContext<TCellCustomContext<any>>({} as TCellCustomContext<any>)

export const useCellCustomContext = <T>(cellName: string): CustomCellProps<T> => {

    const context = useContext(CellCustomContext)
    if (!context) {
        throw new Error('useCellCustomContext')
    }
    const {columns} = useLineContext()
    // const cellValue = columns.get(cellName)!.value as T
    const cellValue = recursiveMapSearch(columns, cellName, 'subColumns').value as T
    const cellProps = context.cellInformationMap.get(cellName) as TCell2<any>
    const props: CustomCellProps<T> = {
        ...context,
        cellInformation: {
            ...cellProps,
            externalValue:cellValue,
        },
    }
    return props
}
