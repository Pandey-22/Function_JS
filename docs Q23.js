function calculateArea(width,height){
    let AR=(width*height);
    console.log(AR);
}
const prompt=require('prompt-sync')();
let w=parseInt(prompt("please enter the width:-"));
let h=parseInt(prompt("please enter the height:-"));
calculateArea(w,h);