import {createContext} from "react";
import {MReactDispSetter} from "../../../../../../types/HelperTypes";

type TContextCellTextSelect = {
    listController: {
        setClickByOption: React.Dispatch<React.SetStateAction<boolean>>, setFocus: React.Dispatch<React.SetStateAction<boolean>>
    }
}

export const ContextCellTextSelect = createContext<TContextCellTextSelect>({} as TContextCellTextSelect)