import {Columns} from "../types/TableStructure";
import {HTMLInputTypeAttribute} from "react";

export type TableState = {
    storage: TableStructure

}
export type TableStructure = Map<TStatus, TableDataStructure>

type TableDataStructure = {
    data: TTableLine[]
}
export type TStatus = keyof typeof EnumStatus
export type TTableLine = {
    lineInformation: {
        id: number | string
        toDelete: boolean
        wasEdit: boolean
        status: TStatus
    }
    columns: TableColumn
}
export type TableColumn = Map<string, Item>
export type Item = {
    id: number | string;
    nameColumn: string;
    value: string | number | boolean;
    wasEdit: boolean;
    subData?: Map<string, Item>
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

export interface IOnChangeCell {
    lineId: number | string,
    value: number | string | boolean | HTMLInputTypeAttribute,
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
    payload: Columns
}
type ChangeCell = {
    type: EnumTableReducer.changeCell
    payload: IOnChangeCell
}
type DeleteLine = {
    type: EnumTableReducer.deleteLine
    payload: TOnDeleteLine
}
export type TableReducerActions = CreateLine | ChangeCell | DeleteLine