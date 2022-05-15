import React, {useEffect, useState} from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";
import {Button} from "../../componets/buttons/Button/Button";

const TestTable = () => {
    const [exampleExternalDataTemp, setExampleExternalDataTemp] = useState(exampleExternalData)
    const tableConnect = useConnectWebTableState(testTable, exampleExternalDataTemp)

    useEffect(() => {
        console.log('--------')
        console.log(exampleExternalDataTemp)
        console.log('--------')
    }, [tableConnect])
    return (
        <>
            <Button
                onClick={() => {
                    if (exampleExternalData.length > 1) {
                        setExampleExternalDataTemp([...exampleExternalData.slice(0, 2)])
                    }
                }}
            >
                up
            </Button>
            <TableWebProviderComponent
                tableConnect={tableConnect}
            />
        </>
    );
};

export {TestTable};