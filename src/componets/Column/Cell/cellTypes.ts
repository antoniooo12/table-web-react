import {CellParam} from "../../../types/TableStructure";
import {MReactDispSetter} from "../../../types/HelperTypes";

export type TCell<N> = {
    externalValue: N
    setExternalValue: MReactDispSetter<N>
    // setExternalValue: (value: N) => void
    cellParam: CellParam<N>,
    className?: string
}
export type TCell2<N> = {
    setExternalValue: <T>(value: T) => void
    cellParam: CellParam<N>,
    className?: string
}
