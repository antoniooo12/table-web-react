import cl from './TableWeb.module.scss'
import React, {useState} from 'react';
import {Shield} from "../Shield/Shield";
import {Header} from "../Header/Header";
import {TableWebContext} from "./TableWebContext";
import {useWebTable} from "../../hooks/useWebTable";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {setterPreviousValues} from "./TableWebUtils";
import {TTableConnect} from "../../API/TableWebAPITypes";
import {TableReduxStructure} from "../../redux/reduxTypes";


export type TTableWeb = {
    api?: {
        setExternalValue?: TableReduxStructure
    }
    tableConnect: TTableConnect,
}


const TableWeb: React.FC<TTableWeb> = ({tableConnect}) => {
    const {tableStructure} = tableConnect
    const {shield} = tableStructure
    const {columns} = useWebTable(tableStructure)
    const [previousValues, setPreviousValues] = useState<Map<string, unknown>>(new Map())
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