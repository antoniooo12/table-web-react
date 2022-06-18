import React from 'react';
import {TTableConnect} from "../../../API/TableWebAPITypes";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {GetInnerTable} from "./GetInnerTable";


export type SetInnerTable = { setInnerTable: React.Dispatch<React.SetStateAction<TableReduxStructure | undefined>> }
type TLineInnerTable = TTableConnect
const LineInnerTable: React.FC<TLineInnerTable & SetInnerTable> = React.memo(({tableStructure, setInnerTable}) => {
    const connector: TTableConnect = {
        tableStructure,
        viewMode: 'innerTable'
    }

    return <GetInnerTable tableConnect={connector} setInnerTable={setInnerTable}/>


});

export {LineInnerTable};