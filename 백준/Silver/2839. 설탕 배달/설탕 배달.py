n = int(input())

arr = []
calc = 0

x = 0
y = 0

while (x * 5 <= n):
  if (x * 5 + y * 3 == n):
      arr.append(x + y)

  while (y * 3 <= n):
    if (x * 5 + y * 3 == n):
      arr.append(x + y)
    y += 1
  y = 0
  x += 1

if (len(arr)):
  print(min(arr))
else:
  print(-1)