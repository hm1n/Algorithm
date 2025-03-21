def solution(n, w, num):
    cnt = 0
    
    m1 = num % (2 * w)
    m2 = (2 * w - m1 + 1) % (2 * w)
    
    for i in range(num, n + 1):
        if (i % (2 * w) in [m1, m2]):
            cnt += 1
    
    return cnt
        