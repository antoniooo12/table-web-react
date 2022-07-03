import React from 'react';
import cl from './Line.module.scss'
import {CustomLine} from "../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../table/tableStructure";
import {useGetCell} from "../../../../../utils/useGetCell";
import {CellTitle} from "../CustomCells/Title/CellTitle";
import CellCost from "../CustomCells/Cost/CellCost";
import {CellSum} from "../CustomCells/Sum/CellSum";
import {CellCount} from "../CustomCells/Count/CellCount";


const Line: CustomLine = () => {
    // const Cell = useGetCell<EColumns2>([EColumns2.sum, EColumns2.title, EColumns2.cost, EColumns2.count],{
    //     sum:{className:cl.sum},
    //     title:{className:cl.title}
    // })
    return (
        <div className={cl.wrapper}>
            <div className={cl.leftBlock}>
                <CellTitle className={cl.title} cellName={EColumns2.title}/>
                <CellCost className={cl.title} cellName={EColumns2.cost}/>
            </div>
            <div className={cl.rightBlock}>
                <div className={cl.rightBlockInfo}>
                    <CellSum className={cl.title} cellName={EColumns2.sum}/>
                    <CellCount className={cl.title} cellName={EColumns2.count}/>
                </div>
            </div>
        </div>
    );
};

export {Line};
