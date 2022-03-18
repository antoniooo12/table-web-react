// @ts-ignore
import cl from './PanelButton.module.scss'

import React from 'react';

type PanelButton = {
    onClick: () => void
}
const PanelButton: React.FC<PanelButton> = ({children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={cl.wrapper}
        >
            {children}
        </button>
    );
};

export {PanelButton};