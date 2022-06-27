import cl from './TableWeb.module.scss'
import React, {useEffect, useMemo, useState} from 'react';
import {Shield} from "../Shield/Shield";
import {TableWebContext} from "./TableWebContext";
import {executeColumns} from "../../hooks/executeColumns";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {setterPreviousValues} from "./TableWebUtils";
import {useActionsTable} from "../../hooks/useActionsTable";
import {BigPicture} from "../BigPicture/BigPicture";
import {CustomCellMap, TTableConnect} from "../../API/TableWebAPITypes";
import {shieldChecker, useOpenInBigPicture} from "./utils/utils";
import {CustomContext} from "./customContext";
import {TableHeader} from "../Header/TableHeader/TableHeader";
import {useUpdateExternalStore} from "./utils/updateExternalStore";
import {useCalcColumns} from "./utils/useCalcColumns";


export type TTableWeb = {
    tableConnect: TTableConnect
}

export const TableWebProcedure: React.FC<TTableWeb> = React.memo(({tableConnect}) => {
    const {
        tableStructure,
        optionsMap,
        tableData,
        customComponents,
        viewMode = 'table',
        customFunctionMap,
        customLine,
        customCells,
        tableButtons,
    } = tableConnect
    const {tableLoadExternalData} = useActionsTable()
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
   // useUpdateExternalStore(tableConnect.setTableExternalState)
    const bigPictureController = useOpenInBigPicture()
    // const customCellMap: CustomCellMap | undefined = useMemo(() => {
    //     if (viewMode === 'table')
    //         return tableConnect.customCells?.table
    //     if (viewMode === 'innerTable')
    //         return tableConnect.customCells?.innerTable
    // }, [tableConnect.customCells])
    const customCellMapInner: CustomCellMap | undefined = useMemo(() => {
        return tableConnect.customCells?.innerTable
    }, [tableConnect.customCells])

    return (
        <TableWebContext.Provider
            value={{
                columns,
                shield: checkedShield,
                previous: [previousValues, setterPreviousValues(setPreviousValues)],
                // tableConnect: {
                //     setTableExternalState: tableConnect.setTableExternalState
                // },
                optionsMap,
                bigPictureController,
                customComponents,
                viewMode,
                customCellMap,
                customFunctionMap,
                dataToInnerTable: {
                    customCellMapInner: customCellMapInner
                }
            }}
        >
            <CustomContext.Provider
                value={{customCellMap, customFunctionMap, customComponents, CustomLine: customLine}}>
                <table>
                    <div
                        className={cl.wrapper}
                    >
                        {viewMode === 'table' && tableButtons?.isShow && <BottomTablePanel/>}

                        <TableHeader/>
                        <Shield shieldStructure={shield}/>
                        {viewMode === 'innerTable' && <BottomTablePanel/>}
                    </div>
                    {bigPictureController.selectedLineIdToBigPicture && <BigPicture/>}
                </table>
            </CustomContext.Provider>
        </TableWebContext.Provider>

    );
})




