import {EnumTableReducer, IOnChangeCell, TOnDeleteLine} from "./reduxTypes";
import {Columns} from "../types/TableStructure";


export const tableCreateLine = (columnsStructure: Columns, initialValue:  Map<string, unknown>) => ({
    type: EnumTableReducer.createLine,
    payload: {columnsStructure,initialValue}
})
export const tableChangeCell = <T>(information: IOnChangeCell<T>) => ({
    type: EnumTableReducer.changeCell,
    payload: information,
})
export const tableDeleteLine = (information: TOnDeleteLine) => ({
    type: EnumTableReducer.deleteLine,
    payload: information,
})