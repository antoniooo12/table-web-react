import {MReactDispSetter, WithOptional} from "../types/HelperTypes";
import {Item, TLineInformation, TTableLine} from "../redux/reduxTypes";
import {TableStructure, TSelectOptions} from "../types/TableStructure";
import {TInitialValue} from "../componets/Panels/onActions/onCreateLine";

export type TTableConnect = {
    // tableExternalState: TableReduxStructure
    setTableExternalState: MReactDispSetter<TTableExternalState>
    tableStructure: TableStructure
    tableData?: TInitialValue[]
    optionsMap: Map<string, TSelectOptions[]>
}
export type TTableExternalState ={
    toUpdate: TTableLine[]
    toDelete: TTableLine[]
    toCreate: TTableLine[]
}
export type CellExternalData<T> = { nameColumn: string, value: T }
export type TableExternalLineData = {
    lineInformation: TLineInformation
    columns: ExternalDataColumn<unknown>[]
}
export type TableExternalShieldData = TableExternalLineData[]

export type ExternalDataColumn<T> =  WithOptional<Item<unknown>, 'value' | 'nameColumn'>
export type ExternalDataTable = Map<string, ExternalDataColumn<unknown>>[]