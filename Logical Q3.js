function countCapital(a){
    let count=0;
    for (let i=0; i<a.length; i++){
        if (a[i]===a[i].toUpperCase()){
            count+=1;
        }
    }
    console.log(count);
}
let str="PaNdEy";
countCapital(str);