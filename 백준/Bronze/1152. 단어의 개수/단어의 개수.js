/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    console.log(
        input[0]
            .trim()
            .split(" ")
            .filter((e) => e !== "").length,
    );
}

solution(input);
