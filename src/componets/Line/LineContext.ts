import {createContext, useContext} from "react";
import {TLineData} from "./Line";
import {TableColumn, TTableLine} from "../../redux/reduxTypes";

type LineContext =TTableLine

export const LineContext = createContext<LineContext>({
} as LineContext)

export const useLineContext = ()=>{
    const context = useContext(LineContext)
    if(!context){
        throw new Error('useLineContext can only use inside line')
    }
    return context
}