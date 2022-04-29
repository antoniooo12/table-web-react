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
export type InputType = 'select' | 'text' | 'number' | 'textarea' | 'tel' | 'checkbox'

export type InputAdditionalParamsSelect = {
    variants: {
        disabled: boolean
        value: number | string
        selected: boolean
        text: string
    }[]
}

export type InputAdditionalParamsTel = {
    format: string
}
export type InputAdditionalParamsNumber = {
    min: number
    max: number
    step: number
}
// export type InputAdditionalAttributes = { Tel: InputAdditionalParamsTel } | { number: InputAdditionalParamsNumber }
export type InputAdditionalAttributes =
    InputAdditionalParamsTel
    | InputAdditionalParamsNumber
    | InputAdditionalParamsSelect
export type CellParam<T> = {
    readonly default:   { readonly value: T, readonly type: 'Default'}| {  readonly type: 'Previous', readonly orNotPrevious:T}
    readonly  additionalParams?: InputAdditionalAttributes
    readonly  type: InputType
    readonly  hidden?: boolean
    readonly  fontSize?: number
    readonly  placeholder?: string
}
export type Column = {
    title: string
    cellParam: CellParam<unknown>
    width: number | 'inherit'
    hidden?: boolean
    subColumns?: {
        type: 'Array' | 'Map',
        data: Map<string, Column>
    }
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
