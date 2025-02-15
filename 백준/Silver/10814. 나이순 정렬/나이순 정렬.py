import sys
input = sys.stdin.readline

users = []

n = int(input())
for i in range(n):
  user = input().split()
  user[0] = int(user[0])
  users.append(user)

users.sort(key = lambda x: x[0])

for i in range(n):
  print(users[i][0], users[i][1])
