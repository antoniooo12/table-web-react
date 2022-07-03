import React from 'react';
import {TableHeader} from "../../../componets/Header/TableHeader/TableHeader";
import {useTableTypedSelector} from "../../../hooks/useTableTypedSelector";
import {Shield} from "../../../componets/Shield/Shield";
import {BottomTablePanel} from "../../../componets/Panels/BottomTablePanel";
import {Line} from "../../../componets/Line/Line";

const CustomTableInnerTable = () => {
    const {storage} = useTableTypedSelector(state => state.tableStore)
    console.log('+++')
    console.log(storage.data)
    return (
        <div>
            <TableHeader/>
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
            <BottomTablePanel/>
        </div>
    );
};

export {CustomTableInnerTable};
