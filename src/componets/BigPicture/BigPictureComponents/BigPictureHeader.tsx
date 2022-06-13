import React, {useContext} from 'react';
import cl from "../BigPicture.module.scss";
import {Button} from "../../buttons/Button/Button";
import {TBigPictureHeader} from "../BigPictureType";
import {TableWebContext} from "../../TableWeb/TableWebContext";

const BigPictureHeader: React.FC<TBigPictureHeader> = ({closeBigPicture,lineData}) => {
    const {customComponents} = useContext(TableWebContext)
    return (
        <div className={cl.header}>
            <div>
                {customComponents.headerBigComponents &&
                    < customComponents.headerBigComponents lineData={lineData}/>
                }
            </div>
            <Button onClick={closeBigPicture} style={'danger'}>close</Button>
        </div>
    );
};

export {BigPictureHeader};