import React from 'react';
import {TableWeb, TTableWeb} from "./TableWeb";
import {tableStore} from "../../redux";
import {Provider} from "react-redux";

const TableWebProviderComponent:React.FC<TTableWeb>= ({...props} ) => {
    return (
        <Provider store={tableStore}>
        <TableWeb {...props} />
        </Provider>
    );
};

export {TableWebProviderComponent};