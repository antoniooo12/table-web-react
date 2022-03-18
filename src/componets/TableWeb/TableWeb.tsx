// @ts-ignore
import cl from './TableWeb.module.scss'
import React from 'react';
import {Shield} from "../Shield/Shield";
import {TableStructure} from "../../types/TableStructure";
import {Header} from "../Header/Header";
import {Provider} from "react-redux";
import {tableStore} from "../../redux";
import {TableWebContext} from "./TableWebContext";

const TableWeb: React.FC<{ tableStructure: TableStructure }> = ({tableStructure}) => {
    const {shield} = tableStructure

    return (
        <TableWebContext.Provider
            value={{
                columnParams: shield.columns
            }}
        >
            <Provider store={tableStore}>

                <div
                className={cl.wrapper}
                >
                    <Header/>
                    <Shield shieldStructure={shield}/>

                </div>
            </Provider>
        </TableWebContext.Provider>
    );
};

export {TableWeb};