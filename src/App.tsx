import React from 'react';
import {TableWebProviderComponent} from "./componets/TableWeb/TableWebProviderComponent";
import {testTable} from "./example";
import {TestTable} from "./test/components/TestTable";

function App() {

    return (
        <div className="App">
            <TestTable/>
            <button onClick={() => {
                // console.log(ss)
            }}>
                temp
            </button>
        </div>
    );
}

export {App};
