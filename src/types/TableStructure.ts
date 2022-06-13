import {defaultFunctions} from "../hellpers/defaultFunctions/defaultFunctions";

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
export type InputType = 'select' | 'text' | 'number' | 'textarea' | 'tel' | 'checkbox' | 'textSelect' | 'date' | 'time'

export enum EnumTypeAdditionalParamsSelect {
    InputAdditionalParamsSelect = 'InputAdditionalParamsSelect',
    InputAdditionalParamsSelectV2 = 'InputAdditionalParamsSelectV2',
    InputAdditionalParamsTel = 'InputAdditionalParamsTel',
    InputAdditionalParamsNumber = 'InputAdditionalParamsNumber',
}

export type InputAdditionalParamsSelect = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsSelect
    variants: {
        disabled: boolean
        value: number | string
        selected: boolean
        text: string
    }[]
}
export type InputAdditionalParamsSelectV2 = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsSelectV2
    defaultSelected: number
    variants: TSelectOptions[]
}
export type TSelectOptions = {
    disabled: boolean
    value: string
    text: string
}

export type InputAdditionalParamsTel = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsTel
    format: string
}
export type InputAdditionalParamsNumber = {
    type: EnumTypeAdditionalParamsSelect.InputAdditionalParamsNumber
    min: number
    max: number
    step: number
}
// export type InputAdditionalAttributes = { Tel: InputAdditionalParamsTel } | { number: InputAdditionalParamsNumber }
export type InputAdditionalAttributes =
    InputAdditionalParamsTel
    | InputAdditionalParamsNumber
    | InputAdditionalParamsSelect
    | InputAdditionalParamsSelectV2

type TDefaultFunctions = keyof typeof defaultFunctions
export type DefaultValue<T> =
    { readonly value: T, readonly type: 'Default' }
    | { readonly type: 'Previous', readonly orNotPrevious: T }
    | { readonly type: 'defaultFunctions', value: TDefaultFunctions }
export type CellParam<T> = {
    readonly default: DefaultValue<T>
    readonly type: InputType
    readonly name: string
    readonly  additionalParams?: InputAdditionalAttributes
    readonly  hidden?: boolean
    readonly  fontSize?: number
    readonly  placeholder?: string
}
export type ColumnWidth = number | 'inherit' | 'all'
export type Column<T = string> = {
    title: string
    cellParam: CellParam<unknown>
    width: ColumnWidth
    hidden?: boolean
    subColumns?: Map<T, Column>
    subColumnsStyle?: 'line'

}
export type Columns<T = string> = Map<T, Column>
export type SectionParam = {
    hidden?: boolean
    title: string
    width: number
    fontSize: number
}
export type SectionTableStructure<T =string> = {
    sectionParams: SectionParam
    sectionInner?: SectionTable
    columns: Columns<T>
}
export type SectionTable<T = string> = Map<T, SectionTableStructure>
export type TShieldStructure<T= string> = {
    section: SectionTable<T>
}
export type TableStructure<T=string> = {
    shield: TShieldStructure<T>
}
