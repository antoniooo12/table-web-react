import {EnumStatus, EnumTableReducer, TableReducerActions, TableState, TTableLine} from "./reduxTypes";
import produce, {enableMapSet} from "immer";
import {createColumns, createLine, createLineToTable} from './reduxHellpers'
import {recursiveMapSearch} from "../hellpers/helpers";

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
            const {status, value, nameCell, lineId} = action.payload
            const lineIndex = state.storage!.data
                .findIndex(line => line.lineInformation.id === lineId)


            return produce(state, draft => {
                const line = draft.storage!.data[lineIndex]
                const cell = recursiveMapSearch(line.columns, nameCell, 'subColumns')
                if (!line.columns.has(nameCell)) {
                    line.columns.forEach(line => {
                        if (line.subColumns?.has(nameCell)) {
                            line.subColumns.set(nameCell, {...cell, value: value})
                        }
                    })
                } else {
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
                return createLine(EnumStatus.isAll)()(createColumns(columnsStructure)(externalLine))
            })
            return produce(state, draft => {
                const filteredTable = draft.storage.data
                    .filter(line => line.lineInformation.status === EnumStatus.isNew)
                table.push(...filteredTable)
                draft.storage.data = table
            })
        }
        case  EnumTableReducer.SetEditableLine : {
            const {lineId} = action.payload
            return produce(state, draft => {
                draft.storage.data.find(line => line.lineInformation.id = lineId)!.lineInformation.wasEdit = true
            })
        }
        case EnumTableReducer.SetInnerTable : {
            const {storage, lineId} = action.payload
            return produce(state, draft => {
                draft.storage.data.find(line => line.lineInformation.id === lineId)!.innerTableInformation = storage
            })

        }
        default:
            return state
    }
}
