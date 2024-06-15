function sum(array){
    return array.reduce((accumulator,currentValue) => accumulator+currentValue,0);
}
function even_odd(array){
    let evenArray=[];
    let oddArray=[];
    for (let i=0; i<array.length; i++){
        if (array[i]%2 === 0){
            evenArray.push(array[i]);
        } 
        else{
            oddArray.push(array[i]);
        }
    }
    console.log([sum(evenArray),sum(oddArray)]);
}
let arr=[5,2,3,8,9,10];
even_odd(arr);