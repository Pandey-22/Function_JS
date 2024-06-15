function unique_array(a){
    let arr=[];
    for (let i of a){
        if (!arr.includes(i)){
            arr.push(i);
        }
    }
    return arr;
}
console.log(unique_array([1,2,3,3,3,3,4,5]));