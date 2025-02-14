import sys
input = sys.stdin.readline

n = int(input())
arr = []
rank = [1] * n

for i in range(n):
  keys = list(map(int, input().split()))
  arr.append(keys)

for i in range(n - 1):
  for j in range(i + 1, n):
    if (arr[i][0] < arr[j][0] and arr[i][1] < arr[j][1]):
      rank[i] += 1
    if (arr[i][0] > arr[j][0] and arr[i][1] > arr[j][1]):
      rank[j] += 1
      
  
for i in range(n):
  print(rank[i], end = ' ')
print()