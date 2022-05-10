import {SNB} from "../types/HelperTypes";
import {DefaultValue, InputType} from "../types/TableStructure";
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

export const findDefaultValue = <T>(defaultValue: DefaultValue<T>) => {
    switch (defaultValue.type) {
        case "Default": {
            return defaultValue.value
        }
        case "Previous": {
            return defaultValue.orNotPrevious
        }
        default:
            absurd(defaultValue)
    }
}