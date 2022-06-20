import {TableWebContext} from "../componets/TableWeb/TableWebContext";
import {MReactDispSetter} from "../types/HelperTypes";
import {TableReduxStructure} from "../redux/reduxTypes";

export type TCustomFunctionProps = {tableWebContext: TableWebContext, innerTableMap?: TableReduxStructure}
export type TCustomFunction<T = string> = (props:TCustomFunctionProps) => T
export type TCustomFunctionObj<T=string> = {
    onMount?: TCustomFunction<T>
    onUpdate?: TCustomFunction<T>
}
export type CustomFunctionMap<T =any> = Map<string, TCustomFunctionObj<T>>

