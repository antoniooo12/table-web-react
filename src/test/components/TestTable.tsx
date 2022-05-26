import React, {useEffect} from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";
import {Button} from "../../componets/buttons/Button/Button";
import {TSelectOptions} from "../../types/TableStructure";

const TestTable = () => {

    const {connector, api} = useConnectWebTableState(testTable, exampleExternalData,new Map<string, TSelectOptions[]>(
        [
            ['адреса', [{
                text: 'option',
                value: '3s',
                disabled: false,
            }, {
                text: 'and options',
                value: 'we',
                disabled: false,
            },]]
        ]
    ))
const {setOptionsMap, setTableExternalData}=api
    useEffect(() => {
        console.log('--------')

        console.log(connector.tableExternalData)
        console.log('--------')
    }, [connector.tableExternalData])
    return (
        <>
            <Button
                onClick={() => {
                    setTableExternalData(exampleExternalData)
                    setOptionsMap(
                        new Map<string, TSelectOptions[]>(
                            [
                                ['адреса', [{
                                    text: 'new',
                                    value: '22',
                                    disabled: false,
                                }, {
                                    text: 'some',
                                    value: '32',
                                    disabled: false,
                                },]]
                            ]
                        ))

                }}
            >
                upload new options
            </Button>
            <TableWebProviderComponent
                tableConnect={connector}
            />
        </>
    );
};

export {TestTable};