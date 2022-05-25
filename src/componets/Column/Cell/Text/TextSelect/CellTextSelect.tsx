import React from 'react';
import {CellText} from "../CellText";
import {TCell} from "../../cellTypes";
import {CellTextSelectOptionList} from "./CellTextSelectOptionList";
import {useServiceCellTextSelect} from "./hellpers/helpers";


const CellTextSelect: React.FC<TCell<string>> = (params) => {
    const {additionalParams, cellParam} = params
    if (additionalParams?.type !== 'InputAdditionalParamsSelectV2') throw new Error('TextSelect additional type is not select')

    const {setText, text, setIsFocus, isFocus, filteredVariants, style} = useServiceCellTextSelect(params)
    return (
        <span className={style}>
            <CellText externalValue={text}
                      setExternalValue={setText}
                      cellParam={cellParam}
                      baseInputProps={{...setIsFocus}}
            />
            {isFocus && <CellTextSelectOptionList
                variants={filteredVariants}
                setSelected={setText}
            />}
        </span>
    );
};

export {CellTextSelect};