import {EnumTableReducer, IOnChangeCell, TOnDeleteLine} from "./reduxTypes";
import {Columns} from "../types/TableStructure";


export const tableCreateLine = (columnsStructure: Columns) => ({
    type: EnumTableReducer.createLine,
    payload: columnsStructure
})
export const tableChangeCell = (information: IOnChangeCell) => ({
    type: EnumTableReducer.changeCell,
    payload: information,
})
export const tableDeleteLine = (information: TOnDeleteLine)=>({
    type: EnumTableReducer.deleteLine,
    payload: information,
})