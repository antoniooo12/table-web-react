import {useEffectSkipMount} from "./utils";

export const useSetValueSkipMount = (value: string, setValue: (str: string) => void) => useEffectSkipMount(() => {
    setValue(value)
}, [value])