import React from 'react';
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
    const calcSum: TCustomFunction<number> = ({innerTableMap, tableWebContext}) => {
        const sum = innerTableMap?.data.reduce((accum, line) => {
            const count = line.columns.get('productCount')?.value
            const cost = line.columns.get('productCost')?.value
            accum += Number(cost) * Number(count)
            return accum
        }, 0)
        return sum || 0
    }
    const setName: TCustomFunction<string> = ({innerTableMap, tableWebContext}) => {
        const sum = innerTableMap?.data.reduce((accum, line) => {
            const count = line.columns.get('productCount')?.value
            const cost = line.columns.get('productCost')?.value
            accum += Number(cost) * Number(count)
            return accum
        }, 0)
        return 'sum' || 0
    }
    const calcSumObj: TCustomFunctionObj<number> = {onUpdate: calcSum}
    const setNameObj: TCustomFunctionObj = {onUpdate: setName}
    // const customFunctionMap: CustomFunctionMap<string> = new Map([
    //     ['orderSum', setNameObj],
    //     ['clientName', calcSumObj],
    // ])
    const {api, connector} = useConnectWebTableState({
        tableStructure: testTable,
        externalData: exampleExternalData,
        externalOptionsMap: new Map<string, TSelectOptions[]>(),
        customComponents: components,
        // customFunctionMap,
        customCells: customCells,
        customLine: CustomLine
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