import React, {useMemo} from 'react';
import cl from './TextSelect.module.scss'

import {CellText} from "../CellText";
import {TCell} from "../../cellTypes";
import {useControlOptionList} from "./useControlsOption";
import {CellTextSelectOptionList} from "./CellTextSelectOptionList";
import {onBtnRemoveF} from "../../../../../hellpers/keyboardEvents/onBtnRemove";

const CellTextSelect: React.FC<TCell<string>> = (params) => {
    const {additionalParams, setExternalValue, externalValue, cellParam} = params
    if (additionalParams?.type !== 'InputAdditionalParamsSelectV2') {
        throw new Error('TextSelect additional type is not select')
    }
    const {variants} = additionalParams
    const [isFocus, setIsFocus] = useControlOptionList()

    const filteredVariants = useMemo(() => {
        return variants.filter(variant => variant.text.includes(externalValue || ''))
    }, [params.externalValue])

/// bug when option consists of one element (for example 1), then it is impossible to erase it
    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        onBtnRemoveF(event.code)(externalValue)(setExternalValue)
    };
    return (
        <span className={cl.wrapper}>
            <CellText externalValue={externalValue}
                      setExternalValue={setExternalValue}
                      cellParam={cellParam}
                      baseInputProps={{...setIsFocus, onKeyDown}}
            />
            {isFocus &&
                <CellTextSelectOptionList
                    variants={filteredVariants}
                    setSelected={setExternalValue}
                />
            }
        </span>
    );
};

export {CellTextSelect};