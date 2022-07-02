import React from 'react';
import {Item} from "../../../redux/reduxTypes";
import {CellParam} from "../../../types/TableStructure";
import {useCellAggregatorService} from "./useCellAgregatorService";
import {CellCustom} from "./Custom/CellCustom";

export type TCellAggregator = {
    nameInput: string
    cellData: Item
    cellParam: CellParam<unknown>
    className?: string
}


const CellAggregator: React.FC<TCellAggregator> = React.memo((props) => {

    const { setValue, value, cellParam} = useCellAggregatorService(props)

    return (
        <>
            < CellCustom
                className={props.className}
                setExternalValue={setValue}
                externalValue={value}
                cellParam={cellParam}
            />
        </>
    );
},);



export {CellAggregator}
