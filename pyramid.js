const row = 5
for (let index = 0; index < row; index++) {
    const space = " ".repeat(row - index - 1)
    const star = "*".repeat(2 * index + 1)
    console.log(space + star)
}