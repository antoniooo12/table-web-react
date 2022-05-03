import {ReactDispSetter} from "../types/HelperTypes";
import {TableReduxStructure} from "../redux/reduxTypes";
import {TableStructure} from "../types/TableStructure";

export type TTableConnect =  {
    tableEternalState: TableReduxStructure
    settableEternalState: ReactDispSetter<TableReduxStructure>
    tableStructure: TableStructure
}