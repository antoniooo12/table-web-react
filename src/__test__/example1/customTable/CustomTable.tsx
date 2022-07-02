import React from 'react';
import cl from './CustomTable.module.scss'
import {TCustomTable} from "../../../API/TableWebAPITypes";
import {Shield} from "../../../componets/Shield/Shield";
import {CustomHeader} from "../CustomHeader/CustomHeader";
import {BottomTablePanel} from "../../../componets/Panels/BottomTablePanel";

const CustomTable: TCustomTable = ({tableWebContext, shieldStructure}) => {
    return (
        <div className={cl.table}>
            {/*<TableHeader/>*/}
            <BottomTablePanel/>
            <CustomHeader section={shieldStructure.section}/>
            <Shield />
        </div>
    );
};

export {CustomTable};
