import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
  k = int(input())

  f0 = 1
  f1 = 0
  sum_f0_and_f1 = 1

  for i in range(k):
    f0 = f1;
    f1 = sum_f0_and_f1
    sum_f0_and_f1 = f0 + f1

  print(f0, f1)