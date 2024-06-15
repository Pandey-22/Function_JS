function KBC_Game_5050(){
    const prompt=require('prompt-sync')();
    let name=prompt("please enter your name:-");
    console.log("Heyy!👋",name,"WELCOME TO KBC GAME🤗");
    let questions_list=[["What is the capital of India?"],["How many countries in Asia?"],
        ["When did India become independent?"],["Wow many states are there in India?"]];
    let options_list=[["1.Banglore","2.Delhi","3.Chandigarh","4.Bhopal"],["1.18","2.28","3.38","4.48"],
        ["1.15August-1945","2.15August-1946","3.15August-1947","4.15August-1949"],["1.28","2.38","3.18","4.58"]];
    let solution_list=[2,4,3,1];
    let lifeline_5050_list=[["1.Banglore","2.Delhi"],["1.48","2.38"],["1.15August-1946","2.15August-1947"],["1.28","2.38"]];
    let lifeline_5050_solution_list=[2,1,2,1];
    let i=0;
    let count=0;
    while (i<questions_list.length){
        console.log("Q",i+1,questions_list[i]);
        let j=0;
        while (j<options_list.length){
            console.log(j+1,options_list[i][j]);
            j+=1;
        }
        let b=parseInt(prompt("please enter your anynumber otherwise use lifelife 5050:-"));
        if (b==solution_list[i]){
            console.log("Congratulations🥳! Your all answer is correct😇");
        }
        else if (b==5050){
            console.log("Okay!👍 let's use lifeline 5050.");
            if (count==0){
                let k=0;
                while (k<lifeline_5050_list.length){
                    console.log(k+1,lifeline_5050_list[k]);
                    k+=1;
                }
                count+=1;
                let c=parseInt(prompt("please enter anynumber:-"));
                if (c==lifeline_5050_solution_list[i]){
                    console.log("Congratulations🥳, you won this money.");
                }
                else{
                    console.log("Sorry!😒 Your answer is wrong, you have lost your money.");
                }
            }
            else{
                console.log("Sorry!🙏 Now you can't use 5050 because you already used 5050.");
                d=parseInt(prompt("please enter anynumber:-"));
                if (d==solution_list[i]){
                    console.log("Congratulations!🥳 Correct answer.");
                }
                else{
                    console.log("Sorry😒! Wrong answer");
                    break
                }
            }
        }
        else{
            console.log("Your answer is wrong that's why next time you will try again.");
            break
        }
        i+=1;
    }
}
KBC_Game_5050();