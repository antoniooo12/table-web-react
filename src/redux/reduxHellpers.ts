import {Item, TExternalData, TStatus, TTableLine} from "./reduxTypes";
import {v4 as uuidv4} from "uuid";
import {Columns} from "../types/TableStructure";
import {pipe} from "fp-ts/function";
import {ExternalDataColumn} from "../API/TableWebAPITypes";

export const createDefaultItem = <T>(name: string, initialValue: T, id?: string): Item<unknown> => {
    return {
        id: id || uuidv4(),
        nameColumn: name,
        wasEdit: false,
        value: initialValue,
    }
}
export const createLine = (status: TStatus) => (id?: string) => (columns: Map<string, Item<unknown>>): TTableLine => {
    return {
        lineInformation: {
            status: status,
            toDelete: false,
            id: id || uuidv4(),
            wasEdit: false,
        },
        columns: columns,
    }
}
export const createColumns = (columnsStructure: Columns) => (initialValue: Map<string, unknown>) => {
    return [...columnsStructure.keys()].reduce((accum, item) => {
        accum.set(item, {
            ...createDefaultItem(item, initialValue.get(item)),
        })
        return accum
    }, new Map<string, Item<unknown>>())
}

export const createColumnsFromExternalData = (columnsStructure: Columns) =>
    (externalValues:  Map<string, ExternalDataColumn<unknown>>): Map<string, Item<unknown>> => {
        return [...columnsStructure.keys()].reduce((accum: Map<string, Item<unknown>>, column) => {
            const columnName = externalValues.get(column)?.nameColumn
            const columnValue = externalValues.get(column)?.value
            if (columnName && columnValue) {
                return accum.set(columnName, createDefaultItem(columnName, columnValue))
            }
            return accum.set(column, createDefaultItem(column, ''))
        }, new Map())
    }

export const createLineToTable = (columnsStructure: Columns, initialValue: Map<string, unknown>, status: TStatus, id?: string) => {
    return pipe(createColumns(columnsStructure)(initialValue), createLine(status)(id))
}