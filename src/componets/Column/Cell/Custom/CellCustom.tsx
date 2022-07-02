import React, {useContext} from 'react';
import {TCell} from "../cellTypes";
import {TableWebContext} from "../../../TableWeb/TableWebContext";
import {useLineContext} from "../../../Line/LineContext";

const CellCustom: React.FC<TCell<unknown>> = (cellInformation) => {
    const {customCellMap} = useContext(TableWebContext)
    const lineInformation = useLineContext()
    const Component = customCellMap?.get(cellInformation.cellParam.name)?.Component

    if (Component) {

        return (
                <Component cellName={cellInformation.cellParam.name} />
        )
    }


    return <div>
        Cell is not found in map
    </div>

}

export {CellCustom};
