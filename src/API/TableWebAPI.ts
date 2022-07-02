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
    const lines: TransformedExternalLineToRedux[] = tableExternalData.map(line => {
        const temp = arrayOfObjectsToMap(line.columns, "nameColumn")
        console.log('000000')
        console.log(line)

        const columnInformation: TInitialValue = [...columns.entries()].reduce((accum: TInitialValue, [key, columnParams]) => {
            const column = temp.get(key)
            return accum.set(key, {value: column?.value, id: column?.id, subData: column?.subColumns})
        }, new Map())
        console.log('cells: ')
        console.log(temp.size)
        return {
            columnInformation,
            lineInformation: {
                id: line.lineInformation.id
            }
        }
    })
    return lines
}


type TUseConnectWebTableState = {
    connector: TTableConnect
    api: {
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
                                            customTable,
                                            customHeader,
                                            isHeaderShow,
                                        }: TTableInit): TUseConnectWebTableState => {
    const [tableExternalDataJSON, setTableExternalDataJSON] = useState<TableExternalShieldData>(externalData || [])
    const [tableExternalState, setTableExternalState] = useState<TableReduxStructure>({data: []})

    const tableData: TransformedExternalLineToRedux[] | undefined = useMemo(() => {
        return tableExternalDataJSON && transformExternalData(tableExternalDataJSON)(tableStructure)
    }, [])
    const columns = executeColumns(tableStructure)
    const connector: TTableConnect = useMemo(() => ({
        setTableExternalState,
        tableStructure,
        tableData,
        customComponents: customComponents ? customComponents : {},
        customFunctionMap,
        customCells,
        customLine,
        tableButtons,
        setInnerTable,
        customTable,
        customHeader,
        isHeaderShow,
    }), [tableStructure, tableData])
    return {
        connector,
        api: {
            data: {
                tableExternalState
            },
            columnsMapped: {
                columns,
            },
        }
    }
}

