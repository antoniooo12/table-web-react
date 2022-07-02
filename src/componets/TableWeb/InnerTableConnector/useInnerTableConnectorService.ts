import {useEffect, useState} from "react";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {tableSetInnerTable} from "../../../redux/tableReducer";

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
