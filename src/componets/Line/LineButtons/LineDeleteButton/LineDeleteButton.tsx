import React from 'react';
import {Button, TButton} from "../../../buttons/Button/Button";
import {SvgTrash} from "../../../SVG/SvgTrash";
import {useActionsTable} from "../../../../hooks/useActionsTable";
import {EnumStatus, TStatus} from "../../../../redux/reduxTypes";

type LineDeleteButton = TButton & {
    lineId: string | number,
    status: TStatus
}
const LineDeleteButton: React.FC<LineDeleteButton> = ({lineId, status}) => {
    const {tableDeleteLine} = useActionsTable()
    console.log(lineId, status)
    return (
        <Button
            onClick={() => {
                tableDeleteLine({lineId, status})
            }}
        >
            <SvgTrash/>
        </Button>
    );
};

export {LineDeleteButton};