import {useState} from "react";
import {TableReduxStructure} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";

/* todo create union object which gather fiches:
   loading table structure +-
   loading a external data
   saving table to state
   saving data to PC
*/

export const useConnectWebTableState = (tableStructure: TableStructure) => {
    const [tableEternalState, settableEternalState] = useState<TableReduxStructure>({data: []})
    return {tableEternalState, settableEternalState, tableStructure}
}

export type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};