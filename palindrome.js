var isPalindrome = function(x) {
    duplicate=x;
    let rev=0;
    while (x>0){
        rev=(rev*10)+x%10;
        x=Math.floor(x/10);
    }
    if (duplicate==rev){
        console.log("true");
    }
    else{
        console.log("false");
    }
};
const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter the number:-"));
isPalindrome(n);