import React, {useEffect} from 'react';
import {testTable} from "../../example";
import {TableWebProviderComponent} from "../../componets/TableWeb/TableWebProviderComponent";
import {useConnectWebTableState} from "../../API/TableWebAPI";
import {exampleExternalData} from "../../exampleExternalData";
import {Button} from "../../componets/buttons/Button/Button";
import {TSelectOptions} from "../../types/TableStructure";

const TestTable = () => {

    const {api,connector} = useConnectWebTableState(testTable, exampleExternalData, new Map<string, TSelectOptions[]>(
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
    // const {api} =base
    const {setOptionsMap} = api
    useEffect(() => {
        console.log('--------')
        console.log(api.data.tableExternalState)
        console.log('--------')
    }, [api.data.tableExternalState])
    // useEffect(()=>{
    //     console.log('connector.tableData')
    // },[connector.tableData])
    //    useEffect(()=>{
    //     console.log('connector.setTableExternalState')
    // },[connector.setTableExternalState])
    //    useEffect(()=>{
    //     console.log('connector.tableStructure')
    // },[connector.tableStructure])
    //    useEffect(()=>{
    //     console.log('connector.optionsMap')
    // },[connector.optionsMap])
    useEffect(()=>{
        console.log('connector')
    },[connector])

    return (
        <>
            <Button
                onClick={() => {
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

                // tableStructure={connector.tableStructure}
                // setTableExternalState={connector.setTableExternalState}
                // optionsMap={connector.optionsMap}
            />
        </>
    );
};

export {TestTable};