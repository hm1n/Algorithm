function solution(arr, delete_list) {
    return arr.filter((e, _) => !delete_list.includes(e));
}