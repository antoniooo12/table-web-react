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
const {setOptionsMap, setTableExternalDataJSON}=api
    useEffect(() => {
        console.log('--------')
        console.log(api.data.tableExternalState)
        console.log('--------')
    }, [api.data.tableExternalState])
    return (
        <>
            <Button
                onClick={() => {
                    setTableExternalDataJSON(exampleExternalData)
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