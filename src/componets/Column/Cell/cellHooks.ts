import React, {ChangeEvent, useEffect, useState} from "react";
import {SNB} from "../../../types/HelperTypes";
type targetType = 'checked' | 'value'
export const useSetInnerValue = (setInnerValue: React.Dispatch<React.SetStateAction<SNB>>, type?: targetType) => (e: ChangeEvent<HTMLInputElement>) => {
    if (!type || type === "value") {
        setInnerValue(e.target.value)
    } else if (type === "checked") {
        setInnerValue(e.target.checked)
    }
}

export const useCellState = (setEternalValue: React.Dispatch<React.SetStateAction<SNB>>, externalValue: SNB, targetType?:targetType): [SNB, (e: ChangeEvent<HTMLInputElement>) => void, React.Dispatch<React.SetStateAction<SNB>>] => {
    const [innerValue, setValue] = useState<SNB>(externalValue)
    useEffect(() => {
        setEternalValue(innerValue)
    }, [innerValue])
    const setInnerValue = useSetInnerValue(setValue, targetType)
    return [innerValue, setInnerValue,setValue]
}
