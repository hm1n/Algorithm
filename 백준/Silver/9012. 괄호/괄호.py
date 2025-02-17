import sys

t = int(input())
strs = [sys.stdin.readline().strip() for _ in range(t)]

for str in strs:
  stack = []
  top = -1
  is_vps = 'YES'

  for char in str:
    if (char == '('):
      stack.append(char)
      top += 1
    
    if (char == ')'):
      if (top == -1):
        is_vps = 'NO'
        break

      if (stack[top] == '(' and char == ')'):
        stack.pop()
        top -= 1
    
  if (top > -1):
    is_vps = 'NO'

  print(is_vps)
