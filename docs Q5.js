function even_num(num){
    let arr=[];
    for (let n in num){
        if (n%2==0){
            arr.push(n);
        }
    }
    return arr;
}
console.log(even_num([1,2,3,4,5,6,7,8,9]));