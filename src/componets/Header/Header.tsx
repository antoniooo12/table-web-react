import cl from './HeaderStyle.module.scss'
import React, {CSSProperties, ReactNode, useContext, useMemo} from 'react';
import {Column, SectionTableStructure} from "../../types/TableStructure";
import {TableWebContext} from "../TableWeb/TableWebContext";
import clsx from "clsx";
import {HeaderBlock} from "./HeaderBlock";
import {calcGridColumnWidth} from "../../utils/utilsTableView";

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
            },)
        }
        const recurse = (s: SectionTableStructure[]) => {
            return  s.flatMap(d => {
                if (!d.sectionParams.hidden) {
                    const {children, widthGrid} = d.columns && {
                        children: buildColumn([...d.columns.entries()]),
                        widthGrid: [...d.columns.values()].reduce((accum, col) => {
                            accum += `${col.width}px `
                            return accum
                        }, ''),
                    }
                    return <HeaderBlock title={d.sectionParams.title} children={children} widthGrid={widthGrid}/>
                }
            })
        }
       return  recurse([...shield.section.values()])
    }, [])
    const sectionParams = [...shield.section.values()].map(el => el.sectionParams)

    const style: CSSProperties = {
        gridTemplateColumns: calcGridColumnWidth(sectionParams, 'width')
    }
    return <div
        className={clsx(cl.wrapper)}
        style={style}
    >
        {header}
    </div>
};

export {Header};