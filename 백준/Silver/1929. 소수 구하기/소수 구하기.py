import sys

m, n = map(int, sys.stdin.readline().split())
A = [1] * (n + 1)
A[1] = 0 

i = 2
while (i ** 2 <= n):
  if (A[i]):
    for j in range(i * 2, n + 1, i):
      A[j] = 0
  i += 1

for i in range(m, n + 1):
  if (A[i]):
    print(i)