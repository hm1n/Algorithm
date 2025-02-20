import sys
input = sys.stdin.readline

n, m = map(int, input().split())
board = [input().strip() for _ in range(n)]
min = -1

for x in range(n - 7):
  tmp = 0

  for y in range(m - 7):
    rec = 'W'
    calc_wstart = 0
    for p in range(8):
      for q in range(8):
        if (board[x + p][y + q] != rec): calc_wstart += 1
        if (rec == 'W'): rec = 'B'
        else : rec = 'W'
      if (rec == 'W'): rec = 'B'
      else: rec = 'W'
    
    rec = 'B'
    calc_bstart = 0
    for p in range(8):
      for q in range(8):
        if (board[x + p][y + q] != rec): calc_bstart += 1
        if (rec == 'W'): rec = 'B'
        else : rec = 'W'
      if (rec == 'W'): rec = 'B'
      else: rec = 'W'
    
    if (calc_bstart < calc_wstart):
      tmp = calc_bstart
    else:
      tmp = calc_wstart

    if (min == -1):
      min = tmp
    else:
      if (min > tmp):
        min = tmp    
print(min)