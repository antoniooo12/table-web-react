import React from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";
import {TSelectOptions} from "../../types/TableStructure";
import {CustomComponents, CustomHeaderBigComponents, CustomTableBigComponents} from "../../API/TableWebAPITypes";
import {useGetColumnParam} from "../../componets/Column/utils";
import {Item, TTableLine} from "../../redux/reduxTypes";
import {CellBlock} from "../../componets/Column/CellBlock";


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
const getColumnData = (lineData: TTableLine) => (name: string):Item<unknown> => {
    const item = lineData.columns.get(name)
    if(!item) throw new Error(`item by name: ${name} not find in store`)
    return item
}
// const TableBigComponent: React.FC<CustomTableBigComponents> = ({lineData, columnParam}) => {
//    const columnsDataByName = getColumnData(lineData)
//     return <div>
//
//         <div>
//             <CellBlock columnName={'clientName'} cellData={columnsDataByName('clientName')} viewType={'bigPicture'}/>
//         </div>
//
//     </div>
// }
const TestTable = () => {
    const components: CustomComponents = {
        headerBigComponents: HeaderTitle,
        // tableBigComponents:TableBigComponent,
    }
    const {api, connector} = useConnectWebTableState({
        tableStructure: testTable,
        externalData: exampleExternalData,
        externalOptionsMap: new Map<string, TSelectOptions[]>(),
        customComponents: components,
    })
    // const s = api.columnsMapped.columnsMapped


    return (
        <>
            <TableWebProviderComponent
                tableConnect={connector}
            />
        </>
    );
};

export {TestTable};