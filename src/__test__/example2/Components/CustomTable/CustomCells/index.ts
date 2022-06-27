import {CustomCell, CustomCellMap, CustomCells} from "../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../table/tableStructure";
import {CellSum} from "./Sum/CellSum";
import {CellTitle} from "./Title/CellTitle";
import CellCost from "./Cost/CellCost";
import {CellCount} from "./Count/CellCount";

const tableCustomCells: CustomCellMap = new Map<string, CustomCell<any>>([
    [EColumns2.title, {
        Component: CellTitle
    }], [EColumns2.cost, {
        Component: CellCost
    }], [EColumns2.count, {
        Component: CellCount
    }], [EColumns2.sum, {
        Component: CellSum
    }],
])
export const customCells: CustomCells = {table: tableCustomCells}
