def round(n, k):
    if (n % k > 0):
        return n // k + 1
    return n // k

def solution(n, w, num):
    arr = [[0] * w for _ in range(round(n, w))]

    k = 1
    
    for i in range(round(n, w)):
        for j in range(w):
            if (i % 2 == 0):
              arr[i][j] = k
            else:
              arr[i][w - j - 1] = k
            k += 1
            if (k > n):
                break
    
    x = (num - 1) // w
    
    if (num % w == 0):
        y = w - 1
        if (x % 2 == 1):
            y = 0
    else:
        y = num % w - 1
        if (x % 2 == 1):
            y = w - y - 1
    
    cnt = 0
    while (x < round(n, w)):
        if (arr[x][y] == 0):
            break
        cnt += 1
        x += 1
    
    return cnt
        