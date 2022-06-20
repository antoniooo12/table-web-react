import cl from './Column.module.scss'
import React from 'react';
import {Item} from "../../redux/reduxTypes";
import clsx from "clsx";
import {CellAggregator} from "./Cell/CellAggregator";
import {useGetColumnParam} from "./utils";

type TColumn = {
    columnName: string
    cellData: Item
    viewType: 'line' | 'bigPicture'
}

const CellBlock: React.FC<TColumn> = ({cellData, columnName, viewType}) => {

    const columnParam = useGetColumnParam(columnName)
    return (
        <>
            {!columnParam.hidden &&
                <td
                    // style={{
                    //     width: `${columnParam.width}px`,
                    // }}
                    className={
                        clsx({
                            [cl.wrapper]: true,
                            // [cl.borderInLine]: viewType === 'line',
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
                            <div
                                className={cl.subLine}
                            >
                                {[...cellData.subColumns.entries()].map(([subCellName, subCellDatta]) =>

                                    <CellBlock
                                        viewType={viewType}
                                        columnName={subCellName}
                                        cellData={subCellDatta}
                                        key={subCellName}
                                    />
                                )}
                            </div>

                        }
                    </div>}

                </td>
            }
        </>
    );


}
export {CellBlock}