// @ts-ignore
import cl from './TableWeb.module.scss'
import React from 'react';
import {Shield} from "../Shield/Shield";
import {TableStructure} from "../../types/TableStructure";
import {Header} from "../Header/Header";
import {Provider} from "react-redux";
import {tableStore} from "../../redux";
import {TableWebContext} from "./TableWebContext";
import {useWebTable} from "../../hooks/useWebTable";
import {BottomTablePanel} from "../Panels/BottomTablePanel";

const TableWeb: React.FC<{ tableStructure: TableStructure }> = ({tableStructure}) => {
    const {shield} = tableStructure
const {columns}= useWebTable(tableStructure)
    return (
        <TableWebContext.Provider
            value={{
                columns,
                shield: shield
            }}
        >
            <Provider store={tableStore}>

                <div
                className={cl.wrapper}
                >
                    <BottomTablePanel columnStructure={columns}/>

                    <Header/>
                    <Shield shieldStructure={shield}/>

                </div>
            </Provider>
        // </TableWebContext.Provider>
    );
};

export {TableWeb};