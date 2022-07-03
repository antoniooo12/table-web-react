import {createContext, useContext} from "react";
import {
    CustomCellMap,
    CustomComponents,
    CustomLine,
    CustomLineWrapper,
    CustomTableWrapper
} from "../../API/TableWebAPITypes";
import {CustomFunctionMap} from "../../API/customFunction";

export type CustomContext = {
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCellMap?: CustomCellMap
    customLine: CustomLineWrapper
    customTable: CustomTableWrapper
}

export const CustomContext = createContext<CustomContext>({} as CustomContext)

export const useCustomContext = () => {
    const props = useContext(CustomContext)
    return props
}
