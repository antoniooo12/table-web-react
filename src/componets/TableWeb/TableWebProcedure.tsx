import React, {useEffect, useMemo, useState} from 'react';
import {TableWebContext} from "./TableWebContext";
import {setterPreviousValues} from "./TableWebUtils";
import {useActionsTable} from "../../hooks/useActionsTable";
import {CustomCellMap, TTableConnect} from "../../API/TableWebAPITypes";
import {shieldChecker, useOpenInBigPicture} from "./utils/utils";
import {CustomContext} from "./customContext";
import {useCalcColumns} from "./utils/useCalcColumns";
import {TableWebView} from "./View/TableWebView";


export type TTableWeb = {
    tableConnect: TTableConnect
}

export const TableWebProcedure: React.FC<TTableWeb> = React.memo(({tableConnect}) => {
    const {
        tableStructure,
        tableData,
        customComponents,
        viewMode = 'table',
        customFunctionMap,
        customLine,
        customCells,
        tableButtons,
        setInnerTable,
        isHeaderShow,
    } = tableConnect
    const {tableLoadExternalData} = useActionsTable()
    const customLineView = useMemo(() => {
        if (viewMode === 'table') {
            return customLine.table
        } else {
            if (!customLine.innerTable) {
                throw  new Error('We can`t get a custom line to inner table')
            }
            return customLine.innerTable
        }
    }, [viewMode])
    const {shield} = tableStructure
    const checkedShield = shieldChecker(shield)
    const customCellMap: CustomCellMap | undefined = useMemo(() => {
        if (viewMode === 'table')
            return tableConnect.customCells?.table
        if (viewMode === 'innerTable')
            return tableConnect.customCells?.innerTable
    }, [tableConnect.customCells])
    const columns = useCalcColumns(tableStructure, customCellMap)
    const [previousValues, setPreviousValues] = useState<Map<string, unknown>>(new Map())
    useEffect(() => {
        if (tableData) {
            tableLoadExternalData({externalData: tableData, columnsStructure: columns})
        }
    }, [tableData])
    const bigPictureController = useOpenInBigPicture()

    const customCellMapInner: CustomCellMap | undefined = useMemo(() => {
        return tableConnect.customCells?.innerTable
    }, [tableConnect.customCells])
    const tableWebContextData: TableWebContext = {
        columns,
        shield: checkedShield,
        previous: [previousValues, setterPreviousValues(setPreviousValues)],
        bigPictureController,
        customComponents,
        viewMode,
        customCellMap,
        customFunctionMap,
        dataToInnerTable: {
            customCellMapInner: customCellMapInner
        },
        setInnerTable,
    }
    return (
        <TableWebContext.Provider
            value={tableWebContextData}
        >
            <CustomContext.Provider
                value={{
                    customCellMap,
                    customFunctionMap,
                    customComponents,
                    customLine: customLine,
                    customTable: tableConnect.customTable
                }}>
                {viewMode === 'table' &&
                    <  tableConnect.customTable.table tableWebContext={tableWebContextData} shieldStructure={shield}/>}
                {viewMode === 'innerTable' && tableConnect.customTable.innerTable &&
                    <  tableConnect.customTable.innerTable tableWebContext={tableWebContextData}
                                                           shieldStructure={shield}/>
                }

                {/*// <TableWebView shieldStructure={shield} viewMode={viewMode} tableButtons={tableButtons}*/}
                {/*//               isHeaderShow={isHeaderShow}/>*/}

            </CustomContext.Provider>
        </TableWebContext.Provider>

    );
})




