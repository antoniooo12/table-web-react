import React from 'react';
import {TSelectOptions} from "../../../../../types/TableStructure";
import cl from "./CellTextSelectOptionList.module.scss";
import {CellTextSelectOption} from "./CellTextSelectOption";
import clsx from "clsx";
import {Button} from "../../../../buttons/Button/Button";

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

export {CellTextSelectOptionList};