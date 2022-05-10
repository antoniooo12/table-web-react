import {ReactDispSetter, WithOptional} from "../types/HelperTypes";
import {Item, TableColumn, TableReduxStructure, TLineInformation} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";

export type TTableConnect = {
    tableEternalState: TableReduxStructure
    settableEternalState: ReactDispSetter<TableReduxStructure>
    tableStructure: TableStructure
    tableExternalData?: ExternalDataTable
}

export type CellExternalData<T> = { nameColumn: string, value: T }
export type TableExternalLineData = {
    lineInformation: TLineInformation
    columns: ExternalDataColumn<unknown>[]
}
export type TableExternalShieldData = TableExternalLineData[]

export type ExternalDataColumn<T> =  WithOptional<Item<unknown>, 'value' | 'nameColumn'>
export type ExternalDataTable = Map<string, ExternalDataColumn<unknown>>[]