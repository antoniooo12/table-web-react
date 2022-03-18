import React from 'react';
import {PanelButton} from "../buttons/PanelButton/PanelButton";
import {useActionsTable} from "../../hooks/useActionsTable";
import {Columns} from "../../types/TableStructure";

type BottomTablePanel = {
    columnStructure: Columns
}
const BottomTablePanel: React.FC<BottomTablePanel> = React.memo(({columnStructure}) => {
    const {tableCreateLine} = useActionsTable()
    return (
        <div>
            <PanelButton onClick={() => {
                tableCreateLine(columnStructure)
            }}>Add</PanelButton>
        </div>
    );
},);

export {BottomTablePanel};