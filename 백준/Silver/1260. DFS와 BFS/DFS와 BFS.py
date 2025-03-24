import sys
input = sys.stdin.readline


def DFS(graph, visited, v):
  visited[v] = 1
  print(v, end = ' ')

  for i in range(len(graph[v])):
    if (not visited[graph[v][i]]):
      DFS(graph, visited, graph[v][i])

def BFS(graph, visited, v):
  queue = []

  queue.append(v)

  while (len(queue)):
    p = queue.pop(0)

    if (not visited[p]):
      visited[p] = 1
      print(p, end = ' ')

    for i in range(len(graph[p])):
      if (not visited[graph[p][i]]):
        queue.append(graph[p][i])
    
    
n, m, v = map(int, input().split())

# 그래프 초기화
graph = {}
for i in range(n):
  graph[i + 1] = []

# 간선 정보 입력
for _ in range(m):
  p, q = map(int, input().split())
  graph[p].append(q)
  graph[q].append(p)

# 간선 정보를 정점 크기 순으로 정렬
for i in range(1, n + 1):
  graph[i].sort()

# DFS, BFS 결과 출력
visited = [0] * (n + 1)
DFS(graph, visited, v)
print()

visited = [0] * (n + 1)
BFS(graph, visited, v)
print()