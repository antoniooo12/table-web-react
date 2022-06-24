import {useContext} from "react";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {Column} from "../../types/TableStructure";
import {recursiveMapSearch} from "../../hellpers/helpers";
import {executeColumns} from "../../hooks/executeColumns";

export const useGetColumnParam = (columnName: string): Column => {
    const {columns, shield} = useContext(TableWebContext)
    const innerColumns = shield.innerTable && executeColumns(shield.innerTable)
    const searchingColumns: Map<string, Column> = new Map<string, Column>()

    for (const [key, column] of columns) {
        searchingColumns.set(key, column)
    }
    if (innerColumns)
        for (const [key, column] of innerColumns) {
            searchingColumns.set(key, column)
        }
    const column = recursiveMapSearch(searchingColumns, columnName, 'subColumns')
    return column
}