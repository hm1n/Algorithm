import sys
input = sys.stdin.readline

str = input().strip()

sum = 0
minus = 0
is_minus = -1
num = ''

for i in range(len(str)):
  if (str[i] == '+'):
    if (is_minus == 1):
      minus += int(num)
    else:
      sum += int(num)
    num = ''
  elif (str[i] == '-'):
    if (is_minus == -1):
      sum += int(num)
      is_minus = 1
    else:
      minus += int(num)
      sum -= minus
      is_minus = 1
      minus = 0
    num = ''
  else:
    num += str[i]

if (is_minus == 1):
  minus += int(num)
  sum -= minus
else:
  sum += int(num)

print(sum)