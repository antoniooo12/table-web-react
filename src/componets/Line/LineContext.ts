import {createContext} from "react";
import {EnumStatus} from "../../redux/reduxTypes";

type LineContext = {
    lineId: number | string
    status: keyof typeof EnumStatus
}

export const LineContext = createContext<LineContext>({
    lineId: 0,
    status: 'isNew',
})