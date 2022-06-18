import React, {useEffect} from 'react';
import {TableWebProcedure, TTableWeb} from "./TableWebProcedure";
import {Provider} from "react-redux";
import {applyMiddleware, createStore, EmptyObject, Store} from "redux";
import thunk from "redux-thunk";
import {composeParams, rootTableReducer} from "../../redux";
import {TableReducerActions, TableState} from "../../redux/reduxTypes";
import {SetInnerTable} from "../Line/LineInnerTable/LineInnerTable";

export type TTableStore =
    Store<EmptyObject & { tableStore: TableState }, TableReducerActions<any>>
    & { dispatch: unknown }

const TableWebProviderComponent: React.FC<TTableWeb &{ children?: React.ReactNode }> = React.memo(({tableConnect}) => {

    const tableStore =  createStore(rootTableReducer, composeParams(applyMiddleware(thunk)))

    return (
        <Provider store={tableStore}>
            <TableWebProcedure tableConnect={tableConnect}/>
        </Provider>
    );
})

export {TableWebProviderComponent};