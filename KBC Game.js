function KBC_Game(){
    const prompt=require('prompt-sync')();
    console.log("WELCOME TO KBC GAME🤗");
    let name=prompt("please enter your name:-");
    let question=["How many continents are there?", "What is the capital of India?","What courses are taught in NG?"];
    let option=[["Four","Nine","Seven","Eight"],["Chandigarh","Bhopal","Chennai","Delhi"],["Software Engineering","Counseling","Tourism","Agriculture"]];
    let solution=[3,4,1];
    let i=0;
    while (i<question.length){
        console.log("Q",i+1,question[i]);
        let j=0;
        while (j<option.length+1){
            console.log(j+1,option[i][j]);
            j+=1;
        }
        c=parseInt(prompt("please enter your choice:-"));
        if (c==solution[i]){
            console.log("Correct Answer😃");
        }
        else{
            console.log("Wrong Answer😒");
            console.log("Sorry! please try again next time🙏");
            break
        }
        console.log();
        i+=1;
    }
}
KBC_Game();