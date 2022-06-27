import {useMemo, useState} from "react";
import {Column, TableStructure, TSelectOptions} from "../types/TableStructure";
import {
    CustomComponents, TableButtons,
    TableExternalShieldData,
    TTableConnect,
    TTableExternalState,
    TTableInit
} from "./TableWebAPITypes";
import {executeColumns} from "../hooks/executeColumns";
import {arrayOfObjectsToMap} from "../hellpers/helpers";
import {TInitialValue} from "../componets/Panels/onActions/onCreateLine";
import {TableReduxStructure} from "../redux/reduxTypes";


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
        // setTableExternalDataJSON: MReactDispSetter<TableExternalShieldData>
        setOptionsMap: React.Dispatch<React.SetStateAction<Map<string, TSelectOptions[]>>>
        data: {
            tableExternalState: TableReduxStructure
        }
        columnsMapped: {
            columns: Map<string, Column>
        },
    }
}
export const prepareTableExternalState = (): TTableExternalState => ({
    toUpdate: [],
    toDelete: [],
    toCreate: [],
})

export const useConnectWebTableState = ({
                                            tableStructure,
                                            externalData,
                                            externalOptionsMap,
                                            customComponents,
                                            customFunctionMap,
                                            customCells,
                                            customLine,
                                            tableButtons,
                                        }: TTableInit): TUseConnectWebTableState => {
    const [tableExternalDataJSON, setTableExternalDataJSON] = useState<TableExternalShieldData>(externalData || [])
    const [tableExternalState, setTableExternalState] = useState<TableReduxStructure>({data: []})

    const tableData: TInitialValue[] | undefined = useMemo(() => {
        return tableExternalDataJSON && transformExternalData(tableExternalDataJSON)(tableStructure)
    }, [])
    const columns = executeColumns(tableStructure)
    const [optionsMap, setOptionsMap] = useState<Map<string, TSelectOptions[]>>(useUploadOptions(columns, externalOptionsMap))
    const connector: TTableConnect = useMemo(() => ({
        setTableExternalState,
        tableStructure,
        optionsMap,
        tableData,
        customComponents: customComponents ? customComponents : {},
        customFunctionMap,
        customCells,
        customLine,
        tableButtons,
    }), [optionsMap, tableStructure, tableData])
    return {
        connector,
        api: {
            setOptionsMap,
            data: {
                tableExternalState
            },
            columnsMapped: {
                columns,
            },
        }
    }
}

