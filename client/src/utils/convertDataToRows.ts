import { TableRowType } from "../types/basicTypes";

type DefaultDataType<T> = T[];

export function convertDataToRows<DataType extends {id: string}>(
  data: DefaultDataType<DataType>
): TableRowType[] {
  return data.map((dt) => ({
    id: dt.id.toString(),
    cells: Object.entries(dt).map((item, ind) => ({
      name: item[0],
      text: item[1],
      id: ind.toString(),
    })),
  }));
}
