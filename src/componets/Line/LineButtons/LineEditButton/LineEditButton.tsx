import React from 'react';
import {SvgEdit} from "../../../SVG/SvgEdit";
import {Button} from "../../../buttons/Button/Button";
import {useActionsTable} from "../../../../hooks/useActionsTable";

type TLineEditButton = {
    lineId: string
}
const LineEditButton: React.FC<TLineEditButton> = ({lineId}) => {
    const {tableSetEditableLine} = useActionsTable()
    const onClick = () => {
        tableSetEditableLine({lineId})
    }
    return (
        <Button
            onClick={onClick}
        >
            <SvgEdit/>
        </Button>
    );
};

export {LineEditButton};