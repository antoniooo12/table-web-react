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
export type InputType = 'select' | 'text' | 'number' | 'textarea' | 'tel'| 'checkbox'
type InputAdditionalParams = {
    number: InputAdditionalParamsNumber
    tel: InputAdditionalParamsTel
}
export type InputAdditionalParamsTel = {
    format: string
}
export type InputAdditionalParamsNumber = {
    min: number
    max: number
    step: number
}
// export type InputAdditionalAttributes = { tel: InputAdditionalParamsTel } | { number: InputAdditionalParamsNumber }
export type InputAdditionalAttributes =  InputAdditionalParamsTel | InputAdditionalParamsNumber

export type Column = {
    title: string
    type: InputType
    default?: number | string | boolean
    position: keyof typeof position
    width: number | 'inherit'
    additionalParams?: InputAdditionalAttributes
    hidden?: boolean
    selectListOptions?: { text: string, value: string }[]
    subColumns?: {
        type: 'Array' | 'Map',
        data: Map<string, Column>
    }
    placeholder?: string
    fontSize?: number
}
export type Columns = Map<string, Column>
export type SectionTableStructure = {
    sectionNameParams: {
        hidden?: boolean
        title: string
        weight: number
        fontSize: number
    }
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
