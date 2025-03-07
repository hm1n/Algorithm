import sys
input = sys.stdin.readline

n, m = map(int, input().strip().split())

pokemon_str = {}
pokemon_num = {}

for i in range (1, n + 1):
  tmp = input().strip()
  pokemon_str[str(i)] = tmp
  pokemon_num[tmp] = str(i)

for _ in range(m):
  tmp = input().strip()
  if (tmp in pokemon_num):
    print(pokemon_num[tmp])
  if (tmp in pokemon_str):
    print(pokemon_str[tmp])