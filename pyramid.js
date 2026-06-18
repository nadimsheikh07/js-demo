let rows = 5

for (let index = 0; index < rows; index++) {
    const space = " ".repeat(rows - index - 1)
    const star = "*".repeat(2 * index + 1)
    console.log(space + star)
}