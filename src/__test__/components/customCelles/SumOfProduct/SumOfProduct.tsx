import React, {useMemo} from 'react';
import {CustomCellComponent} from "../../../../API/TableWebAPITypes";
import {EProductInfo} from "../../../../example";

const SumOfProduct: CustomCellComponent<number> = ({lineInformation}) => {
    const sum = useMemo(() => {
        const productCost = lineInformation.columns.get(EProductInfo.productCost)!.value as number
        const productCount = lineInformation.columns.get(EProductInfo.productCount)!.value as number
        const sum = (productCost * productCount).toString()
        const sumArr = sum.split('.')
        if (sumArr.length > 1) {
            sumArr[1] = sumArr[1].length >= 2 ? sumArr[1].slice(0, 2) : sumArr[1] + '0'
            return sumArr.join('.')
        }
        return sumArr.join('') + '.00'
    }, [lineInformation])
    return (
        <div>
            {sum}
        </div>
    );
};

export {SumOfProduct};