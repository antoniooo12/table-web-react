import cl from './TableWeb.module.scss'
import React, {useEffect, useState} from 'react';
import {Shield} from "../Shield/Shield";
import {Header} from "../Header/Header";
import {TableWebContext} from "./TableWebContext";
import {executeColumns} from "../../hooks/executeColumns";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {setterPreviousValues} from "./TableWebUtils";
import {TTableConnect} from "../../API/TableWebAPITypes";
import {useActionsTable} from "../../hooks/useActionsTable";


export type TTableWeb = {
    tableConnect: TTableConnect,
}


const TableWeb: React.FC<TTableWeb> = ({tableConnect}) => {
    const {tableStructure} = tableConnect
    const {tableLoadExternalData}= useActionsTable()
    const {shield} = tableStructure
    const columns = executeColumns(tableStructure)
    const [previousValues, setPreviousValues] = useState<Map<string, unknown>>(new Map())
    useEffect(()=>{
        if( tableConnect.tableExternalData) {
            tableLoadExternalData({externalData: tableConnect.tableExternalData, columnsStructure: columns})
        }
    },[])
    return (
        <TableWebContext.Provider
            value={{
                columns,
                shield: shield,
                previous: [previousValues, setterPreviousValues(setPreviousValues)],
                tableConnect: tableConnect,
            }}
        >

            <div
                className={cl.wrapper}
            >
                <BottomTablePanel columnStructure={columns}/>

                <Header/>
                <Shield shieldStructure={shield}/>
            </div>
        </TableWebContext.Provider>

    );
};

export {TableWeb};