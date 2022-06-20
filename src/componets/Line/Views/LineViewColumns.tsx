import React from 'react';
import cl from '../Line.module.scss'
import {CellBlock} from "../../Column/CellBlock";
import {useLineContext} from "../LineContext";
import {useLineServiceContext} from "../LineContexrService";


export type TLineView = {}
const LineViewColumns: React.FC<TLineView> = () => {
    const {columns} = useLineContext()
    const {styleGrid} = useLineServiceContext()
    return (
            <div
                style={styleGrid}
                className={cl.wrapper}
            >{[...columns.entries()].map(([columnName, cellData]) => {
                return (
                    <CellBlock
                        viewType={'line'}
                        key={cellData.id}
                        columnName={columnName}
                        cellData={cellData}
                    />
                )
            })}
            </div>
    );
};

export {LineViewColumns};