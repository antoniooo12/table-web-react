import {tableStore} from "../../../redux";
import {MReactDispSetter} from "../../../types/HelperTypes";
import {TTableExternalState} from "../../../API/TableWebAPITypes";
import {EnumStatus} from "../../../redux/reduxTypes";

export const onSave = (setter: MReactDispSetter<TTableExternalState>) => {
    const data = tableStore.getState().tableStore.storage.data
    const toDelete = data.filter(line => line.lineInformation.status === EnumStatus.isAll && line.lineInformation.toDelete)
    const toUpdate = data.filter(line => line.lineInformation.status === EnumStatus.isAll && !line.lineInformation.toDelete && !line.lineInformation.wasEdit)
    const toCreate = data.filter(line => line.lineInformation.status === EnumStatus.isNew && !line.lineInformation.toDelete)
    const tableState: TTableExternalState = {
        toUpdate,
        toDelete,
        toCreate,
    }
    setter(tableState)
}