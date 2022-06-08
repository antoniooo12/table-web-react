import React from 'react';
import {TCell} from "../../cellTypes";
import {CellText} from "../../Text/CellText";

const CellTime: React.FC<TCell<string>> = ({cellParam, additionalParams, setExternalValue, externalValue}) => {


    return (
        <CellText
            externalValue={externalValue}
            setExternalValue={setExternalValue}
            cellParam={cellParam}
            baseInputProps={{type: "time"}}
        />
    );
};

export {CellTime};