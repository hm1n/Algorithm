import sys
input = sys.stdin.readline

n, m, b = map(int, input().split())
ground = []
count = {}

for i in range(n):
  ground.append(list(map(int, input().split())))
  
  for j in range(len(ground[i])):
    if (ground[i][j] in count):
      count[ground[i][j]] += 1
    else:
      count[ground[i][j]] = 1

heights = list(count.keys())
H = min(heights)
max_height = max(heights)
times = {}

while (H <= max_height):
  time = 0
  block = b

  for key in count:
    if (H < key):
      block += ((key - H) * count[key])
      time += ((key - H) * count[key] * 2)
    else:
      block -= ((H - key) * count[key])
      time += ((H - key) * count[key])
  
  if (0 <= block):
    times[H] = time
  H += 1

keys = list(times.keys())
answer = keys[0]

for key in times:
  if (times[answer] > times[key]):
    answer = key
  if (times[answer] == times[key] and answer < key):
    answer = key
print(times[answer], answer)