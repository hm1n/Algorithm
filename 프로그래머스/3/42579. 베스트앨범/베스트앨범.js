function solution(genres, plays) {
    let album = new Map();
    const ans = [];
    
    for (let i = 0; i < plays.length; i++) {
        if (album.get(genres[i]) === undefined) {
            album.set(genres[i], {songs: [], total: 0});
        }
        
        album.get(genres[i]).songs.push({play: plays[i], index: i});
    }
    
    genres = [...new Set(genres)];
    for (let g of genres) {
        album.get(g).songs.sort((a, b) => b.play - a.play || a.index - b.index);
        const songs = album.get(g).songs;
        const total = songs.reduce((a, b) => {return a + b.play}, 0);
        
        album.get(g).total = total;
    }
    
    album = [...album.values()];
    album.sort((a, b) => b.total - a.total);
    
    for (let g of album) {
        for (let i = 0; i < g.songs.length && i < 2; i++) {
            ans.push(g.songs[i].index);   
        }
    }
    
    return ans;
}