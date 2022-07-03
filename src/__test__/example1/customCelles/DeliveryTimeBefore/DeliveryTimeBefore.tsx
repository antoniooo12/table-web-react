import React from 'react';
import {BaseInputText} from "../BaseInput/BaseInput";
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import cl from '../CustomCell.module.scss'
import {useCellCustomContext} from "../../../../componets/Column/Cell/Custom/CellCustomContext";

const DeliveryTimeBefore: CustomCellComponent<string> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<string>(cellName)

    return (
        <td style={{borderRight: 'none', borderLeft:'none', borderBottom: 'none'}} >
            <BaseInputText
                externalValue={cellInformation.externalValue}
                setExternalValue={cellInformation.setExternalValue}
                baseInputProps={{type: "time", className: cl.wrapper}}
            />
        </td>
    );
};

export {DeliveryTimeBefore};
