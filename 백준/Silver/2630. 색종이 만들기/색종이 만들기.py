import sys
input = sys.stdin.readline

def calc_paper(arr, x, y, k):
  if (k == 1):
    # print(x, y, k)
    if (arr[x][y] == 1):
      return [0, 1]
    else:
      return [1, 0]
  
  tmp = arr[x][y]
  is_paper = 1
  for i in range(k):
    for j in range(k):
      if (tmp != arr[x + i][y + j]):
        is_paper = 0
        break

  count = [0, 0]
  if (is_paper):
    # print(x, y, k)
    count[tmp] += 1
  else:
    # print(k // 2)
    starts = [[0, 0], [0, k // 2], [k // 2, 0], [k // 2, k // 2]]
    for i in range(len(starts)):
      # print(starts[i][0], starts[i][1])
      sub_count = calc_paper(arr, x + starts[i][0], y + starts[i][1], k // 2)
      count[0] += sub_count[0]
      count[1] += sub_count[1]
  
  return count

n = int(input())
arr = []

for i in range(n):
  arr.append(list(map(int, input().rstrip().split())))

count = calc_paper(arr, 0, 0, len(arr))
print(count[0])
print(count[1])