import {TableExternalShieldData} from "../../../API/TableWebAPITypes";
import {EProductInfo} from "./example";

export const innerTableData: { data: TableExternalShieldData, lineId: string }[] =
    [{
        lineId: '1',
        data: [
            {
                columns: [{
                    nameColumn: EProductInfo.productName,
                    value: 'potato',
                    id: '2',
                }, {
                    nameColumn: EProductInfo.productCount,
                    value: 2,
                    id: '2',

                }, {
                    nameColumn: EProductInfo.productCost,
                    value: 12,
                    id: '2',

                }, {
                    nameColumn: EProductInfo.productSum,
                    value: 32,
                    id: '2',

                }],
                lineInformation: {
                    id: '1',
                }
            }]
    }]
