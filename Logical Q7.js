function count_duplicate() {
    let a=[3,4,5,4,3,8,11,11,12,8];
    let b=[];
    let counts=[];
    for (let i=0; i<a.length; i++){
        if (counts[a[i]]){
            counts[a[i]]+=1;
        } 
        else{
            counts[a[i]]=1;
        }
    }
    for (let key in counts){
        if (counts[key]>1){
            b.push(parseInt(key));
        }
    }
    console.log(b);
}
count_duplicate();