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

export type User = {
    name: string,
    age: string,
    photo: string,
    position: string,
    email: string,
    info: string,
    id: string,
}