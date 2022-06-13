import {
    Column,
    EnumTypeAdditionalParamsSelect,
    InputAdditionalAttributes,
    InputAdditionalParamsNumber,
    InputAdditionalParamsSelect,
    InputAdditionalParamsTel, SectionTable,
    SectionTableStructure,
    TableStructure
} from "./types/TableStructure";

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

enum EColumn {
    clientName = 'clientName',
    deliveryTimeTuple = 'deliveryTimeTuple',
    clientPhone = 'clientPhone',
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
const clientPhoneTuple: [EColumn.clientPhone, Column] = [EColumn.clientPhone, clientPhoneColumn]
const clientActiveTuple: [string, Column] = ['clientActive', clientActiveColumn]
const clientRatingTuple: [string, Column] = ['clientRating', clientRatingColumn]
const orderSum: Column = {
    title: 'sum',
    cellParam: {
        name: 'sum',
        default: {type: 'Default', value: 0},
        type: "number",
    },
    width: 85
}

const clientNameTuple: [EColumn.clientName, Column] = [EColumn.clientName, {
    title: 'Імʼя клієнта',
    cellParam: {
        name: 'Імʼя клієнта',
        default: {type: 'Default', value: ''},
        type: 'text',
        placeholder: 'імʼя'
    },
    width: 100,

}]
const houseTypeColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsSelect> = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsSelect,
    variants: [{
        text: 'Усі',
        value: '1',
        disabled: false,
        selected: true,
    }, {
        text: 'Новобудови',
        value: '2',
        disabled: false,
        selected: false,
    }, {
        text: 'Вториний ринок',
        value: '3',
        disabled: false,
        selected: false,
    },
    ]
}
const clientComment : Column={
    title: 'коментар до клієнта',
    cellParam: {
        name: 'коментар до клієнта',
        default: {type: 'Default', value: ''},
        type: 'textarea',
        placeholder: 'коментар до клієнта'
    },
    width: 150,
}
const deliveryComment : Column={
    title: 'коментар до доставки',
    cellParam: {
        name: 'коментар до доставки',
        default: {type: 'Default', value: ''},
        type: 'textarea',
        placeholder: 'коментар до доставки'
    },
    width: 150,
}
const deliveryTimeTuple: [EColumn.deliveryTimeTuple, Column] = [EColumn.deliveryTimeTuple, {
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
}]

enum ESection {
    clientInformation = 'clientInformation'
}

const sectionClientInformation: [ESection.clientInformation, SectionTableStructure] = [ESection.clientInformation, {
    sectionParams: {
        title: 'інформація про клієнта',
        width: 100,
        fontSize: 12
    },
    columns: new Map([
        clientNameTuple,
        clientPhoneTuple,
        ['clientComment',clientComment],
    ])

}]


export const section: SectionTable = new Map([
    sectionClientInformation,
    ['orderInformation2', {
        sectionParams: {
            title: 'замовлення',
            width: 100,
            fontSize: 12
        },
        columns: new Map([
            ['deliveryAddress', deliveryAddress],
            deliveryTimeTuple,
            ['orderSum', orderSum],
            ['deliveryComment',deliveryComment]
        ])

    }]
])


export const testTable = {
    shield: {
        section
    }
}

