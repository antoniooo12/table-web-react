import {combineReducers} from "redux";

import {tableStoreReducer} from "./state";
import {composeWithDevTools} from "redux-devtools-extension";


export const rootTableReducer = combineReducers({
    tableStore: tableStoreReducer,
})


export type RootTableReducer = ReturnType<typeof rootTableReducer>

export const composeParams = composeWithDevTools({name: 'table processor', serialize: true,});


