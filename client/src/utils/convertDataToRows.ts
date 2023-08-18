import { TableRowType } from "../types/basicTypes";

type DefaultFataType<T> = T[];

export function convertDataToRows<DataType extends Object>(
  data: DefaultFataType<DataType>
): TableRowType[] {
  return data.map((dt, index) => ({
    id: index.toString(),
    cells: Object.entries(dt).map((item, ind) => ({
      name: item[0],
      text: item[1],
      id: ind.toString(),
    })),
  }));
}
