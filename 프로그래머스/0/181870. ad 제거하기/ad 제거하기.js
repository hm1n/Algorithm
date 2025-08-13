function solution(strArr) {
    return strArr.filter((str, _) => !(str.includes("ad")));
}