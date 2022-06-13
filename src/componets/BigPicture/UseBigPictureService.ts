import clsx from "clsx";
import cl from './BigPicture.module.scss'
import {useContext} from "react";
import {TableWebContext} from "../TableWeb/TableWebContext";
import {useTableTypedSelector} from "../../hooks/useTableTypedSelector";
import {TTableLine} from "../../redux/reduxTypes";


export const useBigPictureService = () => {
    const {bigPictureController} = useContext(TableWebContext)
    const lineData: TTableLine = useTableTypedSelector(state => {
        const lineData = state.tableStore.storage.data.find(line => line.lineInformation.id === bigPictureController.selectedLineIdToBigPicture)
        if (!lineData) throw new TypeError(`cannot find ${bigPictureController.selectedLineIdToBigPicture}`)
        return lineData
    })
    const className: string = clsx({
        [cl.wrapper]: true
    })
    const closeBigPicture = () => {
        bigPictureController.setSelectedLineIdToBigPicture(undefined)
    }
    return {className, closeBigPicture, lineData}
}