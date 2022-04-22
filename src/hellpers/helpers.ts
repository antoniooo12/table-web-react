import {SNB} from "../types/HelperTypes";
import {InputType} from "../types/TableStructure";

export const selectType = (initialValue: SNB, value: SNB) => {
    if (initialValue === 0) {
        return Number(value)
    } else if (initialValue === false || initialValue === true) {
        return Boolean(value)
    }
    return value
}

export const selectCellType = (type: InputType,value?: SNB | undefined): SNB => {
    if (type === 'checkbox') {
        return value ? Boolean(value) : false
    } else if (type === 'number') {
        return value ?Number(value): 0
    }
    return value || ''
}