import {calcGridColumnWidth, calcWidth} from "../../../utils/utilsTableView";
import {Columns} from "../../../types/TableStructure";
import {MReactDispSetter} from "../../../types/HelperTypes";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {useTableTypedSelector} from "../../../hooks/useTableTypedSelector";
import {useCallback, useContext, useEffect} from "react";
import {TableWebContext} from "../../TableWeb/TableWebContext";
import {useInnerTable} from "../../TableWeb/InnerTableConnector/InnerTableConnector";

export const useGetWidth = (columns: Columns) => {
    const widthGrid = calcGridColumnWidth([...columns.values()], 'width')
    const width = calcWidth([...columns.values()])
    return {widthGrid, width}
}

// export const useUpdateInnerTable = () => {
//     const {setInnerTable} =useInnerTable()
//     const {storage} = useTableTypedSelector(state => state.tableStore)
//     const {viewMode} = useContext(TableWebContext)
//     useEffect(() => {
//         if (setInnerTable && viewMode === 'innerTable')
//             setInnerTable(prevState => prevState.set('test', storage))
//     }, [setInnerTable, storage])
// }