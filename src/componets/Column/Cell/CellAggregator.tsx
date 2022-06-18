import React from 'react';
import {Item} from "../../../redux/reduxTypes";
import {CellParam} from "../../../types/TableStructure";
import {customSetExternalCell} from "./Tel/validateNumber";
import {useCellAggregatorService} from "./useCellAgregatorService";

export type TCellAggregator = {
    nameInput: string
    cellData: Item
    cellParam: CellParam<unknown>
    parentCell?: string
}


const CellAggregator: React.FC<TCellAggregator> = React.memo((props) => {

    const {Component ,setValue,value, cellParam} = useCellAggregatorService(props)

    return (
        <>
            < Component
                setExternalValue={customSetExternalCell(setValue)}
                externalValue={value}
                additionalParams={cellParam.additionalParams}
                cellParam={cellParam}
            />
        </>
    );
},);


export {CellAggregator}