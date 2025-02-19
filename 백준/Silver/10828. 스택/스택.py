import sys
input = sys.stdin.readline

n = int(input())
stack = []
top = -1

for _ in range(n):
  data = input().strip()
  parts = data.split()
  
  cmd = parts[0]
  
  if (len(parts) == 1):
    match cmd:
      case 'pop':
        if (top == -1):
          print(top)
        else:
          print(stack.pop())
          top -= 1

      case 'size':
        print(top + 1)
      
      case 'empty':
        if (top == -1): print(1)
        else: print(0)

      case 'top':
        if (top == -1):
          print(top)
        else:
          print(stack[top])
    
  if (len(parts) > 1):
    num = parts[1]

    if (cmd == 'push'):
      stack.append(num)
      top += 1