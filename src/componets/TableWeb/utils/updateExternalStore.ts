import {useTableTypedSelector} from "../../../hooks/useTableTypedSelector";
import {MReactDispSetter} from "../../../types/HelperTypes";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {useEffect} from "react";

export const useUpdateExternalStore = (setExternalStore?: MReactDispSetter<TableReduxStructure> )=>{
    const {storage} = useTableTypedSelector(state => state.tableStore)

    useEffect(()=>{
        if(setExternalStore) {
            console.log('run')

            setExternalStore(storage)
        }
    },[storage, setExternalStore])
}