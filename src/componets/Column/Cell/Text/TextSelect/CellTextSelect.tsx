import React from 'react';
import {CellText} from "../CellText";
import {TCell} from "../../cellTypes";
import CellTextSelectOptionList from "./CellTextSelectOptionList";
import {useServiceCellTextSelect} from "./ServiceCellTextSelect";
import {ContextCellTextSelect} from "./hellpers/ContextCellTextSelect";


const CellTextSelect: React.FC<TCell<string>> = (params) => {
    const {additionalParams, cellParam} = params
    if (additionalParams?.type !== 'InputAdditionalParamsSelectV2') throw new Error('TextSelect additional type is not select')

    const {
        setText, text, setIsFocus, isFocus, filteredVariants, style, listController, value
    } = useServiceCellTextSelect(params)

    return (
        <ContextCellTextSelect.Provider
            value={{listController, selected: value}}
        >

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
        </ContextCellTextSelect.Provider>

    );
};

export {CellTextSelect};