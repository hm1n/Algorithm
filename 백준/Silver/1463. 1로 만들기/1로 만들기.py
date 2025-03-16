import sys
input = sys.stdin.readline

x = int(input())
cnt = 0

dp = [0] * (x + 1)

dp[1] = 0

for i in range(2, x + 1):
  if (x == 1):
    break
  
  if (i == 2 or i == 3):
    dp[i] = 1
    continue
  
  if (i % 3 == 0 and i % 2 == 0):
    if (dp[i // 3] < dp[i // 2]):
        dp[i] = dp[i // 3] + 1
    else:
        dp[i] = dp[i // 2] + 1
  elif (i % 3 == 0 and dp[i // 3] < dp[i - 1]):
      dp[i] = dp[i // 3] + 1
  elif (i % 2 == 0 and dp[i // 2] < dp[i - 1]):
      dp[i] = dp[i // 2] + 1
  else:
    dp[i] = dp[i - 1] + 1

  
print(dp[x])