function solution(myString) {
    return myString.split('x').map((str, idx) => str.length);
}