import {createContext, useContext} from "react";
import {CustomCellMap, CustomComponents, CustomLine} from "../../API/TableWebAPITypes";
import {CustomFunctionMap} from "../../API/customFunction";

export type CustomContext = {
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCellMap?: CustomCellMap
    CustomLine?: CustomLine
}

export const CustomContext = createContext<CustomContext>({} as CustomContext)

export const useCustomContext = () => {
    const props = useContext(CustomContext)
    return props
}