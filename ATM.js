const prompt=require('prompt-sync')();
function atm(){
    console.log("WELCOME TO STATE BANK OF INDIA.🤗");
    let p=parseInt(prompt("please enter your 4 digits pin number:-"));
    let m=25000;
    if (p==1234){
        console.log("1-withdram");
        console.log("2-balance enquary");
        console.log("3-fast cash");
        let c=parseInt(prompt("please choose one transactions:-"));
        if (c==1){
            console.log("Invalid cash");
        }
        else if (c==2){
            console.log("Your available amount:-",m);
        }
        else if (c==3){
            console.log("1.5000");
            console.log("2.10000");
            console.log("3.15000");
            console.log("4.20000");
        }
        let w=parseInt(prompt("please enter your withdraw amount:-"));
        if (w<m && w%100==0){
            console.log("please take your withdraw amount:-",w);
        }
        else{
            console.log("4.20000");
        }
        let f=parseInt(prompt("please enter your fast cash option:-"));
        if (f==1){
            console.log("please take your cash 5000");
        }
        else if (f==2){
            console.log("please take your cash 10000");
        }
        else if (f==3){
            console.log("please take your cash 15000");
        }
        else if (f==4){
            console.log("please take you cash 20000");
        }
        else{
            console.log("Invalid fast cash option.");
        }
    }
    else{
        console.log("Wrong Pin");
    }
}
atm();