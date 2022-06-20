import React from 'react';
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import {onChange} from "../utils/onChange";
import cl from '../CustomCell.module.scss'

const OrdinaryNumber: CustomCellComponent<number> = ({cellInformation, lineInformation}) => {
    const {externalValue, setExternalValue} = cellInformation
    const onChangeSet = onChange<number>(setExternalValue, 'number')
    return (
        <input className={cl.wrapper} value={externalValue} onChange={onChangeSet} type={"number"}/>
    );
};

export {OrdinaryNumber};