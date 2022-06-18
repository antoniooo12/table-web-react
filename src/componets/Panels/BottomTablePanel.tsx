import React from 'react';
import {ButtonGroup} from "../buttons/Button/ButtonGroup/ButtonGroup";
import {useBottomPanelService} from "./useBottomPanelService";

type BottomTablePanel = {}


const BottomTablePanel: React.FC<BottomTablePanel> = React.memo(() => {
    const {buttonsStyle, onDownload, onSaveMemo, onCreateLine, buttonsGroupStyle} = useBottomPanelService()
    return (
        <div>
            <ButtonGroup buttonGroupMode={buttonsGroupStyle} buttonsMode={buttonsStyle}>
                <ButtonGroup.Button
                    onClick={onCreateLine}
                >Add</ButtonGroup.Button>
                <ButtonGroup.Button
                    onClick={onSaveMemo}
                >Save</ButtonGroup.Button>
                <ButtonGroup.Button
                    onClick={onDownload}
                >Download</ButtonGroup.Button>
            </ButtonGroup>
        </div>
    );
});

export {BottomTablePanel};