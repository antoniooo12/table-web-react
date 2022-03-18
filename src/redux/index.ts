import {applyMiddleware, combineReducers, createStore} from "redux";

import {tableStoreReducer} from "./state";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootTableReducer = combineReducers({
    tableStore: tableStoreReducer,
})

export type RootTableReducer = ReturnType<typeof rootTableReducer>

const composeEnhancers = composeWithDevTools({name: 'table processor', serialize: true});

export const tableStore = createStore(rootTableReducer, composeEnhancers(applyMiddleware(thunk)))

