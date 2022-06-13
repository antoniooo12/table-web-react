import React, {useContext} from 'react';
import clsx from "clsx";
import cl from "../../BigPicture.module.scss";
import {CellBlock} from "../../../Column/CellBlock";
import {TBigPictureTable} from "../../BigPictureType";
import {TableWebContext} from "../../../TableWeb/TableWebContext";
import {SectionParam, SectionTableStructure} from "../../../../types/TableStructure";
import {Item, TableColumn} from "../../../../redux/reduxTypes";

const findSectionByColumnName = (sections: Map<string, SectionTableStructure>) => (columnName: string) => {
    for (const [keySection, section] of sections) {
        if (section.columns.has(columnName)) {
            return {section, keySection}
        }
    }
    throw  new Error(``)
}
type SectionName = string
type TSectionStructure = Map<SectionName, { sectionParams: SectionParam, columns: TableColumn }>
const columnsDataStructureBySection = (sections: Map<string, SectionTableStructure>, columns: TableColumn) => {
    const findSection = findSectionByColumnName(sections)
    const newStructure = [...columns.entries()].reduce((accum: TSectionStructure, [key, item]) => {
        const {section, keySection} = findSection(key)
        if (accum.has(keySection)) {
            const f = accum.get(keySection)
            f?.columns.set(key, item)
        } else {
            accum.set(keySection, {
                sectionParams: section.sectionParams,
                columns: new Map<string, Item>([[key, item]]),
            })
        }
        return accum
    }, new Map())
    return newStructure
}

const BigPictureLines: React.FC<TBigPictureTable> = ({lineData, columnsParam}) => {
    const {shield} = useContext(TableWebContext)

    const getSectionByColumnName = findSectionByColumnName(shield.section)
    const columns = columnsDataStructureBySection(shield.section, lineData.columns)
    return (
        <div >
            {[...columns.values()].map(({columns, sectionParams}) => <div
            >
                <div>{sectionParams.title}</div>
                <div
                    className={clsx({[cl.cellBlock]: true, [cl.cellBlockAround]: columns.size > 1 })}
                >
                    {[...columns.entries()].map(([key, cellData]) =>
                        <div className={clsx(cl.cell)}>
                            <div>{columnsParam.get(key)?.title}</div>
                            <CellBlock
                                viewType={'bigPicture'}
                                columnName={key}
                                cellData={cellData}
                                key={key}
                            />
                        </div>
                    )}
                </div>

            </div>)}
        </div>
    );
};

export {BigPictureLines};