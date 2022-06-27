type Cell<T> = {
    title: string
    value: T
}
type TMap<T extends string, S> = {
    [ket in T]: Cell<S>
}

export enum ECells {
    title = 'title',
    const = 'const'
}

type TPerson = {
    type: 'Person'
    age: number
    name: string
}
type TNumber = {
    type: 'Number'
    value: number
}
const cell1: Cell<TNumber> = {value: {type: 'Number', value: 200}, title: 'title 1'}
const cell2: Cell<TPerson> = {value: {age: 10, name: 'Alan', type: 'Person'}, title: 'title 2'}
const someMap: TMap<ECells, TPerson | TNumber> = {
    [ECells.const]: cell1,
    [ECells.title]: cell2,
}
const v = someMap.title;
if (v.value.type === 'Number') {

}
export {someMap}
