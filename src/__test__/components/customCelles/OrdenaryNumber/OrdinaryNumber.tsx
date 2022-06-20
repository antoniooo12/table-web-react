import React from 'react';
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import {onChange} from "../utils/onChange";

const OrdinaryNumber: CustomCellComponent<number> = ({cellInformation, lineInformation}) => {
    const {externalValue, setExternalValue} = cellInformation
    const onChangeSet = onChange<number>(setExternalValue, 'number')
    return (
        <input value={externalValue} onChange={onChangeSet} type={"number"}/>
    );
};

export {OrdinaryNumber};