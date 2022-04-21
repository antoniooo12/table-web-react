import React, {useContext, useMemo} from 'react';
import {Line} from "../Line/Line";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {TShieldStructure} from "../../types/TableStructure";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {DivideByStatus} from "./DivideByStatus";

export type ComponentShield = {
    shieldStructure: TShieldStructure
}
const Shield: React.FC<ComponentShield> = ({shieldStructure}) => {
    const {storage} = useTableTypedSelector(state => state.tableStore)
    const {columns} = useContext(TableWebContext)
    // const list = useMemo(()=>{
    //   return   structureShieldToArray(storage)
    // },[storage])
    return (
        <div>
            {[...storage.entries()].map(([key, map]) => {
                const data = storage.get(key)
                return data?.data.map(line => {
                    // const {columns, ...lineData} = line
                    return (<Line
                        status={key}
                        lineIdt={line.lineInformation.id}
                        toDeletet={line.lineInformation.toDelete}
                        wasEditt={line.lineInformation.wasEdit}
                        lineData={line.lineInformation}
                        columnsData={line.columns}
                        key={line.lineInformation.id.toString()}
                    />)
                })
            })}
            {/*{*/}
            {/*    list.map((line) => {*/}
            {/*        return (*/}

            {/*< Line*/}
            {/*    lineData={line.lineData}*/}
            {/*    columnsData={line.columnsData}*/}
            {/*    key={line.lineData.id.toString()}*/}
            {/*/>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
            <BottomTablePanel columnStructure={columns}/>

        </div>
    );
};

export {Shield};