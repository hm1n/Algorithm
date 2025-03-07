import sys
input = sys.stdin.readline

n, m = map(int, input().split())

heard = {}
saw = {}
heard_and_saw = []

for i in range(n):
  str = input().strip()
  heard[i] = str

for i in range(m):
  str = input().strip()
  saw[str] = i

for i in range(n):
  if (heard[i] in saw):
    heard_and_saw.append(heard[i])

heard_and_saw.sort()

print(len(heard_and_saw))

str = ''
for i in range(len(heard_and_saw)):
  str += heard_and_saw[i]
  str += '\n'

print(str.rstrip())