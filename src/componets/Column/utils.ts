import {useContext} from "react";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {Column} from "../../types/TableStructure";
import {recursiveColumnSearch, recursiveMapSearch} from "../../hellpers/helpers";

export const useGetColumnParam = (columnName: string): Column => {
    const {columns} = useContext(TableWebContext)
    const column = recursiveMapSearch(columns, columnName, 'subColumns')
    return column
}