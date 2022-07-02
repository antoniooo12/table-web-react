import React, {ChangeEvent} from 'react';
import {CustomCellComponent, CustomCellProps} from "../../../../API/TableWebAPITypes";
import cl from '../CustomCell.module.scss'
import {useCellCustomContext} from "../../../../componets/Column/Cell/Custom/CellCustomContext";

const ProductName: CustomCellComponent = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<string>(cellName)

    const onClick = (e: ChangeEvent<HTMLInputElement>) => {
        cellInformation.setExternalValue(e.target.value)
    }
    return (
        <td>
            <input className={cl.wrapper} type="text" list="cars" value={cellInformation.externalValue} onChange={onClick}/>
            <datalist id="cars">
                <option>Volvo</option>
                <option>Saab</option>
                <option>Mercedes</option>
                <option>Audi</option>
            </datalist>
        </td>
    )
        ;
};

export {ProductName};
