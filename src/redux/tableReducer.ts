import {
    EnumTableReducer,
    IOnChangeCell,
    TOnDeleteLine,
    TOnLoadExternalData,
    TOnSetEditableLine,
    TOnSetInnerTable
} from "./reduxTypes";
import {Columns} from "../types/TableStructure";
import {TInitialValue} from "../componets/Panels/onActions/onCreateLine";


export const tableCreateLine = (columnsStructure: Columns, initialValue: TInitialValue) => ({
    type: EnumTableReducer.createLine,
    payload: {columnsStructure, initialValue}
})
export const tableChangeCell = <T>(information: IOnChangeCell<T>) => ({
    type: EnumTableReducer.changeCell,
    payload: information,
})
export const tableDeleteLine = (information: TOnDeleteLine) => ({
    type: EnumTableReducer.deleteLine,
    payload: information,
})
export const tableLoadExternalData = (information: TOnLoadExternalData) => ({
    type: EnumTableReducer.loadExternalData,
    payload: information,
})
export const tableSetEditableLine = (information: TOnSetEditableLine) => ({
    type: EnumTableReducer.SetEditableLine,
    payload: information,
})
export const tableSetInnerTable = (information: TOnSetInnerTable) => ({
    type: EnumTableReducer.SetInnerTable,
    payload: information,
})
