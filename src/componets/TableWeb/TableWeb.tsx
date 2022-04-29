import cl from './TableWeb.module.scss'
import React, {useState} from 'react';
import {Shield} from "../Shield/Shield";
import {TableStructure} from "../../types/TableStructure";
import {Header} from "../Header/Header";
import {TableWebContext} from "./TableWebContext";
import {useWebTable} from "../../hooks/useWebTable";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {setterPreviousValues} from "./TableWebUtils";


export type TTableWeb = {
    tableStructure: TableStructure
}


const TableWeb: React.FC<TTableWeb> = ({tableStructure}) => {
    const {shield} = tableStructure

    const {columns} = useWebTable(tableStructure)
    const [previousValues, setPreviousValues] = useState<Map<string, unknown>>(new Map())
    return (
        <TableWebContext.Provider
            value={{
                columns,
                shield: shield,
                previous: [previousValues, setterPreviousValues(setPreviousValues)]
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