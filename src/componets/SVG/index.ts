import React from "react";
import {SvgEdit} from "./SvgEdit";
import {SvgDone} from "./SvgDone";
import {SvgArrowDown} from "./SvgArrowDown";
import {TSvg} from "./SvgTypes";

export type SvgName = 'SvgArrowDown' | 'SvgDone' | 'SvgEdit'

export const Svg : {[key in SvgName]: React.FC<TSvg>} = {
    SvgEdit: SvgEdit,
    SvgDone: SvgDone,
    SvgArrowDown: SvgArrowDown,
}
