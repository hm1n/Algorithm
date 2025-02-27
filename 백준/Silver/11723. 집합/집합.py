import sys
input = sys.stdin.readline

S = [0] * 21

m = int(input())
for _ in range(m):
  data = input().strip()
  parts = data.split()
  
  cmd = parts[0]
  
  if (len(parts) == 2):
    num = int(parts[1])

    match cmd:
      case 'add':
        if (S[num] == 0):
          S[num] = 1

      case 'remove':
        if (S[num] == 1):
          S[num] = 0
      
      case 'check':
        print(S[num])

      case 'toggle':
        if (S[num]):
          S[num] = 0
        else:
          S[num] = 1
    
  if (len(parts) == 1):
    if (cmd == 'all'):
      for i in range(1, 21):
        S[i] = 1
    
    if (cmd == 'empty'):
      for i in range(1, 21):
        S[i] = 0