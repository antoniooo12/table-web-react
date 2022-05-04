import {CellText} from "./Text/CellText";
import {CellNumber} from "./Number/CellNumber";
import {CellBoolean} from "./Boolean/CellBoolean";
import {CellTel} from "./Tel/CellTel";
import {CellSelect} from "./Select/CellSelect";
import {CellParam, InputType} from "../../../types/TableStructure";
import React from "react";
import {TCell} from "./cellTypes";
import {absurd} from "fp-ts/function";

export const cells = {
    text: {cell: CellText, initialState: ''},
    number: {cell: CellNumber, initialState: 0},
    checkbox: {cell: CellBoolean, initialState: false},
    tel: {cell: CellTel, initialState: ''},
    textarea: {cell: CellText, initialState: ''},
    select: {cell: CellSelect, initialState: ''},

}
type initialCells= { [key in InputType]: { cell: React.FC<TCell<any>>, initialState: unknown } }
export const initialCells = (outerCells: initialCells) => {
    const cells = outerCells
    const getCells = (key: InputType) => {
        return cells[key]
    }
    return {
        getCells: getCells,
    }
}