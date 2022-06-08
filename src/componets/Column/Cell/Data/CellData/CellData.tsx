import React from 'react';
import {TCell} from "../../cellTypes";
import {BaseInput} from "../../BaseInput/BaseInput";
import {CellText} from "../../Text/CellText";

const CellData: React.FC<TCell<string>> = ({cellParam, additionalParams, setExternalValue, externalValue}) => {

    return (
        <CellText
            externalValue={externalValue}
            setExternalValue={setExternalValue}
            cellParam={cellParam}
            baseInputProps={{type: "date"}}
        />
    );
};

export {CellData};