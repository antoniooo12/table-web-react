import React from 'react';
import cl from './Cost.module.scss'
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../../table/tableStructure";


const CellCost: CustomCellComponent<number> = ({cellInformation, lineInformation}) => {
    const type = lineInformation.columns.get(EColumns2.type)?.value as  string
    return (
        <div className={cl.wrapper}>
            {cellInformation.externalValue} <span className={cl.type}>грн/{type}</span>
        </div>
    );
};

export default CellCost;
