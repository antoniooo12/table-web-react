import {Column, SectionTableStructure, TableStructure} from "../types/TableStructure";


export const executeColumns = (table: TableStructure) => {
    function findColumns(sections: SectionTableStructure[], isVisible?: boolean) {
        return sections.reduce((accum, current) => {
            const visibilitySection = current.sectionNameParams.hidden || isVisible
            console.log(visibilitySection)
            if (current.sectionInner) {
                [...findColumns([...current.sectionInner.values()], visibilitySection).entries()].forEach((newColumn) => {
                    accum.set(newColumn[0], newColumn[1])
                })
            }
            if (current.columns) {
                [...current.columns.entries()].forEach((newColumn) => {
                    accum.set(newColumn[0], {...newColumn[1], hidden: visibilitySection})
                    // accum  .set(newColumn[0], {...newColumn[1], visible : visibilitySection})
                })
            }
            return accum
        }, new Map<string, Column>())
    }

    const columns = findColumns([...table.shield.section.values()])

    console.log(columns)
    return columns

}