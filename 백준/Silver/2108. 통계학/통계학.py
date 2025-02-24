import sys
input = sys.stdin.readline

import collections
from collections import Counter


n = int(input())
arr = []
sum = 0

for i in range(n):
  arr.append(int(input()))
  sum += arr[i]

arr.sort()
count = Counter(arr)
max_count = max(count.values())
max_values = [k for k, v in count.items() if v == max_count]


print(int(round(sum / len(arr), 0)))

print(arr[len(arr) // 2])

if (len(max_values) == 1):
  print(max_values[0])
else:
  print(max_values[1])

print(max(arr) - min(arr))