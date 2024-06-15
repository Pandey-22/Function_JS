function add_array(a,b){
    let i=0;
    let newArray=[];
    while (i<a.length){
        let c=(a[i]+b[i]);
        newArray.push(c);
        i+=1;
    }
    console.log(newArray);
}
let arr1=["M","na","i","Aari","Pan"];
let arr2=["y","me","s","ya","dey"];
add_array(arr1,arr2);