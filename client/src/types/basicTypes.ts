export type TableHeaderType = {
    text: string;
    name: string;
    id: string;
}

export type TableRowType = {
    cells: TableCellType[]
    id: string;
}

export type TableCellType = {
    text: string;
    name: string;
    id: string;
}