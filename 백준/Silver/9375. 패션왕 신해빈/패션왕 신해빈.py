import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
  n = int(input())
  wear_dict = {}
  for _ in range(n):
    wear = list(input().split())
    if (wear[1] in wear_dict):
      wear_dict[wear[1]].append(wear[0])
    else:
      wear_dict[wear[1]] = [wear[0]]
  
  cnt = 1
  for wear in wear_dict:
    cnt *= (len(wear_dict[wear]) + 1)
  print(cnt - 1)