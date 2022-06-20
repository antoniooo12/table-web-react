import {useContext} from "react";
import {TableWebContext} from "../../TableWeb/TableWebContext";
import {TTableHeaderBlock} from "./TableHeaderTypes";


export const useTableHeaderService = () => {
    const {shield: {section}} = useContext(TableWebContext)
    let sectionTemplate: TTableHeaderBlock[] = [...section.values()].map(({sectionParams, columns}) => {
        const colSpan = [...columns.keys()].length
        const headerBlock: TTableHeaderBlock = {
            colSpan,
            title: sectionParams.title,
        }
        return headerBlock
    })

    let columnsTemplate: TTableHeaderBlock[] = [...section.values()].reduce((accum: TTableHeaderBlock[], {columns}) => {
        const headerBlockArr = [...columns.values()].map(({title, width}) => {
            const columnWidth = typeof width === "number" ? width : undefined
            const headerBlock: TTableHeaderBlock = {
                colSpan: 1,
                title: title,
                width: columnWidth,
            }
            return headerBlock
        })
        return [...accum, ...headerBlockArr]
    }, [])

    return {sectionTemplate, columnsTemplate}
}

