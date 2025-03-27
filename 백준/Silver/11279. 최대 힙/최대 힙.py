import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline


def up_heap(heap, idx):
  if (idx == 1): # 루트노드에 도달한 경우 종료
    return
  
  parent = idx // 2
  if (heap[parent] < heap[idx]):
    tmp = heap[parent]
    heap[parent] = heap[idx]
    heap[idx] = tmp
  
  up_heap(heap, parent)

def down_heap(heap, idx):
  left = idx * 2
  right = idx * 2 + 1

  if (left > len(heap) - 1): # 리프노드에 도달한 경우 종료
    return
  
  if (right <= len(heap) - 1):
    if (heap[right] > heap[left]):
      left = right
  
  if (heap[idx] < heap[left]):
    tmp = heap[idx]
    heap[idx] = heap[left]
    heap[left] = tmp
  
  down_heap(heap, left)

def insert_heap(heap, x):
  heap.append(x)
  if (len(heap) > 2):
    up_heap(heap, len(heap) - 1)

def delete_heap(heap):
  # root = heap.pop(1)

  root = heap[1]
  leaf = heap.pop(len(heap) - 1)
  if (len(heap) < 2):
    return leaf
  
  heap[1] = leaf
  down_heap(heap, 1)
  return root

n = int(input())
heap = [0]

for _ in range(n):
  x = int(input())
  if (x > 0):
    insert_heap(heap, x)
  else:
    if (len(heap) == 1):
      print(0)
    else:
      print(delete_heap(heap))