import {useMemo, useState} from "react";
import {TableReduxStructure} from "../redux/reduxTypes";
import {Column, TableStructure, TSelectOptions} from "../types/TableStructure";
import {TableExternalShieldData, TTableConnect} from "./TableWebAPITypes";
import {executeColumns} from "../hooks/executeColumns";
import {arrayOfObjectsToMap} from "../hellpers/helpers";
import {TInitialValue} from "../componets/Panels/onCreateLine";
import {MReactDispSetter} from "../types/HelperTypes";


const transformExternalData = (tableExternalData: TableExternalShieldData) => (tableStructure: TableStructure): TInitialValue[] => {
    const columns = executeColumns(tableStructure)
    return tableExternalData.map(line => {
        const temp = arrayOfObjectsToMap(line.columns, "nameColumn")
        return [...columns.entries()].reduce((accum: TInitialValue, [key, columnParams]) => {
            return accum.set(key, {value: temp.get(key)?.value})
        }, new Map())
    })
}
const useUploadOptions = (columns: Map<string, Column>, externalOptionsMap: Map<string, TSelectOptions[]> = new Map<string, TSelectOptions[]>()) => useMemo(() => {
    const newOptionsMap = new Map<string, TSelectOptions[]>()
    for (const [columnKey, column] of columns) {
        if (column?.cellParam.type === 'textSelect') {
            const additionalParams = column.cellParam.additionalParams
            if (additionalParams?.type === 'InputAdditionalParamsSelectV2') {
                const externalOptions = externalOptionsMap.get(column.cellParam.name) || []
                newOptionsMap.set(column.cellParam.name, [...additionalParams.variants, ...externalOptions])
            }
        }
    }
    return newOptionsMap
}, [])

type TUseConnectWebTableState = {
    connector: TTableConnect
    api: {
        setTableExternalData: MReactDispSetter<TableExternalShieldData>
        setOptionsMap: React.Dispatch<React.SetStateAction<Map<string, TSelectOptions[]>>>
    }
}
export const useConnectWebTableState = (tableStructure: TableStructure, externalData: TableExternalShieldData, externalOptionsMap: Map<string, TSelectOptions[]>): TUseConnectWebTableState => {
    const [tableExternalData, setTableExternalData] = useState(externalData)
    const [tableEternalState, settableEternalState] = useState<TableReduxStructure>({data: []})
    const columns = executeColumns(tableStructure)
    const [optionsMap, setOptionsMap] = useState<Map<string, TSelectOptions[]>>(useUploadOptions(columns, externalOptionsMap))
    const data: TInitialValue[] | undefined = tableExternalData && transformExternalData(tableExternalData)(tableStructure)
    return {
        connector: {tableEternalState, settableEternalState, tableStructure, tableExternalData: data, optionsMap},
        api: {
            setTableExternalData,
            setOptionsMap,
        }
    }
}

