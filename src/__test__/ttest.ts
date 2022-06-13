// type Column<T extends string = string> = {
//     value: string
//     subColumns?: TColumns<T>
// }
// type TupleColumn<T> = [T, Column]
// type TColumns<T> = Map<T, Column>
//
// const enum EnumColName {
//     name = 'name',
//     phone = 'phone',
// }
//
// const enum EnumSectionName {
//     customer = 'customer',
// }
//
// type TEnumSectionName = keyof typeof EnumSectionName
// type TEnumColName = keyof typeof EnumColName
// type TTable<T = string extends infer E ? E : never, S extends string = string> = Map<T, TColumns<S>>
//
// const col1: TupleColumn<EnumColName.name> = [EnumColName.name, {value: 'Anton'}]
// const col2: TupleColumn<EnumColName.phone> = [EnumColName.phone, {value: 'Anton'}]
//
// const columns: TColumns<TEnumColName> = new Map([col1, col2])
// type TupleSection<T, S extends string> = [T, TColumns<S>]
//
//
// enum Esub {
//     id = 'id'
// }
//
// type TEsub = keyof typeof Esub
// const s: TColumns<TEsub> = new Map([[Esub.id, {value: '1234'}]])
// // s.get()
// const rt:[TEnumColName, Column<TEsub>] =  [EnumColName.phone, {
//     value:'',
//     subColumns: new Map<TEsub, Column>([[Esub.id, {value: '1234'}]])
// }]
// const map2: TTable<TEnumSectionName, TEnumColName> = new Map([
//     // section,
//     // ['customer', new Map<"name" | "phone", Column>([['phone',{}]])]
//     [EnumSectionName.customer, new Map([
//         rt
//         ])]
// ])
//
//
// // const ss = map2.get(EnumSectionName.customer)!.get(EnumColName.name)!.subColumns!.get(Esub.id).value;
// const s1 = map2.get(EnumSectionName.customer)!.get(EnumColName.phone)!.subColumns.;
// // map2.get('')
// const checkType = <T, S extends string>(mapToCheck: TTable<T, S>) => {
//     const newMap: TTable<T, S> = mapToCheck as TTable<T, S>
//     return newMap
// }
// const nmap = checkType(map2)
// nmap.get('')
// // map2.get('')
// // nmap.get('')
// // checkType(map2)
// // ss.get(Esub.id)
//
// const execute = <T extends string>(columns: TColumns<T>): { [key in T]: Column } => {
//     return [...columns.entries()].reduce((accum: { [key in T]?: Column }, [key, col]) => {
//         accum = {
//             ...accum,
//             [key]: col,
//         }
//         return accum
//     }, {}) as { [key in T]: Column }
//     // return v as { [key in T]: Column }
// }
// const cols = nmap.get(EnumSectionName.customer)
// if (cols) {
//     const s1 = execute(cols)
//     console.log(s1.phone)
// }


export {}
