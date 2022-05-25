import {TCell} from "../../cellTypes";
import {useContext, useMemo, useState} from "react";
import {TableWebContext} from "../../../../TableWeb/TableWebContext";
import {useControlOptionList} from "./useControlsOption";
import {useSetValueSkipMount} from "../../../../../hooks/useSetValueSkipMount";
import clsx from "clsx";
import cl from "./TextSelect.module.scss";
import {useNotExist, useSetValueByText} from "./hellpers/helpers";

type TUseServiceCellTextSelect = TCell<string>

export const useServiceCellTextSelect = ({
                                             externalValue, setExternalValue, cellParam, additionalParams
                                         }: TUseServiceCellTextSelect) => {
    if (additionalParams === undefined || additionalParams.type !== 'InputAdditionalParamsSelectV2') {
        throw new Error('TextSelect additional type is not select')
    }
    const {optionsMap} = useContext(TableWebContext)
    const options = optionsMap.get(cellParam.name) || []
    const [value, setValue] = useState(externalValue || '')
    const [isFocus, setIsFocus, listController] = useControlOptionList()
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

    return {text, setText, notExist, isFocus, setIsFocus, filteredVariants, style, listController: listController}
}