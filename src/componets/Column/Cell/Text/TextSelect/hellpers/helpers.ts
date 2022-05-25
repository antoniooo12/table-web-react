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

type TUseServiceCellTextSelect = TCell<string>

export const useServiceCellTextSelect = ({
                                             externalValue, setExternalValue, cellParam, additionalParams
                                         }: TUseServiceCellTextSelect) => {
    if (additionalParams === undefined || additionalParams.type !== 'InputAdditionalParamsSelectV2') {
        throw new Error('TextSelect additional type is not select')
    }
    const {optionsMap}=useContext(TableWebContext)
    const options = optionsMap.get(cellParam.name) || []
    const [value, setValue] = useState(externalValue || '')
    const [isFocus, setIsFocus] = useControlOptionList()
    const [text, setText] = useState(options.find(option => option.value === value)?.text || '')
    const filteredVariants = useMemo(() => {
        return options.filter(option => option.text.includes(text))
    }, [text])

    useSetValueSkipMount(value, setExternalValue)

    useSetValueByText(text, options, setValue)

    const notExist = useNotExist(value)

    const style = clsx({
        [cl.notExist]: notExist,
        [cl.wrapper]: true,
    })

    return {text, setText, notExist, isFocus, setIsFocus, filteredVariants, style}
}