import {Columns} from "../types/TableStructure";
import {HTMLInputTypeAttribute} from "react";

export type TableState = {
    storage: TableStructure

}
export type TableStructure = Map<keyof typeof EnumStatus, TableDataStructure>

type TableDataStructure = {
    data: TTableLine[]
}
export type TTableLine = {
    id: number | string
    toDelete: boolean
    wasEdit: boolean
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
}

export interface IOnChangeCell {
    lineId: number | string,
    value: number | string | boolean | HTMLInputTypeAttribute,
    nameCell: string,
    status: keyof typeof EnumStatus
    TypeSubData: "Array" | "Map" | "default"
    parentCell?: string
    // dependentColumns?: DependentColumn[]
}

type CreateLine = {
    type: EnumTableReducer.createLine
    payload: Columns
}
type ChangeCell = {
    type: EnumTableReducer.changeCell
    payload: IOnChangeCell
}
export type TableReducerActions = CreateLine | ChangeCell