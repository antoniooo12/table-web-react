import {CellParam, Column, InputAdditionalAttributes} from "../../../types/TableStructure";
import React from "react";
import {SNB} from "../../../types/HelperTypes";

export type TCell = {
    externalValue: string | number | boolean
    setExternalValue: React.Dispatch<React.SetStateAction<string | number | boolean>>
    cellParam: CellParam,
    additionalParams?: InputAdditionalAttributes
}
