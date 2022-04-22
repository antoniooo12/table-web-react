import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import {SNB} from "../../../types/HelperTypes";

type targetType = 'checked' | 'value'
export const setInnerValueHtmlR = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.value
}
export const useSetInnerValueHtml = <N extends SNB>(setInnerValue: React.Dispatch<React.SetStateAction<N>>, type?: targetType) => useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value as N)
}, [])


export function useTest<N extends SNB>(setEternalValue: React.Dispatch<React.SetStateAction<SNB>>, externalValue: N):
    [N, (e: ChangeEvent<HTMLInputElement>) => void, React.Dispatch<React.SetStateAction<N>>] {
    const [innerValue, setValue] = useState<N>(externalValue)
    useEffect(() => {
        setEternalValue(innerValue)
    }, [innerValue])
    const setInnerValueHtml = useSetInnerValueHtml<N>(setValue)
    return [innerValue, setInnerValueHtml, setValue]
}

export const useCellState = (setEternalValue: React.Dispatch<React.SetStateAction<SNB>>, externalValue: SNB):
    [SNB, (e: ChangeEvent<HTMLInputElement>) => void, React.Dispatch<React.SetStateAction<SNB>>] => {
    const [innerValue, setValue] = useState<SNB>(externalValue)
    useEffect(() => {
        setEternalValue(innerValue)
    }, [externalValue])
    const setInnerValueHtml = useSetInnerValueHtml(setValue)
    return [innerValue, setInnerValueHtml, setValue]
}
