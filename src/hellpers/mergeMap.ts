export function mergeMap<T, P>(...maps: Map<T, Partial<P>>[]) {
    const template = maps[0]
    const mergedMap = [...template.entries()].reduce((accum, current) => {

        const params = maps.flatMap((el) => {
            const find = el.get(current[0])
            if (find) {
                return find
            }
        })

        const obj = Object.assign({}, ...params)
        accum.set(current[0], obj)
        return accum
    }, new Map<T, P>())
    return mergedMap
}

// const concatMap = [...header.keys()].reduce((accum, current) => {
//     const obj = Object.assign({}, header.get(current), columnParam.get(current))
//     accum.set(current, obj)
//     return accum
// }, new Map<string, HeaderParam & ColumnParam>())