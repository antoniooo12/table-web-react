import {createContext} from "react";
import {Column, TShieldStructure} from "../../types/TableStructure";

type TableWebContext = {
    columns: Map<string, Column>
    shield: TShieldStructure
    previous: [Map<string, unknown>, <T>(nameColumn: string, value: T) => void]
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)