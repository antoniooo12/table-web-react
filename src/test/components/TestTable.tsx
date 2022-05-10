import React, {useEffect} from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";

const TestTable = () => {
    const tableConnect = useConnectWebTableState(testTable, exampleExternalData)
    useEffect(() => {
        console.log('===')
        console.log(tableConnect.tableEternalState)
    }, [tableConnect])
    return (
        <TableWebProviderComponent
            tableConnect={tableConnect}
        />
    );
};

export {TestTable};