// @ts-ignore
import cl from './HeaderStyle.module.css'

import React, {useContext} from 'react';
import {HeaderParam} from "../../types/TableStructure";
import {TableWebContext} from "../TableWeb/TableWebContext";

export type ComponentHeader = {
}

const Header: React.FC<ComponentHeader> = (
    {
    }) => {
    const {columnParams} = useContext(TableWebContext)

    return (
        <div>
            {[...columnParams.entries()].map((el) => {
                return (
                    < div
                        style={{width: `${columnParams.get(el[0])?.width}px`}}
                        className={cl.column}
                        key={el[1].name}
                    >
                        {el[1].name}
                    </div>
                )
            })}
        </div>
    );
};

export {Header};