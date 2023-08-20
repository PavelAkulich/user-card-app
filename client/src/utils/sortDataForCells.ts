export function sortDataForCells<DataType extends { name: string }>(
  data: DataType[],
  currentPositions: string[]
) {
  return data.sort((a, b) => {
    if (
      currentPositions.indexOf(a.name) === -1 ||
      currentPositions.indexOf(b.name) === -1
    )
      return -1;
    return currentPositions.indexOf(a.name) > currentPositions.indexOf(b.name)
      ? 1
      : -1;
  });
}
