import {CellText} from "./Text/CellText";
import {CellNumber} from "./Number/CellNumber";
import {CellBoolean} from "./Boolean/CellBoolean";
import {CellTel} from "./Tel/CellTel";
import {CellSelect} from "./Select/CellSelect";
import {InputType} from "../../../types/TableStructure";
import React from "react";
import {TCell} from "./cellTypes";
import {CellTextSelect} from "./Text/TextSelect/CellTextSelect";
import {CellData} from "./Data/CellData/CellData";
import {CellTime} from "./Time/CellTime/CellTime";
import {CellCustom} from "./Custom/CellCustom";

type TInitialCells = { [key in InputType]: { cell: React.FC<TCell<any>> } }
export const cells: TInitialCells = {
    text: {cell: CellText},
    number: {cell: CellNumber},
    checkbox: {cell: CellBoolean},
    tel: {cell: CellTel},
    textarea: {cell: CellText},
    select: {cell: CellSelect},
    textSelect: {cell: CellTextSelect},
    date: {cell: CellData},
    time: {cell: CellTime},
    custom: {cell: CellCustom},
}

export const initialCells = (outerCells: TInitialCells) => {
    const cells = outerCells
    const getCells = (key: InputType) => {
        return cells[key]
    }
    return {
        getCells: getCells,
    }
}