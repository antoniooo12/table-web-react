import React from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";

const TestTable = () => {
    const tableConnect = useConnectWebTableState(testTable, exampleExternalData)

    return (
            <TableWebProviderComponent
                tableConnect={tableConnect}
            />
    );
};

export {TestTable};