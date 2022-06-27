import React from 'react';
import cl from './Line.module.scss'
import {CustomLine} from "../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../table/tableStructure";
import {useGetCell} from "../../../../../utils/useGetCell";


const Line: CustomLine = () => {
    const Cell = useGetCell<EColumns2>([EColumns2.sum, EColumns2.title, EColumns2.cost, EColumns2.count],{
        sum:{className:cl.sum},
        title:{className:cl.title}
    })
    return (
        <div className={cl.wrapper}>
            <div className={cl.leftBlock}>
                {Cell.title}
                {Cell.cost}
            </div>
            <div className={cl.rightBlock}>
                <div className={cl.rightBlockInfo}>
                    {Cell.sum}
                    {Cell.count}
                </div>
            </div>
        </div>
    );
};

export {Line};
