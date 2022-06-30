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
import {TableReduxStructure, TLineInformation, TTableLine} from "../redux/reduxTypes";

export type TransformedExternalLineToRedux = { lineInformation: Partial<TLineInformation>, columnInformation: TInitialValue }
const transformExternalData = (tableExternalData: TableExternalShieldData) => (tableStructure: TableStructure):
    TransformedExternalLineToRedux[] => {
    const columns = executeColumns(tableStructure)
    const s: TransformedExternalLineToRedux[] = tableExternalData.map(line => {
        const temp = arrayOfObjectsToMap(line.columns, "nameColumn")
        const columnInformation: TInitialValue = [...columns.entries()].reduce((accum: TInitialValue, [key, columnParams]) => {
            const column = temp.get(key)
            return accum.set(key, {value: column?.value, id: column?.id})
        }, new Map())
        return {
            columnInformation,
            lineInformation: {
                id: line.lineInformation.id
            }
        }
    })
    return s
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
                                            setInnerTable,
                                        }: TTableInit): TUseConnectWebTableState => {
    const [tableExternalDataJSON, setTableExternalDataJSON] = useState<TableExternalShieldData>(externalData || [])
    const [tableExternalState, setTableExternalState] = useState<TableReduxStructure>({data: []})

    const tableData: TransformedExternalLineToRedux[] | undefined = useMemo(() => {
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
        setInnerTable,
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

