import {useLineContext} from "../componets/Line/LineContext";
import {Item} from "../redux/reduxTypes";
import {CellBlock} from "../componets/Column/CellBlock";
import React from "react";
import {EColumns2} from "../__test__/example2/table/tableStructure";

export const useGetCell = <T extends string>(cellNameArray: T[], options?: { [key in T]?: { className?: string } }) => {
    const {columns} = useLineContext()
    const cellData = cellNameArray.map(name => columns.get(name) as Item)
    const toType = CellBlock({cellData: cellData[0], cellName: cellNameArray[0]})
    type   TAccum = {
        [key in T]: typeof toType
    }
    const cells = cellData.reduce((accum: TAccum, item) => {
        const name = cellNameArray.find(el => el===item.nameColumn)
        const className = options && name && options[name] && options[name]?.className
        if(!name){
            throw new Error('Error not find cellName')
        }
        const Cell = <CellBlock cellName={item.nameColumn} cellData={item} className={className}/>
        return {
            ...accum,
            [item.nameColumn]: Cell
        }
    }, {} as TAccum)
    return cells
}





