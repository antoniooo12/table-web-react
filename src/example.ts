import {SectionTableStructure, TableStructure} from "./types/TableStructure";

const clientInformation: SectionTableStructure = {
    sectionName: 'client information',
    columns: new Map([
        ['name', {
            name: "ім'я кліента",
            type: 'string',
            position: 'full',
            width: 150,
            placeholder: "ім'я клієнта",
            visible: true,
        }]
    ])
}
export const testTable: TableStructure = {
    shield: {
        section: new Map([
            ['clientInformation', clientInformation],
            ['floatInformation', {
                sectionName: 'float Information',
                sectionInner: new Map([
                    ['price', {
                        sectionName: 'price',
                        columns: new Map([
                            ['priceFrom', {
                                name: "price form",
                                type: 'number',
                                position: 'full',
                                width: 100,
                                visible: true,
                            }],
                            ['priceTo', {
                                name: "price to",
                                type: 'number',
                                position: 'full',
                                width: 100,
                                visible: true,
                            }]
                        ]),
                    }]
                ])
            }]
        ])
    }
}