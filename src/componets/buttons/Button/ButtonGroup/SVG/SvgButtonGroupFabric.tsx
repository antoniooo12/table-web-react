import React from 'react';
import {useSvgGroupComponent} from "./useSvgGroupComponent";
import {Svg, SvgName} from "../../../../SVG";

const SvgButtonGroupFabric: React.FC<{ svgName: SvgName }> = ({svgName}) => {
    const {color} = useSvgGroupComponent()
    const SvgComponent = Svg[svgName]
    return <SvgComponent color={color}/>
};

export {SvgButtonGroupFabric};