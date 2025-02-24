import sys
input = sys.stdin.readline

n = int(input())

arr = []
for i in range(n):
  arr.append(int(input()))

stack = []
top = -1
idx = 0
str = ""

for i in range(1, n + 1):
  stack.append(i)
  top += 1
  str += '+\n'
  
  while (arr[idx] == stack[top]):
    stack.pop()
    top -= 1
    idx += 1
    str += '-\n'

    if (idx >= n or top <= -1):
      break


while (top > -1):
  if (arr[idx] == stack[top]):
    stack.pop()
    top -= 1
    str += '-\n'
  else:
    str = "NO"
    break

print(str)
