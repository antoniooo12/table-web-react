import {EnumStatus, EnumTableReducer, TableReducerActions, TableState} from "./reduxTypes";
import produce, {enableMapSet} from "immer";
import {createColumnsFromExternalData, createLine, createLineToTable} from './reduxHellpers'
import {arrayOfObjectsToMap} from "../hellpers/helpers";

const defaultState: TableState = {
    storage: {data: []}
}


export function tableStoreReducer(state: TableState = defaultState, action: TableReducerActions<any>) {
    enableMapSet()
    switch (action.type) {
        case EnumTableReducer.createLine: {
            const {columnsStructure, initialValue} = action.payload
            const lineToTable = createLineToTable(columnsStructure, initialValue, EnumStatus.isNew)
            return produce(state, draft => {
                draft.storage.data.push(lineToTable)
            })
        }
        case EnumTableReducer.changeCell: {
            const {status, value, nameCell, lineId, TypeSubData, parentCell} = action.payload
            return produce(state, draft => {
                const lineIndex = draft.storage!.data
                    .findIndex(line => line.lineInformation.id === lineId)
                const line = draft.storage!.data[lineIndex]
                const cell = line.columns.get(nameCell)
                if (cell) {
                    line.columns.set(nameCell, {...cell, value: value})
                }
            })
        }
        case EnumTableReducer.deleteLine: {
            const {status, lineId} = action.payload
            return produce(state, draft => {
                const lineIndex = state.storage!.data.findIndex(el => {
                    if (el.lineInformation.id === lineId) {
                        return el
                    }
                })
                const line = draft.storage!.data[lineIndex]
                draft.storage.data.splice(lineIndex, 1, {
                    ...line, lineInformation: {
                        ...line.lineInformation, toDelete: !line.lineInformation.toDelete
                    }
                })
            })
        }
        case EnumTableReducer.loadExternalData: {
            const {externalData, columnsStructure} = action.payload
            const table = externalData.map(externalLine => {
                return createLine(EnumStatus.isAll)()(createColumnsFromExternalData(columnsStructure)(externalLine))
            })
            return produce(state, draft => {
                draft.storage.data.push(...table)
            })
        }
        default:
            return state
    }
}
