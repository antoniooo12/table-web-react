import {CellParam, InputAdditionalAttributes} from "../../../types/TableStructure";
import React from "react";
import {BaseInput} from "./BaseInput/BaseInput";
import {MReactDispSetter} from "../../../types/HelperTypes";

export type TCell<N> = {
    externalValue: N
    setExternalValue: MReactDispSetter<N>
    // setExternalValue: (value: N) => void
    cellParam: CellParam<N>,
    additionalParams?: InputAdditionalAttributes
    className?:string
}
