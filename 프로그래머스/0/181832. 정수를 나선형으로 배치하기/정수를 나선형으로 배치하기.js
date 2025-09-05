function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));

  let top = 0, bottom = n - 1;
  let left = 0, right = n - 1;
  let v = 1;

  while (left <= right && top <= bottom) {
    for (let j = left; j <= right; j++) answer[top][j] = v++;
    top++;

    for (let i = top; i <= bottom; i++) answer[i][right] = v++;
    right--;

    if (top <= bottom) {
      for (let j = right; j >= left; j--) answer[bottom][j] = v++;
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) answer[i][left] = v++;
      left++;
    }
  }

  return answer;
}