function array(a,b){
    let newArray=[];
    for (let i=0; i<a.length; i++){
        let d=(a[i][0].toUpperCase()+b[i][0].toUpperCase());
        newArray.push(d);
    }
    console.log(newArray);
}
let arr1=["aariya","priya"];
let arr2=["pandey","singh"];
array(arr1,arr2);