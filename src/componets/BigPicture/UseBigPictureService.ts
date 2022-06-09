import clsx from "clsx";
import cl from './BigPicture.module.scss'
import {useContext} from "react";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";


export const useBigPictureService = () => {
    const {bigPictureController} = useContext(TableWebContext)
    const lineData = useTableTypedSelector(state => state.tableStore.storage.data.find(line => line.lineInformation.id === bigPictureController.selectedLineIdToBigPicture))
    const className: string = clsx({
        [cl.wrapper]: true
    })
    const closeBigPicture = () => {
        bigPictureController.setSelectedLineIdToBigPicture(undefined)
    }
    return {className, closeBigPicture}
}