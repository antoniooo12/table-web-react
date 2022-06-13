import {MReactDispSetter, WithOptional} from "../types/HelperTypes";
import {Item, TLineInformation, TTableLine} from "../redux/reduxTypes";
import {Column, TableStructure, TSelectOptions} from "../types/TableStructure";
import {TInitialValue} from "../componets/Panels/onActions/onCreateLine";
import {TBigPictureHeaderTitleCustom} from "../componets/BigPicture/BigPictureType";

export type TTableInit = {
    tableStructure: TableStructure,
    externalData: TableExternalShieldData,
    externalOptionsMap: Map<string, TSelectOptions[]>
    customComponents?: CustomComponents
}
export type TTableConnect = {
    // tableExternalState: TableReduxStructure
    setTableExternalState: MReactDispSetter<TTableExternalState>
    tableStructure: TableStructure
    tableData?: TInitialValue[]
    optionsMap: Map<string, TSelectOptions[]>
    customComponents: CustomComponents
}
export type TTableExternalState = {
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

export type ExternalDataColumn<T> = WithOptional<Item<unknown>, 'value' | 'nameColumn'>

export type CustomHeaderBigComponents = {} & TBigPictureHeaderTitleCustom

export type CustomTableBigComponents = {
    columnParam: Map<string, Column>
    lineData: TTableLine
}
export type CustomComponents = {
    headerBigComponents?: React.FC<CustomHeaderBigComponents>
    tableBigComponents?: React.FC<CustomTableBigComponents>
}