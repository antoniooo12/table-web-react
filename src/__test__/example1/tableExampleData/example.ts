import {
    Column,
    EnumTypeAdditionalParamsSelect,
    SectionTable,
    SectionTableStructure,
    TableStructure
} from "../../../types/TableStructure";

export enum EColumOrderInfo {
    deliveryAddress = 'deliveryAddress',
    orderSum = 'orderSum',
    deliveryComment = 'deliveryComment',
    deliveryDay = 'deliveryDay',
    deliveryTimeBefore = 'deliveryTimeBefore',
    deliveryTimeAfter = 'deliveryTimeAfter',
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
        default: {value: 3, type: 'Default'},
    },

}


const clientPhoneColumn: Column = {
    title: 'номер',
    cellParam: {
        placeholder: EColumnClientInfo.clientPhone,
        name: 'номер',
        default: {type: 'Previous', orNotPrevious: ''},
    },
    width: 180,
}
const deliveryAddress: Column = {
    title: 'адресса',
    cellParam: {
        placeholder: 'адрес доставки',
        name: EColumOrderInfo.deliveryAddress,
        default: {type: 'Default', value: ''},
    },
    width: 150,
}
const clientPhoneTuple: [EColumnClientInfo.clientPhone, Column] = [EColumnClientInfo.clientPhone, {
    title: 'номер',
    cellParam: {
        placeholder: 'номер',
        name: EColumnClientInfo.clientPhone,
        // default: {type: 'Previous', orNotPrevious: ''},
        default: {type: 'Default', value: ''},
    },
    width: 180,
}]

const orderSum: Column = {
    title: 'sum',
    cellParam: {
        name: EColumOrderInfo.orderSum,
        default: {
            type: 'Default',
            value: 0,
        },
        disabled: false,
    },
    width: 85
}

const clientNameTuple: [EColumnClientInfo.clientName, Column] = [EColumnClientInfo.clientName, {
    title: 'Імʼя клієнта',
    cellParam: {
        name: EColumnClientInfo.clientName,
        default: {type: 'Default', value: ''},
        placeholder: 'імʼя'
    },
    width: 100,

}]

const clientComment: Column = {
    title: 'коментар до клієнта',
    cellParam: {
        name: EColumnClientInfo.clientComment,
        default: {type: 'Default', value: ''},
        placeholder: 'коментар до клієнта'
    },
    width: 150,
}
const deliveryComment: Column = {
    title: 'коментар до доставки',
    cellParam: {
        name: EColumOrderInfo.deliveryComment,
        default: {type: 'Default', value: ''},
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
                                default: {type: 'Default', value: ''},
                            }
                        }
                    ], [EProductInfo.productCost,
                        {
                            title: 'ціна',
                            width: 100,
                            cellParam: {
                                name: EProductInfo.productCost,
                                default: {type: 'Default', value: 0},
                            }
                        }
                    ], [EProductInfo.productCount,
                        {
                            title: 'кількість',
                            width: 100,
                            cellParam: {
                                name: EProductInfo.productCount,
                                default: {type: 'Default', value: 0},
                            }
                        }
                    ], [EProductInfo.productSum, {
                        title: 'sum',
                        width: 80,
                        cellParam: {
                            name: EProductInfo.productSum,
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
        name: EColumOrderInfo.deliveryDay,
        default: {type: 'defaultFunctions', value: 'currentData'},
    },
    width: 200,
    subColumnsStyle: 'line',
    subColumns: new Map<string, Column>([[EColumOrderInfo.deliveryTimeAfter,
        {
            title: '',
            width: 100,
            cellParam: {
                name: EColumOrderInfo.deliveryTimeAfter,
                default: {type: 'defaultFunctions', value: 'currentHour'}
            }
        }], [EColumOrderInfo.deliveryTimeBefore,
        {
            title: '',
            width: 100,
            cellParam: {
                name: EColumOrderInfo.deliveryTimeBefore,
                default: {type: 'Default', value: '18:30'}
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
            [EColumOrderInfo.deliveryDay, deliveryTime],
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

