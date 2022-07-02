import React from 'react';
import cl from './CustomLine.module.scss'
import {TLine} from "../../../componets/Line/Line";
import {LineViewButtons} from "../../../componets/Line/Views/LineViewButtons";
import clsx from "clsx";
import {CellText} from "../customCelles/BaseCells/CellText";
import {EColumnClientInfo, EColumOrderInfo} from "../tableExampleData/example";
import {DeliveryDay} from "../customCelles/DeliveryDay/DeliveryDay";
import {DeliveryTimeBefore} from "../customCelles/DeliveryTimeBefore/DeliveryTimeBefore";


const CustomLine: React.FC<TLine> = (props) => {
    // const CellClient = useGetCell<EColumnClientInfo>([EColumnClientInfo.clientName, EColumnClientInfo.clientComment, EColumnClientInfo.clientPhone], {})
    // const CellOrder = useGetCell<EColumOrderInfo>([EColumOrderInfo.orderSum, EColumOrderInfo.deliveryTimeBefore, EColumOrderInfo.deliveryDay, EColumOrderInfo.deliveryAddress, EColumOrderInfo.deliveryTimeAfter, EColumOrderInfo.deliveryComment], {})
    const className = clsx({
        [cl.delete]: props.toDelete
    })
    return (
        <tr className={className}>
            <CellText cellName={EColumnClientInfo.clientName}/>
            <CellText cellName={EColumnClientInfo.clientPhone}/>
            <CellText cellName={EColumnClientInfo.clientComment}/>
            <td>
                <table style={{width: '100%'}}>
                    <tr>
                        <DeliveryDay cellName={EColumOrderInfo.deliveryDay}/>
                    </tr>
                    <tr style={{width: '100%'}}>
                        <DeliveryTimeBefore cellName={EColumOrderInfo.deliveryTimeAfter}/>
                        <DeliveryTimeBefore cellName={EColumOrderInfo.deliveryTimeBefore}/>
                    </tr>
                </table>
            </td>
            {/*{CellOrder.orderSum}*/}
            {/*{CellOrder.deliveryComment}*/}
            <LineViewButtons/>
        </tr>
    );
};

export {CustomLine};
