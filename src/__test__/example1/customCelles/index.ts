import {CustomCell, CustomCellComponent, CustomCellMap, CustomCells} from "../../../API/TableWebAPITypes";
import {SumOfProduct} from "./SumOfProduct/SumOfProduct";
import {EColumOrderInfo, EProductInfo} from "../../../example";
import {ProductName} from "./ProductName/ProductName";
import {SumOfOrder} from "./SumOfOrder/SumOfOrder";
import {OrdinaryNumber} from "./OrdenaryNumber/OrdinaryNumber";
import {DeliveryTimeBefore} from "./DeliveryTimeBefore/DeliveryTimeBefore";

const innerTableCustomCells: CustomCellMap = new Map<string, CustomCell>([
    [EProductInfo.productSum, {Component: SumOfProduct}],
    [EProductInfo.productName, {Component: ProductName}],
    [EProductInfo.productCount, {Component: OrdinaryNumber}],
    [EProductInfo.productCost, {Component: OrdinaryNumber}],
])

const tableCustomCells: CustomCellMap = new Map<string, CustomCell>([
    [EColumOrderInfo.deliveryTimeBefore, {
        Component: DeliveryTimeBefore,
        cellParam: {
            default: {value: '17:00', type: 'Default'}
        }
    }],
    [EColumOrderInfo.orderSum, {
        Component: SumOfOrder,
    }]
])
export const customCells: CustomCells = {innerTable: innerTableCustomCells, table: tableCustomCells}