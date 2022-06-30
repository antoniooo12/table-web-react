import React, {useContext} from 'react';
import {TTableConnect, TTableInit} from "../../../API/TableWebAPITypes";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {GetInnerTable} from "./GetInnerTable";
import {TableWebContext} from "../../TableWeb/TableWebContext";
import {useConnectWebTableState} from "../../../API/TableWebAPI";


export type SetInnerTable = { setInnerTable: React.Dispatch<React.SetStateAction<TableReduxStructure | undefined>> }
export type ShowInnerTable = { showInnerTable: boolean }
type TLineInnerTable = {
    tableInit: TTableInit
}
const LineInnerTable: React.FC<TLineInnerTable & SetInnerTable & { id: string | number }> = React.memo(
    ({
         id,
         tableInit,
         setInnerTable,
     }) => {
        const {dataToInnerTable} = useContext(TableWebContext)
        const {connector, api} = useConnectWebTableState({
            ...tableInit,
            tableButtons: {isShow:true}
        })
        const innerConnector: TTableConnect = {
            ...connector,
            viewMode: "innerTable",
            customCells: {innerTable: dataToInnerTable?.customCellMapInner}
        }
        return <GetInnerTable tableConnect={innerConnector} setInnerTable={setInnerTable} id={id}/>


    });

export {LineInnerTable};
