import React from 'react';
import {MReactDispSetter} from "../../../../types/HelperTypes";
import {TableReduxStructure} from "../../../../redux/reduxTypes";
import {useUpdateExternalStore} from "../updateExternalStore";

const UpdateExternalStore: React.FC<{
    setTableExternalState?: MReactDispSetter<TableReduxStructure>
}> = ({setTableExternalState}) => {
    useUpdateExternalStore(setTableExternalState)
    return (
        <div>

        </div>
    );
};

export {UpdateExternalStore};