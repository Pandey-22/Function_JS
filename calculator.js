// const prompt=require('prompt-sync')();
// function calculate(a,b,c){
//     for (let i=1; i<=a; i++){
//         if (c=="+"){
//             console.log(a+b);
//         }
//         else if (c=="-"){
//             console.log(a-b);
//         }
//         else if (c=="*"){
//             console.log(a*b);
//         }
//         else if (c=="%"){
//             console.log(a%b);
//         }
//         else{
//             console.log("I can't do anything with the number.");
//         }
//         break
//     }
// }
// let m=parseInt(prompt("please enter the value of a:-"));
// let n=parseInt(prompt("please enter the value of b:-"));
// let o=prompt("please enter the operator:-");
// calculate(m,n,o);




function add(a,b){
    a=a+b;
    console.log(a);
    return a;
}
function sub(c,n){
    c=c-n;
    console.log(c);
    return c;
}
function mul(s,d){
    s=s*d;
    console.log(s);
    return s;
}
function div(j,l){
    j=(j%l);
    console.log(j);
    return j;
}
function calcu(){
    const prompt=require('prompt-sync')();
    let n=parseInt(prompt("please enter the 1st number"));
    let m=parseInt(prompt("please enter the 2nd number"));
    let o=prompt("please enter the operator");
    if (o=="+"){
        add(n,m);
    }
    else if (o=="-"){
        sub(n,m);
    }
    else if (o=="*"){
        mul(n,m);
    }
    else if (o=="%"){
        div(n,m);
    }
}
calcu();