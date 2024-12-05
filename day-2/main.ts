const isIncreasingSafe = (numbers: number[]) => {
  return numbers.every((value, index, array) => {
    if (index === 0) return true;
    return value > array[index - 1] && Math.abs(value - array[index - 1]) >= 1 && Math.abs(value - array[index - 1]) <= 3;
  });
};

const isDecreasingSafe = (numbers: number[]) => {
  return numbers.every((value, index, array) => {
    if (index === 0) return true;
    return value < array[index - 1] && Math.abs(value - array[index - 1]) >= 1 && Math.abs(value - array[index - 1]) <= 3;
  });
};

const data = await Deno.readTextFile("data.txt");
const lines = data.trim().split("\n");
let counter = 0;

lines.forEach(line => {
  const numbers = line.trim().split(" ").map(Number);

  if (isIncreasingSafe(numbers) || isDecreasingSafe(numbers)) {
    counter++;
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    const filtered = numbers.filter((_, index) => index !== i);
    if (isIncreasingSafe(filtered) || isDecreasingSafe(filtered)) {
      counter++;
      return;
    }
  }
});

console.log("counter", counter);
