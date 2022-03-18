// @ts-ignore
import cl from './Line.module.scss'
import React from 'react';
import {EnumStatus, TableColumn} from "../../redux/reduxTypes";
import {Cell} from "../Cell/Cell";
import clsx from "clsx";
import {LineContext} from "./LineContext";

type Line = {
    // status: "isAll" | "isNew"
    columnsData: TableColumn
    lineData: {
        lineId: number | string
        status: keyof typeof EnumStatus
    }
}
const Line: React.FC<Line> = React.memo(({lineData, columnsData}) => {
    return (
        <LineContext.Provider
            value={{
                lineId: lineData.lineId,
                status: lineData.status,
            }}
        >
            <div
                className={clsx({
                    [cl.wrapper]: true,
                    [cl.newLine]: lineData.status === 'isNew',
                })}
            >
                {[...columnsData.entries()].map(columns => {
                    const cellData = columns[1]
                    const columnName = columns[0]
                    return (
                        <Cell
                            columnName={columnName}
                            cellData={cellData}
                        />
                    )
                })}
            </div>
        </LineContext.Provider>
    );
},);

export {Line};