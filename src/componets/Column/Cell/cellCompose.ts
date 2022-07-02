
import {InputType} from "../../../types/TableStructure";
import React from "react";
import {TCell} from "./cellTypes";

import {CellCustom} from "./Custom/CellCustom";

type TInitialCells = { [key in InputType]: { cell: React.FC<TCell<any>> } }
export const cells: TInitialCells = {
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
