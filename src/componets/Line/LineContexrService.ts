import React, {createContext, useContext} from "react";
import {TLineData} from "./Line";
import {TableColumn, TTableLine} from "../../redux/reduxTypes";

type LineContext = {
    styleGrid:  React.CSSProperties
}

export const LineServiceContext = createContext<LineContext>({
} as LineContext)

export const useLineServiceContext = ()=>{
    const context = useContext(LineServiceContext)
    if(!context){
        throw new Error('useLineContext can only use inside line')
    }
    return context
}