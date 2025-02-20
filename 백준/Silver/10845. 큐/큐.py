import sys
input = sys.stdin.readline

n = int(input())
queue = []
back = -1

for _ in range(n):
  data = input().strip()
  parts = data.split()
  
  cmd = parts[0]
  
  if (len(parts) == 1):
    match cmd:
      case 'pop':
        if (back == -1):
          print(back)
        else:
          print(queue.pop(0))
          back -= 1

      case 'size':
        print(len(queue))
      
      case 'empty':
        if (len(queue) == 0): print(1)
        else: print(0)

      case 'front':
        if (len(queue) == 0):
          print(-1)
        else:
          print(queue[0])

      case 'back':
        if (back == -1):
          print(back)
        else: 
          print(queue[back])
  if (len(parts) > 1):
    num = parts[1]

    if (cmd == 'push'):
      queue.append(num)
      back += 1