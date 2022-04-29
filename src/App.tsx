import React, {useState} from 'react';
import {TableWeb} from "./componets/TableWeb/TableWeb";
import {Column, ColumnParam, TableStructure} from "./types/TableStructure";
import {testTable} from "./example";
import {TableWebProviderComponent} from "./componets/TableWeb/TableWebProviderComponent";

function App() {


  return (
      <div className="App">
        <TableWebProviderComponent tableStructure={testTable}/>
      </div>
  );
}

export {App};
