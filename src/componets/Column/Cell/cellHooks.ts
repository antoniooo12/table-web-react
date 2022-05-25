import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {InputAdditionalAttributes, InputAdditionalParamsTel} from "../../../types/TableStructure";

type targetType = 'checked' | 'value'
export const setInnerValueHtmlR = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.value
}
type numberOrString = string
export const useSetInnerValueHtml = <N>(setInnerValue: React.Dispatch<React.SetStateAction<N>>) => useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInnerValue(value as unknown as N)
}, [])

function isNumber(params: InputAdditionalAttributes): params is InputAdditionalParamsTel {
    return (params as InputAdditionalParamsTel).format !== undefined
}

// React.Dispatch<React.SetStateAction<typeof externalValue>>
export function useTest<N>(setExternalValue: (value: N) => void, externalValue: N, middleware?: (val: N) => N):
    [N, React.Dispatch<React.SetStateAction<N>>, (e: ChangeEvent<HTMLInputElement>) => void] {
    const [innerValue, setValue] = useState<N>(externalValue)
    useEffect(() => {
        setValue(externalValue)
    }, [externalValue])
    useEffect(() => {
        if (middleware) {
            setExternalValue(middleware(innerValue))
        } else {
            setExternalValue(innerValue)
        }
    }, [innerValue])
    const setInnerValueHtml = useSetInnerValueHtml<N>(setValue)
    return [innerValue, setValue, setInnerValueHtml]
}

