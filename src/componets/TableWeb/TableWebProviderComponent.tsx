import React from 'react';
import {TableWebProcedure, TTableWeb} from "./TableWebProcedure";
import {tableStore} from "../../redux";
import {Provider} from "react-redux";

const TableWebProviderComponent: React.FC<TTableWeb & { children?: React.ReactNode }> = React.memo(({tableConnect}) => {
    return (
        <Provider store={tableStore}>
            <TableWebProcedure tableConnect={tableConnect} />
        </Provider>
    );
})

export {TableWebProviderComponent};