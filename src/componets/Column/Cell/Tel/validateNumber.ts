import React from "react";

export const validateNumber = (innerValue: string): string => {
    let cleaned = ('' + innerValue).replace(/\D/g, '');
    let match = cleaned.match(/^(2|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return [match[2], ' ', match[3], '-', match[4]].join('')
    }
    return innerValue
}


export const setTest = <N>(middleware: (str: N) => N, setExternal: React.Dispatch<React.SetStateAction<N>>, value: N) => {
    setExternal(middleware(value))
}
export const customSetExternalCell = <N>(setExternal: React.Dispatch<React.SetStateAction<N>>) =>
    (value: N) => {
        setExternal(value)
    }
export const ccTest = <N>(middleware: (str: N) => N, value: N) => {
}