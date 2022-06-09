import React, {useCallback} from 'react';
import {Button, TButton} from "../../../buttons/Button/Button";
import {SvgTrash} from "../../../SVG/SvgTrash";
import {useActionsTable} from "../../../../hooks/useActionsTable";
import {TStatus} from "../../../../redux/reduxTypes";

type LineDeleteButton = TButton & {
    lineId: string | number,
    status: TStatus
}
const LineDeleteButton: React.FC<LineDeleteButton> = ({lineId, status}) => {
    const {tableDeleteLine} = useActionsTable()
    const onClick = useCallback(() => {
        tableDeleteLine({lineId, status})
    },[])
    return (
        <Button
            onClick={onClick}
        >
            <SvgTrash/>
        </Button>
    );
};

export {LineDeleteButton};