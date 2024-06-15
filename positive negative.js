// function sub_add(){
//     for (let i=1; i<=100; i++){
//         if (i%2==0){
//             console.log(-i);
//         }
//         else{
//             console.log(i);
//         }        
//     }
// }
// sub_add();




function numbers(array){
    let p=0;
    let n=0;
    for (let i of array){
        if (i>0){
            p+=1;
        }
        else{
            n+=1;
        }
    }
    console.log("Positive Number = ",p,"Negative Number = ",n);
}
numbers([2,-7,5,-64,-14])