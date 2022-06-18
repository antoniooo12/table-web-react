import cl from './Line.module.scss'
import React, {CSSProperties, useContext, useEffect} from 'react';
import {Item, TStatus} from "../../redux/reduxTypes";
import {CellBlock} from "../Column/CellBlock";
import clsx from "clsx";
import {LineContext} from "./LineContext";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useGetWidth} from "./utils/utils";
import {LineInnerTable} from "./LineInnerTable/LineInnerTable";
import {LineButtons} from "./LineButtons/LineButtons";
import {InnerTableConnectorContext} from '../TableWeb/InnerTableConnector/InnerTableConnector';
import {useInnerTableConnectorService} from "../TableWeb/InnerTableConnector/useInnerTableConnectorService";
import {useLineService, useUpdateCustomFunction} from "./useLineService";

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
    columnsData: Map<string, Item>
    lineData: TLineData
}
const Line: React.FC<TLine> = React.memo((props) => {
    const {lineData, columnsData, lineIdt, status, wasEdit, toDelete} = props
    const {columns, shield, viewMode} = useContext(TableWebContext)
    const {styleGrid, clasName, innerTable,} = useLineService(props)

    return (
        <LineContext.Provider
            value={lineData}
        >
            <InnerTableConnectorContext.Provider
                value={{
                    innerTableMap: innerTable.innerTableMap,
                    isShowInnerTableController: innerTable.isShowInnerTableController
                }}
            >
                <div>
            <span
                className={cl.line}
            >

                <div
                    style={styleGrid}
                    className={clasName}
                >{[...columnsData.entries()].map(([columnName, cellData]) => {
                    return (
                        <CellBlock
                            viewType={'line'}
                            key={cellData.id}
                            columnName={columnName}
                            cellData={cellData}
                        />
                    )
                })}

                </div>
                 <div
                     className={clsx({[cl.deleteLine]: lineData.toDelete})}
                 />
                <div className={cl.buttonsSection}>
                    <LineButtons/>
                </div>
            </span>
                    {shield.innerTable &&  innerTable.isShowInnerTableController.isShowInnerTable && <LineInnerTable tableStructure={shield.innerTable}
                                                          setInnerTable={innerTable.setInnerTable}/>}
                </div>
            </InnerTableConnectorContext.Provider>
        </LineContext.Provider>
    );
})

export {Line};
