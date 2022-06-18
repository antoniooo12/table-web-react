import {TableWebContext} from "../componets/TableWeb/TableWebContext";
import {MReactDispSetter} from "../types/HelperTypes";
import {TableReduxStructure} from "../redux/reduxTypes";

export type TCustomFunctionProps = {tableWebContext: TableWebContext, innerTableMap?: TableReduxStructure}
export type TCustomFunction<T = string> = (props:TCustomFunctionProps) => T
export type TCustomFunctionObj<T=string> = {
    onMount?: TCustomFunction<T>
    onUpdate?: TCustomFunction<T>
}
export type CustomFunctionMap = Map<string, TCustomFunctionObj<unknown>>

export const useCustomFunctionExecute = (columName: string, setter: MReactDispSetter<unknown>) => {
    // const tableWebContext = useContext(TableWebContext)
    // const {customFunction} = tableWebContext
    // const func = customFunction?.get(columName).
    // if (func) {
    //     const value = func(tableWebContext)
    //     setter(value)
    // }

}