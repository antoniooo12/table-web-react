import {Columns} from "../../types/TableStructure";
import {useActionsTable} from "../../hooks/useActionsTable";
import {useCallback} from "react";

export type TInitialValue = Map<string, { value: unknown, subData?: TInitialValue }>

export const findInitialValueToCreateLine = (columnStructure: Columns, previousValues?: Map<string, unknown>): TInitialValue => {
    const values = [...columnStructure.entries()]
        .reduce((accum: TInitialValue, [key, column]) => {
            const initialValue = column.cellParam.default
            const typeOfInitialValue = initialValue.type
            if (typeOfInitialValue === 'Default') {
                const subColumns = column.subColumns && findInitialValueToCreateLine(column.subColumns)
                accum.set(key, {value: initialValue.value, subData: subColumns})
            } else if (typeOfInitialValue === 'Previous' && previousValues) {
                if (previousValues.get(key)) {
                    accum.set(key, {value: previousValues.get(key)})
                } else {
                    accum.set(key, {value: initialValue.orNotPrevious})
                }
            }
            return accum
        }, new Map())
    return values
}

export const useCreateLine = (columnStructure: Columns, previousValues: Map<string, unknown>) => {
    const {tableCreateLine} = useActionsTable()
    return useCallback(() => {
        const initialValueToCreateLine = findInitialValueToCreateLine(columnStructure, previousValues)
        tableCreateLine(columnStructure, initialValueToCreateLine)
    }, [])
}
