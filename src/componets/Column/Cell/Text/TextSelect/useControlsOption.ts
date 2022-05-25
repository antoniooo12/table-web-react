import {useCallback, useEffect, useState} from "react";
import {TBaseInput} from "../../BaseInput/BaseInput";
import {MReactDispSetter} from "../../../../../types/HelperTypes";

export const useControlOptionList = (): [boolean, TBaseInput, { setClickByOption: MReactDispSetter<boolean>, setFocus: MReactDispSetter<boolean> }] => {
    const [isFocus, setFocus] = useState(false)
    const [clickByOption, setClickByOption] = useState(false)
    const onFocus = () => {
        setFocus(true)
    }
    useEffect(() => {
        console.log(clickByOption)
    }, [clickByOption])
    // const onBlur = () => setFocus(false)
    const onBlur = useCallback(() => {
        if (!clickByOption) {
            setFocus(false)
        }
    }, [clickByOption])

    const setter: TBaseInput = {onBlur, onFocus}
    return [isFocus, setter, {setClickByOption, setFocus}]
}