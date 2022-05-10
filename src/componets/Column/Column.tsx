import cl from './Column.module.scss'
import React, {useContext} from 'react';
import {TableWebContext} from "../TableWeb/TableWebContext";
import {Item} from "../../redux/reduxTypes";
import clsx from "clsx";
import {CellAggregator} from "./Cell/CellAggregator";

type TColumn = {
    columnName: string
    cellData: Item<unknown>
}
const Column: React.FC<TColumn> = React.memo(({cellData, columnName}) => {
    const {columns} = useContext(TableWebContext)
    const columnParam = columns.get(columnName)
    if (!columnParam) {
        throw new Error('error columnParam')
    }

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
                            // [cl.small]: subColumns,
                        })
                    }
                >
                    <CellAggregator
                        nameInput={columnName}
                        cellData={cellData}
                        cellParam={columnParam.cellParam}
                    />


                </div>
            }
        </div>
    );
},)
export {Column}