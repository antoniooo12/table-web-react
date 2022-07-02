import React from 'react';
import {Item} from "../../redux/reduxTypes";
import {useGetColumnParam} from "./utils";
import {CellGenerator} from "./Cell/CellGenerator";

export type TColumn = {
    cellName: string
    cellData: Item<unknown>
    viewType?: 'line' | 'bigPicture'
    className?: string
}

const CellBlock: React.FC<TColumn> = (props) => {
    const {cellData, cellName, viewType = 'line', className} = props
    const columnParam = useGetColumnParam(cellName)
    const Cell = <CellGenerator cellName={cellName} cellData={cellData} viewType={viewType}
                                className={className}/>

    return (
        <>
            {!columnParam.hidden &&
                <CellGenerator cellName={cellName} cellData={cellData} viewType={viewType}
                               className={className}/>
            }
        </>
    );


}
export {CellBlock}


function CellBlock1<T>(props: TColumn) {
    return (
        <div>{props.cellName}</div>
    );
}

export {CellBlock1};
