import cl from './Line.module.scss'
import React, {useContext} from 'react';
import {Item, TStatus} from "../../redux/reduxTypes";
import {LineContext} from "./LineContext";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {LineInnerTable} from "./LineInnerTable/LineInnerTable";
import {InnerTableConnectorContext} from '../TableWeb/InnerTableConnector/InnerTableConnector';
import {useLineService} from "./useLineService";
import {LineViewColumns} from "./Views/LineViewColumns";
import {LineServiceContext} from "./LineContexrService";
import {LineViewButtons} from "./Views/LineViewButtons";
import {useCustomContext} from "../TableWeb/customContext";

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
    const {styleGrid, lineBaseClass, innerTable,} = useLineService(props)
    const {CustomLine} = useCustomContext()
    return (
        <LineContext.Provider
            value={{columns: columnsData, lineInformation: lineData}}
        >

            <InnerTableConnectorContext.Provider
                value={{
                    innerTableMap: innerTable.innerTableMap,
                    isShowInnerTableController: innerTable.isShowInnerTableController
                }}
            >
                <LineServiceContext.Provider
                    value={{styleGrid}}
                >
                    <tr>
                        {CustomLine ?
                            <CustomLine {...props}/> :
                            <>
                                <LineViewColumns/>
                                <LineViewButtons/>
                            </>
                        }
                    </tr>
                    <>
                        {shield.innerTable &&
                            <div
                                style={{display: innerTable.isShowInnerTableController.isShowInnerTable ? "block" : 'none'}}
                            >
                                <LineInnerTable tableStructure={shield.innerTable}
                                                setInnerTable={innerTable.setInnerTable}
                                                id={lineIdt}
                                />
                            </div>}
                    </>
                </LineServiceContext.Provider>
            </InnerTableConnectorContext.Provider>
        </LineContext.Provider>
    );
})

export {Line};
