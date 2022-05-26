import React, {useCallback, useContext} from 'react';
import cl from './BottomTablePanel.module.scss'
import {useActionsTable} from "../../hooks/useActionsTable";
import {Columns} from "../../types/TableStructure";
import {Button} from "../buttons/Button/Button";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {downloadTxtFile, EnumOptionsDownloadTxtFile} from "../../API/downloadTxtFile";
import {useCreateLine} from "./onActions/onCreateLine";
import {onSave} from "./onActions/onSave";

type BottomTablePanel = {
    columnStructure: Columns
}
const BottomTablePanel: React.FC<BottomTablePanel> = ({columnStructure}) => {
    const {previous: [previousValues], tableConnect} = useContext(TableWebContext)
    const stateTable = useTableTypedSelector(state => state.tableStore.storage)
    const onCreateLine = useCreateLine(columnStructure, previousValues)

    const onSaveMemo = useCallback(() => onSave(tableConnect.setTableExternalState),
        [stateTable])

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

    return (
        <div className={cl.wrapper}>
            <Button
                onClick={onCreateLine}
                style={'blue'}
            >Add</Button>
            <Button
                onClick={onSaveMemo}
            >Save
            </Button>
            <Button
                onClick={onDownload}
                style={'blue'}
            >
                Download
            </Button>
        </div>
    );
};

export {BottomTablePanel};