import React from 'react';
import {TSelectOptions} from "../../../../../types/TableStructure";
import cl from "./CellTextSelectOptionList.module.scss";
import {Button} from "../../../../buttons/Button/Button";
import {CellTextSelectOption} from "./CellTextSelectOption/CellTextSelectOption";

const CellTextSelectOptionList: React.FC<{ variants: TSelectOptions[], setSelected: (str: string) => void }>
    = ({variants, setSelected}) => {

    return (
        <div className={cl.wrapper}>
            <div className={cl.optionsBox}>
                {variants.map(option =>
                    <CellTextSelectOption setValue={setSelected}option={option} />
                )}
            </div>
            <Button

            >
                Add
            </Button>
        </div>
    );
};

export default CellTextSelectOptionList;