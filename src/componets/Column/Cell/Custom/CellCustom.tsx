import React, {useContext} from 'react';
import {TCell} from "../cellTypes";
import {TableWebContext} from "../../../TableWeb/TableWebContext";
import {useLineContext} from "../../../Line/LineContext";

const CellCustom: React.FC<TCell<unknown>> = (cellInformation) => {
    const {customCellMap} = useContext(TableWebContext)
    const lineInformation = useLineContext()
    console.log(customCellMap)
    console.log(cellInformation.cellParam.name)
    const CustomComponent = customCellMap?.get(cellInformation.cellParam.name)
    if (CustomComponent) {
        return <CustomComponent cellInformation={cellInformation} lineInformation={lineInformation}/>
    }


    return <div>
        Cell is not found in map
    </div>

}

export {CellCustom};