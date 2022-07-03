import {MReactDispSetter, WithOptional} from "../types/HelperTypes";
import {Item, TableReduxStructure, TLineInformation, TTableLine} from "../redux/reduxTypes";
import {Column, DefaultValue, TableStructure, TSelectOptions} from "../types/TableStructure";
import {TBigPictureHeaderTitleCustom} from "../componets/BigPicture/BigPictureType";
import {CustomFunctionMap} from "./customFunction";
import React, {FC} from "react";
import {TCell} from "../componets/Column/Cell/cellTypes";
import {TLine} from "../componets/Line/Line";
import {TransformedExternalLineToRedux} from "./TableWebAPI";
import {TableWebCustomView} from "../componets/TableWeb/View/TableWebCustomViewTypes";
import {HeaderCustomView} from "../componets/Header/CustomHeader/CustomHeaderType";

export type TableButtons = {
    isShow: boolean
}
export type SetInnerTable = (lineInformation: TLine) => TableExternalShieldData | undefined
export type CustomLineWrapper ={ table: CustomLine, innerTable?: CustomLine }
export type CustomTableWrapper ={ table: TCustomTable, innerTable?: TCustomTable }
export type TTableInit = {
    tableStructure: TableStructure,
    externalData?: TableExternalShieldData,
    externalOptionsMap?: Map<string, TSelectOptions[]>
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCells?: CustomCells
    customLine: CustomLineWrapper
    customTable: CustomTableWrapper
    customHeader?: TCustomHeader
    tableButtons?: TableButtons
    setInnerTable?: SetInnerTable
    isHeaderShow?: boolean
}
export type CustomCells = {
    table?: CustomCellMap<any>
    innerTable?: CustomCellMap<any>
}
export type ViewMode = 'table' | 'innerTable'
export type TTableConnect = {
    setTableExternalState?: MReactDispSetter<TableReduxStructure>
    tableStructure: TableStructure
    tableData?: TransformedExternalLineToRedux[]
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCells?: CustomCells
    viewMode?: ViewMode
    customLine: CustomLineWrapper
    customTable: CustomTableWrapper
    customHeader?: TCustomHeader
    tableButtons?: TableButtons
    isHeaderShow?: boolean
    setInnerTable?: SetInnerTable
}
export type CustomCellProps<T = unknown> = { cellInformation: TCell<T>, lineInformation: TTableLine }

export type CustomCellComponent<T = unknown> = React.FC<{ cellName: string }>
export type CustomCell<T = any> = {
    Component: CustomCellComponent<T>
    cellParam?: {
        default?: DefaultValue<T>
    }
}
export type CustomCellMap<T = any> = Map<string, CustomCell<T>>
export type TTableExternalState = {
    toUpdate: TTableLine[]
    toDelete: TTableLine[]
    toCreate: TTableLine[]
}
export type CellExternalData<T> = { nameColumn: string, value: T }
export type TableExternalLineData = {
    lineInformation: WithOptional<TLineInformation, 'id'>
    columns: ExternalDataColumn<unknown>[]
}
export type TableExternalShieldData = TableExternalLineData[]

export type ExternalDataColumn<T> = WithOptional<Item, 'value' | 'nameColumn'>

export type CustomHeaderBigComponents = {} & TBigPictureHeaderTitleCustom

export type CustomTableBigComponents = {
    columnParam: Map<string, Column>
    lineData: TTableLine
}

export type CustomComponents = {
    headerBigComponents?: FC<CustomHeaderBigComponents>
    tableBigComponents?: FC<CustomTableBigComponents>
}

export type CustomLine = FC<TLine>

export type TCustomTable = FC<TableWebCustomView>
export type TCustomHeader = FC<HeaderCustomView>
