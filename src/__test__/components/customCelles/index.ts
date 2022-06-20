import {CustomCellComponent, CustomCellMap, CustomCells} from "../../../API/TableWebAPITypes";
import {SumOfProduct} from "./SumOfProduct/SumOfProduct";
import {EColumOrderInfo, EProductInfo} from "../../../example";
import {ProductName} from "./ProductName/ProductName";
import {SumOfOrder} from "./SumOfOrder/SumOfOrder";
import {OrdinaryNumber} from "./OrdenaryNumber/OrdinaryNumber";

const innerTableCustomCells: CustomCellMap<any> = new Map<string, CustomCellComponent<any>>([
    [EProductInfo.productSum, SumOfProduct],
    [EProductInfo.productName, ProductName],
    [EProductInfo.productCount, OrdinaryNumber],
    [EProductInfo.productCost, OrdinaryNumber],
])
const tableCustomCells: CustomCellMap<any> = new Map([
    [EColumOrderInfo.orderSum, SumOfOrder]
])
export const customCells: CustomCells = {innerTable: innerTableCustomCells, table: tableCustomCells}