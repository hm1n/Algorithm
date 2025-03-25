import sys
input = sys.stdin.readline

n = int(input())
stack = []
top = -1

for _ in range(n):
  strs = list(map(int, input().rstrip().split()))
  op = strs[0]
    
  if (op == 1):
    stack.append(strs[1])
    top += 1
  if (op == 2):
    if (top == -1):
      print(top)
    else:
      print(stack.pop(top))
      top -= 1
  if (op == 3):
    print(len(stack))
  if (op == 4):
    if (top == -1):
      print(1)
    else:
      print(0)
  if (op == 5):
    if (top > -1):
      print(stack[top])
    else:
      print(top)