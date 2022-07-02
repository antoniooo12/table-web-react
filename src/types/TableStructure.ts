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
export type InputType = 'custom'

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


type TDefaultFunctions = keyof typeof defaultFunctions
export type DefaultValue<T> =
    { readonly value: T, readonly type: 'Default' }
    | { readonly type: 'Previous', readonly orNotPrevious: T }
    | { readonly type: 'defaultFunctions', value: TDefaultFunctions }
    | { readonly type: 'customFunction', value: Function }
export type CellParam<T> = {
    readonly default: DefaultValue<T>
    // readonly type?: InputType //delete
    readonly name: string
    readonly hidden?: boolean
    readonly fontSize?: number
    readonly placeholder?: string
    readonly disabled?: boolean
}
export type ColumnWidth = number | 'inherit' | 'all'
export type Column<Val = any, T = string, > = {
    readonly title?: string
    readonly cellParam: CellParam<Val>
    readonly width?: ColumnWidth
    readonly hidden?: boolean
    readonly subColumns?: Map<T, Column>
    readonly subColumnsStyle?: 'line'
}
export type Columns<T = string, Val = any> = Map<T, Column<Val>>
export type SectionParam = {
    hidden?: boolean
    title: string
    width: number
    fontSize?: number
}
export type SectionTableStructure<T = string, Val = any> = {
    sectionParams: SectionParam
    sectionInner?: SectionTable
    columns: Columns<T, Val>
}
export type SectionTable<T = string, S = string, Val = any> = Map<T, SectionTableStructure<S, Val>>
export type TShieldStructure<T = string, S = string, Val = any> = {
    section: SectionTable<T, S, Val>
    innerTable?: TableStructure
}
export type TableStructure<T = string, S = string, Val = any> = {
    shield: TShieldStructure<T, S, Val>
}
