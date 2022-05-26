import React, {useContext} from 'react';
import {Line} from "../Line/Line";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {TShieldStructure} from "../../types/TableStructure";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {TableWebContext} from "../TableWeb/TableWebContext";

export type ComponentShield = {
    shieldStructure: TShieldStructure
}
const Shield: React.FC<ComponentShield> = React.memo(({shieldStructure}) => {
    const {storage} = useTableTypedSelector(state => state.tableStore)
    const {columns} = useContext(TableWebContext)
    return (
        <div>
            {storage.data.map((line) => {
                    return (<Line
                        status={line.lineInformation.status}
                        lineIdt={line.lineInformation.id}
                        toDelete={line.lineInformation.toDelete}
                        wasEdit={line.lineInformation.wasEdit}
                        lineData={line.lineInformation}
                        columnsData={line.columns}
                        key={line.lineInformation.id.toString()}
                    />)
            })}
            <BottomTablePanel columnStructure={columns}/>

        </div>
    );
})

export {Shield};