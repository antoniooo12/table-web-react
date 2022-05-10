// @ts-ignore
import cl from './HeaderStyle.module.scss'

import React, {useContext} from 'react';
import {Column, HeaderParam, SectionTableStructure, TShieldStructure} from "../../types/TableStructure";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {THeader} from "./THedaer";

export type ComponentHeader = {}

const Header: React.FC<ComponentHeader> = (
    {}) => {
    const {shield} = useContext(TableWebContext)
    const getColumns = (columns: Column[]) => {
        return columns.flatMap(((column, numColumn) => {
            if (!column.hidden) {
                return (
                    <div
                        style={{
                            width: `${column.width}px`,
                        }}
                        className={cl.column}
                        key={column.title}
                    >
                        {column.title}
                    </div>
                )
            }
        }))
    }

    function recurse(section: SectionTableStructure[], number?: number): JSX.Element {

        return (
            <
                div
                style={{display: 'flex'}}
                // className={cl.inner}
            >
                {section.flatMap((el, index) => {
                    const columns = el.columns && getColumns([...el.columns.values()])
                    console.log(number)
                    if(el.sectionNameParams.hidden !== true) {
                        return (
                            <div
                                key={el.sectionNameParams.title}
                            >
                                <div
                                    key={el.sectionNameParams.title}
                                >
                                    <div>{el.sectionNameParams.title}
                                    </div>
                                    <div
                                        style={{display: "flex"}}
                                    >
                                        {el.sectionInner && <
                                            // className={cl.inner}
                                        >
                                            {recurse([...el.sectionInner.values()], index)}
                                        </>}
                                        {columns && <div
                                            className={cl.column}
                                        >
                                            {columns}
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }

    const header = recurse([...shield.section.values()])
    return (
        <div
            className={cl.wrapper}
        >
            {header}
        </div>

    );
};

export {Header};