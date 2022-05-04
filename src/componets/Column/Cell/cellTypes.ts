import {CellParam, InputAdditionalAttributes} from "../../../types/TableStructure";
import React from "react";

export type TCell<N> = {
    externalValue: N
    setExternalValue: (middleware: (str: N) => N) => (value: N) => void
    cellParam: CellParam<N>,
    additionalParams?: InputAdditionalAttributes
}
