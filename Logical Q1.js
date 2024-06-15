function findIndexOfCapital(a){
    let newArray=[];
    for (let i=0; i<(a.length); i++){
        if (a[i] === a[i].toUpperCase()){
            newArray.push(i);
        }
    }
    console.log(newArray);
}
let str="PandEy";
findIndexOfCapital(str);