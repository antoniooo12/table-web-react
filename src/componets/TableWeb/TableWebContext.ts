import {createContext} from "react";
import {Columns} from "../../types/TableStructure";

type TableWebContext = {
    columnParams: Columns
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)