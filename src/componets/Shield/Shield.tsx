import React from 'react';
import {Line} from "../Line/Line";
import {BottomTablePanel} from "../Panels/BottomTablePanel";
import {TShieldStructure} from "../../types/TableStructure";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";

export type ComponentShield = {
    shieldStructure: TShieldStructure
}
const Shield: React.FC<ComponentShield> = ({shieldStructure}) => {
    const {storage} = useTableTypedSelector(state => state.tableStore)


    return (
        <div>
            {[...storage.entries()].map((dataByStatus) => {
                console.log(dataByStatus)
                const status = dataByStatus[0]
                const data = dataByStatus[1].data
                return data.map((line) => {
                    return (
                        < Line

                            lineData={{
                                status: status,
                                lineId: line.id,
                            }}
                            columnsData={line.columns}
                            key={line.id}
                        />
                    )
                })

            })}

            <BottomTablePanel columnStructure={shieldStructure.columns}/>
        </div>
    );
};

export {Shield};