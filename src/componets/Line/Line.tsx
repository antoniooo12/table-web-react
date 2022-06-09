import cl from './Line.module.scss'
import React, {CSSProperties, useContext} from 'react';
import {Item, TStatus} from "../../redux/reduxTypes";
import {Column} from "../Column/Column";
import clsx from "clsx";
import {LineContext} from "./LineContext";
import {LineDeleteButton} from "./LineButtons/LineDeleteButton/LineDeleteButton";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {calcGridColumnWidth, calcWidth} from "../../utils/utilsTableView";
import {LineEditButton} from "./LineButtons/LineEditButton/LineEditButton";

export type TLineData = {
    status: TStatus
    id: string
    toDelete: boolean
    wasEdit: boolean
}
export type TLine = {
    status: TStatus
    lineIdt: string
    wasEdit: boolean
    toDelete: boolean
    columnsData: Map<string, Item<unknown>>
    lineData: TLineData
}
const Line: React.FC<TLine> = React.memo(({lineData, columnsData}) => {
    const {columns} = useContext(TableWebContext)
    const clasName: string = clsx({
        [cl.wrapper]: true,
        [cl.allLine]: lineData.status === 'isAll',
        [cl.newLine]: lineData.status === 'isNew',
        [cl.deleteLine]: lineData.toDelete,
    })

    const widthGrid = calcGridColumnWidth([...columns.values()], 'width')
    const width = calcWidth([...columns.values()])

    const styleGrid: CSSProperties = {
        gridTemplateColumns: widthGrid,
        width,
    }
    return (
        <LineContext.Provider
            value={lineData}
        >
            <span
                style={{display: "flex"}}
            >
                <div
                    style={styleGrid}
                    className={clasName}
                >
                    {[...columnsData.entries()].map(([columnName, cellData]) => {
                        return (
                            <>
                                <Column
                                    key={cellData.id}
                                    columnName={columnName}
                                    cellData={cellData}
                                />
                            </>
                        )

                    })}

                </div>
                <span>
                    <LineDeleteButton
                        lineId={lineData.id}
                        status={lineData.status}
                    />
                    <LineEditButton lineId={lineData.id}/>
                </span>
            </span>
        </LineContext.Provider>
    );
})

export {Line};
