// @ts-ignore
import cl from './Cell.module.scss'

import React, {useContext} from 'react';
import {TableWebContext} from "../TableWeb/TableWebContext";
import {Item} from "../../redux/reduxTypes";
import {Input} from "./Input/Input";
import clsx from "clsx";

type Cell = {
    columnName: string
    cellData: Item
}
const Cell: React.FC<Cell> = ({cellData, columnName}) => {
    const {columnParams} = useContext(TableWebContext)
    const columnParam = columnParams.get(columnName)
    if (!columnParam) {
        throw new Error('error columnParam')
    }
    const position = columnParam.position || 'full'
    const subColumns = columnParam.subColumns

    const positionBorelPlate = {
        top: <div>
            <Input
                typeInput={'default'}
                nameInput={columnName}
                cellData={{...cellData}}
                columnParam={columnParam}
            />
            {subColumns &&
                [...subColumns.data.entries()].map(data => {
                    const subCell = data[1]
                    const subCellData = cellData.subData?.get(data[0])
                    if (!subCellData) {
                        throw  new Error()
                    }

                    console.log()
                    return (
                        <div
                            className={cl.sub}
                            key={subCellData.id}
                        >{subCell.name}
                            <Input
                                parentCell={columnName}
                                typeInput={subColumns.type}
                                nameInput={data[0]}
                                cellData={subCellData}
                                columnParam={subCell}
                            />
                        </div>
                    )
                })

            }

        </div>
    }
    return (
        <div
            style={{
                width: `${columnParams.get(columnName)?.width}px`,
            }}
            className={
                clsx({
                    [cl.wrapper]: true,
                    [cl.small]: subColumns,
                })
            }
        >
            {position === 'full' &&
                <Input
                    typeInput={'default'}
                    nameInput={columnName}
                    cellData={cellData}
                    columnParam={columnParam}
                />
            }
            {position === 'top' &&
                positionBorelPlate['top']
            }
        </div>
    );
};

export {Cell};