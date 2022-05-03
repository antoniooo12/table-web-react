import React from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";

const TestTable = () => {
    const tableConnect = useConnectWebTableState(testTable)

    return (
            <TableWebProviderComponent
                tableConnect={tableConnect}
            />
    );
};

export {TestTable};