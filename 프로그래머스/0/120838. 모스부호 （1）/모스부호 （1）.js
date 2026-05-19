function solution(letter) {
    const morse = new Map(Object.entries({ 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }));
    
    var answer = '';
    var idx = 0;
    
    for (let i = 0; i <= letter.length; i++) {
        if (letter[i] === ' ' || i === letter.length) {
            answer += morse.get(letter.slice(idx, i));
            idx = i + 1;
        }
    }
    
    return answer;
}