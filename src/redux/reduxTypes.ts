import {Columns} from "../types/TableStructure";
import {HTMLInputTypeAttribute} from "react";

export type TableState = {
    storage: TableReduxStructure

}
export type TableReduxStructure = {
    data: TTableLine[]
}

// type TableDataStructure = {
//
// }
export type TStatus = keyof typeof EnumStatus
export type TLineInformation = {
    id: number | string
    toDelete: boolean
    wasEdit: boolean
    status: TStatus
}
export type TTableLine = {
    lineInformation: TLineInformation
    columns: TableColumn
}
export type TableColumn = Map<string, Item<unknown>>
export type Item<T> = {
    id: number | string;
    nameColumn: string;
    value: T
    wasEdit: boolean;
    subData?: Map<string, Item<T>>
    dependencyId?: Record<string, number>
}

export enum EnumStatus {
    isAll = "isAll",
    isNew = "isNew",
}

export enum EnumTableReducer {
    createLine = 'createLine',
    changeCell = 'changeCell',
    deleteLine = 'deleteLine'
}

export interface IOnChangeCell<T> {
    lineId: string | number
    value: T | number | string | boolean | HTMLInputTypeAttribute,
    nameCell: string,
    status: TStatus
    TypeSubData?: "Array" | "Map" | "default"
    parentCell?: string
    // dependentColumns?: DependentColumn[]
}

export type TOnDeleteLine = {
    lineId: number | string
    status: TStatus
}
type CreateLine = {
    type: EnumTableReducer.createLine
    payload: { columnsStructure: Columns, initialValue: Map<string, unknown> }
}
type ChangeCell<T> = {
    type: EnumTableReducer.changeCell
    payload: IOnChangeCell<T>
}
type DeleteLine = {
    type: EnumTableReducer.deleteLine
    payload: TOnDeleteLine
}
export type TableReducerActions<T> = CreateLine | ChangeCell<T> | DeleteLine