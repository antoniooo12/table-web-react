import {Column, Columns, SectionTableStructure, TableStructure} from "../types/TableStructure";
import {SectionName} from "../types/TableStructureAlias";

// export type TColumnRenderStructure =  Map<string, {column: Column, subColumns?: Map<string, Column> }>

export const executeColumns = (table: TableStructure) => {
    const newMap = new Map<string, Column>()

    const parseColumns = (sectionTableStructures: SectionTableStructure[], sectionName?: SectionName) => {
        sectionTableStructures.map((section) => {
            [...section.columns.entries()].forEach(([key, column]) => {
                if (section.sectionParams.hidden) {
                    newMap.set(key, {...column, hidden: section.sectionParams.hidden})
                } else {
                    newMap.set(key, column)
                }
            })
        })
    }

    const recurse = (sections: SectionTableStructure[]) => {

        const columns = sections.map(({columns, sectionParams}) => {
            return columns
        })
        parseColumns(sections)
    }
    const a = [...table.shield.section.values()]

    recurse(a)
    return newMap
}
