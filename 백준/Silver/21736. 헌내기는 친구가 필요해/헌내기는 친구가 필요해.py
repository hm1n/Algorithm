import sys
from collections import deque
input = sys.stdin.readline

n, m = map(int, input().split())

campus = []
visited = [[0] * m for _ in range(n)]
queue = deque()
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

# 캠퍼스 입력
for i in range(n):
  campus.append(list(map(str, input().strip())))

  for j in range(m):  
    if (campus[i][j] == 'I'):
      queue.append([i, j])
      visited[i][j] = 1
      

# 캠퍼스 탐색
answer = 0
while (queue):
  for _ in range(len(queue)):
    x, y = queue.popleft()

    for i in range(4):
      nx, ny = x + dx[i], y + dy[i]

      if (0 <= nx < n and 0 <= ny < m and visited[nx][ny] == 0 and campus[nx][ny] != 'X'):
        if (campus[nx][ny] == 'P'):
          answer += 1
          
        visited[nx][ny] = 1
        queue.append([nx, ny])

if (answer):
  print(answer)
else:
  print('TT')