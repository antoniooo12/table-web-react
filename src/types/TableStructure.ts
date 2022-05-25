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
export type InputType = 'select' | 'text' | 'number' | 'textarea' | 'tel' | 'checkbox' | 'textSelect'
export enum EnumTypeAdditionalParamsSelect {
    InputAdditionalParamsSelect='InputAdditionalParamsSelect',
    InputAdditionalParamsSelectV2='InputAdditionalParamsSelectV2',
    InputAdditionalParamsTel='InputAdditionalParamsTel',
    InputAdditionalParamsNumber='InputAdditionalParamsNumber',
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

export type DefaultValue<T> =
    { readonly value: T, readonly type: 'Default' }
    | { readonly type: 'Previous', readonly orNotPrevious: T }
export type CellParam<T> = {
    readonly default: DefaultValue<T>
    readonly  additionalParams?: InputAdditionalAttributes
    readonly  type: InputType
    readonly name: string
    readonly  hidden?: boolean
    readonly  fontSize?: number
    readonly  placeholder?: string
}
export type Column = {
    title: string
    cellParam: CellParam<unknown>
    width: number | 'inherit' | 'all'
    hidden?: boolean
    subColumns?: Map<string, Column>

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
