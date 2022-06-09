import React from 'react';
import cl from './BigPicture.module.scss'
import {TBigPicture} from "./BigPictureType";
import {useBigPictureService} from "./UseBigPictureService";
import {Button} from "../buttons/Button/Button";

const BigPicture: React.FC<TBigPicture> = ({}) => {
    const {className, closeBigPicture} = useBigPictureService()

    return (
        <div
            className={className}
        >
            <div className={cl.header}>
                <div className={cl.header}>
                    <Button onClick={closeBigPicture} style={'danger'}>close</Button>
                </div>
            </div>
        </div>
    );
};

export {BigPicture};