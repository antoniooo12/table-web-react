import cl from './Column.module.scss'
import React from 'react';
import {Item} from "../../redux/reduxTypes";
import clsx from "clsx";
import {CellAggregator} from "./Cell/CellAggregator";
import {useGetColumnParam} from "./utils";

type TColumn = {
    columnName: string
    cellData: Item<unknown>
}

const Column: React.FC<TColumn> = ({cellData, columnName}) => {
    const columnParam = useGetColumnParam(columnName)
    return (
        <>
            {!columnParam.hidden &&
                <div
                    style={{
                        width: `${columnParam.width}px`,
                    }}
                    className={
                        clsx({
                            [cl.wrapper]: true,
                        })
                    }
                >
                    <CellAggregator
                        nameInput={columnName}
                        cellData={cellData}
                        cellParam={columnParam.cellParam}
                    />
                    {cellData.subColumns && <div
                        className={clsx({
                            [cl.line]: columnParam.subColumnsStyle === 'line'
                        })}
                    >
                        {
                            [...cellData.subColumns.entries()].map(([subCellName, subCellDatta]) =>
                                <span>
                                <Column
                                    columnName={subCellName}
                                    cellData={subCellDatta}
                                    key={subCellName}
                                />
                                    </span>
                            )
                        }
                    </div>}

                </div>
            }
        </>
    );


}
export {Column}