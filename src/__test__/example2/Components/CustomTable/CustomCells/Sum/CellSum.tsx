import React, {useEffect} from 'react';
import {CustomCellComponent} from "../../../../../../API/TableWebAPITypes";
import {EColumns2} from "../../../../table/tableStructure";
import {roundNumber} from "../../../../utils/roundNumber";
import {useGetCellValue} from "../../../../../../componets/Line/utils/utils";
import {useCellCustomContext} from "../../../../../../componets/Column/Cell/Custom/CellCustomContext";


const CellSum: CustomCellComponent<number> = ({cellName}) => {
    const {cellInformation, lineInformation} = useCellCustomContext<number>(cellName)

    const cost = useGetCellValue(EColumns2.cost) as number
    const count = useGetCellValue(EColumns2.count) as number

    const sum = roundNumber(cost * count)
    useEffect(() => {
        cellInformation.setExternalValue(sum)
    }, [sum])
    return (
        <div>
            {sum} грн
        </div>
    );
};

export {CellSum};
