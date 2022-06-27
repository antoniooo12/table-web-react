import {useConnectWebTableState} from "../../../API/TableWebAPI";
import {exampleDataStructure2} from "./tableStructure";
import {customCells} from "../Components/CustomTable/CustomCells";
import {exampleExternalData2} from "./exampleExternalData2";
import {Line} from "../Components/CustomTable/CustomLine/CustomLine";

export const useTableWevConnector =()=>{
    const {api, connector} = useConnectWebTableState({
        tableStructure: exampleDataStructure2,
        externalData: exampleExternalData2,
        tableButtons: {isShow: false},
        customLine:Line,
        customCells: customCells,
    })
    return {api, connector}
}
