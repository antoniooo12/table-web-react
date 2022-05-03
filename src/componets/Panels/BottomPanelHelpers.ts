import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {useContext} from "react";
import {TableWebContext} from "../TableWeb/TableWebContext";

export const useOnSave = ()=>{
    const {tableConnect} = useContext(TableWebContext)
    const stateTable = useTableTypedSelector(state => state.tableStore.storage)
    tableConnect.settableEternalState(stateTable)
}