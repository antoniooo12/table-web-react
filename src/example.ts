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
//             type: 'tel',
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
const clientRatingColumn: Column = {
    title: 'рейтинг',
    type: 'number',
    position: 'full',
    width: 90,
    additionalParams: clientRatingColumnAdditionalInformation
}

const clientActiveColumn: Column = {
    title: 'активний',
    type: 'checkbox',
    position: 'full',
    width: 90,
    additionalParams: clientRatingColumnAdditionalInformation
}

const clientActiveTuple: [string, Column] = ['clientActive', clientActiveColumn]
const clientRatingTuple: [string, Column] = ['clientRating', clientRatingColumn]
export const testTable: TableStructure = {
    shield: {
        section: new Map<string, SectionTableStructure>([
            ['orderInformation', {
                sectionNameParams: {
                    title: 'побажання до квартири',
                    weight: 100,
                    fontSize: 12
                },
                columns: new Map<string, Column>([
                    ['clientName', {
                        title: 'Імʼя клієнта',
                        type: 'text',
                        position: 'full',
                        width: 100,
                    }],
                    clientRatingTuple,
                    clientActiveTuple,
                ])

            }]
        ])
    }
}