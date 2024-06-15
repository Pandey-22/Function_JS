function bubble(){
    let array=[1,5,4,6,3,7,2,8];
    for (let i=0; i<array.length-1; i++){
        for (let j=0; j<array.length-1; j++){
            if (array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]; 
            }
        }
    }
    console.log(array);
}
bubble();