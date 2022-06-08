import {KeysOfType} from "../types/HelperTypes";
import {Column, ColumnWidth} from "../types/TableStructure";

export const calcGridColumnWidth = <T>(elements: T[], numKey: KeysOfType<Required<T>, number | ColumnWidth>): string => {
    return elements.reduce((accum, el) => {
        const width = el[numKey]
        accum += width ? `${width}px ` : ''
        return accum
    }, '')
}

export const calcWidth = (elements: Column[]): number => {
    return elements.reduce((accum, col) => {
        if(!col.hidden) {
            const width = col.width
            accum += Number(width)
        }
        return accum
    }, 0)
}