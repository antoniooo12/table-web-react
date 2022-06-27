import {TTableLine} from "../../../redux/reduxTypes";
import {EColumns2} from "../table/tableStructure";

export const calculateSum = (lines: TTableLine[]):number => {
    return lines.reduce((accum, line) => {
        const lineSum =line.columns.get(EColumns2.sum)!.value  as number
        accum += lineSum
        return accum
    }, 0)
}
