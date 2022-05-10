import {Columns} from "../../types/TableStructure";
import {useActionsTable} from "../../hooks/useActionsTable";
import {useCallback} from "react";

export const useCreateLine = (columnStructure: Columns, previousValues: Map<string, unknown>) => {
    const {tableCreateLine} = useActionsTable()
    return useCallback(() => {
        const temp = [...columnStructure.entries()]
            .reduce((accum: Map<string, unknown>, [key, column]) => {
                const initialValue = column.cellParam.default
                const typeOfInitialValue = initialValue.type
                if (typeOfInitialValue === 'Default') {
                    accum.set(key, initialValue.value)
                } else if (typeOfInitialValue === 'Previous') {
                    if (previousValues.get(key)) {
                        accum.set(key, previousValues.get(key))
                    } else {
                        accum.set(key, initialValue.orNotPrevious)
                    }
                }
                return accum
            }, new Map())
        tableCreateLine(columnStructure, temp)
    }, [])
}
