import {SectionParam, SectionTable, TShieldStructure} from "../../../types/TableStructure";
import {useCallback, useContext, useState} from "react";
import {useInnerTable} from "../InnerTableConnector/InnerTableConnector";
import {useTableTypedSelector} from "../../../hooks/useTableTypedSelector";
import {TableWebContext} from "../TableWebContext";

const checkSectionSize = (shield: TShieldStructure): TShieldStructure => {
    return {
        section: [...shield.section.entries()].reduce((accum: SectionTable, [nameSection, section]) => {
            const width = [...section.columns.values()].reduce((accum, col) => {
                accum += Number(col.width)
                return accum
            }, 0)
            const sectionParams: SectionParam = {...section.sectionParams, width}
            return accum.set(nameSection, {...section, sectionParams})
        }, new Map()),
        innerTable: shield.innerTable
    }
}
export const shieldChecker = (shield: TShieldStructure): TShieldStructure => {
    return checkSectionSize(shield)
}

export const useOpenInBigPicture = () => {
    const [selectedLineIdToBigPicture, setSelectedLineIdToBigPicture] = useState<string>()
    return {selectedLineIdToBigPicture, setSelectedLineIdToBigPicture}
}

