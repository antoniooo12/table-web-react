import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as  tableReducer from "../redux/tableReducer";

export const useActionsTable = () => {
    const dispatch = useDispatch()
    return bindActionCreators(tableReducer, dispatch)
}