export type SNB = string | number | boolean

export type MReactDispSetter<T> = React.Dispatch<React.SetStateAction<T>>
export type WithOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Partial<T>;
