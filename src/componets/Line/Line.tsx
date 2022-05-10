// @ts-ignore
import cl from './Line.module.scss'
import React, {useCallback, useEffect, useState} from 'react';
import {EnumStatus, Item, TableColumn, TStatus, TTableLine} from "../../redux/reduxTypes";
import {Column} from "../Column/Column";
import clsx from "clsx";
import {LineContext} from "./LineContext";
import {LineDeleteButton} from "./LineButtons/LineDeleteButton/LineDeleteButton";
import {Columns} from "../../types/TableStructure";

export type TLineData = {
    status: TStatus
    id: number | string
    toDelete: boolean
    wasEdit: boolean
}
export type TLine = {
    status: TStatus
    lineIdt: number |string
    wasEdit: boolean
    toDelete: boolean
    columnsData: Map<string, Item<unknown>>
    lineData: TLineData
}
type Line = TLine
const Line: React.FC<Line> = React.memo(({lineData, columnsData}) => {
    return (
        <LineContext.Provider
            value={lineData}
        >
            <div
                className={clsx({
                    [cl.wrapper]: true,
                    [cl.allLine]: lineData.status === 'isAll',
                    [cl.newLine]: lineData.status === 'isNew',
                    [cl.deleteLine]: lineData.toDelete,
                })}
            >
                {[...columnsData.entries()].map(columns => {
                    const cellData = columns[1]
                    const columnName = columns[0]
                    return (
                        <Column
                            columnName={columnName}
                            cellData={cellData}
                        />
                    )
                })}
                <div>
                    <LineDeleteButton
                        lineId={lineData.id}
                        status={lineData.status}
                    />
                </div>
            </div>
        </LineContext.Provider>
    );
})

export {Line};
