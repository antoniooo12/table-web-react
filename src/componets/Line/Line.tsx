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
// export type
export type TLine = {
    status: TStatus
    lineIdt: number |string
    wasEditt: boolean
    toDeletet: boolean
    columnsData: Map<string, Item<unknown>>
    lineData: TLineData
}
type Line = TLine
const Line: React.FC<Line> = React.memo(({lineData, columnsData}) => {
    const [launch, setLaunch] = useState(true)


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

// todo refactoring
function areEqual(prev: TLine, next: TLine) {
    // console.log(isEqual(prev.lineData, next.lineData))
    // console.log(Object.is(prev.lineData, prev.lineData))
    console.log(prev.columnsData === next.columnsData || isEqual(prev.lineData, next.lineData))
    return prev.columnsData === next.columnsData || isEqual(prev.lineData, next.lineData)
}

export {Line};
// todo refactoring
function isEqual(obj1: any, obj2: any) {
    var props1 = Object.getOwnPropertyNames(obj1);
    var props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length != props2.length) {
        return false;
    }
    for (var i = 0; i < props1.length; i++) {
        let val1 = obj1[props1[i]];
        let val2 = obj2[props1[i]];
        let isObjects = typeof val1 === 'object' && typeof val2 === 'object'
        if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
            return false;
        }
    }
    return true;
}