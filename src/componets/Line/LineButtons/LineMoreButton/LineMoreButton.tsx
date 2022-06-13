import React, {useContext} from 'react';
import {SvgMoreOptions} from "../../../SVG/SvgMoreOptions";
import {Button} from "../../../buttons/Button/Button";
import {TableWebContext} from "../../../TableWeb/TableWebContext";

type TLineMoreButton = {
    lineId: string
}
const LineMoreButton: React.FC<TLineMoreButton> = ({lineId}) => {
    const {bigPictureController} = useContext(TableWebContext)
    const {setSelectedLineIdToBigPicture} = bigPictureController
    return (
        <Button
            onClick={() => {
                setSelectedLineIdToBigPicture(lineId)
            }}
        >
            <SvgMoreOptions/>
        </Button>
    );
};

export {LineMoreButton};