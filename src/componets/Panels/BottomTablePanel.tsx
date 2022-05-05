import React, {useCallback, useContext} from 'react';
import cl from './BottomTablePanel.module.scss'
import {useActionsTable} from "../../hooks/useActionsTable";
import {Columns} from "../../types/TableStructure";
import {Button} from "../buttons/Button/Button";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {downloadTxtFile, EnumOptionsDownloadTxtFile} from "../../API/downloadTxtFile";

type BottomTablePanel = {
    columnStructure: Columns
}
const BottomTablePanel: React.FC<BottomTablePanel> = ({columnStructure}) => {
    const {tableCreateLine} = useActionsTable()
    const {previous: [previousValues], tableConnect} = useContext(TableWebContext)
    const stateTable = useTableTypedSelector(state => state.tableStore.storage)

    const onCreateLine = () => {
        const temp = [...columnStructure.entries()]
            .reduce((accum: Map<string, unknown>, [key, column]) => {
                const initialValue = column.cellParam.default
                const typeOfInitialValue = initialValue.type
                if (typeOfInitialValue === 'Default') {
                    accum.set(key, initialValue.value)
                } else if (typeOfInitialValue === 'Previous') {
                    if (previousValues.get(key)) {
                        accum.set(key, previousValues.get(key))
                    } else {
                        accum.set(key, initialValue.orNotPrevious)
                    }
                }
                return accum
            }, new Map())
        tableCreateLine(columnStructure, temp)
    }
    const onSave = () => {
        console.log(stateTable)
        tableConnect.settableEternalState(stateTable)
    }

    const onDownload = useCallback(() => {
        downloadTxtFile(stateTable.data, {
            params: {propertyToSave: ['nameColumn', 'value']},
            columns: {type: EnumOptionsDownloadTxtFile.toSave, fields: ['clientPhone']}
        })
    }, [stateTable.data])

    return (
        <div className={cl.wrapper}>
            <Button
                onClick={onCreateLine}
                style={'blue'}
            >Add</Button>
            <button
                onClick={onSave}
            >Save
            </button>
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