import React, {useMemo} from 'react';
import cl from './Page2.module.scss'
import {useTableWevConnector} from "./table/tableWebConector";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {MakeOrderButton} from "./Components/MakeOrder/MakeOrderButton";
import {calculateSum} from "./utils/calculateSum";

const Example2 = () => {
    const {api, connector} = useTableWevConnector()
    const cost: number = useMemo(() => {
        return calculateSum(api.data.tableExternalState.data)
    }, [api.data.tableExternalState.data])

    return (
        <div className={cl.wrapper}>
            <div className={cl.orderPanel}>
                <TableWebProviderComponent
                    tableConnect={connector}
                />
                <div className={cl.orderButton}>
                    <MakeOrderButton cost={cost}/>
                </div>
            </div>
        </div>
    );
};

export {Example2};
