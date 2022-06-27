import React, {useEffect, useLayoutEffect} from 'react';
import {BaseInputText} from "../BaseInput/BaseInput";
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import cl from '../CustomCell.module.scss'

const DeliveryTimeBefore: CustomCellComponent<string> = ({cellInformation}) => {

    return (
        <td>
            <BaseInputText
                externalValue={cellInformation.externalValue}
                setExternalValue={cellInformation.setExternalValue}
                baseInputProps={{type: "time", className: cl.wrapper}}
            />
        </td>
    );
};

export {DeliveryTimeBefore};
