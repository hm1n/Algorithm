function solution(word) {
    const ALPHABET = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];
    
    
    function makeDictionary(word = '') {
        if (word.length > 5) return;
    
        if (word.length > 0) dictionary.push(word);
        
        for (let char of ALPHABET) {
            makeDictionary(word + char);
        }
    }
    makeDictionary();
    
    return dictionary.indexOf(word) + 1;
}