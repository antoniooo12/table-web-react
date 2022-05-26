import React from 'react';
import {TableWeb, TTableWeb} from "./TableWeb";
import {tableStore} from "../../redux";
import {Provider} from "react-redux";

const TableWebProviderComponent: React.FC<TTableWeb & { children?: React.ReactNode }> = React.memo(({tableConnect}) => {
    return (
        <Provider store={tableStore}>
            <TableWeb tableConnect={tableConnect} />
        </Provider>
    );
})

export {TableWebProviderComponent};