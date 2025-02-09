n = int(input())

pac = 1

for i in range (1, n+1):
  pac *= i


count = 0

while (pac > 0):
  tmp = pac % 10

  if (tmp == 0):
    count += 1
  else:
    break

  pac = pac // 10

print(count)
