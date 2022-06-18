import React from 'react';
import {TSvg} from "./SvgTypes";

const SvgArrowDown:React.FC<TSvg> = ({color = 'white'}) => {
    return (
        <svg width="22" height="22" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.64 0.360001L24 18.68L42.36 0.360001L48 6L24 30L0 6L5.64 0.360001Z" fill={color}/>
        </svg>

    );
};

export {SvgArrowDown};