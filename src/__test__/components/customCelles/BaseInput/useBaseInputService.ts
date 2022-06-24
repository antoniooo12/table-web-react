import React, {ChangeEvent, useCallback, useEffect, useState} from "react";

export const useSetInnerValueHtml = <N>(setInnerValue: React.Dispatch<React.SetStateAction<N>>) => useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInnerValue(value as unknown as N)
}, [])


export function useBaseInputService<N>(setExternalValue: (value: N) => void, externalValue: N) {
    const [innerValue, setValue] = useState<N>(externalValue)
    useEffect(() => {
        setValue(externalValue)
    }, [externalValue])
    const setInnerValueHtml = useSetInnerValueHtml<N>(setValue)
    return {innerValue, setInnerValueHtml}
}

