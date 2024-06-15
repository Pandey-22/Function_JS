function sum_all_items(){
    let a=[2,3,[5,8,8],2,8];
    let i=0;
    let sum=0;
    let num=0;
    while (i<a.length){
        if (Array.isArray(a[i])){
            let j=0;
            while (j<a[i].length){
                let n=a[i][j];
                sum+=n;
                j+=1;
            }
        }
        else{
            num+=a[i];
        }
        i+=1;
    }
    let total=sum+num;
    console.log(total);
}
sum_all_items();