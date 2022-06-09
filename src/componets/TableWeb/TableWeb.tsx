import cl from './TableWeb.module.scss'
import React, {useEffect, useState} from 'react';
import {Shield} from "../Shield/Shield";
import {Header} from "../Header/Header";
import {TableWebContext} from "./TableWebContext";
import {executeColumns} from "../../hooks/executeColumns";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {setterPreviousValues} from "./TableWebUtils";
import {useActionsTable} from "../../hooks/useActionsTable";
import {BigPicture} from "../BigPicture/BigPicture";
import {TTableConnect} from "../../API/TableWebAPITypes";
import {shieldChecker, useOpenInBigPicture} from "./utils/utils";


export type TTableWeb = {
    tableConnect: TTableConnect
}

export const TableWeb: React.FC<TTableWeb> = React.memo(({tableConnect}) => {
    const {tableStructure, optionsMap, tableData} = tableConnect
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
            }}
        >
            <table
                className={cl.wrapper}
            >
                <BottomTablePanel columnStructure={columns}/>

                <Header/>
                <Shield shieldStructure={shield}/>
                {bigPictureController.selectedLineIdToBigPicture !== undefined && <BigPicture/>}

            </table>
        </TableWebContext.Provider>

    );
})




