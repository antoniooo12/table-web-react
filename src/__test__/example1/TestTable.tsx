import React from 'react';
import {testTable} from "./tableExampleData/example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {TSelectOptions} from "../../types/TableStructure";
import {CustomComponents, CustomHeaderBigComponents, SetInnerTable} from "../../API/TableWebAPITypes";
import {customCells} from "./customCelles";
import {CustomLine} from "./customLine/customLine";
import {exampleData1} from "./tableExampleData/exampleData1";
import {innerTableData} from "./tableExampleData/exampleInnerTableData1";


const HeaderTitle: React.FC<CustomHeaderBigComponents> = ({lineData}) => {
    const clientCol = lineData.columns.get('clientName')
    if (clientCol) {
        return <div>
            покупець: {clientCol.value as string}
        </div>
    } else {
        return <div>error</div>
    }
}


const TestTable = () => {
    const components: CustomComponents = {
        headerBigComponents: HeaderTitle,
    }

    const setInnerTable: SetInnerTable = ({lineIdt}) => {
        return innerTableData.find(p => p.lineId === lineIdt)?.data
    }
    const {api, connector} = useConnectWebTableState({
        tableStructure: testTable,
        externalData: exampleData1,
        externalOptionsMap: new Map<string, TSelectOptions[]>(),
        customComponents: components,
        customCells: customCells,
        customLine: CustomLine,
        tableButtons: {isShow: true},
        setInnerTable,
    })


    return (
        <>
            <TableWebProviderComponent
                tableConnect={connector}
            />
        </>
    );
};

export {TestTable};
