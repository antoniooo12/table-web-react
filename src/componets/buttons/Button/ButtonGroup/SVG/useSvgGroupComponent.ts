import {useButtonGroup} from "../ButtonGroup";
import {TSvgColor} from "../../../../SVG/SvgTypes";

export const useSvgGroupComponent = () => {
        const {buttonsMode} = useButtonGroup()
        const color: TSvgColor = buttonsMode?.styleMode === 'white' ? 'black' : 'white'
        return {color}
    }