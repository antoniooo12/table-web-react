import {ReactDispSetter} from "../types/HelperTypes";
import {TableReduxStructure} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";

export type TTableConnect = {
    tableEternalState: TableReduxStructure
    settableEternalState: ReactDispSetter<TableReduxStructure>
    tableStructure: TableStructure
    tableExternalData?: ExternalDataTable
}

export type CellExternalData<T> = { nameColumn: string, value: T }
export type TableExternalLineData = CellExternalData<unknown>[]
export type TableExternalShieldData = TableExternalLineData[]

export type ExternalDataColumn<T> = { id?: string, value: T, nameColumn: string, type?: string  }
export type ExternalDataTable = Map<string, ExternalDataColumn<unknown>>[]