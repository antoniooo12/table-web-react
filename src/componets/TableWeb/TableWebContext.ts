import {createContext} from "react";
import {Column, TShieldStructure} from "../../types/TableStructure";

type TableWebContext = {
    columns: Map<string, Column>
    shield: TShieldStructure
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)