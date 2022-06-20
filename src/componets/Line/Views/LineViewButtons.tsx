import React from 'react';
import cl from "../Line.module.scss";
import {LineButtons} from "../LineButtons/LineButtons";

const LineViewButtons: React.FC = () => {
    return (
        <div className={cl.buttonsSection}>
            <LineButtons/>
        </div>
    );
};

export {LineViewButtons};