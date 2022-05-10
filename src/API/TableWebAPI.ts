import {useState} from "react";
import {TableReduxStructure} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";
import {
    CellExternalData,
    ExternalDataColumn,
    ExternalDataTable,
    TableExternalShieldData,
    TTableConnect
} from "./TableWebAPITypes";
import {executeColumns} from "../hooks/executeColumns";
import {arrayOfObjectsToMap, findDefaultValue} from "../hellpers/helpers";


const transformExternalData = (tableExternalData: TableExternalShieldData) => (tableStructure: TableStructure): ExternalDataTable => {
    const columns = executeColumns(tableStructure)

    return tableExternalData.map(line => {
        const temp = arrayOfObjectsToMap(line.columns, "nameColumn")
        console.log(temp)
        return [...columns.entries()].reduce((accum, [key, columnParams]) => {
            const te: ExternalDataColumn<unknown> | undefined = temp.get(key)
            const te2: ExternalDataColumn<unknown> = {
                value: findDefaultValue(columnParams.cellParam.default),
                nameColumn: key
            }
            const property = te || te2
            return accum.set(key, property)
        }, new Map<string, ExternalDataColumn<unknown>>())
    })
}

export const useConnectWebTableState = (tableStructure: TableStructure, tableExternalData?: TableExternalShieldData): TTableConnect => {
    const [tableEternalState, settableEternalState] = useState<TableReduxStructure>({data: []})
    const data: ExternalDataTable | undefined = tableExternalData && transformExternalData(tableExternalData)(tableStructure)
    return {tableEternalState, settableEternalState, tableStructure, tableExternalData: data}
}
