import React from 'react';
import {TLine} from "../../../componets/Line/Line";
import {LineViewColumns} from "../../../componets/Line/Views/LineViewColumns";
import {LineViewButtons} from "../../../componets/Line/Views/LineViewButtons";


const CustomLine: React.FC<TLine> = (pops) => {
    return (
        <tr>
            <LineViewColumns/>
            <LineViewButtons/>
        </tr>
    );
};

export {CustomLine};
