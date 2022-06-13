import {createContext} from "react";
import {Column, TSelectOptions, TShieldStructure} from "../../types/TableStructure";
import {CustomComponents, TTableExternalState} from "../../API/TableWebAPITypes";
import {MReactDispSetter} from "../../types/HelperTypes";

type TableWebContext = {
    columns: Map<string, Column>
    shield: TShieldStructure
    previous: [Map<string, unknown>, <T>(nameColumn: string, value: T) => void]
    tableConnect: { setTableExternalState: MReactDispSetter<TTableExternalState> }
    optionsMap: Map<string, TSelectOptions[]>
    bigPictureController: {
        selectedLineIdToBigPicture: string | undefined
        setSelectedLineIdToBigPicture: MReactDispSetter<string | undefined>
    }
    customComponents: CustomComponents
}

export const TableWebContext = createContext<TableWebContext>({} as TableWebContext)