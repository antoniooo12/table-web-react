import {KeysOfType} from "../types/HelperTypes";
import {ColumnWidth} from "../types/TableStructure";

export const calcGridColumnWidth = <T>(elements: T[], numKey: KeysOfType<Required<T>, number | ColumnWidth>): string => {
    return elements.reduce((accum, el) => {
        const width = el[numKey]
        accum += width ? `${width}px ` : ''
        return accum
    }, '')
}

export const calcWidth = <T>(elements: T[], numKey: KeysOfType<Required<T>, number | ColumnWidth>): number => {
    return elements.reduce((accum, el) => {
        const width = el[numKey]
        accum += Number(width)
        return accum
    }, 0)
}