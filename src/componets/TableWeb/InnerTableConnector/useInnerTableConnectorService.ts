import {useContext, useState} from "react";
import {TableReduxStructure, TableState} from "../../../redux/reduxTypes";
import {TTableStore} from "../TableWebProviderComponent";

export const useInnerTableConnectorService = () => {
    const [innerTableMap, setInnerTable] = useState<TableReduxStructure | undefined>()
    return {innerTableMap, setInnerTable}
}