export type SNB = string | number | boolean

export type MReactDispSetter<T> = React.Dispatch<React.SetStateAction<T>>
export type WithOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Partial<T>;

export type KeysOfType<T, V> = keyof {
    [P in keyof T as T[P] extends V ? P : never]: any
}

export type MapSearcher<T> = KeysOfType<Required<T>, Map<string, T>>

