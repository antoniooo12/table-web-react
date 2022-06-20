import cl from './TableWeb.module.scss'
import React, {useEffect, useMemo, useState} from 'react';
import {Shield} from "../Shield/Shield";
import {Header} from "../Header/Header";
import {TableWebContext} from "./TableWebContext";
import {executeColumns} from "../../hooks/executeColumns";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {setterPreviousValues} from "./TableWebUtils";
import {useActionsTable} from "../../hooks/useActionsTable";
import {BigPicture} from "../BigPicture/BigPicture";
import {CustomCellMap, TTableConnect} from "../../API/TableWebAPITypes";
import {shieldChecker, useOpenInBigPicture} from "./utils/utils";
import {CustomContext} from "./customContext";


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
    } = tableConnect
    const {tableLoadExternalData} = useActionsTable()
    const {shield} = tableStructure
    const checkedShield = shieldChecker(shield)
    const columns = executeColumns(tableStructure)
    const [previousValues, setPreviousValues] = useState<Map<string, unknown>>(new Map())
    useEffect(() => {
        if (tableData) {
            tableLoadExternalData({externalData: tableData, columnsStructure: columns})
        }
    }, [tableData])
    const bigPictureController = useOpenInBigPicture()
    const customCellMap: CustomCellMap | undefined = useMemo(() => {
        if (viewMode === 'table')
            return tableConnect.customCells?.table
        if (viewMode === 'innerTable')
            return tableConnect.customCells?.innerTable
    }, [tableConnect.customCells])
    const customCellMapInner: CustomCellMap | undefined = useMemo(() => {
        return tableConnect.customCells?.innerTable
    }, [tableConnect.customCells])

    return (
        <TableWebContext.Provider
            value={{
                columns,
                shield: checkedShield,
                previous: [previousValues, setterPreviousValues(setPreviousValues)],
                tableConnect: {
                    setTableExternalState: tableConnect.setTableExternalState
                },
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
            <CustomContext.Provider value={{customCellMap, customFunctionMap,customComponents, CustomLine: customLine}}>
                <table>
                    <div
                        className={cl.wrapper}
                    >
                        {viewMode === 'table' && <BottomTablePanel/>}

                        <Header/>
                        <Shield shieldStructure={shield}/>
                        {viewMode === 'innerTable' && <BottomTablePanel/>}
                    </div>
                    {bigPictureController.selectedLineIdToBigPicture && <BigPicture/>}
                </table>
            </CustomContext.Provider>
        </TableWebContext.Provider>

    );
})




