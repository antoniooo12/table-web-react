import React from 'react';
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import {onChange} from "../utils/onChange";
import cl from '../CustomCell.module.scss'
import {useCellCustomContext} from "../../../../componets/Column/Cell/Custom/CellCustomContext";

const OrdinaryNumber: CustomCellComponent<number> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<number>(cellName)

    const {externalValue, setExternalValue} = cellInformation
    const onChangeSet = onChange<number>(setExternalValue, 'number')
    return (
        <td>
            <input
                className={cl.wrapper}
                value={externalValue}
                onChange={(e)=>{setExternalValue(Number(e.target.value))}}
                type={"number"}
            />
        </td>
    );
};

export {OrdinaryNumber};
