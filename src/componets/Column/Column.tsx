// @ts-ignore
import cl from './Column.module.scss'

import React, {useContext} from 'react';
import {TableWebContext} from "../TableWeb/TableWebContext";
import {Item} from "../../redux/reduxTypes";
import {Input} from "./Cell/Input/Input";
import clsx from "clsx";
import {CellAggregator} from "./Cell/CellAggregator";

type TColumn = {
    columnName: string
    cellData: Item
}
const Column: React.FC<TColumn> = React.memo(({cellData, columnName}) => {
    const {columns} = useContext(TableWebContext)
    const columnParam = columns.get(columnName)
    if (!columnParam) {
        throw new Error('error columnParam')
    }
    const position = columnParam.position || 'full'
    const subColumns = columnParam.subColumns

    return (
        <div>
            {!columnParam.hidden &&
                <div
                    style={{
                        width: `${columnParam.width}px`,
                    }}
                    className={
                        clsx({
                            [cl.wrapper]: true,
                            [cl.small]: subColumns,
                        })
                    }
                >
                    <CellAggregator
                        nameInput={columnName}
                        cellData={cellData}
                        columnParam={columnParam}
                    />


                </div>
            }
        </div>
    );
},)
export {Column}