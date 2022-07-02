import React from 'react';
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import cl from "../CustomCell.module.scss";
import {onChange} from "../utils/onChange";
import {useCellCustomContext} from "../../../../componets/Column/Cell/Custom/CellCustomContext";

const CellText: CustomCellComponent<string> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<string>(cellName)

    const {externalValue, setExternalValue} = cellInformation
    const onChangeSet = onChange(setExternalValue, 'string')
    const isDisabled =
        lineInformation.lineInformation.status !== 'isNew'
        && !lineInformation.lineInformation.wasEdit

    return (
        <td>
            <input
                disabled={isDisabled}
                className={cl.wrapper}
                value={externalValue}
                onChange={(e) => {
                    setExternalValue(e.target.value)
                }}
                type={"text"}
            />
        </td>
    );
};

export {CellText}
