import {calcGridColumnWidth, calcWidth} from "../../../utils/utilsTableView";
import {Columns} from "../../../types/TableStructure";
import {useLineContext} from "../LineContext";

export const useGetWidth = (columns: Columns) => {
    const widthGrid = calcGridColumnWidth([...columns.values()], 'width')
    const width = calcWidth([...columns.values()])
    return {widthGrid, width}
}

export const useGetCellValue = <T extends string>(cellName: T) => {
    const {columns} = useLineContext()
    return columns.get(cellName)!.value
}

