import React from 'react';
import {TLine} from "../../../componets/Line/Line";
import {LineViewColumns} from "../../../componets/Line/Views/LineViewColumns";
import {LineViewButtons} from "../../../componets/Line/Views/LineViewButtons";

export type  TCustomLine = {

}
const CustomLine: React.FC<TLine> = (pops) => {
    return (
        <>
            <LineViewColumns/>
            <LineViewButtons/>
        </>
    );
};

export {CustomLine};