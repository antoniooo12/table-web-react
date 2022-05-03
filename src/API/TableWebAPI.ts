import {useState} from "react";
import {TableReduxStructure} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";

/* todo create union object which gather fiches:
   loading table structure +-
   loading a external data
   saving table to state
   saving data to PC
   <textarea id="text-val" rows="4">This is the content of my file</textarea><br/>

*/

export const useConnectWebTableState = (tableStructure:TableStructure) => {
    const [tableEternalState, settableEternalState] = useState<TableReduxStructure>(new Map())
    return {tableEternalState, settableEternalState,tableStructure}
}