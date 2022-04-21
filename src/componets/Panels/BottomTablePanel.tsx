import React from 'react';
import {useActionsTable} from "../../hooks/useActionsTable";
import {Columns} from "../../types/TableStructure";
import {Button} from "../buttons/Button/Button";

type BottomTablePanel = {
    columnStructure: Columns
}
const BottomTablePanel: React.FC<BottomTablePanel> = React.memo(({columnStructure}) => {
    const {tableCreateLine} = useActionsTable()
    return (
        <div>
            <Button
                style={'blue'}
                onClick={() => {
                    console.log('redux')
                tableCreateLine(columnStructure)
            }}>Add</Button>
        </div>
    );
},);

export {BottomTablePanel};