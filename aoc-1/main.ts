const data = await Deno.readTextFile("data.txt");

const lines = data.trim().split("\n");

const column1: number[] = lines
  .map(line => line.split("  "))
  .map(([col1]) => Number(col1))
  .sort();

const column2: number[] = lines
  .map(line => line.split("  "))
  .map(([, col2]) => Number(col2))
  .sort();

const sum: number = column1.reduce((acc, current, index) => {
  acc += Math.abs(current - column2[index]);
  return acc;
}, 0);

console.log("sum", sum);

let similartyScore: number = 0;

column1.forEach(column1Value => {
  let index = 0;
  column2.forEach(column2Value => {
    if (column1Value == column2Value) {
      ++index;
    }
  });
  similartyScore += index * column1Value;
});

console.log("similartyScore", similartyScore);
