import {EnumStatus, EnumTableReducer, Item, TableReducerActions, TableState, TStatus} from "./reduxTypes";
import produce, {enableMapSet} from "immer";
import {v4 as uuidv4} from 'uuid';
import {selectCellType, selectType} from "../hellpers/helpers";
import {CellParam, Column} from "../types/TableStructure";


const defaultState: TableState = {
    storage: new Map([
        [EnumStatus.isAll, {data: []}],
        [EnumStatus.isNew, {data: []}]
    ])
}

export function tableStoreReducer(state: TableState = defaultState, action: TableReducerActions<any>) {
    enableMapSet()
    switch (action.type) {
        case EnumTableReducer.createLine: {
            const structure = action.payload
            const defaultItem = (name: string, cellParam: CellParam): Item => {
                return {
                    id: uuidv4(),
                    nameColumn: name,
                    wasEdit: false,
                    value: selectCellType(cellParam.type, cellParam?.default),
                }
            }
            const columns = [...structure.entries()].reduce((accum, item) => {
                const subColumns = item[1].subColumns
                accum.set(item[0], {
                    ...defaultItem(item[0], item[1].cellParam),
                    subData: subColumns && [...subColumns.data.entries()].reduce((subAccum, subCell) => {
                        subAccum.set(subCell[0], defaultItem(subCell[0], subCell[1].cellParam))
                        return subAccum
                    }, new Map<string, Item>())
                })
                return accum
            }, new Map<string, Item>())

            return produce(state, draft => {
                draft.storage.get(EnumStatus.isNew)?.data.push({
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

            // console.log(typeof status === TStatus)
            // if()
            return produce(state, draft => {
                const lineIndex = draft.storage.get(status)!.data
                    .findIndex(line => line.lineInformation.id === lineId)
                const line = draft.storage.get(status)!.data[lineIndex]
                const cell = line?.columns.get(nameCell)
                if (cell) {
                    line?.columns.set(nameCell, {...cell, value: value})
                }


            })
        }
        case EnumTableReducer.deleteLine: {
            const {status, lineId} = action.payload
            return produce(state, draft => {
                const lineIndex = state.storage.get(status)!.data.findIndex(el => {
                    console.log(el.lineInformation.id, lineId)
                    if (el.lineInformation.id === lineId) {
                        return el
                    }
                })
                // console.log(lineIndex)
                // console.log(state.storage.get(status)?.data)
                const line = draft.storage.get(status)!.data[lineIndex]
                // console.log(line)
                draft.storage.get(status)?.data.splice(lineIndex, 1, {
                    ...line, lineInformation: {
                        ...line.lineInformation, toDelete: !line.lineInformation.toDelete
                    }
                })
                // draft.storage.get(status)?.data.splice(lineIndex,1,{ ...line, toDelete: !line.toDelete})
            })
        }
        default:
            return state
    }
}