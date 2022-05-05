import React from 'react';
import {TableWeb, TTableWeb} from "./TableWeb";
import {tableStore} from "../../redux";
import {Provider} from "react-redux";

const TableWebProviderComponent: React.FC<TTableWeb & { children?: React.ReactNode }> = ({children, ...props}) => {
    return (
            <Provider store={tableStore}>
                <TableWeb {...props} />
                {children}
            </Provider>
    );
};

export {TableWebProviderComponent};