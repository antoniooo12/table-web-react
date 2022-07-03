import React from 'react';
import cl from './CustomLine.module.scss'
import {TLine} from "../../../componets/Line/Line";
import {LineViewButtons} from "../../../componets/Line/Views/LineViewButtons";
import clsx from "clsx";
import {CellText} from "../customCelles/BaseCells/CellText";
import {EColumnClientInfo, EColumOrderInfo} from "../tableExampleData/example";
import {DeliveryDay} from "../customCelles/DeliveryDay/DeliveryDay";
import {DeliveryTimeBefore} from "../customCelles/DeliveryTimeBefore/DeliveryTimeBefore";
import {SumOfOrder} from "../customCelles/SumOfOrder/SumOfOrder";


const CustomLine: React.FC<TLine> = (props) => {
    const className = clsx({
        [cl.delete]: props.toDelete
    })
    return (
        <tr className={className}>
            <CellText cellName={EColumnClientInfo.clientName}/>
            <CellText cellName={EColumnClientInfo.clientPhone}/>
            <CellText cellName={EColumnClientInfo.clientComment}/>
            <CellText cellName={EColumOrderInfo.deliveryAddress}/>
            <td style={{height: '1px'}}>
                    <table style={{width: '100%', height:'100%', border: 'none'}}>
                        <tr style={{height:'100%'}}>
                            <DeliveryDay  cellName={EColumOrderInfo.deliveryDay}/>
                        </tr>
                        <tr >
                            <DeliveryTimeBefore cellName={EColumOrderInfo.deliveryTimeAfter}/>
                            <DeliveryTimeBefore cellName={EColumOrderInfo.deliveryTimeBefore}/>
                        </tr>
                    </table>
            </td>
            <SumOfOrder cellName={EColumOrderInfo.orderSum}/>
            <CellText cellName={EColumOrderInfo.deliveryComment}/>

            <LineViewButtons/>
        </tr>
    );
};

export {CustomLine};
