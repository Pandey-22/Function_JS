function array(a){
    let max1=0;
    let max2=0;
    for (let i=0; i<a.length; i++){
        if (a[i]>=max1){
            max1=a[i];
        }
        else if (a[i]>max2 && a[i]!=max1){
            max2=a[i];
        }
    }
    return max1+max2;
}
console.log(array([10,14,2,23,19]));
console.log(array([99,2,2,23,19]));