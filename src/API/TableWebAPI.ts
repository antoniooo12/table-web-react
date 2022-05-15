import {useState} from "react";
import {TableReduxStructure} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";
import {TableExternalShieldData, TTableConnect} from "./TableWebAPITypes";
import {executeColumns} from "../hooks/executeColumns";
import {arrayOfObjectsToMap} from "../hellpers/helpers";
import {findInitialValueToCreateLine, TInitialValue} from "../componets/Panels/onCreateLine";
import {string} from "fp-ts";


const transformExternalData = (tableExternalData: TableExternalShieldData) => (tableStructure: TableStructure): TInitialValue[] => {
    const columns = executeColumns(tableStructure)
    const s = findInitialValueToCreateLine(columns,)
    return tableExternalData.map(line => {
        const temp = arrayOfObjectsToMap(line.columns, "nameColumn")
        return [...columns.entries()].reduce((accum: TInitialValue, [key, columnParams]) => {
            // columnParams.
            return accum.set(key, {value: temp.get(key)?.value})
        }, new Map())
    })
    // return tableExternalData.map(line => {
    //     const temp = arrayOfObjectsToMap(line.columns, "nameColumn")
    //     console.log(temp)
    //     return [...columns.entries()].reduce((accum, [key, columnParams]) => {
    //         const te: ExternalDataColumn<unknown> | undefined = temp.get(key)
    //         const te2: ExternalDataColumn<unknown> = {
    //             value: findDefaultValue(columnParams.cellParam.default),
    //             nameColumn: key
    //         }
    //         const property = te || te2
    //         return accum.set(key, property)
    //     }, new Map<string, ExternalDataColumn<unknown>>())
    // })
}

export const useConnectWebTableState = (tableStructure: TableStructure, tableExternalData?: TableExternalShieldData): TTableConnect => {
    const [tableEternalState, settableEternalState] = useState<TableReduxStructure>({data: []})
    const data: TInitialValue[] | undefined = tableExternalData && transformExternalData(tableExternalData)(tableStructure)
    console.log(data)
    const [] = useState(data)
    return {tableEternalState, settableEternalState, tableStructure, tableExternalData: data, }
}
