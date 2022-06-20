import React, {ChangeEvent} from 'react';
import {CustomCellProps} from "../../../../API/TableWebAPITypes";
import cl from '../CustomCell.module.scss'

const ProductName: React.FC<CustomCellProps<string>> = ({cellInformation, lineInformation}) => {
    const onClick = (e: ChangeEvent<HTMLInputElement>) => {
        cellInformation.setExternalValue(e.target.value)
    }
    return (
        <>
            <input className={cl.wrapper} type="text" list="cars" value={cellInformation.externalValue} onChange={onClick}/>
            <datalist id="cars">
                <option>Volvo</option>
                <option>Saab</option>
                <option>Mercedes</option>
                <option>Audi</option>
            </datalist>
        </>
    )
        ;
};

export {ProductName};