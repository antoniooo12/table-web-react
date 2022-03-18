import {HTMLInputTypeAttribute} from "react";

export type HeaderParam = {
    name: string
}
export type THeader = Map<string, HeaderParam>

enum position {
    'full' = 'full',
    'right' = 'right',
    'bottom' = 'bottom',
    'left' = 'left',
    'top' = 'top',
}

const allTypes = {
    number: 0,
    string: 'string',
    boolean: false,
}

export type ColumnParam = {
    width: number
}
export type Column = {
    name: string
    type: HTMLInputTypeAttribute
    default?: number | string | boolean
    position: keyof typeof position
    width: number | 'inherit'
    visible: boolean
    subColumns?: {
        type: 'Array' | 'Map',
        data: Map<string, Column>
    }
    placeholder?: string
    fontSize?: number
}
export type Columns = Map<string, Column>
export type SectionTableStructure = {
    sectionName: string
    sectionInner?: SectionTable
    columns?: Columns
}
export type SectionTable = Map<string, SectionTableStructure>
export type TShieldStructure = {
    section: SectionTable
}
export type TableStructure = {
    shield: TShieldStructure
}
