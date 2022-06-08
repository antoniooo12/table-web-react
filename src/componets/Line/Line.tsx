// @ts-ignore
import cl from './Line.module.scss'
import React from 'react';
import {Item, TStatus} from "../../redux/reduxTypes";
import {Column} from "../Column/Column";
import clsx from "clsx";
import {LineContext} from "./LineContext";
import {LineDeleteButton} from "./LineButtons/LineDeleteButton/LineDeleteButton";

export type TLineData = {
    status: TStatus
    id: number | string
    toDelete: boolean
    wasEdit: boolean
}
export type TLine = {
    status: TStatus
    lineIdt: number | string
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
                {[...columnsData.entries()].map(([columnName, cellData]) => {
                    console.log(cellData.subColumns)
                    return (
                        <>
                            <Column
                                key={cellData.id}
                                columnName={columnName}
                                cellData={cellData}
                            />
                            {/*<div>*/}
                                {/*{cellData.subColumns &&*/}
                                {/*    <div>*/}
                                {/*        {[...cellData.subColumns.entries()].map(([subColumnName, subColumnData]) =>*/}
                                {/*            // <div>12</div>*/}
                                {/*            <Column*/}
                                {/*                key={subColumnData.id}*/}
                                {/*                columnName={subColumnName}*/}
                                {/*                cellData={subColumnData}*/}
                                {/*            />*/}
                                {/*        )}*/}
                                {/*    </div>*/}
                                {/*}*/}
                            {/*</div>*/}
                        </>
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
