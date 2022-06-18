import React from 'react';
import {SvgTrash} from "../../../../SVG/SvgTrash";
import {useSvgGroupComponent} from "./useSvgGroupComponent";

const SvgDeleteGroupComponent: React.FC = () => {
    const {color} = useSvgGroupComponent()
    return (
        <SvgTrash color={color}/>
    );
};

export {SvgDeleteGroupComponent};