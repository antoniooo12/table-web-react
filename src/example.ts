import {
    Column,
    Columns,
    InputAdditionalAttributes, InputAdditionalParamsNumber, InputAdditionalParamsSelect, InputAdditionalParamsTel,
    SectionTableStructure,
    TableStructure
} from "./types/TableStructure";
import {boolean} from "fp-ts";

// const clientInformation: SectionTableStructure = {
//     sectionNameParams: {
//         hidden: true,
//         title: 'інформація клієнта',
//         weight: 100,
//         fontSize: 12
//     },
//     columns: new Map([
//         ['name', {
//             title: "ім'я",
//             type: 'text',
//             position: 'full',
//             width: 100,
//             placeholder: "ім'я клієнта",
//         }],
//         ['surname', {
//             title: "фамілія",
//             type: 'text',
//             position: 'full',
//             width: 100,
//             placeholder: "фамілія",
//         }],
//         ['number', {
//             title: "номер",
//             type: 'Tel',
//             position: 'full',
//             width: 100,
//             placeholder: "номер",
//         }],
//         ['sex', {
//             title: "стать",
//             type: 'text',
//             position: 'full',
//             width: 100,
//             placeholder: "стать",
//         }],
//         ['cod', {
//             title: "код",
//             type: 'text',
//             position: 'full',
//             width: 60,
//             placeholder: "cod",
//         }],
//     ])
// }
// export const testTable2: TableStructure = {
//
//     shield: {
//         section: new Map([
//             ['clientInformation', clientInformation],
//             ['apartmentWishes', {
//                 sectionNameParams: {
//                     // hidden: true,
//                     title: 'побажання до квартири',
//                     weight: 100,
//                     fontSize: 12
//                 },
//                 sectionInner: new Map([
//                     ['price', {
//                         sectionNameParams: {
//                             hidden: true,
//                             title: 'ціна',
//                             weight: 100,
//                             fontSize: 12
//                         },
//                         columns: new Map([
//                             ['priceFrom', {
//                                 title: "ціна від",
//                                 type: 'number',
//                                 position: 'full',
//                                 width: 100,
//                             }],
//                             ['priceTo', {
//                                 title: "ціна до ",
//                                 type: 'number',
//                                 position: 'full',
//                                 width: 100,
//                             }]
//                         ]),
//                     }],
//                     ['houseCharacteristics', {
//                         sectionNameParams: {
//                             // hidden: true,
//                             title: 'Характеристики будинку',
//                             weight: 100,
//                             fontSize: 12
//                         },
//                         columns: new Map([
//                             ['specifics', {
//                                 title: "особливості",
//                                 placeholder: "особливості",
//                                 type: 'text',
//                                 position: 'full',
//                                 width: 100,
//                             }],
//                             ['heatingType', {
//                                 title: "опалення",
//                                 placeholder: 'опалення',
//                                 selectListOptions: [
//                                     {
//                                         text: 'poltava',
//                                         value: 'poltava',
//                                     }, {
//                                         text: 'lviv',
//                                         value: 'lviv',
//                                     }
//                                 ],
//                                 type: 'select',
//                                 position: 'full',
//                                 width: 100,
//                             }],
//                             ['repair', {
//                                 title: "ремонт",
//                                 type: 'text',
//                                 placeholder: 'ремонт',
//                                 position: 'full',
//                                 width: 100,
//                             }]
//                         ]),
//
//                         sectionInner: new Map([
//                             ['Location', {
//                                 sectionNameParams: {
//                                     hidden: true,
//                                     title: 'Розташування',
//                                     weight: 100,
//                                     fontSize: 16,
//                                 },
//                                 columns: new Map([
//                                     ['city', {
//                                         title: "місто",
//                                         type: 'text',
//                                         position: 'full',
//                                         width: 100,
//                                         placeholder: "city",
//                                         visible: true,
//                                     }], ['district', {
//                                         title: "район",
//                                         type: 'text',
//                                         position: 'full',
//                                         width: 100,
//                                         placeholder: "район",
//                                         visible: true,
//                                     }],
//                                 ])
//                             }]
//                         ]),
//
//                     }]
//
//                 ])
//             }]
//         ])
//     }
// }

const clientRatingColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsNumber> = {
    type: 'InputAdditionalParamsNumber',
    max: 10,
    min: 1,
    step: 0.25,
}
const clientPhoneColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsTel> = {
    type: 'InputAdditionalParamsTel',
    format: 'xxx_xxx_xx_xx_',
}
const clientRatingColumn: Column = {
    title: 'рейтинг',
    width: 90,
    cellParam: {
        type: 'number',
        default: {value: 3, type: 'Default'},
        additionalParams: clientRatingColumnAdditionalInformation
    },

}

const clientActiveColumn: Column = {
    title: 'активний',
    cellParam: {
        default: {value: true, type: 'Default'},
        type: 'checkbox'
    },
    width: 90,
}
const clientPhoneColumn: Column = {
    title: 'номер',
    cellParam: {
        default: {type: 'Previous', orNotPrevious: ''},
        type: 'tel',
        additionalParams: clientPhoneColumnAdditionalInformation,
    },
    width: 180,
}
const clientPhoneTuple: [string, Column] = ['clientPhone', clientPhoneColumn]
const clientActiveTuple: [string, Column] = ['clientActive', clientActiveColumn]
const clientRatingTuple: [string, Column] = ['clientRating', clientRatingColumn]
const clientNameTuple: [string, Column] = ['clientName', {
    title: 'Імʼя клієнта',
    cellParam: {
        default: {type: 'Default', value: ''},
        type: 'text',
        placeholder: 'імʼя'
    },
    subColumns:
        new Map<string, Column>([
            ['id', {
                title: 'id',
                width: "all",
                cellParam: {
                    default: {type: 'Default', value: 'sdsw'},
                    type: 'text',
                    placeholder: 'id'
                },
            }]
        ]),

    width: 100,

}]
const houseTypeColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsSelect> = {
    type: 'InputAdditionalParamsSelect',
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
const houseTypeTuple: [string, Column] = ['houseType', {
    title: 'тип нерухомосты',
    cellParam: {
        default: {type: 'Previous', orNotPrevious: ''},
        type: 'select',
        additionalParams: houseTypeColumnAdditionalInformation,
    },
    width: 110,
}]
const houseAddressTuple: [string, Column]=['houseAddress',{
    title: 'адреса',
    cellParam: {
        default: {type: 'Previous', orNotPrevious: ''},
        type: 'textSelect',
        additionalParams: {
            type: "InputAdditionalParamsSelectV2",
            defaultSelected: 0,
            variants:[
                {
                text: '1',
                value: '1',
                disabled: false,
            } ,{
                text: '2',
                value: '2',
                disabled: false,
            } ,{
                text: '33',
                value: '3',
                disabled: false,
            }
            ]
        },
    },
    width: 110,
}]
export const testTable: TableStructure = {
    shield: {
        section: new Map<string, SectionTableStructure>([
            ['orderInformation', {
                sectionNameParams: {
                    title: 'інформація про клієнта',
                    weight: 100,
                    fontSize: 12
                },
                columns: new Map<string, Column>([
                    clientNameTuple,
                    clientRatingTuple,
                    clientActiveTuple,
                    clientPhoneTuple,

                ])

            }],
            ['houseInformation', {
                sectionNameParams: {
                    title: 'інформація про будинок',
                    weight: 100,
                    fontSize: 12
                },
                columns: new Map([
                    houseTypeTuple,
                    houseAddressTuple,
                ])
            }]
        ])
    }
}