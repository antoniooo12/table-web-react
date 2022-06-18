import {TableReduxStructure, TTableLine} from "../redux/reduxTypes";
import {Line, TLine} from "../componets/Line/Line";
import React from "react";

// export function structureShieldToArray(map: TableStructure) {
//     const array = [...map.entries()].reduce((accum: TLine[], current) => {
//         // const status = current[0]
//         const data: TLine[] = current[1].data.map(line => {
//             const {columns, status,id, wasEdit, toDelete} = {...line, status: current[0]}
//             return {lineData: {status,id, wasEdit, toDelete}, columnsData: columns}
//         })
//         accum = [...accum, ...data]
//         return accum
//
//     }, [])
//     return array
// }