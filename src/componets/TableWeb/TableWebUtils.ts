import React from "react";

export const setterPreviousValues = (setter: React.Dispatch<React.SetStateAction<Map<string, unknown>>> )=><T>(nameColumn: string, value: T) => {
    setter(prevState => {
        return prevState.set(nameColumn, value)
    })
}