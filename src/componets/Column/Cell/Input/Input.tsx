export {}
// // @ts-ignore
// import cl from './Input.module.scss'
//
// import React, {ChangeEvent, useCallback, useContext, useEffect, useMemo, useState} from 'react';
// import {Column} from "../../../../types/TableStructure";
// import {useActionsTable} from "../../../../hooks/useActionsTable";
// import {Item} from "../../../../redux/reduxTypes";
// import {LineContext} from "../../../Line/LineContext";
// import {startValue} from "../../../../additional/startValue";
//
// type Input = {
//     typeInput: 'Map' | 'Array' | 'default'
//     nameInput: string
//     cellData: Item
//     columnParam: Column
//     parentCell?: string
// }
// const Input: React.FC<Input> = ({parentCell, columnParam, nameInput, typeInput}) => {
//     const {tableChangeCell} = useActionsTable()
//     const lineData = useContext(LineContext)
//     const defaultValue = columnParam.default && columnParam.default
//     const [value, setValue] = useState<typeof columnParam.type>(startValue[columnParam.type])
//     const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         // @ts-ignore
//         setValue(e.target.value)
//     }, [])
//
//     useEffect(() => {
//         tableChangeCell({
//             status: lineData.status,
//             lineId: lineData.id,
//             nameCell: nameInput,
//             value: value,
//             TypeSubData: typeInput,
//             parentCell: parentCell
//         })
//     }, [value])
//     const isDisabled: boolean = useMemo(() => {
//         return lineData.toDelete;
//
//     }, [lineData.toDelete])
//     if(columnParam.type !== 'select'){
//        return ( <input
//            onChange={onChange}
//            style={{
//                fontSize: `${columnParam.fontSize}px`
//            }}
//            value={value}
//            disabled={isDisabled}
//            type={columnParam.type}
//            placeholder={columnParam.placeholder}
//            className={cl.wrapper}
//        />)
//     }
//     return (
//    <div>
//
//    </div>
//
//     );
// };
//
// export {Input};