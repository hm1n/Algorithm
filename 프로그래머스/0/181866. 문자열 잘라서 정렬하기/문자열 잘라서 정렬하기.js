function solution(myString) {
    return myString.split('x').filter((str, idx) => str !== "").sort();
}