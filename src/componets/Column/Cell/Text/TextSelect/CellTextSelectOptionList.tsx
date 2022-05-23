import React from 'react';
import {InputAdditionalParamsSelectVariantV2} from "../../../../../types/TableStructure";
import cl from "./CellTextSelectOptionList.module.scss";
import {CellTextSelectOption} from "./CellTextSelectOption";
import clsx from "clsx";

const CellTextSelectOptionList: React.FC<{ variants: InputAdditionalParamsSelectVariantV2[], setSelected:(str:string)=> void }>
    = ({variants, setSelected}) => {

    const style = clsx({[cl.wrapper]: true})
    return (
        <div className={style}>
            {variants.map(option =>
                <CellTextSelectOption setValue={setSelected} {...option} key={option.value}/>
            )}
        </div>
    );
};

export {CellTextSelectOptionList};