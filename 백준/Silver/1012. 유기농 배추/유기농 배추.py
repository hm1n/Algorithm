import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def visit(arr, x, y):
  arr[x][y] = 0

  if (y + 1 < len(arr[0])):
    if (arr[x][y + 1]):
      visit(arr, x, y + 1)

  if (y - 1 >= 0):
    if (arr[x][y - 1]):
      visit(arr, x, y - 1)

  if (x + 1 < len(arr)):
    if (arr[x + 1][y]):
      visit(arr, x + 1, y)
  
  if (x - 1 >= 0):
    if (arr[x - 1][y]):
      visit(arr, x - 1, y)

  return

t = int(input())
for _ in range(t):
  m, n, k = map(int, input().split())
  arr = [[0] * m for _ in range(n)]
  area = []

  for _ in range(k):
    y, x = map(int, input().split())
    area.append([x, y])
    arr[x][y] = 1 

  count = 0
  for i in range(len(area)):
    if (arr[area[i][0]][area[i][1]]):
      visit(arr, area[i][0], area[i][1])
      count += 1

  print(count)