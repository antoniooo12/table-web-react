import React, {ChangeEvent, useCallback, useEffect, useState} from "react";

export const useSetInnerValueHtml = <N>(setInnerValue: React.Dispatch<React.SetStateAction<N>>) => useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInnerValue(value as unknown as N)
}, [])


export function useTest<N>(setExternalValue: (value: N) => void, externalValue: N, middleware?: (val: any) => N):
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

