import {CustomCell, CustomCellComponent, CustomCellMap, CustomCells} from "../../../API/TableWebAPITypes";
import {SumOfProduct} from "./SumOfProduct/SumOfProduct";
import {EColumnClientInfo, EColumOrderInfo, EProductInfo} from "../tableExampleData/example";
import {ProductName} from "./ProductName/ProductName";
import {SumOfOrder} from "./SumOfOrder/SumOfOrder";
import {OrdinaryNumber} from "./OrdenaryNumber/OrdinaryNumber";
import {DeliveryTimeBefore} from "./DeliveryTimeBefore/DeliveryTimeBefore";
import {CellText} from "./BaseCells/CellText";
import {DeliveryDay} from "./DeliveryDay/DeliveryDay";

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
    }], [EColumOrderInfo.deliveryTimeAfter, {
        Component: DeliveryTimeBefore,
        cellParam: {
            default: {value: '12:00', type: 'Default'}
        }
    }], [EColumOrderInfo.deliveryDay, {
        Component: DeliveryDay,

    }], [EColumOrderInfo.deliveryAddress, {
        Component: CellText,

    }],
    [EColumOrderInfo.orderSum, {
        Component: SumOfOrder,
    }], [EColumOrderInfo.deliveryComment, {
        Component: CellText,
    }], [EColumnClientInfo.clientName, {
        Component: CellText,
    }], [EColumnClientInfo.clientPhone, {
        Component: CellText,
    }], [EColumnClientInfo.clientComment, {
        Component: CellText,
    }],
])
// export const customCells: CustomCells = {innerTable: innerTableCustomCells, table: tableCustomCells}
