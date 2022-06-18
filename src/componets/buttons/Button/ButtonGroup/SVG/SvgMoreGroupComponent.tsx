import React from 'react';
import {useSvgGroupComponent} from "./useSvgGroupComponent";
import {SvgMoreOptions} from "../../../../SVG/SvgMoreOptions";

const SvgMoreGroupComponent: React.FC = () => {
    const {color} = useSvgGroupComponent()
    return (
        <SvgMoreOptions color={color}/>
    );
};

export {SvgMoreGroupComponent};