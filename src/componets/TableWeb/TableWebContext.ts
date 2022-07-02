import {createContext, useContext} from "react";
import {Column, TSelectOptions, TShieldStructure} from "../../types/TableStructure";
import {CustomCellMap, CustomComponents, SetInnerTable, ViewMode} from "../../API/TableWebAPITypes";
import {MReactDispSetter} from "../../types/HelperTypes";
import {CustomFunctionMap} from "../../API/customFunction";

export type TableWebContext = {
    columns: Map<string, Column>
    shield: TShieldStructure
    previous: [Map<string, unknown>, <T>(nameColumn: string, value: T) => void]
    optionsMap?: Map<string, TSelectOptions[]>
    bigPictureController: {
        selectedLineIdToBigPicture: string | undefined
        setSelectedLineIdToBigPicture: MReactDispSetter<string | undefined>
    }
    customComponents?: CustomComponents
    customFunctionMap?: CustomFunctionMap
    customCellMap?: CustomCellMap
    viewMode: ViewMode
    dataToInnerTable?: {
        customCellMapInner?: CustomCellMap
    }
    setInnerTable?: SetInnerTable
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)

export const useTableWebContext = () => {
    const context = useContext(TableWebContext)
    return context
}
