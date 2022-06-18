import React, {useEffect} from 'react';
import {TableWebProcedure} from "../../TableWeb/TableWebProcedure";
import {TTableConnect} from "../../../API/TableWebAPITypes";
import {applyMiddleware, createStore} from "redux";
import {composeParams, rootTableReducer} from "../../../redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {SetInnerTable} from "./LineInnerTable";
import {useTableTypedSelector} from "../../../hooks/useTableTypedSelector";

const GetGetInnerTableState: React.FC<SetInnerTable> = React.memo(({setInnerTable}) => {
    const {storage} = useTableTypedSelector(state => state.tableStore)
    useEffect(() => {
        setInnerTable(storage)
    }, [storage])
    return <>
    </>
})
const GetInnerTable: React.FC<{ tableConnect: TTableConnect } & SetInnerTable> = React.memo((
    {
        tableConnect,
        setInnerTable
    }) => {
    const tableStore = createStore(rootTableReducer, composeParams(applyMiddleware(thunk)))
    return (
        <Provider store={tableStore}>
            <TableWebProcedure tableConnect={tableConnect}/>
            <GetGetInnerTableState setInnerTable={setInnerTable}/>
        </Provider>
    );
});

export {GetInnerTable};