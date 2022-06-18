import React, {useContext, useEffect} from 'react';
import {Line} from "../Line/Line";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {TShieldStructure} from "../../types/TableStructure";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {ViewMode} from "../../API/TableWebAPITypes";
import {TableReduxStructure, TableState} from "../../redux/reduxTypes";
import {useInnerTable} from "../TableWeb/InnerTableConnector/InnerTableConnector";

export type ComponentShield = {
    shieldStructure: TShieldStructure
}

const Shield: React.FC<ComponentShield> = React.memo(({shieldStructure}) => {
    const {storage} = useTableTypedSelector(state => state.tableStore)
    const {viewMode} = useContext(TableWebContext)
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

        </div>
    );
})

export {Shield};