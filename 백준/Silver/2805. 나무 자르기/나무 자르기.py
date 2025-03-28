import sys
input = sys.stdin.readline

def calc_sum(trees, height):
  sum = 0

  for i in range(n):
    if (trees[i] > height):
      sum += (trees[i] - height)
  
  return sum


n, m = map(int, input().split())
trees = list(map(int, input().split()))

start = 1
end = max(trees)
mid = (start + end) // 2

while (start <= end):
  sum = calc_sum(trees, mid)
  if (sum >= m):
    start = mid + 1
  else:
    end = mid - 1
  
  mid = (start + end) // 2

print(mid)