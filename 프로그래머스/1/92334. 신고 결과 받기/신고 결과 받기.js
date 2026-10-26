function solution(id_list, report, k) {
    const id_report = new Map();
    const report_cnt = new Map();
    const banned = [];
    
    report.sort();
    for (let i = 0; i < report.length; i++) {
        report[i] = report[i].split(" ");
    }
    
    for (let id of id_list) {
        report_cnt.set(id, 0);
        id_report.set(id, new Set());
    }
    
    for (let i = 0; i < report.length; i++) {
        const [id1, id2] = report[i];

        while (i + 1 < report.length) {
            if (id1 !== report[i + 1][0] || id2 !== report[i + 1][1]) break;
            i++;
        }
        
        report_cnt.set(id2, report_cnt.get(id2) + 1);
        id_report.get(id1).add(id2);
    }
    
    const ans = [];
    
    for (let id of id_list) {
        if (report_cnt.get(id) >= k) banned.push(id);
    }
    
    for (let id of id_list) {
        const set = id_report.get(id)
        let cnt = 0;
        
        for (let b of banned) {
            if (set.has(b)) cnt++; 
        }
        
        ans.push(cnt);
    }
    
    // console.log(ans);
    return ans;
}