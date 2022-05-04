import {EnumStatus, EnumTableReducer, Item, TableReducerActions, TableState} from "./reduxTypes";
import produce, {enableMapSet} from "immer";
import {v4 as uuidv4} from 'uuid';
import {CellParam} from "../types/TableStructure";


const defaultState: TableState = {
    storage:{data: []}
}

export function tableStoreReducer(state: TableState = defaultState, action: TableReducerActions<any>) {
    enableMapSet()
    switch (action.type) {
        case EnumTableReducer.createLine: {
            console.log('12345678')
            const {columnsStructure, initialValue } = action.payload
            console.log()
            const defaultItem = (name: string, cellParam: CellParam<unknown>): Item<unknown> => {
                return {
                    id: uuidv4(),
                    nameColumn: name,
                    wasEdit: false,
                    value: initialValue.get(name),
                }
            }
            const columns = [...columnsStructure.entries()].reduce((accum, item) => {
                const subColumns = item[1].subColumns
                accum.set(item[0], {
                    ...defaultItem(item[0], item[1].cellParam),
                    subData: subColumns && [...subColumns.data.entries()].reduce((subAccum, subCell) => {
                        subAccum.set(subCell[0], defaultItem(subCell[0], subCell[1].cellParam))
                        return subAccum
                    }, new Map<string, Item<unknown>>())
                })
                return accum
            }, new Map<string, Item<unknown>>())

            return produce(state, draft => {
                draft.storage.data.push({
                    lineInformation: {
                        status: EnumStatus.isNew,
                        toDelete: false,
                        id: uuidv4(),
                        wasEdit: false,
                    },
                    columns: columns,
                })
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
                    console.log(el.lineInformation.id, lineId)
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
        default:
            return state
    }
}