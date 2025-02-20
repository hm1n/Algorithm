import sys
input = sys.stdin.readline

def roundUp(num):
  if (num - int(num)) >= 0.5:
    return int(num) + 1
  else:
    return int(num)


n = int(input())
rank = [0] * n

for i in range(n):
  rank[i] = int(input())

rank.sort()
del_num = roundUp(len(rank) * 0.15)

del_rank_sum = sum(rank)
for i in range(del_num):
  del_rank_sum -= rank[i]
  del_rank_sum -= rank[len(rank) - i - 1]

if (n == 0):
  print(0)
else:
  del_rank_avg = roundUp(del_rank_sum / (len(rank) - del_num * 2))
  print(del_rank_avg)