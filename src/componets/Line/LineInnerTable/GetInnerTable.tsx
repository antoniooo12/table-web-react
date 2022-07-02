import React, {useEffect} from 'react';
import {TableWebProcedure} from "../../TableWeb/TableWebProcedure";
import {TTableConnect} from "../../../API/TableWebAPITypes";
import {applyMiddleware, createStore} from "redux";
import {rootTableReducer} from "../../../redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {SetInnerTable} from "./LineInnerTable";
import {useTableTypedSelector} from "../../../hooks/useTableTypedSelector";
import {composeWithDevTools} from "redux-devtools-extension";
import {UpdateExternalStore} from "../../TableWeb/utils/UtilsComponent/UpdateExternalStore";

const GetGetInnerTableState: React.FC<SetInnerTable> = React.memo(({setInnerTable}) => {
    const {storage} = useTableTypedSelector(state => state.tableStore)
    useEffect(() => {
        if(storage.data.length > 0) {
            setInnerTable(storage)
        }
    }, [storage])
    return <>
    </>
})
const GetInnerTable: React.FC<{ tableConnect: TTableConnect } & SetInnerTable & {id: string | number}> = React.memo((
    {
        tableConnect,
        setInnerTable,
        id,
    }) => {
    const composeParams = composeWithDevTools({name: `inner table ${id}`, serialize: true,});
    const tableStore = createStore(rootTableReducer, composeParams(applyMiddleware(thunk)))
    return (
        <Provider store={tableStore}>
            <>
                <TableWebProcedure tableConnect={tableConnect}/>
                <GetGetInnerTableState setInnerTable={setInnerTable}/>
            </>

        </Provider>
    );
});

export {GetInnerTable};
