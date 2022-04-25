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
export function useTest<N>(setEternalValue: (value: N) => void, externalValue: N):
    [N, React.Dispatch<React.SetStateAction<N>>, (e: ChangeEvent<HTMLInputElement>) => void] | [N, React.Dispatch<React.SetStateAction<N>>] {
    const [innerValue, setValue] = useState<N>(externalValue)
    useEffect(() => {

        setEternalValue(innerValue)

    }, [innerValue])
    const setInnerValueHtml = useSetInnerValueHtml<N>(setValue)
    return [innerValue, setValue, setInnerValueHtml]
}

