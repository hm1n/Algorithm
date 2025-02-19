import collections
from collections import Counter

n = int(input())
narr = list(map(int, input().split()))
ncount = Counter(narr)

m = int(input())
marr = list(map(int, input().split()))
mcount = [0] * m

narr.sort()

for i in range(m):
  left = 0
  right = len(narr) - 1

  while (left <= right):
    mid = (right + left) // 2

    if (marr[i] > narr[mid]):
      left = mid + 1
    elif (marr[i] < narr[mid]):
      right = mid - 1
    else:
      mcount[i] = ncount[narr[mid]]
      break

for i in range(m):
  print(mcount[i], end=' ')
print()