function isEven(number){
    return number%2 == 0;
}
function checkNumbersList(list1,list2){
    if (list1.length != list2.length){
        console.log("Lists must be of the same length:-");
        return;
    }
    for (let i=0; i<list1.length; i++){
        if (isEven(list1[i]) && isEven(list2[i])){
            console.log("dono even hain");
        } 
        else{
            console.log("dono even nahi hain");
        }
    }
}
let list1=[2,6,18,10,3,75];
let list2=[6,19,24,12,3,87];
checkNumbersList(list1,list2);