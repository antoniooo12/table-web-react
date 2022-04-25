import React from "react";

export const validateNumber = (innerValue: string): string => {
    const template = innerValue.split('').filter(str => Number(str) || str === '+' || str === ' ' || str === '0').join('')
    const example = ['xxx','xxx','xx','xx']
    let cleaned = ('' + template).replace(/\D/g, '')
    const regex = new RegExp(`^(2|)(\\d{${example[0].length}})(\\d{${example[1].length}})(\\d{${example[2].length}})(\\d{${example[2].length}})`)
    let match = cleaned.match(regex);
    if (match) {
        console.log(match)
        return [match[2], ' ', match[3], ' ', match[4],'-',match[5]].join('');
    }
    return template
}


export const setTest = <N>(middleware: (str: N) => N, setExternal: React.Dispatch<React.SetStateAction<N>>, value: N) => {
    setExternal(middleware(value))
}
export const customSetExternalCell = <N>(setExternal: React.Dispatch<React.SetStateAction<N>>) =>
    (middleware: (str: N) => N) => (value: N) =>
        setExternal(middleware(value))