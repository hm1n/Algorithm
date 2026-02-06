/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input[0].split(" ").map(Number);

    let ans = "";

    if (arr[0] < arr[1]) ans = "ascending";
    if (arr[0] > arr[1]) ans = "descending";

    for (let i = 2; i < arr.length; i++) {
        if (ans === "ascending" && arr[i - 1] > arr[i]) {
            console.log("mixed");
            return;
        }

        if (ans === "descending" && arr[i - 1] < arr[i]) {
            console.log("mixed");
            return;
        }
    }

    console.log(ans);
}
solution(input);