import {Columns} from "../../../types/TableStructure";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {useCallback} from "react";
import {absurd} from "fp-ts/function";
import {defaultFunctions} from "../../../hellpers/defaultFunctions/defaultFunctions";

type TColumnToRedux = { value: unknown, subData?: TInitialValue }
export type TInitialValue = Map<string, TColumnToRedux>
export const findInitialValueToCreateLine = (columnStructure: Columns, previousValues?: Map<string, unknown>): TInitialValue => {
    const values = [...columnStructure.entries()]
        .reduce((accum: TInitialValue, [key, column]) => {
            const initialValue = column.cellParam.default
            switch (initialValue.type) {
                case 'Default': {
                    const subColumns = column.subColumns && findInitialValueToCreateLine(column.subColumns)
                    accum.set(key, {value: initialValue.value, subData: subColumns})
                    break
                }
                case "Previous": {
                    if (previousValues && previousValues.get(key)) {
                        accum.set(key, {value: previousValues.get(key)})
                    } else {
                        accum.set(key, {value: initialValue.orNotPrevious})
                    }
                    break
                }
                case "defaultFunctions": {
                    accum.set(key, {value: defaultFunctions[initialValue.value]()})
                    break
                }
                case "customFunction": {
                    const a = initialValue.value
                    break
                }
                default:
                    absurd(initialValue)
            }

            if (column.subColumns) {

                const subData: TInitialValue = findInitialValueToCreateLine(column.subColumns)
                const columnWithSubData: TColumnToRedux = {value: accum.get(key)?.value, subData}
                return accum.set(key, columnWithSubData)
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
