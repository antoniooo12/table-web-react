import cl from './Line.module.scss'
import React, {useContext, useMemo} from 'react';
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
import {TableExternalShieldData, TTableInit} from "../../API/TableWebAPITypes";
import {EColumns2} from "../../__test__/example2/table/tableStructure";
import {EColumOrderInfo, EProductInfo} from "../../__test__/example1/tableExampleData/example";

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
    const {columns, shield, viewMode, setInnerTable} = useContext(TableWebContext)
    const {styleGrid, lineBaseClass, innerTable,} = useLineService(props)
    const {CustomLine} = useCustomContext()

    const tableInit: TTableInit | undefined = useMemo(() => {
        if (shield.innerTable) {
            const innerTableData = setInnerTable && setInnerTable({...props})
            return {
                tableStructure: shield.innerTable,
                externalData: innerTableData,
            }
        }
    }, [])
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
                    <>
                        {CustomLine ?
                            <CustomLine {...props}/> :
                            <tr>
                                <LineViewColumns/>
                                <LineViewButtons/>
                            </tr>
                        }
                    </>
                    <>
                        {shield.innerTable && tableInit &&
                            <div
                                style={{display: innerTable.isShowInnerTableController.isShowInnerTable ? "block" : 'none'}}
                            >
                                <LineInnerTable
                                    tableInit={tableInit}
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
