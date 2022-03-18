import React, {useState} from 'react';
import {TableWeb} from "./componets/TableWeb/TableWeb";
import {Column, ColumnParam, TableStructure} from "./types/TableStructure";
import {testTable} from "./example";

function App() {


  return (
      <div className="App">
        <TableWeb tableStructure={testTable}/>
      </div>
  );
}

export {App};
