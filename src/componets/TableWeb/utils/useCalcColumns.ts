import {executeColumns} from "../../../hooks/executeColumns";
import {Column, Columns, TableStructure} from "../../../types/TableStructure";
import {CustomCellMap} from "../../../API/TableWebAPITypes";

export const useCalcColumns = (tableStructure: TableStructure, customCellMap?: CustomCellMap) => {
    const columns: Columns = executeColumns(tableStructure)
    console.log(customCellMap)
    console.log(columns)

    function setDefaultValues(columnMap: Columns) {
        let columnsDefault: Columns = new Map<string, Column>()
        for (const [key, col] of columnMap) {
            let changedCol = col
            columnsDefault.set(key, changedCol)
            if (customCellMap && customCellMap.has(key)) {
                const defaultValue = customCellMap.get(key)?.cellParam?.default || col.cellParam.default
                changedCol = {
                    ...changedCol,
                    cellParam: {
                        ...changedCol.cellParam,
                        default: defaultValue,
                    }
                }
                columnsDefault.set(key, changedCol)
            }
            if (col.subColumns) {
                changedCol = {
                    ...changedCol,
                    subColumns: setDefaultValues(col.subColumns)
                }
                columnsDefault.set(key, changedCol)
            }
        }
        return columnsDefault
    }

    const columnsExternalDefault = setDefaultValues(columns)
    return columnsExternalDefault
}