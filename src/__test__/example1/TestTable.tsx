import React, {useEffect} from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";
import {TSelectOptions} from "../../types/TableStructure";
import {CustomComponents, CustomHeaderBigComponents} from "../../API/TableWebAPITypes";
import {CustomFunctionMap, TCustomFunction, TCustomFunctionObj} from "../../API/customFunction";
import {customCells} from "./customCelles";
import {CustomLine} from "./customLine/customLine";


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


    const {api, connector} = useConnectWebTableState({
        tableStructure: testTable,
        externalData: exampleExternalData,
        externalOptionsMap: new Map<string, TSelectOptions[]>(),
        customComponents: components,
        customCells: customCells,
        customLine: CustomLine,
        tableButtons:{isShow:true}
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
