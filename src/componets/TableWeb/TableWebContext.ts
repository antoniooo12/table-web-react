import {createContext} from "react";
import {Column, TShieldStructure} from "../../types/TableStructure";
import {TTableConnect} from "../../API/TableWebAPITypes";

type TableWebContext = {
    columns: Map<string, Column>
    shield: TShieldStructure
    previous: [Map<string, unknown>, <T>(nameColumn: string, value: T) => void]
    tableConnect: TTableConnect
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)