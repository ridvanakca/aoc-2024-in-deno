const data = await Deno.readTextFile("data.txt");

let puzzleText = data.trim().split("\n");
let count = 0;
puzzleText = ["0".repeat(146), "0".repeat(146), "0".repeat(146), ...puzzleText, "0".repeat(146), "0".repeat(146), "0".repeat(146)];
puzzleText = puzzleText.map(line => "000" + line + "000");

for (let index = 3; index < puzzleText.length - 3; index++) {
  let charX = puzzleText[index].indexOf("X");

  while (charX !== -1) {
    if (puzzleText[index][charX + 1] === "M" && puzzleText[index][charX + 2] === "A" && puzzleText[index][charX + 3] === "S") {
      count++;
    }
    if (puzzleText[index][charX - 1] === "M" && puzzleText[index][charX - 2] === "A" && puzzleText[index][charX - 3] === "S") {
      count++;
    }
    if (puzzleText[index + 1][charX] === "M" && puzzleText[index + 2][charX] === "A" && puzzleText[index + 3][charX] === "S") {
      count++;
    }
    if (puzzleText[index - 1][charX] === "M" && puzzleText[index - 2][charX] === "A" && puzzleText[index - 3][charX] === "S") {
      count++;
    }
    if (puzzleText[index + 1][charX + 1] === "M" && puzzleText[index + 2][charX + 2] === "A" && puzzleText[index + 3][charX + 3] === "S") {
      count++;
    }
    if (puzzleText[index - 1][charX - 1] === "M" && puzzleText[index - 2][charX - 2] === "A" && puzzleText[index - 3][charX - 3] === "S") {
      count++;
    }
    if (puzzleText[index + 1][charX - 1] === "M" && puzzleText[index + 2][charX - 2] === "A" && puzzleText[index + 3][charX - 3] === "S") {
      count++;
    }
    if (puzzleText[index - 1][charX + 1] === "M" && puzzleText[index - 2][charX + 2] === "A" && puzzleText[index - 3][charX + 3] === "S") {
      count++;
    }

    charX = puzzleText[index].indexOf("X", charX + 1);
  }
}

console.log("sum", count);
