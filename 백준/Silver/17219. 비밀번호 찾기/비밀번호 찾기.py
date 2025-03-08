import sys
input = sys.stdin.readline

n, m = map(int, input().split())

passwords = {}

for _ in range(n):
  site, password = map(str, input().split())
  passwords[site] = password

for _ in range(m):
  str = input().strip()
  print(passwords[str])