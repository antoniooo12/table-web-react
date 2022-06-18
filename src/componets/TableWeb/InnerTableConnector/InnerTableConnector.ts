import {createContext, useContext} from "react";
import {TableReduxStructure} from "../../../redux/reduxTypes";
import {MReactDispSetter} from "../../../types/HelperTypes";

export type getSetterOfSetInnerTable<T> = T extends object ? T extends { setInnerTable: unknown } ? T['setInnerTable'] : null : null
export type TInnerTableConnector = {
    innerTableMap: TableReduxStructure | undefined
    isShowInnerTableController: {
        isShowInnerTable: boolean
        setIsShowInnerTable: MReactDispSetter<boolean>
    }
}

export const InnerTableConnectorContext = createContext<TInnerTableConnector>({isShowInnerTableController: {isShowInnerTable: false}} as TInnerTableConnector)

export const useInnerTable = () => {
    const innerTableContext = useContext(InnerTableConnectorContext)
    return innerTableContext
}