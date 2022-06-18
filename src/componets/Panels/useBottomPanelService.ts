import {useCallback, useContext} from "react";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {useCreateLine} from "./onActions/onCreateLine";
import {downloadTxtFile, EnumOptionsDownloadTxtFile} from "../../API/downloadTxtFile";
import {getButtonGroupsStyle, getButtonsStyle} from "../../utils/buttonUtils";


export const useBottomPanelService = () => {
    const {previous: [previousValues], tableConnect, viewMode, columns} = useContext(TableWebContext)
    const stateTable = useTableTypedSelector(state => state.tableStore.storage)
    const onCreateLine = useCreateLine(columns, previousValues)
    const buttonsStyle = getButtonsStyle(viewMode)
    const buttonsGroupStyle = getButtonGroupsStyle(viewMode)
    const onSaveMemo = useCallback(() => {
        tableConnect.setTableExternalState &&    tableConnect.setTableExternalState(stateTable)
    }, [stateTable])

    const onDownload = useCallback(() => {
        downloadTxtFile(stateTable.data, {
            params: {
                propertyToSave: {
                    type: 'all'
                }
            },
            columns: {type: EnumOptionsDownloadTxtFile.toSaveExcept, fields: []}
        })
    }, [stateTable.data])
    return {buttonsStyle, onCreateLine, onDownload, onSaveMemo,buttonsGroupStyle}
}