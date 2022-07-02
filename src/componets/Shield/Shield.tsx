import React, {useEffect} from 'react';
import {Line} from "../Line/Line";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";


const Shield: React.FC = React.memo(() => {
    const {storage} = useTableTypedSelector(state => state.tableStore)

    return (
        <>
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

        </>
    );
})

export {Shield};
