import React from 'react';
import cl from './MakeOrder.module.scss'
import {roundNumber} from "../../utils/roundNumber";

type TMakeOrderButton = {
    cost: number
}
const MakeOrderButton: React.FC<TMakeOrderButton> = ({cost}) => {
    const roundedSum = roundNumber(cost)
    return (
        <button className={cl.wrapper}>
          <span>Замовити</span>
            <span
            className={cl.sum}
            >{roundedSum}</span>
        </button>
    );
};

export {MakeOrderButton};
