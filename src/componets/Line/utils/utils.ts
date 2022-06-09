import {calcGridColumnWidth, calcWidth} from "../../../utils/utilsTableView";
import {Columns} from "../../../types/TableStructure";

export const useGetWidth = (columns: Columns) => {
    /// to correct show delete line
    const widthGrid = calcGridColumnWidth([...columns.values()], 'width') + ' 0px'
    const width = calcWidth([...columns.values()])
    return {widthGrid, width}
}