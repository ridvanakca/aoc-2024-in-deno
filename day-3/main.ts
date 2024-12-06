const regex = /mul\(\d{1,3},\d{1,3}\)/g;

const data = await Deno.readTextFile("data.txt");
let corruptedText: string = data.trim();

let sum = 0;

for (let index = 0; index < corruptedText.lastIndexOf(`don't()`); index++) {
  const donts = corruptedText.indexOf("don't()");
  const dos = corruptedText.indexOf("do()", donts + 1);
  corruptedText = corruptedText.slice(0, donts) + corruptedText.slice(dos + 4);
}

const matches = [...corruptedText.matchAll(regex)];
matches.forEach(match => {
  const [matchText] = match;
  const [a, b] = matchText.slice(4, -1).split(",");
  sum += Number(a) * Number(b);
});

console.log("sum", sum);
