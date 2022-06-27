import {ChangeEvent} from "react";
import {MReactDispSetter} from "../../../../types/HelperTypes";

export const onChange = <T extends string | number | boolean>(setter: MReactDispSetter<T>, type?: 'string' | 'boolean' | 'number') => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as T
    switch (type) {
        case 'string':
            setter(value)
            break
        case 'number':
            setter(Number(value) as T)
            break
        case 'boolean':
            setter(Boolean(value) as T)
            break
    }

}