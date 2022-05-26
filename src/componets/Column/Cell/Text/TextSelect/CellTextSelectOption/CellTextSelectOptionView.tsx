import React from 'react';
import cl from './CellTextSelectOption.module.scss'
import {SvgDone} from "../../../../../SVG/SvgDone";

type CellTextSelectOption = {
    onMouseDown: () => void
    onMouseUp: () => void
    text: string
    isSelected: boolean
}
const CellTextSelectOptionView: React.FC<CellTextSelectOption>
    = ({onMouseDown, onMouseUp, text, isSelected}) => {
    return (
        <div
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            className={cl.wrapper}
        >
            {isSelected && <SvgDone/>}
            <span> {text}</span>
        </div>
    );
};

export {CellTextSelectOptionView};