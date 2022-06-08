import React, {useEffect} from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";
import {Button} from "../../componets/buttons/Button/Button";
import {TSelectOptions} from "../../types/TableStructure";

const TestTable = () => {

    const {api,connector} = useConnectWebTableState(testTable, exampleExternalData, new Map<string, TSelectOptions[]>())

    return (
        <>

            <TableWebProviderComponent
                tableConnect={connector}
            />
        </>
    );
};

export {TestTable};