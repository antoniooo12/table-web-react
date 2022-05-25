import {useState} from "react";
import {TBaseInput} from "../../BaseInput/BaseInput";

export const useControlOptionList = (): [boolean, TBaseInput] => {
    const [isFocus, setFocus] = useState(false)
    const onFocus = () => {
        setFocus(true)
    }
    const onBlur = () => {
        setTimeout(() => {
            setFocus(false)
        }, 220)
    }
    const setter: TBaseInput = {onBlur, onFocus}
    return [isFocus, setter]
}