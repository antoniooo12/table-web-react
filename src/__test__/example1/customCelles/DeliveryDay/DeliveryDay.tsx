import React from 'react';
import {BaseInputText} from "../BaseInput/BaseInput";
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import cl from '../CustomCell.module.scss'
import {useCellCustomContext} from "../../../../componets/Column/Cell/Custom/CellCustomContext";

const DeliveryDay: CustomCellComponent<string> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<string>(cellName)

    return (
        <td colSpan={2} style={{width: '100%'}}>
            <BaseInputText
                externalValue={cellInformation.externalValue}
                setExternalValue={cellInformation.setExternalValue}
                baseInputProps={{type: "date", className: cl.wrapper}}
            />
        </td>
    );
};

export {DeliveryDay};
