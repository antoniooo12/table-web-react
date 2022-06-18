import React from 'react';
import {Button, TButton} from "../Button";
import {useButtonGroup} from "./ButtonGroup";
export type  TButtonGroupComponent ={} & TButton
const ButtonGroupComponent:React.FC<TButtonGroupComponent> = (props) => {
    const context = useButtonGroup()

    return (
        <Button {...context.buttonsMode} {...props}/>
    );
};

export {ButtonGroupComponent};