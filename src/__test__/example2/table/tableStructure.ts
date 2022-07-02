import {Column, TableStructure} from "../../../types/TableStructure";

export enum EColumns2 {
    'title' = 'title',
    'count' = 'count',
    'cost' = 'cost',
    'type' = 'type',
    'sum' = 'sum',
}

const titleColumn: [EColumns2, Column<TString>] = [EColumns2.title, {
    cellParam: {
        name: EColumns2.title,
        default: {
            type: 'Default', value: {
                type: 'String',
                value: ''
            }
        }
    }
}]
const costColumn: [EColumns2, Column<TNumber>] = [EColumns2.cost, {
    cellParam: {
        name: EColumns2.cost,
        default: {
            type: 'Default', value: {
                type: 'Number',
                value: 0
            }
        }
    }
}]
const count: Column<TNumber> = {
    cellParam: {
        name: EColumns2.count,
        default: {
            type: 'Default', value: {
                type: 'Number',
                value: 0
            }
        }
    }
}
const countColumn: [EColumns2, Column<TNumber>] = [EColumns2.count, count]
const sumColumn: [EColumns2, Column<TNumber>] = [EColumns2.sum, {
    cellParam: {
        name: EColumns2.sum,
        default: {
            type: 'Default', value: {
                type: 'Number',
                value: 0
            }
        }
    }
}]
type TNumber = {
    type: 'Number'
    value: number
}
type TString = {
    type: 'String'
    value: string
}
const type: Column<TString> = {
    hidden: true,
    cellParam: {
        name: EColumns2.type,
        default: {type: 'Default', value: {type: "String", value: ''}}
    }
}
const typeColumn: [EColumns2, Column<TString>] = [EColumns2.type, type]
export const exampleDataStructure2: TableStructure<'section', EColumns2, TNumber | TString> = {
    shield: {
        section: new Map([
            ['section', {
                sectionParams: {title: '', width: 0, fontSize: 12},
                columns: new Map<EColumns2, Column<TNumber> | Column<TString>>([
                    titleColumn,
                    costColumn,
                    countColumn,
                    typeColumn,
                    sumColumn,
                ])
            }]
        ])
    }
}
