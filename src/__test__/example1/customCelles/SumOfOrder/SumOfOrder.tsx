import React, {useEffect, useMemo} from 'react';
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import {useInnerTable} from "../../../../componets/TableWeb/InnerTableConnector/InnerTableConnector";
import {EProductInfo} from "../../../../example";
import cl from '../CustomCell.module.scss'
const SumOfOrder: CustomCellComponent<number> = ({cellInformation}) => {
    const {innerTableMap} = useInnerTable()
    const sum = useMemo(() => {
        if (innerTableMap) {
            return innerTableMap.data.reduce((accum, cur) => {
                const productCount = cur.columns.get(EProductInfo.productCount)?.value as number
                const productCost = cur.columns.get(EProductInfo.productCost)?.value as number
                const sumOfProduct = productCost * productCount
                accum += sumOfProduct
                return accum
            }, 0)
        }
        return cellInformation.externalValue
    }, [innerTableMap])

    useEffect(() => {
        cellInformation.setExternalValue(sum)
    }, [sum])

    return (
        <td>
            <input className={cl.wrapper} value={sum} readOnly={true}/>
        </td>
    );
};

export {SumOfOrder};
