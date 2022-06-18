import {ViewMode} from "../API/TableWebAPITypes";
import {TButton} from "../componets/buttons/Button/Button";
import {absurd} from "fp-ts/function";
import {TButtonGroupStyle} from "../componets/buttons/Button/ButtonGroup/ButtonGroup";
import {useContext} from "react";
import {TableWebContext} from "../componets/TableWeb/TableWebContext";

export function getButtonsStyle(tableStyle: ViewMode): TButton {
    const button: TButton = {}
    switch (tableStyle) {
        case "innerTable": {
            return {
                ...button,
                styleMode: "white",
                size: 'small'
            }
        }
        case "table": {
            return {
                ...button,
                styleMode: "blue",
                size: 'standard'
            }
        }
        default:
            absurd(tableStyle)
            break
    }
    return button
}

export const useGetButtonsStyle = () => {
    const {viewMode} = useContext(TableWebContext)
    return getButtonsStyle(viewMode)
}
export const getButtonGroupsStyle = (tableStyle: ViewMode): TButtonGroupStyle => {
    switch (tableStyle) {
        case "innerTable": {
            const style: TButtonGroupStyle = {
                panelMode: 'together'
            }
            return style
        }
        case "table": {
            const style: TButtonGroupStyle = {
                panelMode: 'default'
            }
            return style
        }
        default:
            absurd(tableStyle)
            const style: TButtonGroupStyle = {
                panelMode: 'default'
            }
            return style
            break
    }
}

export const useGetButtonGroupsStyle = () => {
    const {viewMode} = useContext(TableWebContext)
    return getButtonGroupsStyle(viewMode)
}