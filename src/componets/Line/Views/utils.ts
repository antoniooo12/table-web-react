import {tableChangeCell} from "../../../redux/tableReducer";

export const setCellValue = (setter: typeof tableChangeCell) => (lineId: string, nameCell: string) => <N>(value: N) => {
    setter({
        nameCell: nameCell,
        value: value,
        lineId: lineId,
        status: 'isAll'
    })
}
