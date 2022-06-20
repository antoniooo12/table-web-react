
export type TTableHeaderBlock = {
    title: string
    colSpan: number
    width?: number
}

export type TTableHeaderLine = {
    headerBlockArray: TTableHeaderBlock[]
}