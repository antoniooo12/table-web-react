import {CellParam, InputAdditionalAttributes} from "../../../types/TableStructure";
import React from "react";
import {BaseInput} from "./BaseInput/BaseInput";

export type TCell<N> = {
    externalValue: N
    setExternalValue: (value: N) => void
    cellParam: CellParam<N>,
    additionalParams?: InputAdditionalAttributes
}
