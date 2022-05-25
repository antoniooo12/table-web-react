import {createContext} from "react";
import {Column, TSelectOptions, TShieldStructure} from "../../types/TableStructure";
import {TTableConnect} from "../../API/TableWebAPITypes";

type TableWebContext = {
    columns: Map<string, Column>
    shield: TShieldStructure
    previous: [Map<string, unknown>, <T>(nameColumn: string, value: T) => void]
    tableConnect: TTableConnect
    optionsMap: Map<string, TSelectOptions[]>
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)