// @ts-ignore
import cl from './Input.module.scss'

import React, {ChangeEvent, useCallback, useContext, useEffect, useState} from 'react';
import {Column} from "../../../types/TableStructure";
import {useActionsTable} from "../../../hooks/useActionsTable";
import {Item} from "../../../redux/reduxTypes";
import {LineContext} from "../../Line/LineContext";
import {startValue} from "../../../additional/startValue";

type Input = {
    typeInput: 'Map' | 'Array'| 'default'
    nameInput: string
    cellData: Item
    columnParam: Column
    parentCell?:string
}
const Input: React.FC<Input> = ({parentCell,columnParam, cellData, nameInput,typeInput}) => {
    const {tableChangeCell} = useActionsTable()
    const {status, lineId} = useContext(LineContext)
    const defaultValue = columnParam.default && columnParam.default
    const [input, setInput] = useState<typeof columnParam.type>(startValue[columnParam.type])
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }, [])

    useEffect(() => {
        tableChangeCell({status, lineId, nameCell: nameInput, value: input, TypeSubData: typeInput, parentCell: parentCell})
    }, [input])

    return (
        <input
            onChange={onChange}
            style={{
                fontSize: `${columnParam.fontSize}px`
            }}
            value={input}
            type={columnParam.type}
            placeholder={columnParam.placeholder}
            className={cl.wrapper}
        />
    );
};

export {Input};