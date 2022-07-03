import React from 'react';
import {TLine} from "../../../../componets/Line/Line";
import {OrdinaryNumber} from "../../customCelles/OrdenaryNumber/OrdinaryNumber";
import {EProductInfo} from "../../tableExampleData/example";
import {ProductName} from "../../customCelles/ProductName/ProductName";
import {SumOfProduct} from "../../customCelles/SumOfProduct/SumOfProduct";

const CustomLineInnerTable: React.FC<TLine> = () => {
    return (
        <tr>
            <ProductName cellName={EProductInfo.productName}/>
            <OrdinaryNumber cellName={EProductInfo.productCost}/>
            <OrdinaryNumber cellName={EProductInfo.productCount}/>
            <SumOfProduct cellName={EProductInfo.productSum}/>
        </tr>
    );
};

export {CustomLineInnerTable}
