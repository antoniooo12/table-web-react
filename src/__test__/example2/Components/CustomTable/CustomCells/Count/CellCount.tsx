import React from 'react';
import cl from './Count.module.scss'
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../../table/tableStructure";
import {SvgAdd} from "./SVG/SvgAdd";
import {SvgMinus} from "./SVG/SvgMinus";

const CellCount: CustomCellComponent<number> = ({cellInformation, lineInformation}) => {
    const type = lineInformation.columns.get(EColumns2.type)?.value as string
    const {externalValue, setExternalValue} = cellInformation

    const onMore = () => {

        setExternalValue(prevState => prevState + 0.1)
    }
    const onLess = () => {
        setExternalValue(prevState => prevState - 0.1)
    }
    const count = Math.round(((externalValue) + Number.EPSILON) * 100) / 100
    return (
        <div className={cl.wrapper}>
            <button onClick={onLess} className={cl.button}>
                <SvgMinus/>
            </button>
            <span className={cl.data}>
                 {count} <span className={cl.type}> {type}</span>
            </span>
            <button onClick={onMore} className={cl.button}>
                <SvgAdd/>
            </button>
        </div>

    );
};

export {CellCount};
