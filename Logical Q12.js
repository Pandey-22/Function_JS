function pq(){
    let array=["p","q"];
    let arr=[];
    for (let i=1; i<=5; i++){
        for (let j=0; j<array.length; j++){
            let b=array[j]+String(i);
            arr.push(b);
        }
    }
    console.log(arr);
}
pq();