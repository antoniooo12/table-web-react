import {EnumTableReducer, Item, TableReducerActions, TableState} from "./reduxTypes";
import produce, {enableMapSet} from "immer";
import {v4 as uuidv4} from 'uuid';


const defaultState: TableState = {
    storage: new Map([
        ['isAll', {data: []}],
        ['isNew', {data: []}]
    ])
}

export function tableStoreReducer(state: TableState = defaultState, action: TableReducerActions) {
    enableMapSet()
    switch (action.type) {
        case EnumTableReducer.createLine: {
            const structure = action.payload
            const defaultItem = (name: string): Item => {
                return {
                    id: uuidv4(),
                    nameColumn: name,
                    wasEdit: false,
                    value: '',

                }
            }
            const columns = [...structure.entries()].reduce((accum, item) => {
                const subColumns = item[1].subColumns
                accum.set(item[0], {
                    ...defaultItem(item[0]),
                    subData: subColumns && [...subColumns.data.entries()].reduce((subAccum, subCell) => {
                        subAccum.set(subCell[0], defaultItem(subCell[0]))
                        return subAccum
                    }, new Map<string, Item>())
                })
                return accum
            }, new Map<string, Item>())

            return produce(state, draft => {
                draft.storage.get('isNew')?.data.push({
                    id: Date.now(),
                    wasEdit: false,
                    columns: columns,
                    toDelete: false
                })
            })
        }
        case EnumTableReducer.changeCell: {
            const {status, value, nameCell, lineId, TypeSubData, parentCell} = action.payload
            return produce(state, draft => {
                const line = draft.storage.get(status)
                    ?.data.find(line => line.id === lineId)

                if (TypeSubData === 'default') {
                    const cell = line?.columns.get(nameCell)
                    if (cell) {
                        line?.columns.set(nameCell, {...cell, value: value})
                    }
                } else if (TypeSubData === "Map" && parentCell) {
                    const cell = line?.columns.get(parentCell)?.subData?.get(nameCell)
                    if (cell) {
                        line?.columns.get(parentCell)?.subData?.set(nameCell, {...cell, value})
                    }

                }


            })
        }
        default:
            return state
    }
}