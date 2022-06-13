import React, {useContext} from 'react';
import {TBigPictureTableCustom} from "../../BigPictureType";
import {LineContext} from "../../../Line/LineContext";
import {TableWebContext} from "../../../TableWeb/TableWebContext";
import {BigPictureLines} from "./BigPictureLines";

const BigPictureTable: React.FC<TBigPictureTableCustom> = ({lineData}) => {
    const columnsParam = useContext(TableWebContext).columns
    const {customComponents} = useContext(TableWebContext)
    return (
        <div>
            <LineContext.Provider
                value={lineData.lineInformation}
            >
                {customComponents.tableBigComponents &&
                    <customComponents.tableBigComponents lineData={lineData} columnParam={columnsParam}/>
                }
                <BigPictureLines lineData={lineData} columnsParam={columnsParam}/>
            </LineContext.Provider>
        </div>
    );
};

export {BigPictureTable};