import React, {CSSProperties, ReactNode, useContext} from 'react';
import {TButton} from "../Button";
import {ButtonGroupComponent, TButtonGroupComponent} from "./ButtonGroupComponent";
import cl from './ButtonGroup.module.scss'
import clsx from "clsx";
import {SvgDeleteGroupComponent} from "./SVG/SvgDeleteGroupComponent";
import {SvgEditGroupComponent} from "./SVG/SvgEditGroupComponent";
import {SvgMoreGroupComponent} from "./SVG/SvgMoreGroupComponent";
import {SvgButtonGroupFabric} from "./SVG/SvgButtonGroupFabric";
import {SvgName} from "../../../SVG";


type ButtonGroupComposition = {
    Button: React.FC<TButtonGroupComponent>
    SvgDelete: React.FC
    SvgEdit: React.FC
    SvgMore: React.FC
    SvgFabric: React.FC<{svgName: SvgName}>
}
export type TButtonGroupStyle = {
    panelMode?: 'default' | 'together'
    style?: CSSProperties
}
export type TButtonGroup = {
    buttonsMode?: TButton
    buttonGroupMode?: TButtonGroupStyle
    children: ReactNode
}
export type TButtonGroupContext = {
    buttonsMode?: TButton
}
export const ButtonGroupContext = React.createContext<TButtonGroupContext | undefined>(undefined);


const ButtonGroup: React.FC<TButtonGroup> & ButtonGroupComposition = ({buttonsMode, buttonGroupMode, children}) => {
    const panelMode = buttonGroupMode && buttonGroupMode.panelMode || 'default'
    const className = (clsx({
        [cl.together]: panelMode === 'together',
        [cl.default]: panelMode === 'default',
    }, cl.wrapper))
    return (
        <ButtonGroupContext.Provider value={{buttonsMode}}>
                <div className={className} style={buttonGroupMode?.style}>
                    {children}
                </div>
        </ButtonGroupContext.Provider>
    );
};
export const useButtonGroup = (): TButtonGroupContext => {
    const context = useContext(ButtonGroupContext);
    if (!context) {
        throw new Error('This component must be used within a <ButtonGroup> component.');
    }
    return context;

};
ButtonGroup.Button = ButtonGroupComponent
ButtonGroup.SvgDelete = SvgDeleteGroupComponent
ButtonGroup.SvgEdit = SvgEditGroupComponent
ButtonGroup.SvgMore = SvgMoreGroupComponent
ButtonGroup.SvgFabric = SvgButtonGroupFabric

export {ButtonGroup}
// export f;