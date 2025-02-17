# -----------------#
# 스택 문제!
# 여는 괄호를 만날 때마다 스택에 쌓고,
# 닫힌 괄호를 만나면 스택의 맨 위 원소와 비교 후 짝이 맞으면 pop,
# 짝이 맞지 않으면 즉시 반복 종료하는 방식
# 근데 파이썬으로 스택을 어떻게 구현하지?
# -----------------#

import sys

strs = []

while (1):
  str = sys.stdin.readline().rstrip()
  
  # 종료 조건
  if (str == '.'):
    break

  strs.append(str)

for str in strs:
  stack = [] # 스택
  top = -1 # 탑
  balance = 1 # 균형 여부

  for char in str:
    # 여는 괄호를 만난 경우 스택에 저장
    if (char == '(' or char == '['):
      stack.append(char)
      top += 1
    
    # 닫는 괄호를 만난 경우 스택의 탑 요소와 비교
    if (char == ')' or char == ']'):
      if (top == -1): # 스택이 비어 있는 경우 균형을 이루지 않으므로 반복 종료
        balance = 0
        break

      # 여는 괄호와 닫는 괄호가 균형을 이루는 경우 스택의 탑 요소를 pop하고 반복 진행
      if (stack[top] == '(' and char == ')'):
        stack.pop()
        top -= 1
      elif (stack[top] == '[' and char == ']'):
        stack.pop()
        top -= 1
      else: # 균형을 이루지 않는 경우 반복 종료
        balance = 0
        break
  
  # 문장이 온점으로 끝나지 않는 경우 균형을 이루지 않음
  if (str[len(str) - 1] != '.'):
    balance = 0
  
  # 종료 후 스택이 비어 있지 않은 경우 균형을 이루지 않음
  if (top > -1):
    balance = 0
  
  # 해당 문장의 균형 여부 출력
  if (balance): print('yes')
  else: print('no')
