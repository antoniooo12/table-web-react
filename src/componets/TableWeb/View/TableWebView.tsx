import React from 'react';
import cl from "../TableWeb.module.scss";
import {TableHeader} from "../../Header/TableHeader/TableHeader";
import {Shield} from "../../Shield/Shield";
import {BottomTablePanel} from "../../Panels/BottomTablePanel";
import {TShieldStructure} from "../../../types/TableStructure";
import {TableButtons, ViewMode} from "../../../API/TableWebAPITypes";

const TableWebView: React.FC<{
    shieldStructure: TShieldStructure
    viewMode: ViewMode
    tableButtons: TableButtons | undefined
    isHeaderShow?: boolean

}> = ({shieldStructure, viewMode, tableButtons,isHeaderShow}) => {
    return (
        <>
            {viewMode === 'table' && tableButtons?.isShow && <BottomTablePanel/>}
            <div
                className={cl.wrapper}
            >
                {isHeaderShow && <TableHeader/>}
                <Shield/>
                {viewMode === 'innerTable' && <BottomTablePanel/>}
            </div>
        </>
    );
};

export {TableWebView};
