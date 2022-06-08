import cl from './HeaderStyle.module.scss'
import React, {useContext, useMemo} from 'react';
import {Column, SectionTableStructure} from "../../types/TableStructure";
import {TableWebContext} from "../TableWeb/TableWebContext";
import clsx from "clsx";
import {HeaderBlock} from "./HeaderBlock";

export type ComponentHeader = {}

const Header: React.FC<ComponentHeader> = (
    {}) => {
    const {shield} = useContext(TableWebContext)

    const header = useMemo(() => {
        const buildColumn = (columns: [string, Column][]) => {
            return columns.flatMap(([colName, col]) => {
                if (!col.hidden) {
                    return <HeaderBlock title={col.title} width={col.width}/>
                }
            })
        }
        const recurse = (s: SectionTableStructure[]) => {
            const b = s.flatMap(d => {
                if (!d.sectionNameParams.hidden) {
                    const children = d.columns && buildColumn([...d.columns.entries()])
                    return <HeaderBlock title={d.sectionNameParams.title} children={children}/>
                }
            })
            return b
        }
        let a = [...shield.section.values()]
        const header = recurse(a)
        return header
    }, [])
    return <div className={clsx(cl.wrapper)}>
        {header}
    </div>
};

export {Header};