def solution(schedules, timelogs, startday):
    cnt = [1] * len(schedules)
    
    for i in range(len(schedules)):
        for j in range(len(timelogs[i])):
            # 주말인 경우 계산 생략
            if ((startday + j) % 7 == 6 or (startday + j) % 7 == 0):
                continue
            
            deadline = schedules[i] + 10
            
            # 출근 인정 시각 계산
            if (deadline % 100 >= 60):
                deadline += ((deadline % 100) // 60 * 100) - 60
            
            # 출근 인정 시각보다 늦게 출근한 경우 cnt = 0으로 설정
            if (timelogs[i][j] > deadline):
                cnt[i] = 0
    
    count = 0
    for i in range(len(cnt)):
        count += cnt[i]
    
    return count