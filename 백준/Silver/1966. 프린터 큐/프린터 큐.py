import sys
input = sys.stdin.readline

k = int(input())

for _ in range(k):
  n, m = map(int, input().split())
  importance = list(map(int, input().split()))

  idx = m
  rank = 0

  while (len(importance) > 0):
    for i in range(len(importance)):
      if (idx == -1):
        break

      if (max(importance) > importance[0]):
        importance.append(importance.pop(0))

        if (idx == 0):
          idx = len(importance) - 1
        else:
          idx -= 1
        
      else:
        importance.pop(0)
        rank += 1
        idx -= 1

    if (idx <= -1):
      print(rank)
      break