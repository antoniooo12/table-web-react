import {useContext, useEffect, useState} from "react";
import {TableReduxStructure, TableState} from "../../../redux/reduxTypes";
import {TTableStore} from "../TableWebProviderComponent";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {tableSetEditableLine, tableSetInnerTable} from "../../../redux/tableReducer";
import {useLineContext} from "../../Line/LineContext";

export const useInnerTableConnectorService = (id: string) => {
    const {tableSetInnerTable} = useActionsTable()
    const [innerTableMap, setInnerTable] = useState<TableReduxStructure | undefined>()
    useEffect(() => {
        console.log('111')
        if(innerTableMap) {
            console.log('22')
            tableSetInnerTable({lineId: id, storage: innerTableMap})
        }
    }, [innerTableMap])
    return {innerTableMap, setInnerTable}
}