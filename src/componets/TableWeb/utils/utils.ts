import {SectionParam, SectionTable, TShieldStructure} from "../../../types/TableStructure";

const checkSectionSize = (shield: TShieldStructure): TShieldStructure => {
    return {
        section: [...shield.section.entries()].reduce((accum: SectionTable, [nameSection, section]) => {
            const width = [...section.columns.values()].reduce((accum, col) => {
                accum += Number(col.width)
                return accum
            }, 0)
            const sectionParams: SectionParam = {...section.sectionParams, width}
            return accum.set(nameSection, {...section, sectionParams})
        }, new Map())
    }
}
export const shieldChecker = (shield: TShieldStructure): TShieldStructure => {

    return checkSectionSize(shield)
}