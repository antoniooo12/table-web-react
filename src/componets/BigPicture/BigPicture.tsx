import React from 'react';
import {TBigPicture} from "./BigPictureType";
import {useBigPictureService} from "./UseBigPictureService";
import {BigPictureHeader} from "./BigPictureComponents/BigPictureHeader";
import {BigPictureTable} from "./BigPictureComponents/BigPictureTable/BigPictureTable";

const BigPicture: React.FC<TBigPicture> = ({}) => {
    const {className, closeBigPicture, lineData} = useBigPictureService()

    return (
        <div
            className={className}
        >
            <BigPictureHeader closeBigPicture={closeBigPicture} lineData={lineData}/>
            <BigPictureTable lineData={lineData}/>
        </div>
    );
};
export {BigPicture};