import {MReactDispSetter, WithOptional} from "../types/HelperTypes";
import {Item, TableReduxStructure, TLineInformation, TTableLine} from "../redux/reduxTypes";
import {Column, TableStructure, TSelectOptions} from "../types/TableStructure";
import {TInitialValue} from "../componets/Panels/onActions/onCreateLine";
import {TBigPictureHeaderTitleCustom} from "../componets/BigPicture/BigPictureType";
import {CustomFunctionMap} from "./customFunction";
import React, {FC} from "react";
import {TCell} from "../componets/Column/Cell/cellTypes";
import {TLine} from "../componets/Line/Line";

export type TTableInit = {
    tableStructure: TableStructure,
    externalData: TableExternalShieldData,
    externalOptionsMap: Map<string, TSelectOptions[]>
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCells?: CustomCells
    customLine?: CustomLine
}
export type CustomCells = {
    table?: CustomCellMap<any>
    innerTable?: CustomCellMap<any>
}
export type ViewMode = 'table' | 'innerTable'
export type TTableConnect = {
    setTableExternalState?: MReactDispSetter<TableReduxStructure>
    tableStructure: TableStructure
    tableData?: TInitialValue[]
    optionsMap?: Map<string, TSelectOptions[]>
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCells?: CustomCells
    viewMode?: ViewMode
    customLine?: CustomLine
}
export type CustomCellProps<T = unknown> = { cellInformation: TCell<T>, lineInformation: TTableLine }

export type CustomCellComponent<T = unknown> = FC<CustomCellProps<T>>
export type CustomCellMap<T = any> = Map<string, CustomCellComponent<T>>
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

export type ExternalDataColumn<T> = WithOptional<Item, 'value' | 'nameColumn'>

export type CustomHeaderBigComponents = {} & TBigPictureHeaderTitleCustom

export type CustomTableBigComponents = {
    columnParam: Map<string, Column>
    lineData: TTableLine
}

export type CustomComponents = {
    headerBigComponents?: React.FC<CustomHeaderBigComponents>
    tableBigComponents?: React.FC<CustomTableBigComponents>
}

export type CustomLine = FC<TLine>