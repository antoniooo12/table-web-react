import React from 'react';
import {TableWeb, TTableWeb} from "./TableWeb";
import {tableStore} from "../../redux";
import {Provider} from "react-redux";
import {TableWebAPIContext} from "../../API/TableWebAPIContext";

const TableWebProviderComponent: React.FC<TTableWeb & { children?: React.ReactNode }> = ({children, ...props}) => {
    return (
        <TableWebAPIContext.Provider value={{}}>
            <Provider store={tableStore}>
                <TableWeb {...props} />
                {children}
            </Provider>
        </TableWebAPIContext.Provider>
    );
};

export {TableWebProviderComponent};