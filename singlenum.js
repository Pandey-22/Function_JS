const prompt=require('prompt-sync')();
let num=parseInt(prompt("Please enter the number:-"));
let newArray=[];
for (let i=0; i<num; i++) {
    let elmnt = parseInt(prompt("Please enter the element:-"));
    newArray.push(elmnt);
}
console.log("Input array:-",newArray);
let uniqueElement=null;
for (let j=0; j<newArray.length; j++){
    let currentElement=newArray[j];
    let isUnique=true;
    for (let k=0; k<newArray.length; k++) {
        if (j !== k && currentElement === newArray[k]){
            isUnique=false;
            break;
        }
    }
    if(isUnique){
        uniqueElement=currentElement;
        break;
    }
}
if (uniqueElement !== null){
    console.log("First unique element:-",uniqueElement);
} 
else{
    console.log("No unique element found.");
}