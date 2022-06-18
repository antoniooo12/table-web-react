import React from 'react';
import {SvgTrash} from "../../../../SVG/SvgTrash";
import {useSvgGroupComponent} from "./useSvgGroupComponent";
import {SvgEdit} from "../../../../SVG/SvgEdit";

const SvgEditGroupComponent: React.FC = () => {
    const {color} = useSvgGroupComponent()
    return (
        <SvgEdit color={color}/>
    );
};

export {SvgEditGroupComponent};