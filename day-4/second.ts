const data = await Deno.readTextFile("data.txt");

let puzzleText = data.trim().split("\n");
let count = 0;
puzzleText = ["0".repeat(146), "0".repeat(146), "0".repeat(146), ...puzzleText, "0".repeat(146), "0".repeat(146), "0".repeat(146)];
puzzleText = puzzleText.map(line => "000" + line + "000");

for (let index = 3; index < puzzleText.length - 3; index++) {
  let charA = puzzleText[index].indexOf("A");

  while (charA !== -1) {
    if ((puzzleText[index + 1][charA + 1] === "M" && puzzleText[index - 1][charA - 1] === "S") || (puzzleText[index + 1][charA + 1] === "S" && puzzleText[index - 1][charA - 1] === "M")) {
      if ((puzzleText[index + 1][charA - 1] === "M" && puzzleText[index - 1][charA + 1] === "S") || (puzzleText[index + 1][charA - 1] === "S" && puzzleText[index - 1][charA + 1] === "M")) {
        count++;
      }
    }

    charA = puzzleText[index].indexOf("A", charA + 1);
  }
}

console.log("sum", count);
