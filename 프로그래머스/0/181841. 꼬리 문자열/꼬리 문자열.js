function solution(str_list, ex) {
    return str_list.filter((e, _) => !e.includes(ex)).join('')
}