import React, {useContext} from 'react';
import {useActionsTable} from "../../hooks/useActionsTable";
import {Columns} from "../../types/TableStructure";
import {Button} from "../buttons/Button/Button";
import {TableWebContext} from "../TableWeb/TableWebContext";

type BottomTablePanel = {
    columnStructure: Columns
}
const BottomTablePanel: React.FC<BottomTablePanel> = React.memo(({columnStructure}) => {
    const {tableCreateLine} = useActionsTable()
    const {previous:[previousValues]} = useContext(TableWebContext)
    const onCreateLine = () => {
        const temp = [...columnStructure.entries()]
            .reduce((accum: Map<string, unknown>,[key, column]) => {
                const initialValue =column.cellParam.default
                const typeOfInitialValue =  initialValue.type
                if( typeOfInitialValue === 'Default') {
                    accum.set(key, initialValue.value)
                }else if(typeOfInitialValue==='Previous'){
                    if(previousValues.get(key)) {
                        accum.set(key, previousValues.get(key))
                    }else {
                        accum.set(key, initialValue.orNotPrevious)
                    }
                }
            return accum
        }, new Map())
        tableCreateLine(columnStructure,temp)
    }

    return (
        <div>
            <Button
                onClick={onCreateLine}
                style={'blue'}
            >Add</Button>
        </div>
    );
},);

export {BottomTablePanel};