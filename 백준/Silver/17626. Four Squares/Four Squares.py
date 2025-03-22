import sys
input = sys.stdin.readline

n = int(input())

dp = [0] * (n + 1)
dp[1] = 1

for i in range(2, n + 1):
  min_ = 100
  j = 1
  while (j ** 2 <= i):
    min_ = min(min_, dp[i - j ** 2] + 1)
    j += 1
  dp[i] = min_

print(dp[n])