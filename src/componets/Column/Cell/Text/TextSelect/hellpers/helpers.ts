import {useContext, useMemo, useState} from "react";
import {useSetValueSkipMount} from "../../../../../../hooks/useSetValueSkipMount";
import {TSelectOptions} from "../../../../../../types/TableStructure";
import {TCell} from "../../../cellTypes";
import {useControlOptionList} from "../useControlsOption";
import clsx from "clsx";
import cl from "../TextSelect.module.scss";
import {TableWebContext} from "../../../../../TableWeb/TableWebContext";

export const useNotExist = (value: string) => useMemo((): boolean => {
    return value.length === 0
}, [value])

export const useSetValueByText = (text: string, variants: TSelectOptions[], setter: (str: string) => void) => useSetValueSkipMount(text, () => {
    const value = variants.find(variant => variant.text === text)?.value || ''
    setter(value)
})
