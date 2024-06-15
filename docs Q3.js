function match_words(word){
    let c=0;
    for (let w in word){
        if (w.length>1 && w[0] === w[2]){
            c+=1;
        }
        return c;
    }
}
console.log(match_words(['abc','xyz','aba','1221']));