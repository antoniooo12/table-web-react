import {
    Column,
    EnumTypeAdditionalParamsSelect,
    InputAdditionalAttributes,
    InputAdditionalParamsNumber,
    InputAdditionalParamsTel,
    SectionTable,
    SectionTableStructure,
    TableStructure
} from "./types/TableStructure";

export enum EColumOrderInfo {
    deliveryAddress = 'deliveryAddress',
    orderSum = 'orderSum',
    deliveryComment = 'deliveryComment',
    deliveryTimeTuple = 'deliveryTimeTuple',
}

const clientRatingColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsNumber> = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsNumber,
    max: 10,
    min: 1,
    step: 0.25,
}
const clientPhoneColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsTel> = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsTel,
    format: 'xxx_xxx_xx_xx_',
}

export enum EColumnClientInfo {
    clientName = 'clientName',
    clientPhone = 'clientPhone',
    clientComment = 'clientComment'
}

const clientRatingColumn: Column = {
    title: 'рейтинг',
    width: 90,
    cellParam: {
        name: 'рейтинг',
        type: 'number',
        default: {value: 3, type: 'Default'},
        additionalParams: clientRatingColumnAdditionalInformation
    },

}

const clientActiveColumn: Column = {
    title: 'активний',
    cellParam: {
        name: 'активний',
        default: {value: true, type: 'Default'},
        type: 'checkbox'
    },
    width: 90,
}
const clientPhoneColumn: Column = {
    title: 'номер',
    cellParam: {
        placeholder: 'номер клієнта',
        name: 'номер',
        default: {type: 'Previous', orNotPrevious: ''},
        type: 'tel',
        additionalParams: clientPhoneColumnAdditionalInformation,
    },
    width: 180,
}
const deliveryAddress: Column = {
    title: 'адресса',
    cellParam: {
        placeholder: 'адрес доставки',
        name: 'адресса',
        default: {type: 'Default', value: ''},
        type: 'text',
    },
    width: 150,
}
const clientPhoneTuple: [EColumnClientInfo.clientPhone, Column] = [EColumnClientInfo.clientPhone, clientPhoneColumn]
// const clientActiveTuple: [string, Column] = ['clientActive', clientActiveColumn]
// const clientRatingTuple: [string, Column] = ['clientRating', clientRatingColumn]

// const houseTypeColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsSelect> = {
//     type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsSelect,
//     variants: [{
//         text: 'Усі',
//         value: '1',
//         disabled: false,
//         selected: true,
//     }, {
//         text: 'Новобудови',
//         value: '2',
//         disabled: false,
//         selected: false,
//     }, {
//         text: 'Вториний ринок',
//         value: '3',
//         disabled: false,
//         selected: false,
//     },
//     ]
// }
const orderSum: Column = {
    title: 'sum',
    cellParam: {
        name: EColumOrderInfo.orderSum,
        default: {
            type: 'Default',
            value: 0,
        },
        type: "custom",
        disabled: false,
    },
    width: 85
}

const clientNameTuple: [EColumnClientInfo.clientName, Column] = [EColumnClientInfo.clientName, {
    title: 'Імʼя клієнта',
    cellParam: {
        name: 'Імʼя клієнта',
        default: {type: 'Default', value: ''},
        type: 'text',
        placeholder: 'імʼя'
    },
    width: 100,

}]

const clientComment: Column = {
    title: 'коментар до клієнта',
    cellParam: {
        name: 'коментар до клієнта',
        default: {type: 'Default', value: ''},
        type: 'textarea',
        placeholder: 'коментар до клієнта'
    },
    width: 150,
}
const deliveryComment: Column = {
    title: 'коментар до доставки',
    cellParam: {
        name: 'коментар до доставки',
        default: {type: 'Default', value: ''},
        type: 'textarea',
        placeholder: 'коментар до доставки'
    },
    width: 150,
}

enum ESection {
    clientInformation = 'clientInformation',
    orderInformation2 = 'orderInformation2',
}

type TESection = keyof typeof ESection
type TEColumn1 = keyof typeof EColumnClientInfo
type TEColumn2 = keyof typeof EColumOrderInfo
type TEColumn = TEColumn1 | TEColumn2
const sectionClientInformation: [ESection.clientInformation, SectionTableStructure<TEColumn>] = [ESection.clientInformation, {
    sectionParams: {
        title: 'інформація про клієнта',
        width: 100,
        fontSize: 18
    },
    columns: new Map([
        clientNameTuple,
        clientPhoneTuple,
        [EColumnClientInfo.clientComment, clientComment],
    ])

}]
sectionClientInformation[1].columns.get('clientName')

export enum EProductInfo {
    productName = 'productName',
    productCost = 'productCost',
    productCount = 'productCount',
    productSum = 'productSum',
}

export type TEProductInfo = keyof typeof EProductInfo
const productCostCell: Column = {
    title: 'ціна',
    width: 100,
    cellParam: {
        name: EProductInfo.productCost,
        type: 'number',
        default: {type: 'Default', value: 0},
        fontSize: 18,
    }
}

const innerTable: TableStructure = {
    shield: {
        section: new Map<string, SectionTableStructure>([
            ['orderedProduct', {
                sectionParams: {
                    title: 'замовлені товари',
                    width: 20,
                    fontSize: 18,
                },
                columns: new Map<string, Column>([
                    [EProductInfo.productName,
                        {
                            title: 'назва',
                            width: 150,
                            cellParam: {
                                name: EProductInfo.productName,
                                type: 'custom',
                                default: {type: 'Default', value: ''},
                                // fontSize: 17,
                            }
                        }
                    ], [EProductInfo.productCost,
                        {
                            title: 'ціна',
                            width: 100,
                            cellParam: {
                                name: EProductInfo.productCost,
                                type: 'custom',
                                default: {type: 'Default', value: 0},
                            }
                        }
                    ], [EProductInfo.productCount,
                        {
                            title: 'кількість',
                            width: 100,
                            cellParam: {
                                name: EProductInfo.productCount,
                                type: 'custom',
                                default: {type: 'Default', value: 0},
                            }
                        }
                    ], [EProductInfo.productSum, {
                        title: 'sum',
                        width: 80,
                        cellParam: {
                            name: EProductInfo.productSum,
                            type: 'custom',
                            default: {type: 'Default', value: 0},
                        }
                    }]
                ])
            }]
        ])
    }
}
const deliveryTime: Column = {
    title: 'часові рамки',
    cellParam: {
        name: 'deliveryDay',
        type: 'date',
        default: {type: 'defaultFunctions', value: 'currentData'},
    },
    width: 200,
    subColumnsStyle: 'line',
    subColumns: new Map<string, Column>([['afterHour',
        {
            // hidden: true,
            title: '',
            width: 100,
            cellParam: {
                name: 'afterHour', type: 'time', default: {type: 'defaultFunctions', value: 'currentHour'}
            }
        }], ['beforeHour',
        {
            // hidden: true,
            title: '',
            width: 100,
            cellParam: {
                name: 'beforeHour', type: 'time', default: {type: 'defaultFunctions', value: 'currentHour'}
            }
        }]])
}


export const section: SectionTable<TESection> = new Map([
    sectionClientInformation,
    [ESection.orderInformation2, {
        sectionParams: {
            title: 'замовлення',
            width: 100,
            fontSize: 18
        },
        columns: new Map([
            [EColumOrderInfo.deliveryAddress, deliveryAddress],
            [EColumOrderInfo.deliveryTimeTuple, deliveryTime],
            [EColumOrderInfo.orderSum, orderSum],
            [EColumOrderInfo.deliveryComment, deliveryComment]
        ])

    }]
])

export const testTable: TableStructure = {
    shield: {
        section,
        innerTable,
    },

}

