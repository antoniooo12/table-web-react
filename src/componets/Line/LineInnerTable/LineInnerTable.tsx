import React, {useContext} from 'react';
import {TTableConnect} from "../../../API/TableWebAPITypes";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {GetInnerTable} from "./GetInnerTable";
import {TableWebContext} from "../../TableWeb/TableWebContext";


export type SetInnerTable = { setInnerTable: React.Dispatch<React.SetStateAction<TableReduxStructure | undefined>> }
export type ShowInnerTable = { showInnerTable: boolean }
type TLineInnerTable = TTableConnect
const LineInnerTable: React.FC<TLineInnerTable & SetInnerTable &{id: string| number}  > = React.memo(({id,tableStructure, setInnerTable}) => {
    const {dataToInnerTable} = useContext(TableWebContext)
    const connector: TTableConnect = {
        tableStructure,
        viewMode: 'innerTable',
        customCells: {innerTable: dataToInnerTable?.customCellMapInner}
    }

    return <GetInnerTable tableConnect={connector} setInnerTable={setInnerTable} id={id} />


});

export {LineInnerTable};