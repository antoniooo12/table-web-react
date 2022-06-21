import React from 'react';
import {useTableHeaderService} from "./useTableHeaderService";
import {TableHeaderLine} from "./TableHeaderLine";

const TableHeader = () => {

    const {sectionTemplate,columnsTemplate} = useTableHeaderService()

    return (
        <thead>
            <TableHeaderLine  headerBlockArray={sectionTemplate}/>
            <TableHeaderLine  headerBlockArray={columnsTemplate}/>
        </thead>
    );
};

export {TableHeader};