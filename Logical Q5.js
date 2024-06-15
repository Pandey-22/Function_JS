function nested_list() {
    let a=[[2,3,4,5],[5,6,7],[[3,4,8],0,12]];
    let b=[];
    for (let i=0; i<a.length; i++){
        let n=a[i];
        for (let j=0; j<n.length; j++){
            b.push(n[j]);
        }
    }
    let d=[];
    for (let k=0; k<b.length; k++){
        if (Array.isArray(b[k])){
            for (let l=0; l<b[k].length; l++){
                d.push(b[k][l]);
            }
        } 
        else{
            d.push(b[k]);
        }
    }
    console.log(d);
}
nested_list(); 