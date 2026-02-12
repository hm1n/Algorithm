/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input[0].split("");
    const map = {
        0: "000",
        1: "001",
        2: "010",
        3: "011",
        4: "100",
        5: "101",
        6: "110",
        7: "111",
    };

    let ans = "";
    arr.forEach((e) => {
        ans += map[e];
    });

    if (ans === "000") {
        console.log("0");
        return;
    }

    ans = ans.replace(/^0+/, "");
    console.log(ans);
}

solution(input);