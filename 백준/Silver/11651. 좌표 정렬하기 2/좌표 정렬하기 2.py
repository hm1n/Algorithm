import sys
input = sys.stdin.readline

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]

def merge_sort(list) -> list:
  if len(list) < 2:
    return list
  
  mid = len(list) // 2
  low, high = [], []

  low = merge_sort(list[:mid])
  high = merge_sort(list[mid:])

  merged_list = []
  l = 0
  h = 0

  while (l < len(low) and h < len(high)):
    if (low[l][1] < high[h][1]):
      merged_list.append(low[l])
      l += 1
    else:
      if (low[l][1] == high[h][1] and low[l][0] < high[h][0]):
        merged_list.append(low[l])
        l += 1
      else:
        merged_list.append(high[h])
        h += 1
  
  merged_list += low[l:]
  merged_list += high[h:]
  return merged_list

# matrix.sort(key = lambda x: (x[0], x[1]))
merged_matrix = merge_sort(matrix)

for i in range(n):
  print(merged_matrix[i][0], merged_matrix[i][1])