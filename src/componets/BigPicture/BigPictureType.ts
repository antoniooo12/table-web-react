import {TTableLine} from "../../redux/reduxTypes";
import {Column} from "../../types/TableStructure";

export type TBigPicture = {}

export type TBigPictureTable = {
    lineData: TTableLine
    columnsParam:  Map<string, Column>

}

export type TBigPictureHeader = {
    closeBigPicture: () => void
    lineData: TTableLine
}

export type TBigPictureHeaderTitleCustom = {
    lineData: TTableLine
}

export type TBigPictureTableCustom ={
    lineData : TTableLine
}