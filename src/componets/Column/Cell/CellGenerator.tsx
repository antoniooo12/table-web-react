import React from 'react';
import {CellAggregator} from "./CellAggregator";
import clsx from "clsx";
import {CellBlock, TColumn} from "../CellBlock";
import {useGetColumnParam} from "../utils";

const CellGenerator: React.FC<TColumn> = React.memo(({cellData, cellName, viewType, className}) => {
    const columnParam = useGetColumnParam(cellName)
    return (
        <

        >
            <CellAggregator
                nameInput={cellName}
                cellData={cellData}
                className={className}
                cellParam={columnParam.cellParam}
            />
            {cellData.subColumns && <div
                className={clsx({
                })}
            >
                {
                    <div
                    >
                        {[...cellData.subColumns.entries()].map(([subCellName, subCellDatta]) =>

                            <CellBlock
                                viewType={viewType}
                                cellName={subCellName}
                                cellData={subCellDatta}
                                key={subCellName}
                            />
                        )}
                    </div>

                }
            </div>}

        </>
    );
},)

export {CellGenerator};
