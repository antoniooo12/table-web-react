import {SNB} from "../types/HelperTypes";
import {Column, Columns, DefaultValue, InputType} from "../types/TableStructure";
import {Predicate} from "fp-ts/Predicate";
import {absurd} from "fp-ts/function";


export const filterR = <A>(arr: Array<A>) => (predicate: Predicate<A>) => {
    return arr.filter(predicate)
}

export const debug = <T>(key?: string | 'spread') => (value: T): T => {
    if (key) {
        console.log(`DEBUG:${key}: ${value}`)
    } else {
        console.log(value)
    }
    return value
}

export const copyParams = <A>(propertyToSave: Array<keyof A>) => (obj: A) => {
    return propertyToSave.reduce((accum, param) => {
        return {
            ...accum,
            [param]: obj[param]
        }
    }, {})
}

export const filterParams = <A>(propertyToSave?: Array<keyof A>) => (arr: Array<A>): Array<Partial<A>> => {
    if (propertyToSave) {
        return arr.map(copyParams(propertyToSave))
    }
    return arr
}

export const selectType = <T>(initialValue: T | number | boolean, value: T | number | boolean) => {
    if (initialValue === 0) {
        return Number(value)
    } else if (initialValue === false || initialValue === true) {
        return Boolean(value)
    }
    return value
}

export const selectCellType = (type: InputType, value?: SNB | undefined): SNB => {
    if (type === 'checkbox') {
        return value ? Boolean(value) : false
    } else if (type === 'number') {
        return value ? Number(value) : 0
    }
    return value || ''
}

export const arrayOfObjectsToMap = <T>(objs: T[], key: keyof T): Map<T[keyof T], T> => {
    return objs.reduce((accum, obj) => {
        return accum.set(obj[key], obj)
    }, new Map<T[keyof T], T>())
}

export function recursiveColumnSearch(columns: Map<string, Column>, searchingName: string): Column {
    let column: Column | undefined;

    for (const [colName, columnBody] of columns) {
        if (colName === searchingName) {

            column = columnBody
            break
        } else if (columnBody.subColumns && [...columnBody.subColumns.keys()].includes(searchingName)) {
            column = recursiveColumnSearch(columnBody.subColumns, searchingName)
        }
    }

    if (column === undefined) {
        debugger
        throw new Error('Column not found')
    }
    return column
}


type KeysOfType<T, V> = keyof {
    [P in keyof T as T[P] extends V ? P : never]: any
}

type temp<T> = KeysOfType<Required<T>, Map<string, T>>

function returnInner<T>(c: T, b: temp<T>): Map<string, T> | undefined {
    return c[b] as unknown as Map<string, T> | undefined
}

export function recursiveMapSearch<T>(columns: Map<string, T>, searchingName: string, searchIn: temp<T>): T {
    let column: T | undefined;
    for (const [colName, columnBody] of columns) {
        let sub = returnInner(columnBody, searchIn)
        if (colName === searchingName) {

            column = columnBody
            break
        } else if (sub && [...sub.keys()].includes(searchingName)) {
            column = recursiveMapSearch(sub, searchingName, searchIn)
        }
    }

    if (column === undefined) {
        debugger
        throw new Error('Column not found')
    }
    return column
}

