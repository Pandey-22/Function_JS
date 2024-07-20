function consecutive(){
    let nums=[1,1,0,1,1,1];
    let count=0
    for (let i=0; i<nums.length; i++){
        if (nums[i]==1){
            count+=1;
        }
    }
    console.log(count);
}
consecutive();