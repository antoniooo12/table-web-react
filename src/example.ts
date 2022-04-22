import {
    Column,
    Columns,
    InputAdditionalAttributes, InputAdditionalParamsNumber, InputAdditionalParamsTel,
    SectionTableStructure,
    TableStructure
} from "./types/TableStructure";

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
    max: 10,
    min: 1,
    step: 0.25,
}
const clientPhoneColumnAdditionalInformation: Extract<InputAdditionalAttributes, InputAdditionalParamsTel> = {
    format: 'xxx_xxx_xx_xx_'
}
const clientRatingColumn: Column = {
    title: 'рейтинг',
    width: 90,
    cellParam: {
        type: 'number',
        default: 5,
        additionalParams: clientRatingColumnAdditionalInformation
    },

}

const clientActiveColumn: Column = {
    title: 'активний',
    cellParam:{
        type:'checkbox'
    },
    width: 90,
}
const clientPhoneColumn: Column = {
    title: 'номер',
    cellParam:{
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
        type: 'text',
        placeholder: 'імʼя'
    },
    width: 100,

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
                    // clientActiveTuple,
                    clientPhoneTuple,
                ])

            }]
        ])
    }
}