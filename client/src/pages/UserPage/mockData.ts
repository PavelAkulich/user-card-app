export function createData(
  name: string,
  age: string,
  photo: string,
  job: string
) {
  return { name, age, photo, job };
}

export const data = [
  createData("Jason Stathem", "47", "photo", "main man"),
  createData("Kanye West", "45", "photo2", "rapper"),
  createData("Pavel Akulich", "25", "photo3", "JS developer"),
];
